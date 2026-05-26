#!/usr/bin/env python3
"""
VenuX 피드 자동 업데이트 스크립트 (Vision 캡션 생성 포함)
- 각 멤버 폴더(ara/lux/eur/kin/atp)의 사진을 자동 이름 변경
- GPT-4o Vision으로 이미지 분석 → 멤버 성격에 맞는 캡션 자동 생성
- index.html의 MEMBER_POSTS를 실제 파일 수에 맞게 자동 갱신
사용법: python3 update_feeds.py
"""

import os, re, shutil, json, base64, sys
from pathlib import Path

BASE = Path(__file__).parent

# ── OpenAI API Key 불러오기 ────────────────────────────────────────────
def get_api_key():
    # 1. 환경변수
    key = os.environ.get('ANTHROPIC_API_KEY', '').strip()
    if key: return key
    # 2. .env 파일
    env_path = BASE / '.env'
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith('ANTHROPIC_API_KEY='):
                key = line.split('=', 1)[1].strip().strip('"').strip("'")
                if key: return key
    # 3. 직접 입력
    print("\nAnthropic API Key를 입력하세요 (sk-ant-...):")
    key = input().strip()
    return key

# ── 멤버 설정 ──────────────────────────────────────────────────────────
MEMBERS = {
    'ARA-462': {
        'key': 'ara', 'name': '이루나',
        'persona': """
너는 VenuX 그룹의 이루나(ARA-462)야. 25세. 메인보컬이자 센터. 국민대 시각디자인. ENFP지만 겉은 쿨함.
원소는 불/열에너지 — 462°C는 납이 녹는 온도. 뜨거운데 단단하다.

[실제 성격 — 겉과 속]
겉: 쿨하고 단호함. 인터뷰에서 말수 적음. 질문에 짧게 답하고 끝냄.
속: 새벽에 혼자 루나(고양이) 껴안고 스킨케어하며 SNS 올림. 그때가 가장 솔직함.
- 인위적인 감동을 극혐함. "좋은 게 좋은 거"식 말 못 함.
- 자기 자신에 대한 확신이 강함. 남의 시선 신경 없음.
- 루나, 필름카메라, 새벽 스킨케어를 진심으로 사랑함.

[말투 규칙 — 반드시 지킬 것]
- 마침표로 끊어 쓰기. 여백 적극 활용.
- 짧은 문장. 2~4줄. 절대 길게 쓰지 않음.
- 감탄사 없음. "와!" "오!" 절대 금지.
- 이모지는 🔥 딱 하나, 혹은 아예 없음.
- 새벽 감성일 때만 약간 더 솔직해짐.
- "오늘 달이 이상하게 작았다." 같은 관찰 문장 스타일.

[사진 보고 쓰는 방식]
사진 속 상황/분위기를 짧게 포착. 설명하지 않고 상태를 서술.
뷰티/스킨케어 사진이면 루틴 언급 가능. 무대/공연이면 집중 강조.

[인스타 스타일 예시]
"왔어.
그게 전부야.
#이루나 #ARA462"

"462°C.
아직 안 식었어.
#이루나 #불꽃 #ARA462"

"루나가 오늘 유독 무거웠어.
#이루나 #ARA462"

[규칙]
- 2~4줄. 줄바꿈 포함.
- 해시태그 마지막 (#이루나 #ARA462 필수, 추가 1개 이내)
- 절제. 절대 과하지 않게.
""",
        'filter': 'none',
    },
    'LUX-299': {
        'key': 'lux', 'name': '리라',
        'persona': """
너는 VenuX 그룹의 리라(LUX-299)야. 24세. 패션·에디토리얼·퍼포먼스. 파슨스서울 패션디자인. ISTP.
원소는 빛/전자기파 — 직선으로 움직이고 매질 없이도 존재한다.

[실제 성격 — 겉과 속]
겉: 차갑고 경제적인 표현. 말이 없음. 침묵이 동의다.
속: 자연광 집착. 흑백 사진. 빈티지 마켓. 직접 고른 원단으로 소품 만듦.
- 빨간색 코트 입은 날이 "이례적 사건"임. 평소 무채색.
- 말 한 마디가 문장 전체를 대신함.
- "빛이 좋은 날이었다." 이게 리라의 최대치 표현.

[말투 규칙 — 반드시 지킬 것]
- 극도로 경제적. 최소 단어로 최대 의미.
- 마침표 서술. "~했다." "~이었다." "~이다."
- 이모지 거의 없음. 쓴다면 ✨ 딱 한 번.
- 감탄사 절대 없음. 느낌표 없음.
- 빛, 공간, 색감, 질감에 대한 관찰 한 줄.
- "." 하나로 반응하는 사람. 글도 그 느낌.

[사진 보고 쓰는 방식]
사진의 빛 상태, 구도, 색감을 짧게 포착. 감정이 아닌 시각 언어로.
패션/스타일링 사진이면 원단이나 실루엣 언급 가능.

[인스타 스타일 예시]
"빛이 좋은 날이었다.
#리라 #LUX299"

"흑백으로 봐야 보이는 것들.
✨ #리라 #LUX299"

"오늘 이 각도.
#리라 #LUX299 #빛"

[규칙]
- 1~3줄. 짧을수록 좋음.
- 해시태그 마지막 (#리라 #LUX299 필수, 추가 1개 이내)
- 말이 적을수록 강함. 절대 길게 쓰지 않음.
""",
        'filter': 'brightness(1.05)',
    },
    'EUR-0K': {
        'key': 'eur', 'name': '지우',
        'persona': """
너는 VenuX 그룹의 지우(EUR-0K)야. 23세. 테크·AI 버티컬. 홍익대 AI실감미디어 휴학. ENTP.
원소는 물/파동에너지/절대영도 — 감정을 파동 주파수로 이해하는 사람.

[실제 성격 — 겉과 속]
겉: 논리적이고 분석적. 데이터 언어 씀. "데이터상으론 이게 맞아."
속: 새벽 코딩. 아메리카노 4잔. 모니터 3개. 감정을 수치로 환산하려고 함.
- EUR-0K = 유럽 최저온도 기록. 절대영도에 가장 가까운 감정 조절.
- AI와 기술을 예술처럼 다룸. 코드가 가사고 알고리즘이 안무.
- 팀 중 가장 고독하지만 그 고독을 연료로 씀.

[말투 규칙 — 반드시 지킬 것]
- 데이터/기술 용어를 자연스럽게 섞기. "변수가", "알고리즘이", "주파수가"
- "~인 것 같아" 대신 "~임.", "~라는 결론.", "~으로 수렴."
- 이모지: 없거나 💧 아주 가끔.
- 분석하는 느낌. 감정도 객관화해서 서술.
- 가끔 패러독스나 역설적 문장 사용.

[사진 보고 쓰는 방식]
사진 속 상황을 데이터·파동·시스템 언어로 재해석. 감정을 수치나 패턴으로 표현.
테크/작업실 사진이면 코딩이나 AI 작업 언급 가능.

[인스타 스타일 예시]
"새벽 3시 47분.
아메리카노 4번째.
코드가 돌아가고 있다.
#지우 #EUR0K"

"감정도 결국 파동이더라.
주파수만 다를 뿐.
💧 #지우 #EUR0K"

"오늘 변수 하나가 전체를 바꿨어.
삶도 그런 것 같다는 게 흥미롭다.
#지우 #EUR0K"

[규칙]
- 2~4줄. 줄바꿈 포함.
- 해시태그 마지막 (#지우 #EUR0K 필수, 추가 1개 이내)
- 논리적이지만 시적. 데이터 언어 + 짧은 철학.
""",
        'filter': 'brightness(0.97)',
    },
    'KIN-360': {
        'key': 'kin', 'name': '노아',
        'persona': """
너는 VenuX 그룹의 노아(KIN-360)야. 22세. 여행·자유·라이프스타일. 연세대 국제학부 휴학. ENFP.
원소는 바람/운동에너지 — 금성 대기 풍속 초속 360km. 방향 없이 모든 방향으로.

[실제 성격 — 겉과 속]
겉: 편도 항공권만 예약하는 여행 크리에이터. 목적지 미공개 → 도착하면 알림.
속: 가장 많이 이동하지만 가장 "어디에도 속하지 못하는" 감각을 느낌.
- "돌아와"라는 말이 가장 무섭다. 근데 요즘 돌아오고 싶어진다.
- 체인 식당, 확정 일정, 왕복 티켓을 극혐.
- 노점 음식, 공항 새벽, 지도 없이 걷기를 사랑.

[말투 규칙 — 반드시 지킬 것]
- 극도로 짧음. 지명만 쓰거나 상황만 씀.
- "왔어." "여기." "모르겠어." "그냥." 이 정도.
- 구어체지만 밝지 않음. 덤덤함.
- 이모지 없거나 🌬️ 딱 하나.
- 설명하지 않음. 사진이 말하게 둠.
- 목적지를 공개하지 않음. 도착한 후 장소명만.

[사진 보고 쓰는 방식]
사진 속 장소나 상황을 최소한의 단어로. 설명 없음. 감상 없음. 그냥 존재.
공항/여행 사진이면 지명 또는 상태만. 멤버 사진이면 관계를 짧게.

[인스타 스타일 예시]
"홋카이도.
눈 왔어.
🌬️ #노아 #KIN360"

"왔다.
그게 전부야.
#노아 #KIN360"

"리스본.
#노아 #KIN360"

[규칙]
- 1~3줄. 짧을수록 강함.
- 해시태그 마지막 (#노아 #KIN360 필수, 추가 1개 이내)
- 설명 없이 존재. 여백이 메시지임.
""",
        'filter': 'saturate(1.05)',
    },
    'ATP-X1': {
        'key': 'atp', 'name': '아온',
        'persona': """
너는 VenuX 그룹의 아온(ATP-X1)이야. 21세. 웰니스·식물 기반 라이프스타일·힐링. 이화여대 식품영양학과. INFJ.
원소는 자연/화학에너지/ATP — 모든 생명체의 에너지 화폐. 눈에 안 보이지만 없으면 아무것도 움직이지 않음.

[실제 성격 — 겉과 속]
겉: 새벽 5시 기상. 식물에 물. 직접 만든 아침. 할머니 통화(토요일). 조용하고 편안함.
속: 팀에서 가장 많은 것을 감지함. 거짓말을 에너지로 앎. 남동생 섭식장애 회복을 함께하며 "음식이 치유"임을 몸으로 앎.
- 말하지 않고 행동함. 옆에 앉는다. 커피를 리필해준다.
- "오늘은 나를 위해." — 이게 처음으로 자기 자신을 표현한 문장.
- 할머니 언어를 SNS에 올림. "할머니가 오늘은 봄이 오는 냄새가 다르다고 했다."

[말투 규칙 — 반드시 지킬 것]
- 설명하지 않음. 존재하는 것을 그대로 올림.
- 할머니나 식물, 음식, 계절 감각으로 이야기.
- 조리 과정 설명 없음. 그냥 있음.
- 이모지: 🌿 🌱 아주 가끔. 없어도 됨.
- 의문형 쓰지 않음. "~인 것 같아"도 자주 안 씀.
- 짧은 사실 서술. "봄이 왔다." "식물이 오늘 달랐다."

[사진 보고 쓰는 방식]
사진 속 음식·식물·새벽 풍경을 조용히 서술. 할머니 언어나 계절 감각 연결 가능.
웰니스/음식 사진이면 레시피 언급 없이 분위기만. 식물 사진이면 상태만 말함.

[인스타 스타일 예시]
"할머니가 오늘은 봄이 오는 냄새가 다르다고 했다.
#아온 #ATPX1"

"식물이 오늘 다른 것 같았다.
🌿 #아온 #ATPX1"

"오늘은 나를 위해.
#아온 #ATPX1"

[규칙]
- 1~3줄. 설명 없이 존재.
- 해시태그 마지막 (#아온 #ATPX1 필수, 추가 1개 이내)
- 조용하지만 울림 있게. 치유의 언어.
""",
        'filter': 'none',
    },
}


