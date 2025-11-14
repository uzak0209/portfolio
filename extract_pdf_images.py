#!/usr/bin/env python3
import sys
from pdf2image import convert_from_path
from PIL import Image
import os

# PDFファイルのパス
pdf_path = "CHAP.pdf"
output_dir = "public/images/projects/chap"

# 出力ディレクトリが存在しない場合は作成
os.makedirs(output_dir, exist_ok=True)

print(f"Converting PDF to images...")
print(f"PDF path: {pdf_path}")
print(f"Output directory: {output_dir}")

try:
    # PDFを画像に変換（300 DPIで高品質）
    images = convert_from_path(pdf_path, dpi=300)

    print(f"Found {len(images)} pages in PDF")

    # 各ページを保存
    for i, image in enumerate(images, start=1):
        output_path = f"{output_dir}/slide-{i:02d}.png"
        image.save(output_path, 'PNG')
        print(f"Saved page {i} to {output_path}")

    print(f"\nSuccessfully extracted {len(images)} images from PDF")
    print(f"Images saved to: {output_dir}")

except Exception as e:
    print(f"Error: {e}")
    print("\nMake sure you have pdf2image and poppler installed:")
    print("  pip install pdf2image")
    print("  brew install poppler")
    sys.exit(1)
