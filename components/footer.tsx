export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container">
        <div className="card">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Privacy</h4>
              <p className="text-white/70 text-sm">
                Merge/Split run locally in your browser. Compression uses our server and auto-deletes temporary files.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">About</h4>
              <p className="text-white/70 text-sm">Fast, free PDF tools. No account. No watermark. Built for speed.</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-white/60 text-sm">
            © {new Date().getFullYear()} PDFKit
          </div>
        </div>
      </div>
    </footer>
  );
}
