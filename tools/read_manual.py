import os
from pypdf import PdfReader

def extract_manual():
    pdf_path = "RECURSOS CAUDILLO/manual de marca caudillo curvas.pdf"
    output_file = ".tmp/manual_text.txt"
    
    if not os.path.exists(".tmp"):
        os.makedirs(".tmp")
        
    try:
        reader = PdfReader(pdf_path)
        with open(output_file, "w", encoding="utf-8") as out:
            for i, page in enumerate(reader.pages):
                out.write(f"--- PAGE {i+1} ---\n")
                out.write(page.extract_text() + "\n")
        print("Successfully extracted manual text.")
    except Exception as e:
        print(f"Error reading manual: {e}")

if __name__ == "__main__":
    extract_manual()
