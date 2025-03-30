"use client";
import { useState } from "react";
import { toast } from "sonner";
import React from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = `mailto:marco@puric.de?subject=Kontaktanfrage%20von%20${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0A%0AVon:%20${
      formData.email
    }`;
    window.location.href = mailto;

    toast.success("📧 E-Mail Client wurde geöffnet!", {
      description: "Bitte sende deine Nachricht über deinen E-Mail-Client.",
      duration: 5000,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-zinc-50 dark:bg-zinc-900 rounded-2xl shadow-xl space-y-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Dein Name"
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
      />
      <input
        type="email"
        name="email"
        placeholder="Deine E-Mail"
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
      />
      <textarea
        name="message"
        placeholder="Deine Nachricht"
        onChange={handleChange}
        required
        rows={5}
        className="w-full p-3 rounded-lg border-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        🚀 Nachricht senden
      </button>
    </form>
  );
}