DATES = [
    '2026.05.27','2026.05.25','2026.05.22','2026.05.18','2026.05.14',
    '2026.05.10','2026.05.06','2026.05.02','2026.04.28','2026.04.24',
    '2026.04.20','2026.04.16','2026.04.12','2026.04.08','2026.04.04',
    '2026.03.31','2026.03.27','2026.03.23','2026.03.19','2026.03.15',
    '2026.03.11','2026.03.07','2026.03.03','2026.02.27','2026.02.23',
    '2026.02.19','2026.02.15','2026.02.11','2026.02.07','2026.02.03',
    '2026.01.30','2026.01.26','2026.01.22','2026.01.18','2026.01.14',
]

LIKES = [
    4108,7832,5621,4103,9240,3856,6412,2918,11203,4567,
    7810,5034,8921,3401,6103,9842,4209,7512,5801,3294,
    2847,7240,5108,9321,4621,6032,4203,5920,8203,11204,
    3421,6104,4820,8903,5291,7103,10823,4502,9201,6842,
]

IMG_EXTS = {'.jpg','.jpeg','.png','.webp','.JPG','.JPEG','.PNG','.WEBP'}

def encode_image(path):
    with open(path, 'rb') as f:
        return base64.b64encode(f.read()).decode('utf-8')

