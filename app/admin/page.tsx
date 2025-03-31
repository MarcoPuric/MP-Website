"use client";
import { useState } from "react";
import { verifyTOTP } from "@/lib/totp";
import QRSetup from "@/components/QRSetup";
import KIModeToggle from "@/components/KIModeToggle";

export default function AdminPage() {
  const [step, setStep] = useState<"login" | "2fa" | "granted">("login");
  const [secret] = useState(process.env.NEXT_PUBLIC_ADMIN_TOTP_SECRET!);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const pass = form.get("password");
    if (pass === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setStep("2fa");
    } else {
      setError("❌ Falsches Passwort");
    }
  };

  const handle2FA = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyTOTP(code, secret)) {
      setStep("granted");
    } else {
      setError("❌ Ungültiger 2FA-Code");
    }
  };

  if (step === "granted") {
    return (
      <main className="p-10 text-center space-y-6">
        <h1 className="text-2xl font-bold">✅ Zugriff gewährt</h1>
        <p className="text-muted-foreground">Willkommen im Adminbereich, Marco!</p>
  
        <section className="mt-10 flex justify-center">
          <KIModeToggle />
        </section>
      </main>
    );
  }
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🔐 Admin Login</h1>

      {step === "login" && (
        <form onSubmit={handleLogin} className="space-y-4 w-full max-w-sm">
          <input name="password" type="password" placeholder="Admin Passwort" required className="w-full p-3 rounded border" />
          <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded">Weiter</button>
        </form>
      )}

      {step === "2fa" && (
        <>
          <QRSetup secret={secret} />
          <form onSubmit={handle2FA} className="space-y-4 mt-6 w-full max-w-sm">
            <input value={code} onChange={(e) => setCode(e.target.value)} maxLength={6} placeholder="🔢 2FA Code" className="w-full p-3 rounded border text-center tracking-widest" />
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Zugang prüfen</button>
          </form>
        </>
      )}

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </main>
  );
}
