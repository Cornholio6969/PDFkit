import PdfCompressTool from "@/components/pdf-compress-tool";
export const metadata = { title: "Compress PDF — Reduce Size (No Watermark)" };

export default function Page() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Compress PDF</h1>
        <p className="text-white/70 mt-2">Shrink file size with smart presets. Perfect for email & uploads.</p>
      </header>
      <div className="card">
        <PdfCompressTool />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="badge">Ghostscript engine</div>
        <div className="badge">Quality presets</div>
        <div className="badge">No watermarks</div>
      </div>
    </section>
  );
}
