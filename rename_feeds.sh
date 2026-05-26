#!/bin/bash
# VenuX 피드 사진 자동 이름 변경 스크립트
# 사용법: bash rename_feeds.sh

BASE="$(dirname "$0")"

rename_member() {
  local key="$1"      # ara, lux, eur, kin, atp
  local folder="$2"   # 폴더명

  local dir="$BASE/$folder"
  if [ ! -d "$dir" ]; then
    echo "⚠️  $folder 폴더 없음 — 건너뜀"
    return
  fi

  local count=1
  # jpg, jpeg, png, webp 전부 인식
  for f in "$dir"/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP} 2>/dev/null; do
    [ -f "$f" ] || continue
    ext="${f##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    # png로 통일 (원본 확장자 유지하고 싶으면 ext_lower 그대로 써도 됨)
    new_name="${key}-feed-$(printf '%02d' $count).${ext_lower}"
    cp "$f" "$BASE/$new_name"
    echo "  ✓ $f → $new_name"
    ((count++))
  done
  echo "  → $key 완료: $((count-1))장"
}

echo ""
echo "=== VenuX 피드 사진 이름 변환 시작 ==="
echo ""

rename_member "ara" "ara"
rename_member "lux" "lux"
rename_member "eur" "eur"
rename_member "kin" "kin"
rename_member "atp" "atp"

echo ""
echo "=== 완료! index.html 새로고침하면 반영됩니다 ==="
echo ""
