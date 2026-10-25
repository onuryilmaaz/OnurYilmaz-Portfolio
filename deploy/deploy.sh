#!/usr/bin/env bash
# Build and release the portfolio. Run on the server from the repo checkout:
#   /opt/portfolio/src/deploy/deploy.sh
#
# Builds in the checkout, then syncs the standalone server into /opt/portfolio/app,
# so the live site keeps running during the build and only restarts at the end.
set -euo pipefail

APP_DIR=/opt/portfolio/app
cd "$(dirname "$0")/.."

git pull --ff-only
npm ci
npm run build

# Standalone output does not include static assets; copy them in.
cp -R public .next/standalone/
cp -R .next/static .next/standalone/.next/

sudo mkdir -p "$APP_DIR"
# Keep the image cache across releases.
sudo rsync -a --delete --exclude ".next/cache" .next/standalone/ "$APP_DIR/"
sudo mkdir -p "$APP_DIR/.next/cache"
sudo chown -R www-data:www-data "$APP_DIR/.next/cache"

sudo systemctl restart portfolio

for _ in $(seq 1 20); do
  if curl -fsS -o /dev/null http://127.0.0.1:3100/; then
    echo "Portfolio is up on 127.0.0.1:3100"
    exit 0
  fi
  sleep 1
done

echo "Portfolio did not respond; check: journalctl -u portfolio -n 50" >&2
exit 1
