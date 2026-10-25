// Fixed, non-interactive film grain. Lives outside scrolling containers so it never repaints on scroll.
const noise = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-60 opacity-3.5 mix-blend-multiply dark:opacity-6 dark:mix-blend-screen"
      style={{ backgroundImage: noise }}
    />
  );
}
