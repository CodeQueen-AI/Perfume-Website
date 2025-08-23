// export const runtime = 'nodejs'; 

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const messages = Array.isArray(body.messages) ? body.messages : [];

//     // Prefer server-side secret env var
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       console.error("GEMINI_API_KEY missing");
//       return NextResponse.json(
//         { reply: "API key missing. Please configure the server." },
//         { status: 500 }
//       );
//     }

//     // Dynamically import the SDK (avoids edge/runtime import issues)
//     const { GoogleGenerativeAI } = await import("@google/generative-ai");
//     const genAI = new GoogleGenerativeAI(apiKey);

//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.0-flash",
//       generationConfig: {
//         maxOutputTokens: 200,
//         temperature: 0.5,
//       },
//     });

//     // Prepare history safely (if no prior messages this will still work)
//     const history = [
//       {
//         role: "user",
//         parts: [{ text: "You are AromaBot, a perfume expert assistant. Keep responses short and helpful." }],
//       },
//       {
//         role: "model",
//         parts: [{ text: "Got it! I'm AromaBot, ready to help with perfume recommendations." }],
//       },
//       ...messages.slice(0, -1).map((msg: any) => ({
//         role: msg.role === "user" ? "user" : "model",
//         parts: [{ text: msg.content }],
//       })),
//     ];

//     const chat = model.startChat({ history });

//     const lastMessage = messages.length ? messages[messages.length - 1].content : "";
//     const result = await chat.sendMessage(lastMessage);
//     const response = await result.response;
//     const text = typeof response?.text === "function" ? response.text() : "";

//     return NextResponse.json({ reply: text });
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     return NextResponse.json(
//       { reply: "Technical issue. Please try again in a moment." },
//       { status: 500 }
//     );
//   }
// }








// export const runtime = "nodejs";

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const messages = Array.isArray(body.messages) ? body.messages : [];

//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json(
//         { reply: "API key missing. Please configure the server." },
//         { status: 500 }
//       );
//     }

//     const { GoogleGenerativeAI } = await import("@google/generative-ai");
//     const genAI = new GoogleGenerativeAI(apiKey);

//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.0-flash",
//       generationConfig: {
//         maxOutputTokens: 200,
//         temperature: 0.5,
//       },
//     });

//     // 🟣 Your Store Data (inject context)
//     const products = [
//       { id: 1, name: "Vera Wang", price: "$120" },
//       { id: 2, name: "Amber Mystique", price: "$95" },
//       { id: 3, name: "Mystic Oud", price: "$110" },
//       { id: 4, name: "Velvet Rose", price: "$85" },
//     ];

//     const systemContext = `
// You are AromaBot, a friendly perfume expert assistant for CodeQueen's luxury fragrance store. 
// Facts you must always know:
// - The store has ${products.length} perfumes in the collection.
// - Current perfumes: ${products.map((p) => `${p.name} (${p.price})`).join(", ")}.
// - Users can purchase by visiting the "Product" page in the app and selecting their perfume.
// - You were created by CodeQueen.
// - Keep responses short, warm, and helpful.
// If user asks something unrelated, politely bring back conversation to perfumes.
// `;

//     const history = [
//       {
//         role: "user",
//         parts: [{ text: systemContext }],
//       },
//       {
//         role: "model",
//         parts: [{ text: "Got it! I'm AromaBot, ready to help." }],
//       },
//       ...messages.slice(0, -1).map((msg: any) => ({
//         role: msg.role === "user" ? "user" : "model",
//         parts: [{ text: msg.content }],
//       })),
//     ];

//     const chat = model.startChat({ history });

//     const lastMessage = messages.length ? messages[messages.length - 1].content : "";
//     const result = await chat.sendMessage(lastMessage);
//     const response = await result.response;
//     const text = typeof response?.text === "function" ? response.text() : "";

//     return NextResponse.json({ reply: text });
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     return NextResponse.json(
//       { reply: "Technical issue. Please try again." },
//       { status: 500 }
//     );
//   }
// }
















// app/api/chat/route.ts
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

    // 🟣 System context (auto from products)
    const systemContext = `
You are AromaBot, a friendly perfume expert assistant for CodeQueen's luxury fragrance store.

Facts you must always know:
- The store currently has ${products.length} perfumes.
- Products: 
${products.map((p) => `• ${p.name} (${p.price}) - ${p.description}`).join("\n")}

- Users can purchase by visiting the "Product" page in the app and selecting their perfume.
- You were created by Sumbal Naz.
- Always answer warmly, clearly, and briefly.
- If asked something unrelated, politely guide conversation back to perfumes.
`;

    // History
    const history = [
      { role: "user", parts: [{ text: systemContext }] },
      { role: "model", parts: [{ text: "Got it! I'm AromaBot, ready to help." }] },
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
