// lib/tracker.ts

type TrackingEvent = {
    type: string;
    timestamp: number;
    meta?: Record<string, any>;
  };
  
  const STORAGE_KEY = "mp-tracking-events";
  
  export function trackEvent(type: string, meta: Record<string, any> = {}) {
    const event: TrackingEvent = {
      type,
      timestamp: Date.now(),
      meta,
    };
  
    if (typeof window === "undefined") return;
  
    // Alte Events laden
    const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    events.push(event);
  
    // Speichern
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  
    // Optional: auch zur Konsole loggen
    console.info("🔍 Event getrackt:", event);
  }
  