# VenuX Character Seed Master v1
### SOAVIZ AI STUDIO — Permanent IP Asset Registry
### Created: 2026-05-16

---

## 📋 목차
1. [시드 번호 마스터 키](#시드-번호-마스터-키)
2. [캐릭터별 고정 시드 프롬프트](#캐릭터별-고정-시드-프롬프트)
3. [플랫폼별 사용 가이드](#플랫폼별-사용-가이드)
4. [의상 시즌별 변형 템플릿](#의상-시즌별-변형-템플릿)
5. [네거티브 프롬프트 리스트](#네거티브-프롬프트-리스트)

---

## 시드 번호 마스터 키

각 멤버에 고정 시드를 할당합니다.
**동일 시드 + 동일 프롬프트 = 일관된 얼굴 재현** (Midjourney/Flux 등)

| 멤버 | 코드 | 시드 (Primary) | 시드 (Backup) | 시드 (Group Shot) |
|------|------|---------------|---------------|-------------------|
| 🔥 이루나 | ARA-462 | `46200001` | `46200002` | `46200010` |
| ✨ 박리라 | LUX-299 | `29900001` | `29900002` | `29900010` |
| 💧 신지우 | EUR-0K | `10000001` | `10000002` | `10000010` |
| 🌬️ 최노아 | KIN-360 | `36000001` | `36000002` | `36000010` |
| 🌿 정아온 | ATP-X1 | `11000001` | `11000002` | `11000010` |

> **규칙**: Primary 시드로 먼저 생성 → 결과 불만족 시 Backup 사용 → 그룹샷은 Group Shot 시드 통일
> 시드는 모델/플랫폼마다 동작이 다를 수 있음. Midjourney `--seed`, Flux `seed:`, GPT Image는 시드 미지원 (프롬프트 일관성으로 대체)

---

## 캐릭터별 고정 시드 프롬프트

### 🔥 ARA-462 · 이루나 · Fire

```
[MASTER SEED PROMPT - ARA-462]

A K-pop virtual idol portrait, ARA-462 / Lee Luna, 25-year-old Korean female.

FACE (identity locked):
Soft oval face shape, delicate features. Large brown almond-shaped eyes with subtle eyeliner. Small straight nose. Full natural pink lips, slightly parted. Smooth porcelain skin with peachy undertone. Soft natural makeup, minimal contouring.

HAIR (signature locked):
Long straight pastel coral pink hair, hex #F4B5A8. Center-parted with face-framing strands. Half-up half-down style with small top knot bun. Hair length below chest. Soft natural texture, slight wave at ends.

OUTFIT (base):
White ribbed tank top underneath. Coral red hoodie/cardigan draped off shoulders. Visible silver zipper detail.

BACKGROUND:
Soft peach coral gradient, #FFD4C5 to #FFC4B0. Warm cinematic studio lighting, light source from upper left.

STYLE:
K-pop editorial photography, NewJeans × Vogue Korea aesthetic. 1:1 square composition, centered. Photorealistic, premium fashion magazine quality. Soft warm color grading. Slight bokeh background blur.

MOOD:
Bold yet soft, confident gaze, slightly parted lips. Charismatic center vibe, controlled fire (462°C philosophy).
```

**Midjourney 단축 버전:**
```
K-pop idol portrait, Lee Luna ARA-462, 25yo Korean female, soft oval face, large brown almond eyes, subtle eyeliner, full pink lips slightly parted, porcelain peachy skin. Long straight pastel coral pink hair #F4B5A8, center-parted, half-up top knot bun. White ribbed tank top, coral red hoodie off shoulders. Soft peach gradient background #FFD4C5. K-pop editorial, Vogue Korea, photorealistic, cinematic warm lighting, 1:1 --seed 46200001 --ar 1:1 --v 6.1 --style raw
```

---

### ✨ LUX-299 · 박리라 · Light

```
[MASTER SEED PROMPT - LUX-299]

A K-pop virtual idol portrait, LUX-299 / Park Lira, 24-year-old Korean female.

FACE (identity locked):
Round-oval face, soft cheek blush. Medium gray-green eyes with dramatic black cat-eye eyeliner. Long thick black eyelashes. Small button nose. Full pink rose-tinted lips with gloss. Porcelain pale skin with rosy cheeks. Doll-like ethereal makeup.

HAIR (signature locked):
Short straight silver-white platinum hair, hex #E8E8E8. Sharp blunt-cut bangs covering forehead. Bob length reaches chin/jawline exactly. Smooth glossy, perfectly straight. Center-parted bangs.

OUTFIT (base):
Cream/ivory ribbed knit top. Deep V-neck. Bare shoulders, minimal jewelry.

BACKGROUND:
Cream ivory gradient, #FAF5E8 to #F5EBD5. Soft golden hour diffused lighting.

STYLE:
K-pop editorial photography, ethereal doll-like aesthetic. 1:1 square composition, centered. Photorealistic, premium fashion magazine quality. Soft warm golden color grading.

MOOD:
Elegant, ethereal, slight closed smile. Glass skin glow, mysterious aura. Visual member energy.
```

**Midjourney 단축 버전:**
```
K-pop idol portrait, Park Lira LUX-299, 24yo Korean female, round-oval face, gray-green eyes, dramatic black cat-eye liner, thick lashes, button nose, rose-tinted glossy lips, porcelain pale rosy cheeks, doll-like makeup. Short straight silver-white platinum bob #E8E8E8, sharp blunt bangs, chin-length. Cream ribbed V-neck top, bare shoulders. Cream ivory gradient background #FAF5E8. Ethereal editorial, golden hour, photorealistic, 1:1 --seed 29900001 --ar 1:1 --v 6.1 --style raw
```

---

### 💧 EUR-0K · 신지우 · Water

```
[MASTER SEED PROMPT - EUR-0K]

A K-pop virtual idol portrait, EUR-0K / Shin Jiwoo, 23-year-old Korean female.

FACE (identity locked):
Long oval face, elegant elongated features. Medium-large dark brown almond eyes with calm gaze. Subtle natural eye makeup, no dramatic liner. Straight slender nose. Soft natural pink-nude lips. Smooth porcelain skin with cool undertone. Minimal serene makeup.

HAIR (signature locked):
Long wavy hair with purple-to-blue gradient. Roots: dark indigo purple #3A2F6F. Mid-lengths: dusty blue purple #7A6FA8. Ends: light periwinkle blue #A8C8E8. Center-parted, falls past chest. Soft natural waves with volume. Smooth glossy finish.

OUTFIT (base):
White ribbed tank top. Simple sleeveless cut. Bare shoulders, minimal accessories.

BACKGROUND:
Pale blue gradient, #D8E8F0 to #C5DCE8. Cool serene diffused lighting.

STYLE:
K-pop editorial photography, serene water-like aesthetic. 1:1 square composition, centered. Photorealistic, premium fashion magazine quality. Cool-toned color grading.

MOOD:
Calm, contemplative, deep gaze. Water-like flowing energy. Quiet intelligence.
```

**Midjourney 단축 버전:**
```
K-pop idol portrait, Shin Jiwoo EUR-0K, 23yo Korean female, long oval face, elegant features, dark brown almond eyes calm gaze, slender nose, natural pink-nude lips, porcelain cool undertone skin, minimal makeup. Long wavy purple-to-blue gradient hair, roots indigo #3A2F6F mid dusty purple #7A6FA8 ends periwinkle #A8C8E8, center-parted, past chest. White ribbed tank top, bare shoulders. Pale blue gradient background #D8E8F0. Serene editorial, cool diffused light, photorealistic, 1:1 --seed 10000001 --ar 1:1 --v 6.1 --style raw
```

---

### 🌬️ KIN-360 · 최노아 · Wind

```
[MASTER SEED PROMPT - KIN-360]

A K-pop virtual idol portrait, KIN-360 / Choi Noah, 22-year-old Korean female.

FACE (identity locked):
Round soft face with apple cheeks. Medium round dark brown eyes with bright sparkly gaze. Natural eye makeup with subtle warmth. Small button nose. Full pink lips in bright closed smile showing slight teeth. Smooth peachy skin with warm undertone. Cheerful makeup with pink blush.

HAIR (signature locked):
Short orange/tangerine hair, hex #FFA866. Layered shaggy bob cut. Face-framing pieces with wispy textured bangs. Length reaches jaw/neck, slightly tousled. Voluminous wavy texture, fluffy dynamic. NOT slick or straight.

OUTFIT (base):
White ribbed tank top base. Pastel lavender lightweight windbreaker/hoodie. Hood down, drawstrings visible. Casual sporty layering.

BACKGROUND:
Pastel lavender gradient, #D9C5E8 to #C5B0DA. Bright cheerful diffused lighting.

STYLE:
K-pop editorial photography, dynamic free-spirited aesthetic. 1:1 square composition, centered. Photorealistic, premium fashion magazine quality. Bright cheerful color grading.

MOOD:
Playful, energetic, bright smile. Wind-like dynamic free-spirited. Mischievous charm.
```

**Midjourney 단축 버전:**
```
K-pop idol portrait, Choi Noah KIN-360, 22yo Korean female, round soft face, apple cheeks, round dark brown sparkly eyes, button nose, full pink lips bright closed smile showing teeth, peachy warm skin, pink blush. Short orange tangerine hair #FFA866, layered shaggy bob, wispy textured bangs, jaw-length, voluminous fluffy tousled. White tank top, pastel lavender windbreaker hood down. Pastel lavender gradient background #D9C5E8. Cheerful editorial, bright diffused light, photorealistic, 1:1 --seed 36000001 --ar 1:1 --v 6.1 --style raw
```

---

### 🌿 ATP-X1 · 정아온 · Nature

```
[MASTER SEED PROMPT - ATP-X1]

A K-pop virtual idol portrait, ATP-X1 / Jung Aon, 21-year-old Korean female.

FACE (identity locked):
Oval face with refined elegant features. Medium-large dark brown almond eyes with thick natural lashes. Subtle natural brown eyeliner. Small straight nose. Full natural pink lips in soft warm smile. Smooth porcelain skin with neutral undertone. Minimal dewy clean makeup.

HAIR (signature locked):
Dark brown/black hair, hex #3D2E26. Slicked back into low sleek bun/ponytail. Center-parted, hair pulled back cleanly. A few wispy face-framing strands escaping naturally. Smooth polished finish, NOT messy. NO bangs, fully pulled back.

OUTFIT (base):
Cream/ivory ribbed tank top base. Sage green/olive linen cardigan or open jacket. Natural layered casual look. Earth tone palette.

BACKGROUND:
Sage green gradient, #D5DCC5 to #C0CCB0. Natural soft daylight, even gentle lighting.

STYLE:
K-pop editorial photography, natural grounded aesthetic. 1:1 square composition, centered. Photorealistic, premium fashion magazine quality. Natural warm color grading.

MOOD:
Grounded, honest, warm gentle smile. Nature-like calm energy. Maknae with deep wisdom.
```

**Midjourney 단축 버전:**
```
K-pop idol portrait, Jung Aon ATP-X1, 21yo Korean female, oval face, refined features, dark brown almond eyes thick natural lashes, subtle brown liner, straight nose, natural pink lips soft warm smile, porcelain neutral skin, dewy clean makeup. Dark brown black hair #3D2E26, slicked back low sleek bun, center-parted pulled back cleanly, wispy face-framing strands, no bangs. Cream tank top, sage green linen cardigan. Sage green gradient background #D5DCC5. Natural editorial, soft daylight, photorealistic, 1:1 --seed 11000001 --ar 1:1 --v 6.1 --style raw
```

---

## 플랫폼별 사용 가이드

### Midjourney (v6.1+)

```
/imagine prompt: [Master Seed Prompt 단축 버전] --seed [시드번호] --ar 1:1 --v 6.1 --style raw
```

**팁:**
- `--style raw`로 AI 해석 최소화
- `--seed` 동일하게 유지 → 얼굴 일관성
- `--cref [이미지URL]` 사용 가능 (v6.1+) → 캐릭터 시트를 character reference로
- `--cw 100` (character weight 100%) 추천
- 그룹샷: `--seed [Group Shot 시드]` + 5명 전부 프롬프트에 명시

```
/imagine prompt: [프롬프트] --seed 46200001 --cref [ARA-462-sheet URL] --cw 100 --ar 1:1 --v 6.1 --style raw
```

### GPT Image (gpt-image-2)

GPT Image는 시드 파라미터 미지원. **프롬프트 일관성 + reference 이미지**로 대체.

```python
# API 호출 예시
form = FormData()
form.append('model', 'gpt-image-2')
form.append('image[]', user_photo, 'user.png')      # reference 1: 사용자
form.append('image[]', member_sheet, 'member.png')   # reference 2: 캐릭터 시트
form.append('prompt', MASTER_SEED_PROMPT)
form.append('size', '1024x1024')
form.append('quality', 'high')
```

**팁:**
- 캐릭터 시트 Front View를 reference로 전송
- 프롬프트에 HEX 코드 명시 (헤어, 배경)
- "DO NOT redraw faces" 필수 포함
- "Identity preservation, not creative reinterpretation" 필수 포함
- quality: 'high'로 디테일 보존

### Flux (Replicate / ComfyUI)

```json
{
  "prompt": "[Master Seed Prompt 전체]",
  "seed": 46200001,
  "width": 1024,
  "height": 1024,
  "guidance_scale": 7.5,
  "num_inference_steps": 50
}
```

**팁:**
- `seed` 파라미터 직접 지원
- `guidance_scale` 7~8 권장 (프롬프트 충실도)
- IP-Adapter + 캐릭터 시트 조합 추천
- ControlNet Face 사용 시 캐릭터 시트 Front View 입력

### Stable Diffusion (A1111 / ComfyUI)

```
Positive: [Master Seed Prompt]
Negative: [네거티브 프롬프트]
Seed: [시드번호]
CFG Scale: 7
Steps: 30-50
Sampler: DPM++ 2M Karras
```

**팁:**
- LoRA 학습 시 캐릭터 시트 3뷰를 학습 데이터로 사용
- ADetailer로 얼굴 보정 가능
- 시드 고정 + 동일 프롬프트 = 재현성 보장

---

## 의상 시즌별 변형 템플릿

### 기본 원칙
> **얼굴 + 헤어 = 절대 고정. 의상만 변형.**
> 시그니처 컬러는 액세서리 또는 포인트로 반드시 유지.

### 템플릿 구조

```
[SEASON VARIANT - 멤버코드 - 시즌명]

Base: [Master Seed Prompt의 FACE + HAIR 섹션 그대로 복사]

OUTFIT (season override):
[새 의상 설명]

BACKGROUND (season override):
[새 배경 — 같은 컬러 패밀리 안에서 변형]

ACCESSORIES:
[시즌 액세서리]

IDENTITY LOCK:
Face and hair EXACTLY as master reference. Only outfit changed.
```

### 시즌 예시

#### S1: Spring Bloom (봄)

| 멤버 | 의상 변형 | 배경 변형 | 액세서리 |
|------|-----------|-----------|----------|
| ARA-462 | White linen shirt, coral floral embroidery | Cherry blossom petals, warm peach sky | Small coral flower earring |
| LUX-299 | Cream silk camisole, gold chain necklace | Golden hour meadow, ivory tones | Delicate gold ear cuff |
| EUR-0K | Light blue denim jacket, white crop top | Misty lake morning, pale blue | Simple silver bangle |
| KIN-360 | Pastel lavender windbreaker, white shorts | Flower field, lavender-pink sky | Friendship bracelet stack |
| ATP-X1 | Sage green linen dress, straw hat in hand | Green garden, soft natural light | Pressed flower bookmark in pocket |

#### S2: Summer Wave (여름)

| 멤버 | 의상 변형 | 배경 변형 | 액세서리 |
|------|-----------|-----------|----------|
| ARA-462 | Coral bikini top, white coverup | Sunset beach, warm coral sky | Shell anklet |
| LUX-299 | Ivory crochet top, gold body chain | Pool cabana, cream-gold shimmer | Oversized sunglasses on head |
| EUR-0K | Light blue halter top, flowy pants | Ocean horizon, pale blue gradient | Pearl drop earrings |
| KIN-360 | Lavender sports bra, mesh coverup | Festival backdrop, colorful lights | LED friendship bracelet |
| ATP-X1 | Sage green linen overalls, white tee | Forest stream, dappled sunlight | Woven straw bag |

#### S3: Autumn Fade (가을)

| 멤버 | 의상 변형 | 배경 변형 | 액세서리 |
|------|-----------|-----------|----------|
| ARA-462 | Burnt coral knit sweater, leather jacket | Warm amber forest, fallen leaves | Vintage camera strap |
| LUX-299 | Cream cashmere turtleneck, gold brooch | Golden hour library, ivory shelves | Round gold-frame glasses |
| EUR-0K | Dusty blue trench coat, scarf | Rainy city street, cool blue tones | Clear umbrella |
| KIN-360 | Plum purple bomber jacket, white tee | Street cafe, warm lavender lights | Beret hat |
| ATP-X1 | Olive green cardigan, brown corduroy pants | Mountain trail, sage-orange gradient | Thermos flask |

#### S4: Winter Glow (겨울)

| 멤버 | 의상 변형 | 배경 변형 | 액세서리 |
|------|-----------|-----------|----------|
| ARA-462 | Red-coral puffer jacket, white beanie | Snowy city, warm street lights | Knit mittens |
| LUX-299 | Ivory fur coat, gold earrings | Frost glass, cream-silver shimmer | Pearl choker |
| EUR-0K | Powder blue wool coat, white scarf | Frozen lake, pale blue ice | Crystal pendant |
| KIN-360 | Lavender parka, fuzzy hood | Snow festival, purple-pink sky | Snowflake earmuffs |
| ATP-X1 | Forest green quilted vest, cream knit | Pine forest, soft sage snow | Leather journal |

### 시즌 프롬프트 조합 방법

```
[Master Seed Prompt에서 FACE + HAIR 복사]

OUTFIT (S1 Spring override):
[시즌 테이블에서 의상 가져오기]

BACKGROUND (S1 Spring override):
[시즌 테이블에서 배경 가져오기]

ACCESSORIES:
[시즌 테이블에서 액세서리 가져오기]

IDENTITY LOCK:
Face and hair EXACTLY as master reference.
Only outfit, background, and accessories changed.
Preserve member key color as accent element.

--seed [Primary 시드] --ar 1:1
```

---

## 네거티브 프롬프트 리스트

### 글로벌 (전체 적용)

```
cartoon, anime, 3D render, CGI, illustration, painting, sketch, 
deformed, disfigured, extra fingers, extra limbs, missing fingers,
distorted face, asymmetric face, crossed eyes, long neck,
multiple people (솔로 시), duplicate, clone,
traditional Korean costume, hanbok, historical clothing,
oversaturated colors, harsh shadows, overexposed, underexposed,
watermark, text overlay, signature, logo,
blurry, low quality, pixelated, noisy, grainy,
NSFW, nudity, gore, violence
```

### ARA-462 전용

```
silver hair, short hair, orange hair, blue hair, dark hair, black hair,
wavy hair, curly hair, bangs covering forehead, side-parted hair,
hair down completely (must have top knot bun),
cold blue lighting, green background,
timid expression, scared look
```

### LUX-299 전용

```
blonde hair, pure white hair, long hair past shoulders, no bangs,
layered hair, textured messy hair, wavy hair, curly hair,
pink hair, colored hair, ombre hair,
warm peachy skin tone (should be porcelain pale),
natural no-makeup look (should have cat-eye liner),
green background, blue background
```

### EUR-0K 전용

```
solid color hair, single-tone hair, short hair above shoulders,
straight hair (must be wavy), red hair, blonde hair,
bangs, fringe, hair up in bun,
dramatic heavy makeup, bold lip color,
warm orange lighting, pink background,
energetic excited expression (should be calm)
```

### KIN-360 전용

```
long hair past shoulders, slick straight hair, dark hair, black hair,
red hair (must be orange/tangerine), blonde hair, platinum hair,
neat formal hairstyle, pulled back hair,
serious expression, somber mood, dark moody lighting,
formal outfit, suit, dress,
cool blue color grading
```

### ATP-X1 전용

```
long flowing loose hair, bangs, fringe, colored hair,
pink hair, blue hair, blonde hair, red hair,
hair down (must be pulled back in bun),
heavy dramatic makeup, bold lip color, false lashes,
messy bun (must be sleek polished),
artificial appearance, plastic look,
warm orange/red background
```

---

## 부록: 퀵 레퍼런스 카드

```
┌─────────┬──────────┬────────────┬──────────────────────┬───────────┐
│ 멤버    │ 헤어     │ HEX        │ 키 식별자            │ 시드      │
├─────────┼──────────┼────────────┼──────────────────────┼───────────┤
│ ARA-462 │ 코랄핑크 │ #F4B5A8    │ 하프업 번, 긴 직모   │ 46200001  │
│ LUX-299 │ 실버 밥  │ #E8E8E8    │ 일자뱅, 턱선 보브    │ 29900001  │
│ EUR-0K  │ 퍼플→블루│ #3A2F6F→   │ 긴 웨이브, 그라데이션│ 10000001  │
│         │          │ #A8C8E8    │                      │           │
│ KIN-360 │ 오렌지   │ #FFA866    │ 샤기밥, 위스피뱅     │ 36000001  │
│ ATP-X1  │ 다크브라운│ #3D2E26    │ 슬릭백 번, 노뱅      │ 11000001  │
└─────────┴──────────┴────────────┴──────────────────────┴───────────┘
```

---

## 문서 이력

| 버전 | 날짜 | 변경 |
|------|------|------|
| v1.0 | 2026-05-16 | 초기 생성. 5멤버 시드 프롬프트, 4시즌 변형, 네거티브, 플랫폼 가이드 |

---

*© 2026 SOAVIZ AI STUDIO. All rights reserved.*
*VenuX is a permanent IP asset. Consistency is value.*
