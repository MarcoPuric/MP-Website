'use client';

import { motion } from "framer-motion";
import React from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import '../components/ui/timeline.css';
import ScrollAurora from "@/components/ui/scroll-aurora";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'
import StickyNav from "@/components/ui/StickyNav";
import Logo from "@/components/ui/Logo";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/elements";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import { Linkedin, Github } from "lucide-react";
import { trackEvent } from "@/lib/tracker";
import { isAuthorized } from "@/lib/auth";





const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};



export default function HomePage() {
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  useEffect(() => {
    const last = localStorage.getItem("lastVisit");
    if (last) setLastVisit(new Date(last).toLocaleString());
    localStorage.setItem("lastVisit", new Date().toISOString());
  }, []);
  return (
    <main className="relative bg-background text-foreground min-h-screen font-sans overflow-x-hidden">
      {/* Logo oben links */}
      <div className="absolute top-4 left-4 z-50">
        <Logo />
      </div>

      {/* ThemeToggle oben rechts */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Klassische Sticky Navigation */}
      <StickyNav />
      <ScrollAurora />
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-20 h-screen flex flex-col justify-center items-center text-center p-6 relative">
        {/* Theme Toggle im Hero */}
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 text-sm text-green-500">
          <ShieldCheck className="w-4 h-4" />
          <span title="End-to-End gesichert, kein Tracking, keine Cookies">
            Security by Design
          </span>
        </div>
        {/* Profilbild */}
        <motion.img
          src="/marco.jpg"
          alt="Marco Puric"
          className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg hover:shadow-purple-700 transition-all mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Name */}
        <motion.h1
          className="text-5xl font-bold mb-2 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Marco Puric
        </motion.h1>

        {lastVisit && (
          <p className="text-sm text-muted-foreground mb-2 italic">
            Letzter Besuch: {lastVisit}
          </p>
        )}

        {/* Statement */}
        <motion.p
          className="text-md text-muted-foreground mb-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          „Stabilität. Sicherheit. Skalierbarkeit.“
        </motion.p>

        {/* Typing Animation */}
        <motion.p
          className="text-lg text-center text-purple-600 font-medium mb-6 min-h-[32px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Typewriter
            words={[
              "Site Reliability Engineer",
              "Cybersecurity Spezialist",
              "AI Enthusiast",
              "Cloud Architekt"
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Button */}
        <Link
          href="/kontakt"
          onClick={() => trackEvent("Hero: Kontakt-Klick")}
        >
          <Button className="bg-purple-600 hover:bg-purple-700 shadow-lg transition-all duration-300">
            Kontakt aufnehmen
          </Button>
        </Link>

        <div className="mt-10 animate-bounce text-zinc-400">
          ↓ Mehr erfahren
        </div>
      </section>
      <section id="lebenslauf" className="scroll-mt-20 py-16 bg-background text-foreground">
      <Experience />
      </section>
      <section id="skills" className="scroll-mt-20 py-16 bg-background text-foreground">
      <Skills />
      </section>
      {/* Zertifikate Section */}
      <section className="p-8 md:p-16 bg-background text-foreground">
        <h2 className="text-4xl font-bold mb-12 text-center">Zertifikate</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AWS Cloud Practitioner",
              issuer: "Amazon",
              year: "2025",
              file: "/134_3_7098728_1740045695_AWS Course Completion Certificate.pdf",
              logo: "/logos/aws.png", // Beispielbild in /public/logos/ ablegen
            },
            {
              title: "Google Cybersecurity Certificate",
              issuer: "Google",
              year: "2025",
              file: "/Google Cybersecurity.pdf",
              logo: "/logos/google.png",
            },
            {
              title: "IBM AI for Cybersecurity",
              issuer: "IBM",
              year: "2025",
              file: "/IBM Generative AI for Cybersecurity Professionals.pdf",
              logo: "/logos/ibm.png",
            },
            {
              title: "ISC2 Certified in Cybersecurity (CC)",
              issuer: "ISC2",
              year: "2025",
              file: "/ISC2 CC Marco Puric.pdf",
              logo: "/logos/isc2.png",
            },
            {
              title: "Python for Data Science",
              issuer: "IBM",
              year: "2025",
              file: "/Python for Data Science, AI & Development.pdf",
              logo: "/logos/python.png",
            },
          ].map((cert, index) => (
            <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-card border border-border rounded-xl shadow-md p-6 flex flex-col items-center transition-all duration-300"
              >
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="h-12 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-center">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cert.issuer} · {cert.year}</p>
              <Link
                href={{
                  pathname: "/kontakt",
                  query: { subject: `Zertifikat: ${cert.title}` },
                }}
                onClick={() => trackEvent(`Zertifikat: ${cert.title}`)}
                className="mt-auto px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-md transition text-center"
              >
                📄 Zertifikat anfordern
              </Link>


            </motion.div>
          ))}
        </div>
      </section>


      {/* Lebenslauf-Download */}
      <section className="p-8 md:p-16 text-center bg-zinc-950 text-white">
        <h2 className="text-4xl font-bold mb-6">Lebenslauf</h2>
        <p className="mb-4 text-muted-foreground">
          Du möchtest mein Profil offline speichern oder weiterleiten?
        </p>
        <Link
          href={{
            pathname: "/kontakt",
            query: { subject: "Lebenslauf anfordern" },
          }}
          onClick={() => trackEvent("Lebenslauf angefordert")}
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-all duration-500 transform hover:scale-105"
        >
          📄 Lebenslauf anfordern
        </Link>

      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="scroll-mt-20 p-8 md:p-16 text-center bg-zinc-900 text-white">
        <h2 className="text-4xl font-bold mb-6">Kontakt</h2>
        <p className="mb-4 text-muted-foreground">
          Du hast Fragen, Interesse oder willst mit mir arbeiten?
        </p>
        <a
          href="mailto:marco@puric.de?subject=Bewerbung%20Website"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-all duration-500 transform hover:scale-105"
        >
          ✉️ E-Mail schreiben
        </a>
        <div className="mt-6 flex justify-center flex-wrap gap-4">
          {/* LinkedIn Button */}
          <a
            href="https://de.linkedin.com/in/marco-puric-046451181"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("Kontakt: LinkedIn")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition-transform transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profil
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/MarcoPuric"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("Kontakt: GitHub")}
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-900 text-white px-5 py-3 rounded-xl font-medium transition-transform transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub Profil
          </a>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-12 mb-4">
        <Link href="/impressum" className="underline hover:text-foreground">
          Impressum & Datenschutz
        </Link>
        <button
          onClick={() => {
            const pw = prompt("🔐 Admin-Zugang: Passwort eingeben");
            if (pw && isAuthorized(pw)) {
              window.location.href = "/intern/statistik";
            } else if (pw) {
              alert("❌ Falsches Passwort.");
            }
          }}
          className="underline hover:text-purple-500 transition-colors"
        >
          📊 Statistik
        </button>
      </footer>
      </section>
    </main>
  );
}
