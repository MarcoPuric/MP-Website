'use client';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaCogs, FaGraduationCap } from "react-icons/fa";

export default function Experience() {

  return (
    <section id="lebenslauf" className="scroll-mt-24 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Beruflicher Werdegang</h2>

      <VerticalTimeline>
        {/* Berufserfahrung */}
        <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Apr. 2021 – Jetzt"
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
                <li>Ausbau des Metrik-Stack mit Icinga BPM + Grafana (InfluxDB) </li>
                <li>SlowLog Monitoring mit Anomaly Detection ( ELASTIC ) </li>
                <li>Etablieren einer Status-Page aller kritischen Cloud-Komponenten mit hohem Business Value </li>
                <li>Strategie-Blatt entworfen für &quot;Key Monitoring Points&quot; in neuen Produkten </li>
                <li>Definieren von SLAs und SLOs </li>
                <li>Initiator der Architektur-Review ( Schrittweise Optimierung der Code-Basis der Cloud-Anwendungen ) </li>
                <li>Initiator/Projektleiter &quot;Datenbank der Zukunft&quot; ( High Availability Cluster / Sharding )  </li>
                <li>Initiator/Projektleiter &quot;Dezentralisierung des Monolithen&quot; </li>
                <li>Projektleiter &quot;Infrastruktur der Zukunft&quot;, Umbau der Cloud- und Backend-Services ( Vorbereitung dieser für KI-gestützte Features ) </li>
                <li>Incident Koordinator KI-gestütze Erfassung und Begleitung des Incident Prozess </li>
                <li>RRM und IRP erstellt ( &quot;RapidResponseManual&quot; und &quot;IncidentResponsePlan&quot; ) </li>
                <li>Einführen der Real-Time-Anomaly-Detection </li>
                <li>Ansprechpartner der fachlichen PMs/POs für neue Features/Produkte für die Themen technische Realisierung, SPOFs, Optimales &quot;Go-Live&quot; </li>
                <li>Beispiel: Einführung E-Rechnung Verarbeitung in der Cloud / BOL ( Online Banking in der Cloud ) / &quot;4/3-Rechner&quot; Echtzeit-Matching der verfügbaren Umsatz-Daten mit den Daten aus der OCR-Erkennung </li>
                <li>automatisiertes Access-Log-Monitoring</li>
                </ul>
            </VerticalTimelineElement>

            {/* Projektkoordination */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Apr. 2020 – Apr. 2021"
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
                <li>Projektleiter &quot;Documentconverter&quot; - On the fly Konvertierung und Optimierung der Belege für den nachfolgenden Workflow</li>
                <li>Projekt &quot;Mandantenverwaltung Online&quot; - Auslagern der Mandantenverwaltung aus der On-Premise Anwendung</li>
                <li>Verbesserung der OCR-Erkennung</li>
                <li>Anbindung von Partnern an die Beleg-Schnittstelle &quot;Connect&quot;</li>
                <li>Workflow-Optimierung der &quot;Beleg-App&quot;</li>
                </ul>
            </VerticalTimelineElement>

            {/* Anwendungsberater */}
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019 – Apr. 2020"
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
                <li>Koordination der &quot;Beleg-App&quot;-Tasks</li>
                <li>2nd Level Support für alle Cloud-Anwendungen im Produktportfolio</li>
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
