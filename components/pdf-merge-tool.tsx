"use client";
import { useState } from "react";
import { FileDropZone } from "./file-drop-zone";
import { fileToUint8, uint8ToBlob, downloadBlob } from "@/lib/bytes";
import { mergePdfBytes } from "@/lib/pdf-merge";

export default function PdfMergeTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);

  async function onMerge() {
    try {
      setBusy(true);
      const buffers = await Promise.all(files.map(fileToUint8));
      const out = await mergePdfBytes(buffers);
      const blob = uint8ToBlob(out);
      downloadBlob(blob, "merged.pdf");
    } finally { setBusy(false); }
  }

  return (
    <div className="space-y-6">
      <FileDropZone multiple accept="application/pdf" onFiles={setFiles} />
      <div className="flex items-center justify-between">
        <p className="text-white/70 text-sm">
          {files.length ? `${files.length} file(s) selected` : "Add PDFs to merge"}
        </p>
        <button className="btn btn-primary" onClick={onMerge} disabled={busy || files.length < 2}>
          {busy ? "Merging..." : "Merge & Download"}
        </button>
      </div>
    </div>
  );
}
