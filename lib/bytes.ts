export async function fileToUint8(file: File) {
  const buf = await file.arrayBuffer();
  return new Uint8Array(buf);
}
export function uint8ToBlob(u8: Uint8Array, mime = "application/pdf") {
  return new Blob([u8], { type: mime });
}
export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
