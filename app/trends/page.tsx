import TrendsDeck from '@/components/TrendsDeck';

export const metadata = {
  title: 'Tech Trends – Marco Puric',
  description: 'Täglich aktualisierte AIOps‑ und NoOps‑Neuigkeiten: Repositories & Artikel.',
};

export default function TrendsPage() {
  return (
    <main className="container mx-auto py-24">
      <h1 className="mb-10 text-4xl font-bold">TechTrends</h1>
      <p className="mb-8 max-w-prose text-muted-foreground">
        Jeden Tag automatisch kuratiert: die spannendsten Repositories NewsArtikel
        rund um <strong>AIOps</strong>, <strong>NoOps</strong>, FinOps &GitOps.
      </p>
      <TrendsDeck />
    </main>
  );
}