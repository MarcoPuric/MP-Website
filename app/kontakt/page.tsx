'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export default function KontaktFormular() {
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get("subject");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (subjectParam) {
      setFormData(prev => ({
        ...prev,
        subject: subjectParam,
        message: `Betreff: ${subjectParam}\n\n`, // Optional: Vorbefüllen im Text
      }));
    }
  }, [subjectParam]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mblgaree", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    setLoading(false);

    if (response.ok) {
      toast.success("Nachricht erfolgreich gesendet!");
      form.reset();
    } else {
      toast.error("Fehler beim Senden der Nachricht. Bitte versuch's erneut.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl p-8 md:p-12 bg-card shadow-lg rounded-xl border border-border"
      >
        <h2 className="text-3xl font-bold mb-6">Kontaktiere mich</h2>

        {subjectParam && (
          <p className="mb-4 text-sm text-muted-foreground">
            📌 <strong>Betreff:</strong> {subjectParam}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="subject" value={formData.subject} />

          <div className="relative">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b-2 border-muted-foreground focus:border-primary outline-none transition-colors peer"
              placeholder=" "
            />
            <label className="absolute left-0 top-0 text-muted-foreground peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-sm transition-all">
              Dein Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b-2 border-muted-foreground focus:border-primary outline-none transition-colors peer"
              placeholder=" "
            />
            <label className="absolute left-0 top-0 text-muted-foreground peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-sm transition-all">
              Deine E-Mail
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b-2 border-muted-foreground focus:border-primary outline-none transition-colors peer resize-none"
              placeholder=" "
            />
            <label className="absolute left-0 top-0 text-muted-foreground peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-primary peer-focus:text-sm transition-all">
              Nachricht
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-transform transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Wird gesendet..." : "Nachricht senden 🚀"}
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
