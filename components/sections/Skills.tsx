"use client";

import SkillsMindmap from "@/components/ui/skills-mindmap";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations(); // i18n

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">
        {t("skills")} {/* ➜ messages/de.json -> "skills": "Skills"  /  en.json -> "skills": "Skills" */}
      </h2>
      <SkillsMindmap />
    </section>
  );
}