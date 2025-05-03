"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🛠️ Aktueller Skill‑Mix: bestehende & neue Kompetenzen
const categories = [
  {
    name: "Cloud",
    color: "bg-purple-600",
    icon: "☁️",
    skills: [
      "AWS",
      "MS Azure",
      "Cloud Architektur",
      "Kubernetes",
      "Docker",
      "SLA/SLOs",
      "Payara",
      "Payara Micro",
      "WaveStack",
      "ActiveMQ",
      "Azure ACR",
      "Terraform",
      "Terragrunt",
      "Azure Bicep",
    ],
  },
  {
    name: "Monitoring",
    color: "bg-green-500",
    icon: "📊",
    skills: [
      "Grafana",
      "Prometheus",
      "InfluxDB",
      "Icinga",
      "ELK",
      "OpenTelemetry Collector",
      "LLM-Anomaly Summaries",
      "Monyog",
      "Jaeger",
      "Cortex",
      "Cilium Tetragon",
      "Azure Monitor",
    ],
  },
  {
    name: "Security",
    color: "bg-red-500",
    icon: "🛡️",
    skills: [
      "Incident Response",
      "ISC2 CC",
      "IBM AI Security",
      "Gremlin",
      "Opsgenie",
      "Grype",
      "Azure Key Vault",
      "tfsec",
      "OWASP ZAP",
    ],
  },
  {
    name: "AI / Prompting",
    color: "bg-fuchsia-600",
    icon: "🧠",
    skills: [
      "Prompt Engineering",
      "LLMs",
      "Google AI",
      "IBM Watson",
      "LangChain",
    ],
  },
  {
    name: "DevOps",
    color: "bg-yellow-500",
    icon: "⚙️",
    skills: [
      "CI/CD",
      "Git",
      "GitLab CI",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Argo CD",
      "Terraform",
      "Terragrunt",
      "Azure Bicep",
    ],
  },
  {
    name: "Coding",
    color: "bg-cyan-600",
    icon: "💻",
    skills: [
      "Java",
      "JavaScript",
      "Python",
      "TypeScript",
      "SQL",
      "Go",
      "Bash",
      "React",
    ],
  },
];

export default function SkillsMindmap() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [activeCategory, setActiveCategory] = useState("Alle");

  useEffect(() => {
    setMounted(true);
    const updateSize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!mounted) return null;

  const centerX = windowSize.width / 2;
  const centerY = 300;

  const filteredCategories =
    activeCategory === "Alle"
      ? categories
      : categories.filter((c) => c.name === activeCategory);

  return (
    <>
      {/* Filter-Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mb-6">
        {["Alle", ...categories.map((c) => c.name)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-zinc-800 text-muted-foreground hover:bg-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative w-full h-[600px]">
        {/* Linien */}
        <svg className="absolute top-0 left-0 w-full h-full z-0">
          {filteredCategories.map((cat, i) => {
            const angle = (360 / categories.length) * i;
            const radians = (angle * Math.PI) / 180;
            const catX = centerX + Math.cos(radians) * 180;
            const catY = centerY + Math.sin(radians) * 180;

            return (
              <g key={cat.name}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={catX}
                  y2={catY}
                  stroke="#aaa"
                  strokeWidth="1"
                />
                {cat.skills.map((skill, j) => {
                  const offset = (j - cat.skills.length / 2) * 0.5;
                  const skillAngle = angle + offset * 30;
                  const skillRad = (skillAngle * Math.PI) / 180;
                  const skillX = centerX + Math.cos(skillRad) * 300;
                  const skillY = centerY + Math.sin(skillRad) * 300;
                  return (
                    <line
                      key={skill}
                      x1={catX}
                      y1={catY}
                      x2={skillX}
                      y2={skillY}
                      stroke="#ddd"
                      strokeWidth="0.5"
                    />
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* Zentrum */}
        <motion.div
          className="absolute w-28 h-28 rounded-full bg-black text-white flex items-center justify-center font-bold text-center shadow-lg z-10"
          style={{ left: centerX - 56, top: centerY - 56 }}
          whileHover={{ scale: 1.1 }}
        >
          {activeCategory === "Alle" ? (
            <>
              Marco <br /> Puric
            </>
          ) : (
            <span className="text-xl">{activeCategory}</span>
          )}
        </motion.div>

        {/* Kategorien-Bubbles */}
        {filteredCategories.map((cat, i) => {
          const angle = (360 / categories.length) * i;
          const radians = (angle * Math.PI) / 180;
          const x = centerX + Math.cos(radians) * 180;
          const y = centerY + Math.sin(radians) * 180;

          return (
            <motion.div
              key={cat.name}
              className={`absolute w-24 h-24 rounded-full ${cat.color} text-white flex items-center justify-center text-center font-semibold shadow-md z-10`}
              style={{ left: x - 48, top: y - 48 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-2xl mr-1">{cat.icon}</span>
              <span>{cat.name}</span>
            </motion.div>
          );
        })}

        {/* Skills */}
        {filteredCategories.flatMap((cat, i) => {
          const angle = (360 / categories.length) * i;

          return cat.skills.map((skill, j) => {
            const offset = (j - cat.skills.length / 2) * 0.5;
            const skillAngle = angle + offset * 30;
            const radians = (skillAngle * Math.PI) / 180;
            const x = centerX + Math.cos(radians) * 300;
            const y = centerY + Math.sin(radians) * 300;

            return (
              <motion.div
                key={skill}
                className="absolute text-sm text-white bg-zinc-700 px-3 py-1 rounded-xl shadow z-20"
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: j * 0.05 }}
              >
                {skill}
              </motion.div>
            );
          });
        })}
      </div>
    </>
  );
}
