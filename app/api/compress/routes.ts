import { NextRequest, NextResponse } from "next/server";

const COMPRESSOR_URL = process.env.COMPRESSOR_URL || "http://compressor:5001";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  const preset = (form.get("preset") as string) || "screen"; // screen|ebook|printer|prepress
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const formData = new FormData();
  formData.append("file", file);
  formData.append("preset", preset);

  const r = await fetch(`${COMPRESSOR_URL}/compress`, {
    method: "POST",
    body: formData
  });

  if (!r.ok) {
    const msg = await r.text();
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  const buf = await r.arrayBuffer();
  return new NextResponse(buf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="compressed.pdf"'
    }
  });
}
