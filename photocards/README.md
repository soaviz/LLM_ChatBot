# VenuX Photocard Images

포토카드 생성 이미지 저장 폴더.

## 구조

```
photocards/
├── ARA/   → 이루나 (ARA-N-01 ~ ARA-UR-02)
├── LUX/   → 박리라 (LUX-N-01 ~ LUX-UR-02)
├── EUR/   → 신지우 (EUR-N-01 ~ EUR-UR-02)
├── KIN/   → 최노아 (KIN-N-01 ~ KIN-UR-02)
└── ATP/   → 정아온 (ATP-N-01 ~ ATP-UR-02)
```

## 파일명 규칙

`{card_id}.png` — 예: `ARA-SSR-03.png`, `LUX-UR-01.png`

## 생성 방법

관리자 전용. `/api/admin/generate-photocard` 엔드포인트 사용.
일반 유저는 읽기 전용.
