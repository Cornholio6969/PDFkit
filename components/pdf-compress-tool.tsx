"use client";
import { useState } from "react";

export default function PdfCompressTool() {
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState("screen");
  const [busy, setBusy] = useState(false);

  async function onCompress() {
    if (!file) return;
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("preset", preset);
      const r = await fetch("/api/compress", { method: "POST", body: fd });
      if (!r.ok) throw new Error("Compression failed");
      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "compressed.pdf"; a.click();
      setTimeout(()=>URL.revokeObjectURL(url), 1000);
    } finally { setBusy(false); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <label className="btn btn-ghost">
          Choose file
          <input type="file" hidden accept="application/pdf" onChange={(e)=>setFile(e.target.files?.[0] ?? null)} />
        </label>
        <span className="text-white/70 text-sm">{file?.name ?? "No file selected"}</span>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm text-white/70">Quality</label>
        <select className="input max-w-xs" value={preset} onChange={e=>setPreset(e.target.value)}>
          <option value="screen">Smallest (screen)</option>
          <option value="ebook">Smaller (ebook)</option>
          <option value="printer">High (printer)</option>
          <option value="prepress">Very High (prepress)</option>
        </select>
      </div>

      <button className="btn btn-primary" onClick={onCompress} disabled={!file || busy}>
        {busy ? "Compressing..." : "Compress & Download"}
      </button>

      <p className="text-white/60 text-xs">
        Merge/Split happen locally. Compression runs securely on the server & returns instantly.
      </p>
    </div>
  );
}
