"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, FileText, Brain, Shield } from "lucide-react";
import Logo from "@/components/ui/Logo";

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["hero", "lebenslauf", "skills"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <nav className="fixed bottom-4 md:top-6 md:bottom-auto left-1/2 transform -translate-x-1/2 z-50 bg-zinc-900/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex items-center gap-4 text-white">
      {/* Logo */}
      <Link href="/" className="text-white hover:opacity-80 px-2">
        <Logo />
      </Link>

      <NavIcon href="#hero" icon={<Home />} label="Home" active={activeSection === "hero"} />
      <NavIcon href="#lebenslauf" icon={<FileText />} label="Lebenslauf" active={activeSection === "lebenslauf"} />
      <NavIcon href="#skills" icon={<Brain />} label="Skills" active={activeSection === "skills"} />

      {/* Impressum Button */}
      <Link
        href="/impressum"
        className="ml-auto px-3 py-1.5 flex items-center gap-1 rounded-full bg-purple-700 hover:bg-purple-800 text-sm font-medium transition shadow-md"
      >
        <Shield className="w-4 h-4" />
        Impressum
      </Link>
    </nav>
  );
}

function NavIcon({
  href,
  icon,
  label,
  active,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center text-xs px-2 transition-all ${
        active ? "text-purple-400 scale-110" : "hover:scale-105"
      }`}
    >
      <div className="w-6 h-6">{icon}</div>
      <span className="hidden md:block mt-1">{label}</span>
    </Link>
  );
}
