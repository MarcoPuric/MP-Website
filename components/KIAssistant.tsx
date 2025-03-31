"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const mockResponses: Record<string, string> = {
  "was kannst du?": "Ich habe Erfahrung in DevOps, Monitoring, Security und AI-gestützter Softwareentwicklung.",
  "welche tools nutzt du?": "Ich arbeite mit AWS, Docker, Grafana, GitLab CI, Kubernetes und vielen weiteren.",
  "welche rolle hattest du bei beispiel gmbh?": "Ich war Site Reliability Engineer mit Fokus auf CI/CD und Monitoring.",
};

export default function KIAssistant() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [useMock, setUseMock] = useState(true);

  const handleAsk = async () => {
    const key = input.toLowerCase().trim();

    if (useMock) {
      const answer = mockResponses[key] || "Diese Frage kann ich im Demo-Modus leider nicht beantworten.";
      setResponse(answer);
    } else {
      // Placeholder für GPT-Integration
      setResponse("[GPT-Modus ist noch nicht aktiv – folgt in Kürze]");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🧠 KI-Assistent</h1>

      {/* Toggle für Demo-/Live-Modus */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <Label htmlFor="mockMode">Demo-Modus</Label>
        <Switch
          id="mockMode"
          checked={useMock}
          onCheckedChange={(value: boolean) => setUseMock(value)}
        />
      </div>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="chat">🗨️ Chat</TabsTrigger>
          <TabsTrigger value="analyse">📊 Analyse</TabsTrigger>
          <TabsTrigger value="cv">📄 Lebenslauf</TabsTrigger>
        </TabsList>

        {/* Tab: Chat */}
        <TabsContent value="chat">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Frag mich etwas zu meinen Erfahrungen, Skills oder Tools.
            </p>
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="z. B. Welche Tools nutzt du?"
              />
              <Button onClick={handleAsk}>Fragen</Button>
            </div>
            {response && (
              <div className="bg-muted p-4 rounded-xl shadow text-sm text-muted-foreground">
                <strong>Antwort:</strong> {response}
              </div>
            )}
          </div>
        </TabsContent>

        {/* Tab: Analyse */}
        <TabsContent value="analyse">
          <div className="space-y-2">
            <h2 className="font-semibold">Analyse (Demo)</h2>
            <p className="text-sm text-muted-foreground">
              Basierend auf meinen Skills liegt mein Fokus auf DevOps, AI und skalierbarer Infrastruktur.
              Kategorien wie &quot;Cloud&quot; und &quot;Monitoring&quot; ergänzen sich besonders gut.
            </p>
          </div>
        </TabsContent>

        {/* Tab: Lebenslauf */}
        <TabsContent value="cv">
          <div className="space-y-2">
            <h2 className="font-semibold">CV-Abfrage (Demo)</h2>
            <p className="text-sm text-muted-foreground">
              In meiner letzten Position war ich verantwortlich für den Aufbau einer CI/CD-Pipeline mit GitLab,
              sowie das Einführen von observability-Standards auf Basis von Grafana und InfluxDB.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
