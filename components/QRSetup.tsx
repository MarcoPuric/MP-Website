"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QRSetup({ secret }: { secret: string }) {
  const [qr, setQr] = useState("");

  useEffect(() => {
    const { authenticator } = require("otplib");
    const uri = authenticator.keyuri("admin@puric.dev", "MP-Website", secret);
    QRCode.toDataURL(uri).then(setQr);
  }, [secret]);

  return (
    <div className="text-center space-y-4">
      <p className="text-muted-foreground">📱 Scanne diesen QR-Code mit Google Authenticator</p>
      {qr && <img src={qr} alt="QR Code" className="mx-auto" />}
    </div>
  );
}
