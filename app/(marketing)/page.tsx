import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-16">
      {/* HERO */}
      <div className="text-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-brand-500/30 blur-3xl absolute -top-16 -right-10 animate-float" />
          <div className="w-72 h-72 rounded-full bg-brand-500/20 blur-3xl absolute bottom-0 -left-10 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="inline-flex items-center gap-2 badge mb-6">
          <span className="h-2 w-2 rounded-full bg-brand-400" />
          Free • No watermark • Privacy-first
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold leading-[1.1] tracking-tight">
          The fastest way to <span className="text-brand-300">merge, split</span> &{" "}
          <span className="text-brand-300">compress</span> PDFs
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto mt-4">
          Instant results in your browser. Clean UI, zero friction. Built for creators, students, and teams.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/merge-pdf" className="btn btn-primary">Merge PDF</Link>
          <Link href="/split-pdf" className="btn btn-ghost">Split PDF</Link>
          <Link href="/compress-pdf" className="btn btn-ghost">Compress PDF</Link>
        </div>

        <div className="mt-10 text-white/50 text-sm">No signup required • Works on Mac, Windows, iOS, Android</div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Local processing", desc: "Merge & Split never leave your device. Your files stay private." },
          { title: "Lightning fast", desc: "Optimized PDF engine with smart caching and zero bloat." },
          { title: "No watermark", desc: "Export clean PDFs with no branding. Always." }
        ].map((f)=>(
          <div key={f.title} className="card">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* STEPS */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Drop your files", desc: "Drag & drop, or click to choose." },
            { step: "2", title: "Pick an action", desc: "Merge, choose pages, or compress." },
            { step: "3", title: "Download", desc: "Instantly get your optimized PDF." }
          ].map(s=>(
            <div key={s.step} className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <div className="badge mb-3">Step {s.step}</div>
              <h4 className="font-semibold mb-1">{s.title}</h4>
              <p className="text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-white/70 mb-3">Ready to go?</p>
        <div className="flex gap-3 justify-center">
          <Link href="/merge-pdf" className="btn btn-primary">Open Merge Tool</Link>
          <Link href="/compress-pdf" className="btn btn-ghost">Compress a PDF</Link>
        </div>
      </div>
    </section>
  );
}