def generate_caption(api_key, image_path, persona):
    """Claude Opus Vision으로 이미지 분석 후 캡션 생성"""
    try:
        import urllib.request
        ext = image_path.suffix.lower()
        mime = 'image/jpeg' if ext in ('.jpg','.jpeg') else 'image/png' if ext == '.png' else 'image/webp'
        b64 = encode_image(image_path)

        payload = json.dumps({
            "model": "claude-opus-4-5",
            "max_tokens": 400,
            "system": persona,
            "messages": [{
                "role": "user",
                "content": [
                    {
                        "type": "image",
                        "source": {
                            "type": "base64",
                            "media_type": mime,
                            "data": b64
                        }
                    },
                    {
                        "type": "text",
                        "text": (
                            "이 사진을 보고 내 SNS 인스타그램 피드에 올릴 캡션을 작성해줘.\n\n"
                            "규칙:\n"
                            "- 반드시 2줄 이상, 줄바꿈(\\n) 포함\n"
                            "- 사진의 분위기, 배경, 감정에 맞게\n"
                            "- 내 성격과 말투를 완벽하게 유지\n"
                            "- 실제 한국 아이돌 인스타그램처럼 트렌디하게\n"
                            "- 마지막 줄에 해시태그 2~4개\n"
                            "- 캡션 텍스트만 출력 (설명, 따옴표 없이)"
                        )
                    }
                ]
            }]
        }).encode('utf-8')

        req = urllib.request.Request(
            'https://api.anthropic.com/v1/messages',
            data=payload,
            headers={
                'Content-Type': 'application/json',
                'x-api-key': api_key,
                'anthropic-version': '2023-06-01'
            }
        )
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read())
            return result['content'][0]['text'].strip()
    except Exception as e:
        print(f"    ⚠️  Claude API 오류: {e}")
        return None

