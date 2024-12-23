"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Content-Type ayarlandı
        },
        body: JSON.stringify(formData), // Form verileri JSON olarak gönderiliyor
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.message || "Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Hata:", error);
      setStatus("Mesaj gönderimi başarısız oldu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Adınız"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="E-posta"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Mesajınız"
        value={formData.message}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Gönder
      </button>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
