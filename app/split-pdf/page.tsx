import PdfSplitTool from "@/components/pdf-split-tool";
export const metadata = { title: "Split PDF Pages — Free & No Watermark" };

export default function Page() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Split PDF</h1>
        <p className="text-white/70 mt-2">Extract exactly the pages you need. No upload for processing.</p>
      </header>
      <div className="card">
        <PdfSplitTool />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="badge">Local page extraction</div>
        <div className="badge">Clean output</div>
        <div className="badge">Zero learning curve</div>
      </div>
    </section>
  );
}
