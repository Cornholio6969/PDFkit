import { PDFDocument } from "pdf-lib";
export async function extractPages(bytes: Uint8Array, pages: number[]) {
  const src = await PDFDocument.load(bytes);
  const out = await PDFDocument.create();
  const zeroIdx = pages.map(p => p - 1).filter(i => i >= 0 && i < src.getPageCount());
  const copied = await out.copyPages(src, zeroIdx);
  copied.forEach(p => out.addPage(p));
  return await out.save();
}
