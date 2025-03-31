"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function KIModeToggle() {
  const [enabled, setEnabled] = useState(true); // true = Demo-Modus

  useEffect(() => {
    const stored = localStorage.getItem("ki-demo-mode");
    if (stored !== null) setEnabled(stored === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("ki-demo-mode", String(enabled));
  }, [enabled]);

  return (
    <div className="flex items-center gap-4 border rounded-lg p-4 shadow-sm max-w-sm bg-zinc-900">
      <div className="flex-1">
        <Label className="block mb-1 text-white">🧠 KI-Modus</Label>
        <p className="text-sm text-muted-foreground">
          {enabled ? "Demo-Modus aktiviert" : "GPT-Live-Modus (Platzhalter)"}
        </p>
      </div>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
    </div>
  );
}
