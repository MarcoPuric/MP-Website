import { Suspense } from "react";
import ContactSection from "@/components/sections/Contact";

export default function KontaktPage() {
  return (
    <Suspense fallback={<div>Lade Kontaktformular...</div>}>
      <ContactSection />
    </Suspense>
  );
}
