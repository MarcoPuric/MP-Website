// app/intern/page.tsx
"use client";

import { useEffect, useState } from "react";

type TrackingEvent = {
  type: string;
  timestamp: number;
  meta?: Record<string, any>;
};

const STORAGE_KEY = "mp-tracking-events";
const ADMIN_PASS = "puric2025"; // 🔐 dein Passwort

export default function InternPage() {
  const [events, setEvents] = useState<TrackingEvent[]>([]);
  const [accessGranted, setAccessGranted] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    if (accessGranted) {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed: TrackingEvent[] = raw ? JSON.parse(raw) : [];
      setEvents(parsed);
    }
  }, [accessGranted]);

  const handleLogin = () => {
    if (inputPassword === ADMIN_PASS) {
      setAccessGranted(true);
    } else {
      alert("❌ Falsches Passwort");
    }
  };

  const resetEvents = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEvents([]);
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white p-8">
        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg space-y-4 max-w-sm w-full">
          <h1 className="text-2xl font-bold text-center">🔐 Admin Panel</h1>
          <input
            type="password"
            placeholder="Passwort"
            className="w-full p-2 rounded bg-zinc-700 text-white"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-700 rounded px-4 py-2 font-semibold"
          >
            Anmelden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">📊 Admin Panel</h1>
      <p className="mb-2">🔢 Gesamtanzahl Events: {events.length}</p>
      {events.length > 0 && (
        <>
          <p className="mb-6">
            ⏱️ Letztes Event:{" "}
            {new Date(events[events.length - 1].timestamp).toLocaleString()}
          </p>

          <div className="max-h-[50vh] overflow-y-auto border border-zinc-700 rounded p-4 space-y-2">
            {events.map((event, i) => (
              <div
                key={i}
                className="border-b border-zinc-700 pb-2 mb-2 text-sm"
              >
                <p>
                  <strong>📌 Typ:</strong> {event.type}
                </p>
                <p>
                  <strong>🕒 Zeit:</strong>{" "}
                  {new Date(event.timestamp).toLocaleString()}
                </p>
                {event.meta && (
                  <pre className="text-xs mt-1 text-zinc-400">
                    {JSON.stringify(event.meta, null, 2)}
                  </pre>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={resetEvents}
            className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
          >
            🗑️ Alle Events löschen
          </button>
        </>
      )}
    </div>
  );
}
