import { PDFDocument } from "pdf-lib";
export async function mergePdfBytes(files: Uint8Array[]) {
  const output = await PDFDocument.create();
  for (const bytes of files) {
    const src = await PDFDocument.load(bytes);
    const pages = await output.copyPages(src, src.getPageIndices());
    pages.forEach(p => output.addPage(p));
  }
  return await output.save();
}
