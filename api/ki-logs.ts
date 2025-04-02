import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("ki_logs")
    .select("input");

  if (error) {
    return new Response("❌ Fehler beim Laden", { status: 500 });
  }

  // Gruppieren und zählen (clientseitig)
  const countMap: Record<string, number> = {};
  data?.forEach((row) => {
    const key = row.input?.toLowerCase().trim() || "unbekannt";
    countMap[key] = (countMap[key] || 0) + 1;
  });

  const result = Object.entries(countMap).map(([input, count]) => ({
    input,
    count,
  }));

  return Response.json(result);
}
