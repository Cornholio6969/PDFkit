# PDFKit

🚀 **Free PDF Tools — Merge, Split, Compress (No Watermark)**

PDFKit is a modern open-source SaaS-style web app that lets you work with PDF files instantly in your browser.  
Built with **Next.js 14 + TailwindCSS** (frontend) and **Python/Ghostscript** (for compression).
<img width="1899" height="896" alt="image" src="https://github.com/user-attachments/assets/e686f521-500f-455d-98ad-2719eb18eff7" />

## ✨ Features

- **Merge PDF** — Combine multiple PDFs into one file  
- **Split PDF** — Extract specific pages (all done locally in your browser)  
- **Compress PDF** — Reduce file size using Ghostscript (server-side)  
- **No Watermarks** — Always free, clean output  
- **Privacy First** — Merge & Split happen 100% client-side  

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Modern styling
- [pdf-lib](https://github.com/Hopding/pdf-lib) — PDF manipulation client-side
- [Ghostscript](https://www.ghostscript.com/) — PDF compression
- [Docker Compose](https://docs.docker.com/compose/) — Multi-service setup

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/PDFkit.git
cd PDFkit
```

### Local (without Docker)

Requirements:
- Node.js >= 20
- Python 3 + Ghostscript installed

```bash
npm install
npm run dev
```

App will be available at [http://localhost:3000](http://localhost:3000).

### With Docker

```bash
docker compose up --build
```

This will start:
- **web** → Next.js frontend on `localhost:3000`
- **compressor** → Python Ghostscript microservice

## 📂 Project Structure

```
PDFkit/
 ├─ app/                 # Next.js app router pages
 ├─ components/          # React UI components
 ├─ lib/                 # PDF helper functions
 ├─ public/              # Static assets (logo, favicon)
 ├─ compressor/          # Python Ghostscript service
 ├─ Dockerfile           # Next.js container
 ├─ docker-compose.yml   # Multi-container setup
 └─ README.md
```

## 🔑 SEO Optimized

- Custom titles & descriptions per tool page  
- Friendly URLs: `/merge-pdf`, `/split-pdf`, `/compress-pdf`  
- Privacy & FAQ sections  

## 🚀 Roadmap

- Add more tools (Word ↔ PDF, JPG ↔ PDF, Rotate, Unlock, Protect)  
- Multi-language support  
- User accounts & Pro tier (bigger files, batch mode)

## 🤝 Contributing

Contributions welcome! Feel free to fork and submit PRs.

## 📄 License

MIT License — free to use, modify, and share.
