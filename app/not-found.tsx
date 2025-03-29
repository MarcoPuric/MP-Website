'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner"; // sonner für Toasts verwenden
import Link from "next/link";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Sende die Daten an Formspree
    const response = await fetch("https://formspree.io/f/mblgaree", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    setLoading(false);

    if (response.ok) {
      toast.success("Nachricht erfolgreich gesendet!"); // Erfolgsmeldung mit sonner
      form.reset(); // Formular zurücksetzen
    } else {
      toast.error("Fehler beim Senden der Nachricht. Bitte versuch's erneut."); // Fehler mit sonner
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-background text-foreground">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Fehler 404 - Seite nicht gefunden
      </motion.h1>

      <motion.p
        className="mb-8 text-muted-foreground max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hast du Fragen oder möchtest die Dateien anfordern?
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-card p-6 rounded-xl shadow-xl w-full max-w-md text-left space-y-4 border border-border"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Dein Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 rounded-lg border bg-background text-foreground border-border"
            placeholder="Max Mustermann"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 rounded-lg border bg-background text-foreground border-border"
            placeholder="max@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Nachricht</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2 rounded-lg border bg-background text-foreground border-border"
            placeholder="Deine Nachricht"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
        >
          {loading ? "Wird gesendet..." : "Nachricht senden"}
        </button>
      </motion.form>

      <Link href="/" className="mt-10 text-blue-500 underline hover:text-blue-600">
        Zurück zur Startseite
      </Link>
    </main>
  );
}
