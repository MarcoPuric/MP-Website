'use client';
import useSWR from 'swr';
import { Card, CardContent } from '@/components/ui/elements';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TrendsDeck() {
  const { data, isLoading, error } = useSWR('/api/trends', fetcher);

  if (isLoading) return <p>Lade Tech‑Trends…</p>;
  if (error)     return <p className="text-destructive">Fehler beim Laden der Trends.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item: any) => (
        <Card key={item.url || item.id} className="hover:shadow-lg transition">
          <CardContent className="p-4 space-y-2">
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {item.type === 'repo' ? item.name : item.title}
            </a>
            <p className="text-sm line-clamp-3">{item.desc}</p>
            <span className="text-xs text-muted-foreground">
              {item.type === 'repo'
                ? `★ ${item.stars.toLocaleString()} · ${item.lang}`
                : `${new Date(item.published).toLocaleDateString()} · ${item.source}`}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
