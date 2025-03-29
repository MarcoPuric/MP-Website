import { Suspense } from 'react';
import KontaktFormular from '@/components/ui/ContactForm';

export default function KontaktPage() {
  return (
    <Suspense fallback={<div>Lade Kontaktformular...</div>}>
      <KontaktFormular />
    </Suspense>
  );
}
