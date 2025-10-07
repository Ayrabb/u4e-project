
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://frilly-minna-favoringly.ngrok-free.dev/api/news-items");
  const data = await res.text();
  return new NextResponse(data, {
    headers: { "Content-Type": "application/json" },
  });
}