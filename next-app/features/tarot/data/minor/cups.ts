import { minorCard } from '@/features/tarot/data/minor/cardFactory'
import type { TarotCard } from '@/features/tarot/types/tarot.types'

export const cupsMinor: TarotCard[] = [
  minorCard({
    id: 'cups_ace',
    nameKo: '컵 에이스',
    nameEn: 'Ace of Cups',
    number: 1,
    suit: 'cups',
    keywords: {
      upright: ['새 감정', '공감', '치유', '열림'],
      reversed: ['감정 봉쇄', '공허', '거절', '과잉'],
    },
    meanings: {
      daily: {
        upright: '마음이 부드럽게 열리는 날이야. 감사·위로·창작의 감정선을 따라가면 좋은 흐름이 생겨.',
        reversed: '감정이 막히거나 과하게 쏟을 수 있어. 물 한 잔·짧은 산책으로 몸부터 안정해봐.',
      },
      love: {
        upright: '새로운 설렘·고백·화해의 물결이 올 수 있어. 마음을 숨기지 말고 조심스럽게 표현해봐.',
        reversed: '상처가 아직 남아 있을 수 있어. 억지로 열기보다 스스로를 먼저 돌봐.',
      },
      career: {
        upright: '공감·스토리·브랜드 톤이 중요한 날이야. 청중의 감정을 먼저 그려봐.',
        reversed: '번아웃·감정 소진일 수 있어. 창작 외 시간을 일정에 넣어.',
      },
      advice: {
        upright: '컵이 넘치기 전에 받아들일 준비를 해.',
        reversed: '마음이 비었다면 채우는 것부터. 작은 기쁨으로.',
      },
    },
    fortune: { upright: '감정의 샘이 채워질 수 있어.', reversed: '막힌 감정도 천천히 흐르게 할 수 있어.' },
    action: { upright: '고마운 사람에게 짧은 메시지를 보내.', reversed: '감정 일기 5줄을 적고 쉬어.' },
    contentSeed: { upright: '넘치는 성배, 첫 눈물·웃음', reversed: '말라간 컵, 다시 채우는 물' },
  }),
  minorCard({
    id: 'cups_two',
    nameKo: '컵 2',
    nameEn: 'Two of Cups',
    number: 2,
    suit: 'cups',
    keywords: {
      upright: ['연결', '파트너십', '균형', '상호'],
      reversed: ['불균형', '오해', '거리', '불안정'],
    },
    meanings: {
      daily: {
        upright: '좋은 짝·협업·친구와의 호흡이 맞는 날이야. 서로의 역할을 인정하면 시너지가 커져.',
        reversed: '일방적인 관계·소통 불균형이 드러날 수 있어. 기대치를 맞춰봐.',
      },
      love: {
        upright: '서로를 바라보는 진심·재회·약속의 기운이 있어. 눈 맞춤과 경청이 핵심이야.',
        reversed: '거리감·질투·오해를 정리할 타이밍이야. 감정보다 사실을 나눠.',
      },
      career: {
        upright: '공동 작업·2인 프로젝트·계약에 유리해. 조건을 문서로 남겨.',
        reversed: '역할이 겹치면 피곤해져. 분업을 다시 정해.',
      },
      advice: {
        upright: '관계는 거울이야. 네가 주는 만큼 돌아와.',
        reversed: '맞지 않는 짝을 억지로 끌고 가지 마.',
      },
    },
    fortune: { upright: '마음이 맞는 연결이 강해질 수 있어.', reversed: '균형을 맞추면 관계가 숨 쉰다.' },
    action: { upright: '파트너·연인과 15분 대화 시간을 잡아.', reversed: '기대와 현실 차이를 한 줄로 적어 공유해.' },
    contentSeed: { upright: '두 컵이 맞닿음, 계약의 손', reversed: '어긋난 컵, 다시 맞추는 대화' },
  }),
  minorCard({
    id: 'cups_three',
    nameKo: '컵 3',
    nameEn: 'Three of Cups',
    number: 3,
    suit: 'cups',
    keywords: {
      upright: ['축하', '우정', '커뮤니티', '공유'],
      reversed: ['과음', '소외', '가십', '표면적'],
    },
    meanings: {
      daily: {
        upright: '친구·팀·커뮤니티와 즐거운 시간이 될 수 있어. 작은 축하를 만들어봐.',
        reversed: '모임 뒤 공허·소외감이 올 수 있어. 진짜 원하는 연결만 남겨.',
      },
      love: {
        upright: '친구 같은 연인·소개·그룹 데이트에 좋아. 가벼운 웃음이 관계를 살려.',
        reversed: '삼각관계·가십에 휘말리지 않게 경계를 지켜.',
      },
      career: {
        upright: '팀 빌딩·런칭 파티·콜라보에 유리해. 성과를 함께 나눠.',
        reversed: '사교만 busy하면 지쳐. 핵심 관계 2명에게 집중해.',
      },
      advice: {
        upright: '함께 웃을 사람이 곁에 있어.',
        reversed: '진짜 친구 수는 적어도 돼. 질을 봐.',
      },
    },
    fortune: { upright: '기쁜 소식이 여럿과 함께 올 수 있어.', reversed: '혼자여도 괜찮아. 질 좋은 연결을 골라.' },
    action: { upright: '친구·팀에게 감사 메시지나 커피 한 잔을 제안해.', reversed: '불필요한 모임 하나를 취소해.' },
    contentSeed: { upright: '세 잔의 축배, 커뮤니티의 웃음', reversed: '빈자리, 진짜 친구 찾기' },
  }),
  minorCard({
    id: 'cups_four',
    nameKo: '컵 4',
    nameEn: 'Four of Cups',
    number: 4,
    suit: 'cups',
    keywords: {
      upright: ['무관심', '재평가', '멈춤', '내면'],
      reversed: ['새 기회', '각성', '선택', '감사'],
    },
    meanings: {
      daily: {
        upright: '지루함·권태가 올 수 있어. 멈춰 서서 진짜 원하는 게 뭔지 다시 물어봐.',
        reversed: '놓치고 있던 제안·기회가 보일 수 있어. 고개를 들어봐.',
      },
      love: {
        upright: '관계가 익숙해져 감정이 식어 보일 수 있어. 작은 변화 하나를 시도해봐.',
        reversed: '새로운 관심·화해의 손길이 올 수 있어. 마음을 열어둬.',
      },
      career: {
        upright: '현재 일에 회의감이 있을 수 있어. 이직보다 내부 조정·새 프로젝트를 검토해.',
        reversed: '지원·제안·협업이 들어올 수 있어. 빠르게 검토해봐.',
      },
      advice: {
        upright: '지금 컵 밖에도 컵이 있어. 시야를 넓혀.',
        reversed: '감사하면 작은 기회도 커져 보여.',
      },
    },
    fortune: { upright: '잠시 멈춤은 재정비일 수 있어.', reversed: '새로운 컵이 다가올 수 있어.' },
    action: { upright: '지루한 루틴 1개를 바꿔봐.', reversed: '놓친 메시지·메일을 확인해.' },
    contentSeed: { upright: '나무 아래 멍, 네 번째 컵', reversed: '고개를 든 순간, 새 제안' },
  }),
  minorCard({
    id: 'cups_five',
    nameKo: '컵 5',
    nameEn: 'Five of Cups',
    number: 5,
    suit: 'cups',
    keywords: {
      upright: ['상실', '후회', '슬픔', '집중 왜곡'],
      reversed: ['회복', '용서', '남은 것', '전환'],
    },
    meanings: {
      daily: {
        upright: '아쉬움·실망이 클 수 있어. 쏟은 컵만 보지 말고 남은 두 컵도 세어봐.',
        reversed: '천천히 일어서는 날이야. 작은 희망을 따라가면 돼.',
      },
      love: {
        upright: '이별·오해·거절의 아픔이 올 수 있어. 감정을 인정하고 혼자만의 시간을 가져.',
        reversed: '화해·재연결·새 시작의 가능성이 있어. 부드럽게 연락해볼 수 있어.',
      },
      career: {
        upright: '실패·거절·취소에 실망할 수 있어. 배운 점을 기록하면 다음이 가벼워져.',
        reversed: '다른 기회·포트폴리오가 살아 있어. 남은 자원에 집중해.',
      },
      advice: {
        upright: '슬퍼도 괜찮아. 다만 영원히 거기 서 있진 마.',
        reversed: '돌아보면 아직 있는 것이 많아.',
      },
    },
    fortune: { upright: '잃은 것보다 남은 것이 더 클 수 있어.', reversed: '회복의 물결이 시작될 수 있어.' },
    action: { upright: '아쉬운 일 1개와 감사한 일 2개를 적어.', reversed: '다시 시도할 작은 한 걸음을 정해.' },
    contentSeed: { upright: '쏟은 컵, 검은 망토', reversed: '남은 컵, 뒤돌아보는 빛' },
  }),
  minorCard({
    id: 'cups_six',
    nameKo: '컵 6',
    nameEn: 'Six of Cups',
    number: 6,
    suit: 'cups',
    keywords: {
      upright: ['추억', '순수', '재회', '선물'],
      reversed: ['과거 집착', '미성숙', '현실 회피', '그리움'],
    },
    meanings: {
      daily: {
        upright: '옛 친구·어린 시절·익숙한 취미가 위로가 될 수 있어. 따뜻한 기억을 꺼내봐.',
        reversed: '과거에만 머물면 지금이 흐려져. 추억은 참고 자료로만 써.',
      },
      love: {
        upright: '옛 연인·첫사랑·친구에서 연인으로의 흐름이 있을 수 있어. 부드러운 재회가 가능해.',
        reversed: '비교·향수에 현재 관계가 흔들릴 수 있어. 지금 사람과의 대화에 집중해.',
      },
      career: {
        upright: '멘토·옛 동료·스승에게 연락하기 좋아. 뿌리에서 영감을 얻어.',
        reversed: '과거 방식만 고집하면 막혀. 새 툴 하나를 섞어봐.',
      },
      advice: {
        upright: '어린 네가 주는 선물을 받아.',
        reversed: '추억은 짐이 아니야. 담고 가되 짊어지지 마.',
      },
    },
    fortune: { upright: '과거에서 온 따뜻한 소식이 있을 수 있어.', reversed: '지금을 살아도 추억은 사라지지 않아.' },
    action: { upright: '오래된 친구에게 안부를 보내.', reversed: '과거 프로젝트 집착 1개를 정리해.' },
    contentSeed: { upright: '꽃 컵, 어린 시절 골목', reversed: '앨범을 덮고 오늘로' },
  }),
  minorCard({
    id: 'cups_seven',
    nameKo: '컵 7',
    nameEn: 'Seven of Cups',
    number: 7,
    suit: 'cups',
    keywords: {
      upright: ['환상', '선택지', '꿈', '혼란'],
      reversed: ['명확화', '현실', '결정', '집중'],
    },
    meanings: {
      daily: {
        upright: '옵션이 많아 머릿속이 안개 같을 수 있어. 모두 좋아 보이면 하나만 실험해봐.',
        reversed: '안개가 걷히고 우선순위가 보여. 오늘은 결정하기 좋은 날이야.',
      },
      love: {
        upright: '이상형·판타지·여러 감정선이 섞일 수 있어. 현실의 상대를 있는 그대로 봐.',
        reversed: '관계에서 진짜 원하는 것이 선명해질 수 있어. 솔직히 말해봐.',
      },
      career: {
        upright: '아이디어 폭주·멀티 프로젝트 유혹이 있어. 1개만 프로토타입으로 만들어봐.',
        reversed: '로드맵을 단순화하면 실행이 붙어.',
      },
      advice: {
        upright: '모든 컵이 진짜는 아니야. 손이 닿는 것을 골라.',
        reversed: '환상을 계획으로 바꿀 때야.',
      },
    },
    fortune: { upright: '꿈이 많은 날이야. 하나를 현실로.', reversed: '선택의 안개가 걷힐 수 있어.' },
    action: { upright: '선택지 5개를 적고 1개만 오늘 테스트해.', reversed: '최종 목표 한 줄을 벽에 붙여.' },
    contentSeed: { upright: '구름 위 컵들, 환상의 메뉴', reversed: '하나 고른 컵, 현실의 손' },
  }),
  minorCard({
    id: 'cups_eight',
    nameKo: '컵 8',
    nameEn: 'Eight of Cups',
    number: 8,
    suit: 'cups',
    keywords: {
      upright: ['떠남', '탐색', '깊은 욕구', '정리'],
      reversed: ['회피', '두려움', '미련', '돌아옴'],
    },
    meanings: {
      daily: {
        upright: '채워지지 않는 것을 두고 걸어 나가기 좋은 날이야. 떠남은 실패가 아니야.',
        reversed: '떠나야 하는데 망설이거나, 돌아갈 때가 됐을 수 있어. 진짜 이유를 적어봐.',
      },
      love: {
        upright: '관계·상황을 재평가하고 거리를 둘 수 있어. 자기 존중이 우선이야.',
        reversed: '미련·두려움으로 멈춰 있을 수 있어. 대화 한 번이 답일 수도 있어.',
      },
      career: {
        upright: '이직·휴식·프로젝트 종료를 고려하기 좋아. 다음 단계를 찾는 여정이야.',
        reversed: '도망과 전략적 이탈을 구분해. 준비 없는 퇴장은 피해.',
      },
      advice: {
        upright: '더 깊은 바다를 찾는 사람의 발걸음이야.',
        reversed: '돌아갈 곳이 있다면 솔직하게 가도 돼.',
      },
    },
    fortune: { upright: '내면이 더 큰 것을 부르고 있어.', reversed: '멈춤과 출발 중 어디인지 확인해.' },
    action: { upright: '그만둘 것·떠날 것 1개를 정하고 첫 행동을 해.', reversed: '떠나지 못한 이유 3가지를 적어.' },
    contentSeed: { upright: '달빛 아래 떠남, 여덟 컵', reversed: '돌아선 발, 문 앞에서' },
  }),
  minorCard({
    id: 'cups_nine',
    nameKo: '컵 9',
    nameEn: 'Nine of Cups',
    number: 9,
    suit: 'cups',
    keywords: {
      upright: ['만족', '소원', '풍요', '기쁨'],
      reversed: ['과욕', '공허', '표면적 행복', '미루는 기쁨'],
    },
    meanings: {
      daily: {
        upright: '작은 소원이 이루어지거나 만족감이 큰 날이야. 기쁨을 온전히 누려봐.',
        reversed: '원하는 건 많은데 공허할 수 있어. 진짜 기쁨의 조건을 다시 정의해.',
      },
      love: {
        upright: '관계에서 편안함·애정 표현이 풍부해질 수 있어. 고마움을 말로 전해.',
        reversed: '겉만 행복할 수 있어. 솔직한 대화가 필요해.',
      },
      career: {
        upright: '성과·보상·클라이언트 만족에 유리해. 성취를 기록하고 다음 목표를 살짝 올려.',
        reversed: '욕심이 번아웃을 부를 수 있어. 지금 있는 것에 감사해봐.',
      },
      advice: {
        upright: '소원 카드는 웃는 얼굴 뒤에 있어. 네가 원한 걸 인정해.',
        reversed: '행복은 밖이 아니라 기준에서 시작돼.',
      },
    },
    fortune: { upright: '만족스러운 하루가 될 수 있어.', reversed: '진짜 원하는 만족을 다시 골라봐.' },
    action: { upright: '오늘 이루고 싶은 작은 소원 1개를 실행해.', reversed: '과한 욕심 1개를 목록에서 지워.' },
    contentSeed: { upright: '만족한 미소, 컵의 행진', reversed: '빈 웃음, 다시 찾는 기쁨' },
  }),
  minorCard({
    id: 'cups_ten',
    nameKo: '컵 10',
    nameEn: 'Ten of Cups',
    number: 10,
    suit: 'cups',
    keywords: {
      upright: ['조화', '가족', '행복', '완성'],
      reversed: ['불화', '기대 차이', '표면적', '가정 갈등'],
    },
    meanings: {
      daily: {
        upright: '관계·가정·팀에서 조화가 깊어질 수 있어. 함께하는 순간을 사진처럼 남겨봐.',
        reversed: '완벽한 행복 그림에 압박을 받을 수 있어. 있는 그대로의 우리를 인정해.',
      },
      love: {
        upright: '장기 관계·동거·가족 이야기에 좋은 날이야. 공통의 꿈을 나눠봐.',
        reversed: '작은 불화가 쌓일 수 있어. 기대치를 현실적으로 맞춰.',
      },
      career: {
        upright: '팀 문화·워라밸·지속 가능한 협업에 유리해. 감사의 문화를 만들어.',
        reversed: '일과 삶 경계가 무너지면 지쳐. 규칙 하나를 정해.',
      },
      advice: {
        upright: '무지개는 함께 볼 때 더 선명해.',
        reversed: '완벽한 가정 그림보다 진짜 대화가 먼저야.',
      },
    },
    fortune: { upright: '마음의 집이 따뜻해질 수 있어.', reversed: '조화는 대화로 다시 만들 수 있어.' },
    action: { upright: '가족·팀과 함께할 작은 의식을 만들어.', reversed: '불편한 기대 1개를 말로 나눠.' },
    contentSeed: { upright: '무지개 아래 가족, 열 컵', reversed: '구름 뒤 대화, 다시 맞춘 집' },
  }),
  minorCard({
    id: 'cups_page',
    nameKo: '컵 시종',
    nameEn: 'Page of Cups',
    number: 11,
    suit: 'cups',
    keywords: {
      upright: ['직관', '메시지', '순수', '창의'],
      reversed: ['감정 미숙', '환상', '소심함', '기분파'],
    },
    meanings: {
      daily: {
        upright: '뜻밖의 아이디어·꿈·메시지가 영감이 될 수 있어. 장난처럼 보여도 기록해봐.',
        reversed: '기분에 따라 흔들릴 수 있어. 감정과 사실을 구분해.',
      },
      love: {
        upright: '수줍은 고백·플러팅·귀여운 접근이 통할 수 있어. 진심을 가볍게 전해.',
        reversed: '말만 sweet하고 행동이 없을 수 있어. 일관성을 확인해.',
      },
      career: {
        upright: '스토리·시·음악·감성 콘텐츠에 유리해. 실험적 톤을 시도해봐.',
        reversed: '현실 검증 없는 아이디어는 미뤄. 작은 완성물을 만들어.',
      },
      advice: {
        upright: '컵 속 물고기처럼 상상을 믿어봐.',
        reversed: '감정의 파도에 휩쓸리지 말고 닻을 내려.',
      },
    },
    fortune: { upright: '감성의 쪽지가 도착할 수 있어.', reversed: '환상과 현실을 한 줄로 구분해.' },
    action: { upright: '꿈·영감을 3줄로 적고 콘텐츠 힌트로 써.', reversed: '감정 기복일 땐 물·산책으로 안정해.' },
    contentSeed: { upright: '컵 속 물고기, 순수한 제안', reversed: '흔들리는 컵, 다시 잡은 직관' },
  }),
  minorCard({
    id: 'cups_knight',
    nameKo: '컵 기사',
    nameEn: 'Knight of Cups',
    number: 12,
    suit: 'cups',
    keywords: {
      upright: ['로맨스', '매력', '제안', '이상'],
      reversed: ['비현실', '변덕', '조작', '실망'],
    },
    meanings: {
      daily: {
        upright: '부드러운 제안·초대·창작 무드가 따라. 분위기를 살리되 약속은 지킬 수 있게.',
        reversed: '말이 예쁘기만 할 수 있어. 행동과 일치하는지 확인해.',
      },
      love: {
        upright: '로맨틱한 접근·데이트·고백에 유리해. 진심을 행동으로도 보여줘.',
        reversed: '비현실적 기대·변덕에 상처받지 않게 경계를 세워.',
      },
      career: {
        upright: '브랜딩·광고·감성 피치에 좋아. 스토리텔링으로 설득해봐.',
        reversed: '공약만 크고 실행이 없을 수 있어. 계약·마감을 명확히.',
      },
      advice: {
        upright: '기사는 꽃을 들고 와. 너도 그렇게 다가가도 돼.',
        reversed: '예쁜 말보다 믿을 행동을 봐.',
      },
    },
    fortune: { upright: '로맨스·제안의 기운이 흐를 수 있어.', reversed: '환상 속 기사를 구분해.' },
    action: { upright: '마음을 담은 제안·메시지를 보내.', reversed: '약속했던 실행 1개를 오늘 지켜.' },
    contentSeed: { upright: '흰 말의 기사, 꽃 컵', reversed: '빈 약속, 현실의 길' },
  }),
  minorCard({
    id: 'cups_queen',
    nameKo: '컵 여왕',
    nameEn: 'Queen of Cups',
    number: 13,
    suit: 'cups',
    keywords: {
      upright: ['공감', '직관', '돌봄', '감성 지혜'],
      reversed: ['감정 과다', '의존', '경계 붕괴', '소진'],
    },
    meanings: {
      daily: {
        upright: '타인을 돌보기도 하지만 네 감정도 소중해. 직관을 믿되 경계를 지켜.',
        reversed: '남의 감정을 다 짊어지면 지쳐. 도움 요청과 거절을 연습해.',
      },
      love: {
        upright: '깊은 공감·위로·정서적 안전이 커질 수 있어. 상대의 말 뒤 감정을 읽어봐.',
        reversed: '과한 희생·집착은 관계를 무겁게 해. 네 컵도 채워.',
      },
      career: {
        upright: '코칭·상담·커뮤니티·감성 리딩에 강해. 청중의 마음을 먼저 읽어.',
        reversed: '번아웃 신호야. 감정 노동 후 회복 시간을 넣어.',
      },
      advice: {
        upright: '부드러움은 약함이 아니야. 깊이가 무기야.',
        reversed: '여왕도 자기 컵이 필요해.',
      },
    },
    fortune: { upright: '공감이 길을 열 수 있어.', reversed: '돌봄은 자신에게도 줘.' },
    action: { upright: '누군가에게 진심 어린 위로 한 마디를 건네.', reversed: '오늘은 거절·휴식 권한을 스스로에게 줘.' },
    contentSeed: { upright: '바다 여왕, 직관의 눈', reversed: '넘친 컵, 경계의 조개' },
  }),
  minorCard({
    id: 'cups_king',
    nameKo: '컵 왕',
    nameEn: 'King of Cups',
    number: 14,
    suit: 'cups',
    keywords: {
      upright: ['감정 균형', '지혜', '외교', '침착'],
      reversed: ['감정 억압', '조종', '불안정', '회피'],
    },
    meanings: {
      daily: {
        upright: '폭풍 속에서도 침착할 수 있어. 감정을 인정하고 선택은 이성으로.',
        reversed: '억누른 감정이 폭발할 수 있어. 안전한 곳에서 털어놔.',
      },
      love: {
        upright: '성숙한 애정·신뢰·정서적 리더십이 돋보여. 상대의 감정을 존중하며 이끌어.',
        reversed: '감정 조종·침묵·냉각에 주의해. 솔직한 대화가 필요해.',
      },
      career: {
        upright: '위기 관리·협상·팀 갈등 조율에 유리해. 차분한 톤이 신뢰를 만든다.',
        reversed: '일과 감정이 뒤섞이면 판단이 흐려져. 경계를 회복해.',
      },
      advice: {
        upright: '바다는 깊어도 표면은 고요할 수 있어.',
        reversed: '억누른 파도는 밖으로 나와야 해.',
      },
    },
    fortune: { upright: '감정의 지혜로 상황을 다스릴 수 있어.', reversed: '진짜 감정을 인정하면 균형이 돌아와.' },
    action: { upright: '갈등 상황에서 한 박자 쉬고 차분히 답해.', reversed: '억누른 감정을 일기나 대화로 꺼내.' },
    contentSeed: { upright: '고요한 바다 왕, 균형의 왕좌', reversed: '폭풍 전 왕, 터뜨리는 파도' },
  }),
]
