import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { input, response } = await req.json();

  const { error } = await supabase.from("ki_logs").insert({
    input,
    response,
  });

  if (error) {
    return new Response("❌ Fehler beim Speichern", { status: 500 });
  }

  return new Response("✅ Gespeichert", { status: 200 });
}
