import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { input } = await req.json();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response("API key missing", { status: 500 });
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // oder "gpt-4"
      messages: [
        {
          role: "system",
          content: "Du bist Marco Purics persönlicher Bewerbungs-KI-Assistent.",
        },
        {
          role: "user",
          content: input,
        },
      ],
      temperature: 0.5,
    }),
  });

  const data = await res.json();
  const answer = data?.choices?.[0]?.message?.content;

  return Response.json({ answer });
}
