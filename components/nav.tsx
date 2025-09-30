"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/merge-pdf", label: "Merge" },
  { href: "/split-pdf", label: "Split" },
  { href: "/compress-pdf", label: "Compress" }
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-[#0b1220]/70 border-b border-white/10">
        <nav className="container h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="hidden sm:inline">PDFKit</span>
          </Link>
          <div className="flex items-center gap-2">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-lg text-sm transition
                  ${pathname === l.href ? "bg-white/10 text-white" : "text-white/80 hover:text-white hover:bg-white/5"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
