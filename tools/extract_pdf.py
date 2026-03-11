import os
from pypdf import PdfReader

def extract_text_from_pdfs(pdf_dir, output_file):
    if not os.path.exists(".tmp"):
        os.makedirs(".tmp")
    
    with open(output_file, "w", encoding="utf-8") as out:
        for file in os.listdir(pdf_dir):
            if file.endswith(".pdf") and "manual de marca" not in file:
                pdf_path = os.path.join(pdf_dir, file)
                out.write(f"--- START OF {file} ---\n")
                try:
                    reader = PdfReader(pdf_path)
                    for page in reader.pages:
                        out.write(page.extract_text() + "\n")
                except Exception as e:
                    out.write(f"Error reading {file}: {e}\n")
                out.write(f"--- END OF {file} ---\n\n")

if __name__ == "__main__":
    extract_text_from_pdfs("RECURSOS CAUDILLO", ".tmp/raw_menus.txt")
    print("Done extracting PDF text.")
