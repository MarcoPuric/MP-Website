export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto p-8 text-foreground bg-background">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p>
          Marco Puric<br />
          Rosenheimer Str. 70<br />
          83064 Raubling<br />
          Deutschland
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a
            href="mailto:marco@puric.de"
            className="text-blue-500 underline"
          >
            marco@puric.de
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Marco Puric<br />
          (Anschrift wie oben)
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Urheberrecht</h2>
        <p>
          Die durch mich erstellten Inhalte und Werke auf dieser Website
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
          Downloads und Kopien dieser Seite sind nur für den privaten,
          nichtkommerziellen Gebrauch gestattet.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Datenschutz</h2>
        <p>
          Beim Besuch dieser Website werden keine personenbezogenen Daten
          gespeichert. Wenn du mir über das Kontaktformular schreibst, werden
          deine Angaben ausschließlich zur Bearbeitung deiner Anfrage genutzt
          und nicht an Dritte weitergegeben. Weitere Informationen findest du
          in der{" "}
          <a href="/datenschutz" className="text-blue-500 underline">
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>
    </main>
  );
}
