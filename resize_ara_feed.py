#!/usr/bin/env python3
"""
이루나(ARA-462) 피드 이미지 리사이저
사용법: python3 resize_ara_feed.py [이미지폴더경로]
이미지폴더 안의 파일을 알파벳순으로 정렬해서 ara-feed-02.png ~ ara-feed-20.png로 저장
"""

import sys
import os
from pathlib import Path
from PIL import Image

# ── 설정 ──
DEST_DIR = Path(__file__).parent  # venux_mobile/ 폴더
TARGET_SIZE = (800, 800)
START_INDEX = 2  # ara-feed-02부터
PREFIX = "ara-feed"

def center_crop_square(img, size):
    """중앙 기준 정사각형 크롭 후 리사이징"""
    w, h = img.size
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    img_cropped = img.crop((left, top, left + min_dim, top + min_dim))
    return img_cropped.resize(size, Image.LANCZOS)

def main():
    if len(sys.argv) < 2:
        print("사용법: python3 resize_ara_feed.py [이미지폴더경로]")
        print("예시: python3 resize_ara_feed.py ~/Downloads/이루나이미지/")
        sys.exit(1)

    src_dir = Path(sys.argv[1]).expanduser()
    if not src_dir.exists():
        print(f"폴더를 찾을 수 없어: {src_dir}")
        sys.exit(1)

    # 이미지 파일만 수집 (jpg, jpeg, png, webp)
    exts = {'.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'}
    images = sorted([f for f in src_dir.iterdir() if f.suffix in exts])

    if not images:
        print(f"이미지 파일 없음: {src_dir}")
        sys.exit(1)

    print(f"발견된 이미지: {len(images)}개")
    print(f"저장 위치: {DEST_DIR}")
    print("─" * 40)

    for i, src_path in enumerate(images):
        idx = START_INDEX + i
        dest_name = f"{PREFIX}-{idx:02d}.png"
        dest_path = DEST_DIR / dest_name

        try:
            img = Image.open(src_path).convert("RGB")
            out = center_crop_square(img, TARGET_SIZE)
            out.save(dest_path, "PNG", optimize=True)
            print(f"✓ {src_path.name} → {dest_name}")
        except Exception as e:
            print(f"✗ {src_path.name} 실패: {e}")

    print("─" * 40)
    print(f"완료. ara-feed-{START_INDEX:02d}.png ~ ara-feed-{START_INDEX + len(images) - 1:02d}.png 저장됨")

if __name__ == "__main__":
    main()
