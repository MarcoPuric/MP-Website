// app/impressum/page.tsx
export default function Impressum() {
    return (
      <main className="max-w-3xl mx-auto p-8 text-foreground bg-background">
        <h1 className="text-3xl font-bold mb-6">Impressum & rechtliche Hinweise</h1>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Marco Puric<br />
            [Deine Straße]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:marco@puric.de" className="text-blue-500 underline">marco@puric.de</a>
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links.
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Datenschutz</h2>
          <p>
            Diese Website speichert keine personenbezogenen Daten automatisch. Wenn du mir über das Kontaktformular eine Nachricht sendest,
            werden deine Angaben nur zur Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben.
          </p>
        </section>
      </main>
    );
  }
  