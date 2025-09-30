"use client";
import { useState } from "react";
import { FileDropZone } from "./file-drop-zone";
import { fileToUint8, uint8ToBlob, downloadBlob } from "@/lib/bytes";
import { extractPages } from "@/lib/pdf-split";

export default function PdfSplitTool() {
  const [file, setFile] = useState<File | null>(null);
  const [input, setInput] = useState("1-3,5");
  const [busy, setBusy] = useState(false);

  function parsePages(s: string): number[] {
    const parts = s.split(",").map(x => x.trim()).filter(Boolean);
    const out: number[] = [];
    for (const part of parts) {
      if (part.includes("-")) {
        const [a,b] = part.split("-").map(n => parseInt(n,10));
        if (!isNaN(a) && !isNaN(b)) for (let i=a;i<=b;i++) out.push(i);
      } else {
        const n = parseInt(part,10);
        if (!isNaN(n)) out.push(n);
      }
    }
    return [...new Set(out)].sort((a,b)=>a-b);
  }

  async function onSplit() {
    if (!file) return;
    setBusy(true);
    try {
      const pages = parsePages(input);
      const bytes = await fileToUint8(file);
      const out = await extractPages(bytes, pages);
      const blob = uint8ToBlob(out);
      downloadBlob(blob, "split.pdf");
    } finally { setBusy(false); }
  }

  return (
    <div className="space-y-6">
      <FileDropZone multiple={false} accept="application/pdf" onFiles={f => setFile(f[0] ?? null)} />
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
        <div className="flex-1">
          <label className="block text-sm text-white/70 mb-1">Pages (e.g., 1-3,5,8)</label>
          <input className="input" value={input} onChange={e=>setInput(e.target.value)} placeholder="1-2,5" />
        </div>
        <button className="btn btn-primary h-11" onClick={onSplit} disabled={!file || busy}>
          {busy ? "Splitting..." : "Split & Download"}
        </button>
      </div>
    </div>
  );
}
