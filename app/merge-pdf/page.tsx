import PdfMergeTool from "@/components/pdf-merge-tool";

export const metadata = { title: "Merge PDF Online — Free & No Watermark" };

export default function Page() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Merge PDF</h1>
        <p className="text-white/70 mt-2">Combine multiple PDFs into one — fast, private, watermark-free.</p>
      </header>
      <div className="card">
        <PdfMergeTool />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="badge">Private by design</div>
        <div className="badge">No file size tracking</div>
        <div className="badge">Works offline after load</div>
      </div>
    </section>
  );
}
