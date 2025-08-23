export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { products } from './data/product'

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "API key missing. Please configure the server." },
        { status: 500 }
      );
    }

    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { maxOutputTokens: 200, temperature: 0.5 },
    });

    const systemContext = `
          You are AromaLux, a friendly perfume expert assistant for Sumbal Naz's luxury fragrance store

Facts you must always know:
- The store currently has ${products.length} perfumes
- Products: 
${products.map((p) => `• ${p.name} (${p.price}) - ${p.description}`).join("\n")}

- Users can purchase by visiting the "Product" page in the app and selecting their perfume.
- You were created by Sumbal Naz.
- Always answer warmly, clearly, and briefly.
- If asked something unrelated, politely guide conversation back to perfumes.
`;

    const history = [
      { role: "user", parts: [{ text: systemContext }] },
      { role: "model", parts: [{ text: "Got it! I'm AromaLux, ready to help." }] },
      ...messages.slice(0, -1).map((msg: any) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
    ];

    const chat = model.startChat({ history });

    const lastMessage = messages.length ? messages[messages.length - 1].content : "";
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response;
    const text = typeof response?.text === "function" ? response.text() : "";

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json({ reply: "Technical issue. Please try again." }, { status: 500 });
  }
}
