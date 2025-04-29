// app/datenschutz/page.tsx

export default function Datenschutz() {
    return (
      <main className="max-w-3xl mx-auto p-8 text-foreground bg-background">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
  
        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold">1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen.
            Ich verarbeite deine Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen
            (DSGVO, TMG).
          </p>
        </section>
  
        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold">2. Verantwortlicher</h2>
          <p>
            Marco Puric<br />
            Rosenheimer Str. 70<br />
            83064 Raubling<br />
            E-Mail:{" "}
            <a href="mailto:marco@puric.de" className="text-blue-500 underline">
              marco@puric.de
            </a>
          </p>
        </section>
  
        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold">3. Erfassung und Verarbeitung personenbezogener Daten</h2>
          <p>
            Beim Besuch dieser Website werden keine personenbezogenen Daten gespeichert oder verarbeitet.
          </p>
          <p>
            Wenn du mir über das Kontaktformular eine Nachricht sendest, werden die von dir gemachten Angaben
            (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage verwendet.
            Diese Daten werden nicht an Dritte weitergegeben.
          </p>
        </section>
  
        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold">4. OpenAI API & KI-Assistent</h2>
          <p>
            Die Website bietet einen KI-gestützten Assistenten, der auf Basis der OpenAI GPT-API funktioniert.
            Deine eingegebenen Fragen werden an die Server von OpenAI (USA) übertragen, um eine Antwort zu generieren.
          </p>
          <p>
            Mit Nutzung des Assistenten erklärst du dich mit der Datenverarbeitung durch OpenAI gemäß deren{" "}
            <a
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
              className="text-blue-500 underline"
              rel="noreferrer"
            >
              Datenschutzrichtlinie
            </a>{" "}
            einverstanden.
          </p>
        </section>
  
        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold">5. Hosting & Datenverarbeitung</h2>
          <p>
            Zusätzlich wird <strong>Supabase</strong> für die Speicherung von KI-Anfragen verwendet. Diese Daten enthalten keine
            personenbezogenen Informationen, sofern du keine solchen manuell eingibst.
          </p>
        </section>
  
        <section className="mb-6 space-y-2">
          <h2 className="text-xl font-semibold">6. Deine Rechte</h2>
          <ul className="list-disc list-inside">
            <li>Auskunft über deine gespeicherten Daten</li>
            <li>Berichtigung oder Löschung deiner Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>
          <p>
            Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt,
            kannst du dich bei der zuständigen Aufsichtsbehörde beschweren.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Kontakt bei Datenschutzfragen</h2>
          <p>
            Für Fragen zum Datenschutz kannst du dich jederzeit per E-Mail an mich wenden:
            <a href="mailto:marco@puric.de" className="text-blue-500 underline"> marco@puric.de</a>
          </p>
        </section>
      </main>
    );
  }
  