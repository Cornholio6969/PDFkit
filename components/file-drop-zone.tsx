"use client";
import { useCallback, useState } from "react";

export function FileDropZone({
  multiple = true,
  accept = "application/pdf",
  onFiles
}: {
  multiple?: boolean;
  accept?: string;
  onFiles: (files: File[]) => void;
}) {
  const [isOver, setIsOver] = useState(false);
  const handle = useCallback((files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files).filter(f => f.type === accept || accept === "*");
    onFiles(multiple ? arr : arr.slice(0,1));
  }, [accept, multiple, onFiles]);

  return (
    <div
      className={`drop ${isOver ? "border-sky-500" : ""}`}
      onDragOver={(e) => { e.preventDefault(); setIsOver(true); }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => { e.preventDefault(); setIsOver(false); handle(e.dataTransfer.files); }}
    >
      <p className="text-lg">Drag & drop PDF{multiple ? "s" : ""} here</p>
      <p className="text-white/60 text-sm">or</p>
      <label className="btn cursor-pointer">
        Choose file{multiple ? "s" : ""}
        <input type="file" multiple={multiple} accept={accept} hidden onChange={(e)=>handle(e.target.files)} />
      </label>
    </div>
  );
}
