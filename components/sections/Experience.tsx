'use client';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaCogs, FaGraduationCap } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Experience() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section id="lebenslauf" className="scroll-mt-24 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Beruflicher Werdegang</h2>

      <VerticalTimeline>
        {/* Berufserfahrung */}
        <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dez. 2023 – Jetzt"
                iconStyle={{ background: "#3b82f6", color: "#fff" }}
                icon={<FaLaptopCode />}
                contentStyle={{
                background: "var(--color-card)",        // dynamisch je nach Theme
                    color: "var(--color-foreground)",       // aus deiner Theme
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // weicher Schatten
                    border: "1px solid var(--color-border)",// dezente Umrandung
                }}
                contentArrowStyle={{ borderRight: "7px solid var(--color-border)" }}
            >
                <h3 className="vertical-timeline-element-title font-bold text-lg">Site Reliability Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">Agenda Software GmbH, Rosenheim</h4>
                <ul className="mt-2 list-disc ml-4 text-sm">
                <li>Ausbau des Metrik-Netzes in der Cloud-Umgebung; Icinga (+BPM)</li>
                <li>Definieren von technischen SLAs + SLOs</li>
                <li>Aktives SlowLog-Monitoring</li>
                <li>Technischer Berater bei neuen Produkten im Cloud-Portfolio ("E-Rechnung in der Cloud", "4/3-Rechner in der Cloud")</li>
                <li>Bewertung der gesamten Cloud-Architektur + RRM erstellt (RapidResponseManual)</li>
                <li>Etablieren eines IRP (IncidentResponsePlans)</li>
                <li>Ansprechpartner für "Infrastruktur der Zukunft", Umbau aller Cloud-und Backend-Services inkl. vorbereiten</li>
                <li>der cloud-Architektur für KI-gestützte Anwendungen</li>
                <li>Initiieren des Projekts "Datenbank der Zukunft" (High Availability DB Cluster + Sharding)</li>
                </ul>
            </VerticalTimelineElement>

            {/* Projektkoordination */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Apr. 2023 – Dez. 2023"
                iconStyle={{ background: "#f97316", color: "#fff" }}
                icon={<FaCogs />}
                contentStyle={{
                background: "var(--color-card)",        // dynamisch je nach Theme
                color: "var(--color-foreground)",       // aus deiner Theme
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // weicher Schatten
                border: "1px solid var(--color-border)",// dezente Umrandung
                }}
                contentArrowStyle={{ borderRight: "7px solid var(--color-border)" }}
            >
                <h3 className="vertical-timeline-element-title font-bold text-lg">Projektkoordinator</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">Agenda Software GmbH, Rosenheim</h4>
                <ul className="mt-2 list-disc ml-4 text-sm">
                <li>Verantwortlicher für Performanceverbesserungen des Belegverarbeitungs-Workflow - (Etablieren der ersten Anwendung</li>
                <li>die eine Container-basierte Architektur verfügt)</li>
                <li>Projektleiter "Documentconverter" - On the fly Konvertierung und Optimierung der Belege für den nachfolgenden Workflow</li>
                <li>Projekt "Mandantenverwaltung Online" - Auslagern der Mandantenverwaltung aus der On-Premise Anwendung</li>
                <li>Verbesserung der OCR-Erkennung</li>
                <li>Anbindung von Partnern an die Beleg-Schnittstelle "Connect"</li>
                <li>Workflow-Optimierung der "Beleg-App"</li>
                </ul>
            </VerticalTimelineElement>

            {/* Anwendungsberater */}
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019 – Apr. 2022"
                iconStyle={{ background: "#10b981", color: "#fff" }}
                icon={<FaGraduationCap />}
                contentStyle={{
                background: "var(--color-card)",        // dynamisch je nach Theme
                color: "var(--color-foreground)",       // aus deiner Theme
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // weicher Schatten
                border: "1px solid var(--color-border)",// dezente Umrandung
                }}
                contentArrowStyle={{ borderRight: "7px solid var(--color-border)" }}
            >
                <h3 className="vertical-timeline-element-title font-bold text-lg">2nd Level Anwendungsberater</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">Agenda Software GmbH, Rosenheim</h4>
                <ul className="mt-2 list-disc ml-4 text-sm">
                <li>Konfigurieren der OCR-Erkennung</li>
                <li>Koordination der "Beleg-App"-Tasks</li>
                <li>2nd Level Support</li>
                </ul>
            </VerticalTimelineElement>
            {/* Ausbildung */}
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 – 2019"
                iconStyle={{ background: "#10b981", color: "#fff" }}
                icon={<FaGraduationCap />}
                contentStyle={{
                background: "var(--color-card)",        // dynamisch je nach Theme
                color: "var(--color-foreground)",       // aus deiner Theme
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // weicher Schatten
                border: "1px solid var(--color-border)",// dezente Umrandung
                }}
                contentArrowStyle={{ borderRight: "7px solid var(--color-border)" }}
            >
                <h3 className="vertical-timeline-element-title font-bold text-lg">Informatikkaufmann</h3>
                <h4 className="vertical-timeline-element-subtitle text-sm text-muted-foreground">BMW AG, München</h4>
            </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}