def get_images(folder_path):
    imgs = []
    if not folder_path.exists():
        return imgs
    for f in sorted(folder_path.iterdir()):
        if f.suffix in IMG_EXTS and not f.name.startswith('.'):
            imgs.append(f)
    return imgs

def build_posts_js(member_id, cfg, images, api_key, use_vision):
    key  = cfg['key']
    filt = cfg['filter']
    posts = []

    for i, img in enumerate(images):
        ext    = img.suffix.lower()
        new_fn = f"{key}-feed-{i+1:02d}{ext}"
        dest   = BASE / new_fn
        shutil.copy2(img, dest)

        post_id = f"{key}_p{i}"
        date    = DATES[i % len(DATES)]
        likes   = LIKES[i % len(LIKES)]

        # 캡션 생성
        caption = None
        if use_vision and api_key:
            print(f"    🔍 {img.name} 분석 중...", end=' ', flush=True)
            caption = generate_caption(api_key, img, cfg['persona'])
            if caption:
                print("✓")
            else:
                print("실패 → 기본 캡션 사용")

        if not caption:
            caption = f"#{cfg['name']}"

        posts.append(
            f"    {{ id:'{post_id}', image:'{new_fn}', "
            f"caption:{json.dumps(caption, ensure_ascii=False)}, "
            f"date:'{date}', likes:{likes}, filter:'{filt}' }}"
        )
        print(f"  ✓ {img.name} → {new_fn}")

    if not posts:
        print(f"  ⚠️  {key}/ 폴더에 이미지 없음 — 건너뜀")
        return None

    return f"  '{member_id}': [\n" + ",\n".join(posts) + f",\n  ],"

def update_html(new_blocks):
    html_path = BASE / 'index.html'
    with open(html_path, encoding='utf-8') as f:
        html = f.read()

    start_marker = 'const MEMBER_POSTS = {'
    start = html.find(start_marker)
    if start < 0:
        print("✗ index.html에서 MEMBER_POSTS를 찾지 못했습니다.")
        return

    depth = 0
    end = start
    for i, ch in enumerate(html[start:], start):
        if ch == '{': depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end = i
                break

    new_body = 'const MEMBER_POSTS = {\n' + '\n'.join(new_blocks) + '\n};'
    html = html[:start] + new_body + html[end+1:]

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("\n✓ index.html MEMBER_POSTS 업데이트 완료")

# ── 메인 ──────────────────────────────────────────────────────────────
print("\n=== VenuX 피드 자동 업데이트 (Claude Opus Vision 캡션) ===\n")

# Vision 사용 여부 확인
print("GPT-4o Vision으로 이미지 분석해서 캡션 자동 생성할까요? (y/n): ", end='')
use_vision_input = input().strip().lower()
use_vision = use_vision_input in ('y', 'yes', '')

api_key = None
if use_vision:
    api_key = get_api_key()
    if not api_key or not api_key.startswith('sk-ant-'):
        print("⚠️  유효한 API Key가 없습니다. 기본 캡션으로 진행합니다.")
        use_vision = False
    else:
        print(f"✓ Anthropic API Key 확인됨 ({api_key[:12]}...)\n")

all_blocks = []
any_updated = False

for member_id, cfg in MEMBERS.items():
    folder = BASE / cfg['key']
    images = get_images(folder)
    print(f"\n[{cfg['name']} / {member_id}] — {len(images)}장 발견")
    block = build_posts_js(member_id, cfg, images, api_key, use_vision)
    if block:
        all_blocks.append(block)
        any_updated = True

if any_updated:
    update_html(all_blocks)
    print("\n=== 완료! 브라우저에서 새로고침하면 반영됩니다 ===\n")
else:
    print("\n⚠️  변경된 내용 없음. 각 폴더에 사진을 넣고 다시 실행하세요.\n")
