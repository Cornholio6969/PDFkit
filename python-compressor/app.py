from flask import Flask, request, send_file, abort
import tempfile, os, subprocess
from werkzeug.utils import secure_filename

app = Flask(__name__)

PRESET_MAP = {
    "screen": "/screen",
    "ebook": "/ebook",
    "printer": "/printer",
    "prepress": "/prepress"
}

@app.post("/compress")
def compress():
    if "file" not in request.files:
        return abort(400, "No file")
    f = request.files["file"]
    preset = request.form.get("preset", "screen")
    preset = PRESET_MAP.get(preset, "/screen")

    with tempfile.TemporaryDirectory() as td:
        input_path = os.path.join(td, secure_filename(f.filename or "in.pdf"))
        output_path = os.path.join(td, "out.pdf")
        f.save(input_path)

        # Ghostscript command
        cmd = [
            "gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.4",
            f"-dPDFSETTINGS={preset}",
            "-dDownsampleColorImages=true",
            "-dColorImageResolution=120",
            "-dNOPAUSE", "-dQUIET", "-dBATCH",
            f"-sOutputFile={output_path}", input_path
        ]
        try:
            subprocess.check_call(cmd)
        except subprocess.CalledProcessError:
            return abort(500, "Ghostscript failed")

        return send_file(output_path, as_attachment=True, download_name="compressed.pdf", mimetype="application/pdf")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
