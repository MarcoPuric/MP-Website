'use client';

import { useEffect, useState } from 'react';

export default function StatistikPage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("mp-tracking-events");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setEvents(parsed);
      } catch (error) {
        console.error("Fehler beim Parsen der Tracking-Daten", error);
      }
    }
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 Besuchsstatistik (lokal)</h1>

      {events.length === 0 ? (
        <p className="text-muted-foreground">Noch keine Events gespeichert.</p>
      ) : (
        <pre className="bg-zinc-800 text-white p-4 rounded-lg overflow-auto text-sm max-h-[70vh] shadow-inner">
          {JSON.stringify(events, null, 2)}
        </pre>
      )}

      {/* Optional: Reset Button */}
      <button
        onClick={() => {
          localStorage.removeItem("mp-tracking-events");
          setEvents([]);
        }}
        className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md"
      >
        🗑️ Alle Daten löschen
      </button>
    </div>
  );
}
