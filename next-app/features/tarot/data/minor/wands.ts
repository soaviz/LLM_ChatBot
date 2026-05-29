import { minorCard } from '@/features/tarot/data/minor/cardFactory'
import type { TarotCard } from '@/features/tarot/types/tarot.types'

export const wandsMinor: TarotCard[] = [
  minorCard({
    id: 'wands_ace',
    nameKo: '완드 에이스',
    nameEn: 'Ace of Wands',
    number: 1,
    suit: 'wands',
    keywords: {
      upright: ['영감', '시작', '열정', '불꽃'],
      reversed: ['지연', '의욕 저하', '방향 상실', '미루기'],
    },
    meanings: {
      daily: {
        upright: '오늘은 작은 아이디어가 큰 불꽃이 될 수 있어. 떠오른 것을 바로 메모하고 10분만 시도해봐.',
        reversed: '시작하고 싶은 마음은 있는데 에너지가 막힌 느낌일 수 있어. 완벽한 조건을 기다리지 말고 환경만 정리해봐.',
      },
      love: {
        upright: '설렘이나 호감의 신호가 생길 수 있어. 과장된 표현보다 솔직한 한마디가 더 잘 통할 거야.',
        reversed: '감정은 있는데 표현이 늦어질 수 있어. 상대를 몰아세우기보다 네 속도를 먼저 정리해봐.',
      },
      career: {
        upright: '새 프로젝트·콘셉트를 띄우기 좋은 날이야. 기획보다 프로토타입 한 조각을 먼저 만들어봐.',
        reversed: '아이디어는 많은데 실행이 안 붙을 수 있어. 범위를 줄이고 오늘 가능한 최소 단위를 정해.',
      },
      advice: {
        upright: '불꽃은 작아도 괜찮아. 일단 켜고 바람을 맞춰.',
        reversed: '꺼진 게 아니라 잠시 쉬는 중일 수 있어. 부담 없는 재시작 루틴을 하나 골라봐.',
      },
    },
    fortune: { upright: '새로운 열정의 씨앗이 손에 들어올 수 있어.', reversed: '시작 타이밍을 조금만 다듬으면 흐름이 살아날 거야.' },
    action: { upright: '떠오른 아이디어를 3줄로 적고 10분 실행해.', reversed: '작업 공간 하나만 정리하고 내일 첫 15분을 예약해.' },
    contentSeed: { upright: '불꽃이 켜지는 순간, 첫 스케치, 영감의 스파크', reversed: '잠든 열정을 깨우는 루틴, 작은 재점화' },
  }),
  minorCard({
    id: 'wands_two',
    nameKo: '완드 2',
    nameEn: 'Two of Wands',
    number: 2,
    suit: 'wands',
    keywords: {
      upright: ['계획', '비전', '선택', '확장'],
      reversed: ['우유부단', '두려움', '시야 좁음', '미결정'],
    },
    meanings: {
      daily: {
        upright: '지도를 펼치듯 선택지를 비교하기 좋은 날이야. 어디로 갈지 그림을 그려보면 다음 행동이 선명해져.',
        reversed: '선택지가 많아 멈춰 있을 수 있어. 완벽한 답보다 오늘 시험할 하나만 고르는 게 낫다.',
      },
      love: {
        upright: '관계의 방향을 함께 상상해볼 타이밍이야. 미래 이야기를 가볍게 나눠보면 연결이 깊어질 수 있어.',
        reversed: '불확실함 때문에 거리를 두고 있을 수 있어. 확답보다 지금 가능한 약속 하나를 정해봐.',
      },
      career: {
        upright: '장기 플랜과 단기 실험을 연결하기 좋아. 로드맵을 그리고 첫 마일스톤을 캘린더에 박아봐.',
        reversed: '비전만 크고 실행이 따라오지 않을 수 있어. 2주 안에 검증 가능한 목표로 줄여봐.',
      },
      advice: {
        upright: '세계를 보려면 먼저 서 있어야 해. 서서 바라보는 시간을 가져.',
        reversed: '결정을 미루는 건 정보 부족일 수도 있어. 부족한 한 가지를 질문으로 바꿔.',
      },
    },
    fortune: { upright: '더 넓은 무대가 보일 수 있어. 문턱 앞에 서 있는 느낌이야.', reversed: '두려움이 시야를 가릴 수 있어. 작은 선택부터 열어봐.' },
    action: { upright: '3개월 목표와 이번 주 할 일을 한 장에 적어.', reversed: '망설이는 선택지 2개 중 하나를 24시간 안에 테스트해.' },
    contentSeed: { upright: '창밖의 도시, 두 갈래 길, 계획 지도', reversed: '문턱에서 멈춘 발, 좁아진 시야, 결정 전 밤' },
  }),
  minorCard({
    id: 'wands_three',
    nameKo: '완드 3',
    nameEn: 'Three of Wands',
    number: 3,
    suit: 'wands',
    keywords: {
      upright: ['확장', '기대', '협력', '전망'],
      reversed: ['지연', '좌절', '범위 과다', '소통 부족'],
    },
    meanings: {
      daily: {
        upright: '씨를 뿌린 뒤 바다를 바라보는 시기야. 결과가 오기 전에 다음 파트너십이나 채널을 점검해봐.',
        reversed: '기대와 현실의 간격이 커질 수 있어. 일정과 역할을 다시 맞추면 스트레스가 줄어.',
      },
      love: {
        upright: '관계가 한 단계 넓어질 수 있어. 소개·만남·공개 등 작은 확장을 자연스럽게 시도해봐.',
        reversed: '거리나 일정 때문에 답답할 수 있어. 연결 방식을 바꾸는 게 관계를 살려줄 거야.',
      },
      career: {
        upright: '배포·확장·해외·새 플랫폼을 검토하기 좋은 날이야. 이미 보낸 작업의 반응을 추적해봐.',
        reversed: '확장이 빠르면 품질이 흔들릴 수 있어. 핵심 채널 하나에 집중해.',
      },
      advice: {
        upright: '배가 오고 있어. 준비된 사람에게 기회가 먼저 닿을 수 있어.',
        reversed: '멀리만 보면 발밑이 비어. 지금 손에 있는 것부터 다듬어.',
      },
    },
    fortune: { upright: '노력의 결실이 멀리서 다가올 수 있어.', reversed: '타이밍이 늦어 보여도 방향은 살아 있어.' },
    action: { upright: '배포·연락·후속 일정 중 하나를 오늘 확정해.', reversed: '지연 원인을 적고 수정 가능한 1가지를 실행해.' },
    contentSeed: { upright: '항구의 기다림, 확장되는 지도, 파도 너머', reversed: '늦은 배, 재조정된 일정, 다시 맞춘 팀' },
  }),
  minorCard({
    id: 'wands_four',
    nameKo: '완드 4',
    nameEn: 'Four of Wands',
    number: 4,
    suit: 'wands',
    keywords: {
      upright: ['축하', '안정', '공동체', '마일스톤'],
      reversed: ['불안정', '집안 갈등', '기쁨 지연', '소속감 부족'],
    },
    meanings: {
      daily: {
        upright: '작은 성취를 인정하고 쉬어가기 좋은 날이야. 완료한 일을 주변과 나누면 에너지가 돌아와.',
        reversed: '기쁨이 약하거나 집·팀 분위기가 어수선할 수 있어. 기대를 낮추고 편안한 루틴을 회복해봐.',
      },
      love: {
        upright: '관계의 안정감·축하할 일이 생길 수 있어. 함께하는 순간을 기록해두면 좋아.',
        reversed: '사소한 오해가 집안 분위기를 흔들 수 있어. 감정보다 사실 확인을 먼저 해봐.',
      },
      career: {
        upright: '팀 마일스톤·런칭·완료를 기념하기 좋아. 감사 메시지 하나가 협업을 단단하게 해.',
        reversed: '완료 직전에 마찰이 있을 수 있어. 역할과 마감 기준을 다시 맞춰봐.',
      },
      advice: {
        upright: '도착한 곳에서 잠깐 춤춰도 돼. 기쁨은 다음 출발의 연료야.',
        reversed: '집이 흔들릴 때는 큰 결정보다 기본 루틴을 지켜.',
      },
    },
    fortune: { upright: '작은 축제 같은 하루가 될 수 있어.', reversed: '기쁨은 늦어도 사라지지 않아. 분위기를 조금씩 고쳐봐.' },
    action: { upright: '완료한 일 하나를 공유하고 감사 인사를 보내.', reversed: '집·작업 공간에서 어긋난 한 가지를 정리해.' },
    contentSeed: { upright: '현수막 아래 축하, 네 개의 기둥, 팀의 웃음', reversed: '조용한 집, 다시 세우는 기둥, 작은 화해' },
  }),
  minorCard({
    id: 'wands_five',
    nameKo: '완드 5',
    nameEn: 'Five of Wands',
    number: 5,
    suit: 'wands',
    keywords: {
      upright: ['경쟁', '마찰', '열정 충돌', '브레인스토밍'],
      reversed: ['회피', '갈등 해소', '조율', '내부 소모'],
    },
    meanings: {
      daily: {
        upright: '의견이 부딪히는 날일 수 있어. 싸움이 아니라 아이디어 경쟁으로 받아들이면 오히려 살아나.',
        reversed: '갈등을 피하다 에너지가 새고 있을 수 있어. 핵심 쟁점 하나만 정면으로 다뤄봐.',
      },
      love: {
        upright: '가벼운 다툼·가치관 차이가 드러날 수 있어. 이기려 하지 말고 듣는 쪽을 먼저 선택해.',
        reversed: '침묵이 쌓이면 더 힘들어. 불편한 대화를 짧게라도 시작해봐.',
      },
      career: {
        upright: '피드백·리뷰·팀 논쟁이 있을 수 있어. 목표를 공유하면 경쟁이 협업으로 바뀌어.',
        reversed: '내부 정치나 소모전을 줄여. 불필요한 회의를 하나 없애봐.',
      },
      advice: {
        upright: '모두 다른 지팡이를 흔들고 있어. 네 리듬을 잃지 마.',
        reversed: '싸움을 끝낼 때야. 합의 가능한 한 줄을 찾아.',
      },
    },
    fortune: { upright: '시끄러워도 움직임은 있다. 에너지를 쓸 곳을 골라.', reversed: '갈등이 잦아들면 집중이 돌아올 거야.' },
    action: { upright: '의견 차이를 적고 공통 목표 한 줄을 적어.', reversed: '미뤄둔 대화 일정을 15분으로 잡아.' },
    contentSeed: { upright: '지팡이가 맞부딪힘, 열정의 난투, 아이디어 전장', reversed: '내려놓은 지팡이, 조용한 합의, 정리된 팀' },
  }),
  minorCard({
    id: 'wands_six',
    nameKo: '완드 6',
    nameEn: 'Six of Wands',
    number: 6,
    suit: 'wands',
    keywords: {
      upright: ['승리', '인정', '자신감', '공개'],
      reversed: ['자만', '인정 부족', '실패감', '기대 불일치'],
    },
    meanings: {
      daily: {
        upright: '노력이 눈에 띄는 날이야. 성과를 공유하고 다음 목표를 살짝 올려봐.',
        reversed: '칭찬이 적거나 기대만큼 안 될 수 있어. 비교보다 어제의 나와 비교해봐.',
      },
      love: {
        upright: '관계에서 긍정적인 인정·고백이 오갈 수 있어. 상대의 노력을 구체적으로 말해줘.',
        reversed: '인정 욕구가 갈등을 만들 수 있어. 상대를 무대에 세우기보다 함께 축하해.',
      },
      career: {
        upright: '성과 공유·수상·바이럴 가능성이 있어. 겸손하게 기록하고 다음 스텝을 준비해.',
        reversed: '외부 평가에 흔들리지 마. 내부 기준으로 완성도를 점검해.',
      },
      advice: {
        upright: '승리는 혼자가 아니야. 함께 걸어온 사람을 봐.',
        reversed: '인정이 늦어도 가치는 남아. 기록을 남겨둬.',
      },
    },
    fortune: { upright: '박수받을 순간이 올 수 있어.', reversed: '잠시 숨 고르기. 다음 라운드를 준비해.' },
    action: { upright: '성과 1개를 포트폴리오·SNS에 정리해.', reversed: '최근 실패에서 배운 점 3가지를 적어.' },
    contentSeed: { upright: '승리 행진, 웨이브의 환호, 깃발', reversed: '조용한 퇴장, 다시 일어서는 사람' },
  }),
  minorCard({
    id: 'wands_seven',
    nameKo: '완드 7',
    nameEn: 'Seven of Wands',
    number: 7,
    suit: 'wands',
    keywords: {
      upright: ['방어', '의지', '경쟁 속 고수', '신념'],
      reversed: ['압도', '포기', '번아웃', '자신감 저하'],
    },
    meanings: {
      daily: {
        upright: '지키고 싶은 가치·작업이 있어. 반대에도 한 걸음 물러서지 않는 태도가 오늘의 무기야.',
        reversed: '모든 전선을 지키려다 지칠 수 있어. 포기할 것과 싸울 것을 구분해봐.',
      },
      love: {
        upright: '관계의 경계·원칙을 지키는 날이야. 타협과 굴복은 다르다는 걸 기억해.',
        reversed: '방어가 너무 세면 상대가 멀어질 수 있어. 부드럽게 말할 문장을 준비해.',
      },
      career: {
        upright: '경쟁·비판 속에서도 포지션을 유지할 수 있어. 핵심 차별점을 한 문장으로 말해봐.',
        reversed: '번아웃 신호일 수 있어. 지원을 요청하거나 우선순위를 줄여.',
      },
      advice: {
        upright: '높은 곳에 서 있으면 바람도 세. 그래도 서 있을 가치가 있어.',
        reversed: '모든 싸움에 답할 필요는 없어. 쉬어가도 돼.',
      },
    },
    fortune: { upright: '압박 속에서도 네 자리를 지킬 수 있어.', reversed: '지금은 재정비 시간일 수 있어.' },
    action: { upright: '지키고 싶은 원칙 1개를 글로 남겨.', reversed: '불필요한 업무·약속 하나를 거절해.' },
    contentSeed: { upright: '언덕 위의 방어, 여러 방향의 도전', reversed: '내려온 지팡이, 숨 고르는 전사' },
  }),
  minorCard({
    id: 'wands_eight',
    nameKo: '완드 8',
    nameEn: 'Eight of Wands',
    number: 8,
    suit: 'wands',
    keywords: {
      upright: ['속도', '소식', '이동', '가속'],
      reversed: ['지연', '혼선', '조급함', '방향 산만'],
    },
    meanings: {
      daily: {
        upright: '일이 빠르게 진행될 수 있어. 메시지·배송·편집 마감을 놓치지 않게 알림을 켜둬.',
        reversed: '속도가 꼬이거나 연락이 늦어질 수 있어. 한 가지 흐름에만 집중해봐.',
      },
      love: {
        upright: '연락·만남이 빠르게 이어질 수 있어. 솔직한 메시지가 관계를 앞당겨.',
        reversed: '조급한 확인이 부담이 될 수 있어. 상대의 속도를 존중해봐.',
      },
      career: {
        upright: '마감·런칭·업로드에 유리한 날이야. 병목 구간을 먼저 풀어봐.',
        reversed: '너무 많은 탭이 열려 있을 수 있어. 우선순위 1개만 남겨.',
      },
      advice: {
        upright: '화살은 이미 날아갔어. 받을 준비를 해.',
        reversed: '빠르다고 좋은 건 아니야. 호흡을 맞춰.',
      },
    },
    fortune: { upright: '좋은 소식이 빠르게 올 수 있어.', reversed: '잠깐의 정체는 방향 수정 신호일 수 있어.' },
    action: { upright: '대기 중인 연락·업로드 1건을 오늘 처리해.', reversed: '알림을 줄이고 핵심 작업 25분만 해.' },
    contentSeed: { upright: '하늘을 가르는 화살, 빛의 속도', reversed: '멈춘 화살, 다시 조준하는 손' },
  }),
  minorCard({
    id: 'wands_nine',
    nameKo: '완드 9',
    nameEn: 'Nine of Wands',
    number: 9,
    suit: 'wands',
    keywords: {
      upright: ['인내', '경계', '마지막 힘', '회복력'],
      reversed: ['지침', '편집증', '방어 과다', '포기 직전'],
    },
    meanings: {
      daily: {
        upright: '거의 다 왔지만 몸과 마음이 경계하는 날이야. 마지막 구간은 페이스를 조절하는 게 승부야.',
        reversed: '번아웃 직전일 수 있어. 쉬는 것도 전략이라는 걸 인정해봐.',
      },
      love: {
        upright: '상처에서 배운 경계가 있어. 신뢰는 천천히 쌓아도 괜찮아.',
        reversed: '과거의 불신이 현재를 가릴 수 있어. 확인 가능한 행동부터 받아들여봐.',
      },
      career: {
        upright: '마감 직전·런칭 직전의 긴장감이 있어. 체크리스트로 실수를 줄여.',
        reversed: '혼자 다 짊어지지 마. 도움 요청 한 번이 프로젝트를 살려.',
      },
      advice: {
        upright: '넘어져도 다시 선 사람은 강해. 오늘은 지키는 날이야.',
        reversed: '방어구를 잠깐 벗어도 돼. 회복이 먼저야.',
      },
    },
    fortune: { upright: '끝이 보이지만 힘을 아껴야 해.', reversed: '쉬었다 가면 더 멀리 갈 수 있어.' },
    action: { upright: '남은 할 일 3개만 적고 하나씩 끝내.', reversed: '오늘 일정에서 비필수 1개를 취소해.' },
    contentSeed: { upright: '붕대 감은 전사, 마지막 방어선', reversed: '내려놓은 지팡이, 회복의 밤' },
  }),
  minorCard({
    id: 'wands_ten',
    nameKo: '완드 10',
    nameEn: 'Ten of Wands',
    number: 10,
    suit: 'wands',
    keywords: {
      upright: ['부담', '책임', '과로', '마무리 직전'],
      reversed: ['해방', '위임', '부담 감소', '우선순위'],
    },
    meanings: {
      daily: {
        upright: '짐이 많아 보일 수 있어. 모두 네 것은 아니야—내려놓을 수 있는 것을 구분해봐.',
        reversed: '부담을 덜기 시작할 수 있어. 위임·삭제·연기 중 하나를 선택해.',
      },
      love: {
        upright: '관계·가정·일이 겹쳐 피곤할 수 있어. 혼자 감당하지 말고 도움을 요청해.',
        reversed: '책임을 나누면 관계가 가벼워져. 솔직히 말해봐.',
      },
      career: {
        upright: '마감·다작·동시 프로젝트로 무거울 수 있어. 완료 순서를 정하면 숨이 트여.',
        reversed: '범위를 줄이거나 마감을 조정할 타이밍이야.',
      },
      advice: {
        upright: '목표지에 가까울수록 짐이 무겁게 느껴져. 나눠 들 수 있어.',
        reversed: '짐을 내려놓는 것도 용기야.',
      },
    },
    fortune: { upright: '버티면 끝나지만, 혼자 버티지는 마.', reversed: '가벼워지는 전환점이 올 수 있어.' },
    action: { upright: '할 일 목록에서 위임·삭제 가능한 2개를 표시해.', reversed: '취소·연기할 약속 1개를 정리해.' },
    contentSeed: { upright: '지팡이 더미, 언덕을 오르는 사람', reversed: '내려놓은 짐, 가벼운 걸음' },
  }),
  minorCard({
    id: 'wands_page',
    nameKo: '완드 시종',
    nameEn: 'Page of Wands',
    number: 11,
    suit: 'wands',
    keywords: {
      upright: ['호기심', '소식', '탐험', '열린 마음'],
      reversed: ['산만함', '말만 많음', '미숙함', '충동'],
    },
    meanings: {
      daily: {
        upright: '새로운 배움·취미·메시지가 들어올 수 있어. 어색해도 질문하는 쪽이 이긴다.',
        reversed: '시작은 많은데 끝이 없을 수 있어. 하나를 골라 끝까지 가봐.',
      },
      love: {
        upright: '가벼운 설렘·플러팅·새로운 만남의 기운이 있어. 부담 없이 다가가봐.',
        reversed: '말과 행동이 다를 수 있어. 약속은 작게, 확인은 분명하게.',
      },
      career: {
        upright: '인턴십·스터디·새 툴 학습에 좋아. 호기심을 포트폴리오로 연결해봐.',
        reversed: '아이디어만 늘면 산만해. 오늘은 완료 한 조각이 목표야.',
      },
      advice: {
        upright: '어린 모험가처럼 세상을 두드려봐.',
        reversed: '호기심을 한 곳에 모으면 불꽃이 돼.',
      },
    },
    fortune: { upright: '기대되는 소식이나 제안이 올 수 있어.', reversed: '속도를 줄이면 진짜 관심사가 보여.' },
    action: { upright: '배우고 싶은 것 하나를 20분 탐색해.', reversed: '미완 시작 1개를 마무리하거나 삭제해.' },
    contentSeed: { upright: '호기심 가득한 시종, 새 지도', reversed: '흩어진 관심, 하나로 모은 불꽃' },
  }),
  minorCard({
    id: 'wands_knight',
    nameKo: '완드 기사',
    nameEn: 'Knight of Wands',
    number: 12,
    suit: 'wands',
    keywords: {
      upright: ['추진력', '모험', '열정', '즉흥'],
      reversed: ['무모함', '조급함', '산만', '지속력 부족'],
    },
    meanings: {
      daily: {
        upright: '에너지가 넘치는 날이야. 떠오른 일을 바로 움직이되, 안전장치(백업·마감)를 챙겨.',
        reversed: '속도만 빠르고 방향이 흔들릴 수 있어. 멈춰서 목적지를 다시 확인해.',
      },
      love: {
        upright: '열정적인 접근·깜짝 제안이 있을 수 있어. 상대의 리듬도 함께 맞춰봐.',
        reversed: '불꽃이 금방 식을 수 있어. 약속은 지속 가능한 크기로.',
      },
      career: {
        upright: '출장·촬영·현장 작업·빠른 실행에 유리해. 팀에 일정을 공유해.',
        reversed: '충동적 결정은 비용이 커. 24시간 뒤에 다시 결정해봐.',
      },
      advice: {
        upright: '말보다 달리는 사람이 되되, 어디로 가는지는 봐.',
        reversed: '말을 멈추고 한 걸음만 더 가도 충분해.',
      },
    },
    fortune: { upright: '바람을 타고 앞으로 갈 수 있어.', reversed: '속도를 조절하면 더 멀리 간다.' },
    action: { upright: '미뤄둔 실행 1건을 오늘 끝내.', reversed: '오늘 새로운 약속 추가는 자제해.' },
    contentSeed: { upright: '달리는 말, 불꽃 기사, 먼지 구름', reversed: '멈춘 말, 다시 잡은 고삐' },
  }),
  minorCard({
    id: 'wands_queen',
    nameKo: '완드 여왕',
    nameEn: 'Queen of Wands',
    number: 13,
    suit: 'wands',
    keywords: {
      upright: ['자신감', '카리스마', '따뜻한 리더십', '창의'],
      reversed: ['질투', '통제', '불안', '에너지 고갈'],
    },
    meanings: {
      daily: {
        upright: '네 존재감이 주변을 밝힐 수 있어. 자신 있게 보여주되, 타인의 공간도 남겨둬.',
        reversed: '비교·질투가 에너지를 빼앗을 수 있어. 네 강점 목록을 다시 읽어봐.',
      },
      love: {
        upright: '매력과 솔직함이 통하는 날이야. 상대를 응원하는 말이 관계를 키워.',
        reversed: '확인받고 싶은 마음이 커질 수 있어. 스스로를 먼저 인정해봐.',
      },
      career: {
        upright: '리드·발표·브랜딩·대외 활동에 강해. 팀을 끌 때도 따뜻한 기준을 유지해.',
        reversed: '완벽주의로 지칠 수 있어. 위임과 휴식을 일정에 넣어.',
      },
      advice: {
        upright: '네 빛은 이미 충분해. 숨기지 말고 써.',
        reversed: '여왕도 쉬어야 해. 불꽃을 아껴.',
      },
    },
    fortune: { upright: '당당함이 기회를 부를 수 있어.', reversed: '내면의 불안을 돌보면 다시 빛나.' },
    action: { upright: '자신 있는 작업 1개를 공개하거나 공유해.', reversed: '비교 계정·피드를 1시간 끊어.' },
    contentSeed: { upright: '해바라기 여왕, 자신감의 미소', reversed: '쉬는 여왕, 다시 켜는 불꽃' },
  }),
  minorCard({
    id: 'wands_king',
    nameKo: '완드 왕',
    nameEn: 'King of Wands',
    number: 14,
    suit: 'wands',
    keywords: {
      upright: ['비전', '리더십', '결단', '기업가 정신'],
      reversed: ['독단', '성급한 결정', '오만', '방향 상실'],
    },
    meanings: {
      daily: {
        upright: '큰 그림을 그리고 사람을 모으기 좋은 날이야. 결정은 빠르게, 실행은 나눠.',
        reversed: '모든 걸 혼자 통제하려 하면 막혀. 신뢰할 사람에게 역할을 넘겨봐.',
      },
      love: {
        upright: '관계에서 방향·미래를 이끄는 에너지가 있어. 상대의 의견도 왕좌 옆에 두어.',
        reversed: '지시보다 대화가 필요해. 듣는 시간을 늘려봐.',
      },
      career: {
        upright: '창업·런칭·팀 빌딩·투자 피치에 유리해. 비전을 한 장으로 정리해봐.',
        reversed: '권위만으로는 팀이 안 따라와. 근거와 배려를 보여줘.',
      },
      advice: {
        upright: '왕은 불을 다루는 법을 알아. 책임과 함께 써.',
        reversed: '왕도 조언을 들을 때가 있어.',
      },
    },
    fortune: { upright: '리더로서 한 걸음 더 나아갈 수 있어.', reversed: '권력보다 신뢰가 왕국을 지켜.' },
    action: { upright: '팀·협업자에게 목표와 역할을 명확히 전달해.', reversed: '혼자 결정한 일 1개를 공유·피드백 받아.' },
    contentSeed: { upright: '왕좌의 불꽃, 비전을 말하는 리더', reversed: '고개 숙인 왕, 다시 듣는 귀' },
  }),
]
