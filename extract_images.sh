#!/bin/bash

# CHAPプロジェクトディレクトリに移動
cd /Users/uzak/Projects/portfolio

# PDFファイルが存在するか確認
if [ ! -f "CHAP.pdf" ]; then
    echo "エラー: CHAP.pdfファイルが見つかりません"
    echo "プロジェクトディレクトリにCHAP.pdfを配置してください"
    exit 1
fi

# 仮想環境をアクティベート
source venv/bin/activate

# Pythonスクリプトを実行
python3 extract_pdf_images.py

echo "画像の抽出が完了しました！"
echo "public/images/projects/chap/ ディレクトリを確認してください"
