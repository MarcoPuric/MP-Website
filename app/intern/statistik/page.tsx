"use client";

import { useEffect, useState } from "react";

export default function StatistikPage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("mp-tracking-events") || "[]");
    setEvents(data.reverse());
  }, []);

  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">📊 Statistik</h1>
      <ul className="space-y-2">
        {events.map((event, i) => (
          <li key={i} className="bg-muted p-4 rounded border border-border text-sm">
            <strong>{event.type}</strong> – {new Date(event.timestamp).toLocaleString()}
            {event.meta && <pre className="text-xs mt-1">{JSON.stringify(event.meta, null, 2)}</pre>}
          </li>
        ))}
      </ul>
    </div>
  );
}
