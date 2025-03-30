Hier ist eine professionelle, gut strukturierte README für dein GitHub-Repository, passend zum aktuellen Stand deines Projekts:

---

# 🌐 Bewerbungswebsite | Marco Puric

Dieses Repository beinhaltet den vollständigen Quellcode für meine persönliche Bewerbungswebsite. Das Ziel der Website ist es, potenziellen Arbeitgebern und Projektpartnern eine dynamische, interaktive und professionelle Übersicht über meine Fähigkeiten, Erfahrungen und Zertifikate zu bieten.

---

## 🚀 Überblick

Die Website ist mit **Next.js 15**, **React**, **Tailwind CSS** und **Framer Motion** aufgebaut und bietet folgende Kernfunktionalitäten:

- ✅ **Übersichtlicher Hero-Bereich** mit animierter Typing-Animation
- ✅ Interaktive **Skills-Mindmap**
- ✅ **Timeline** zur klaren Darstellung meines beruflichen Werdegangs
- ✅ Dynamische Anzeige meiner **Zertifikate**
- ✅ Direkte Kontaktmöglichkeit über **Formular und E-Mail**
- ✅ Lokales, DSGVO-konformes **Event-Tracking**
- ✅ Passwortgeschütztes **Admin-Panel** zur Anzeige von Website-Statistiken
- ✅ **2-Faktor-Authentifizierung (2FA)** für das Admin-Panel mit Google Authenticator (TOTP)

---

## 🔧 Tech-Stack

| Technologie             | Beschreibung                                      |
|-------------------------|---------------------------------------------------|
| [Next.js 15](https://nextjs.org/) | Modernes React-Framework mit Server-Komponenten und optimierter Performance. |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-First CSS-Framework für schnelle, konsistente UI-Entwicklung. |
| [Framer Motion](https://www.framer.com/motion/) | Animationsbibliothek für flüssige Interaktionen und Animationen. |
| [lucide-react](https://lucide.dev/) | Minimalistische, hochqualitative Icons für moderne UIs. |
| [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter) | Einfache Typing-Animation für interaktive Texte. |
| [Vercel](https://vercel.com/) | Hosting-Plattform für Continuous Deployment. |
| [speakeasy](https://github.com/speakeasyjs/speakeasy) | 2-Faktor-Authentifizierung (TOTP). |

---

## 📁 Projektstruktur

```
bewerbungswebsite/
├── app/
│   ├── intern/               # Admin-Panel (geschützt mit 2FA)
│   ├── kontakt/              # Kontaktseite mit Formular
│   ├── layout.tsx            # Allgemeines Layout
│   ├── page.tsx              # Hauptseite
│   └── globals.css           # Globale Styles
├── components/
│   ├── sections/             # Komponenten für spezifische Seitenbereiche
│   └── ui/                   # UI-Komponenten (Buttons, Karten, Navbar, etc.)
├── lib/
│   ├── tracker.ts            # Tracking-Logik (lokal & DSGVO-konform)
│   └── 2fa.ts                # Logik für Google Authenticator (TOTP)
├── public/                   # Statische Dateien (Bilder, Logos, PDFs)
├── .eslintrc.json            # ESLint Konfiguration
├── next.config.mjs           # Next.js Konfiguration
└── tailwind.config.js        # Tailwind CSS Konfiguration
```

---

## ⚙️ Lokales Setup

Um das Projekt lokal zu starten, führe folgende Schritte aus:

```bash
git clone https://github.com/MarcoPuric/MP-Website.git
cd MP-Website
npm install
npm run dev
```

Anschließend ist die Anwendung erreichbar unter [http://localhost:3000](http://localhost:3000).

---

## 🛡️ Sicherheit & 2FA

Die Admin-Statistikseite (`/intern`) ist passwortgeschützt und bietet zusätzliche Sicherheit durch **2-Faktor-Authentifizierung (TOTP)** via Google Authenticator. 

- Initiale Einrichtung & Verwaltung erfolgt über die Datei `lib/2fa.ts`.
- Standard-Passwort für das Admin-Panel kannst du in der `app/intern/page.tsx` konfigurieren.

---

## 📊 Event-Tracking

Die Website nutzt ein lokales, DSGVO-konformes Tracking auf Basis von `localStorage`. Getrackt werden Klicks und Seitenaufrufe. Statistiken sind im passwortgeschützten Admin-Panel sichtbar.

---

## 🚧 Nächste Schritte & Roadmap

Geplante Erweiterungen des Projekts:

- [ ] Export-Funktion für Statistiken (CSV/JSON)
- [ ] Verbesserte UI-Statistiken mit Diagrammen (recharts)
- [ ] Backend-API für zentrales Event-Tracking
- [ ] Automatisierte Testabdeckung (Jest & Cypress)
- [ ] Weitere Optimierungen (Performance, Barrierefreiheit)

---

## 🤝 Kontakt

- ✉️ E-Mail: [marco@puric.de](mailto:marco@puric.de)
- 🔗 LinkedIn: [Marco Puric](https://de.linkedin.com/in/marco-puric-046451181)
- 🐙 GitHub: [MarcoPuric](https://github.com/MarcoPuric)

---

## 📝 Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) veröffentlicht.

---

**Vielen Dank für dein Interesse!**  
Ich freue mich auf dein Feedback und mögliche Verbesserungsvorschläge. 🌟