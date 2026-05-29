import { minorCard } from '@/features/tarot/data/minor/cardFactory'
import type { TarotCard } from '@/features/tarot/types/tarot.types'

export const swordsMinor: TarotCard[] = [
  minorCard({
    id: 'swords_ace',
    nameKo: '소드 에이스',
    nameEn: 'Ace of Swords',
    number: 1,
    suit: 'swords',
    keywords: {
      upright: ['명확함', '진실', '돌파', '아이디어'],
      reversed: ['혼란', '오해', '날카로움', '판단 오류'],
    },
    meanings: {
      daily: {
        upright: '머리가 맑아지고 핵심이 보이는 날이야. 복잡한 문제를 한 문장으로 정리해봐.',
        reversed: '오해·정보 과잉으로 판단이 흐려질 수 있어. 사실과 추측을 나눠 적어.',
      },
      love: {
        upright: '솔직한 대화·오해 해소에 유리해. 날카롭게 말하기보다 진실을 부드럽게.',
        reversed: '말이 상처가 될 수 있어. 말하기 전에 의도를 확인해.',
      },
      career: {
        upright: '기획·카피·법·계약·명확한 브리프에 좋아. 결론을 문서로 남겨.',
        reversed: '성급한 결론·잘못된 정보에 주의해. 출처를 다시 확인해.',
      },
      advice: {
        upright: '진실의 검은 두려움보다 해방에 가까워.',
        reversed: '모든 진실을 오늘 말할 필요는 없어. 타이밍을 봐.',
      },
    },
    fortune: { upright: '안개가 걷히고 답이 선명해질 수 있어.', reversed: '혼란은 정보 정리로 줄일 수 있어.' },
    action: { upright: '고민을 한 문장 질문으로 바꿔 적어.', reversed: '확실하지 않은 정보 1개를 검증해.' },
    contentSeed: { upright: '하늘의 검, 돌파의 아이디어', reversed: '흐린 검, 다시 쓰는 문장' },
  }),
  minorCard({
    id: 'swords_two',
    nameKo: '소드 2',
    nameEn: 'Two of Swords',
    number: 2,
    suit: 'swords',
    keywords: {
      upright: ['교착', '선택 회피', '균형', '눈가림'],
      reversed: ['결정', '혼란 해소', '정보 공개', '감정 직면'],
    },
    meanings: {
      daily: {
        upright: '결정을 미루고 있을 수 있어. 완벽한 답보다 임시 선택으로 흐름을 열어봐.',
        reversed: '눈가리개를 벗을 때야. 숨긴 정보·감정을 꺼내면 선택이 쉬워져.',
      },
      love: {
        upright: '침묵·회피·균형 잡기에 에너지가 있어. 피하기보다 작은 질문 하나를 던져봐.',
        reversed: '오해가 풀리거나 선택의 때가 와. 솔직한 대화를 시도해.',
      },
      career: {
        upright: 'A/B 안이 맞서 있어. 기준표를 만들고 데드라인을 정해.',
        reversed: '숨겨둔 리스크가 드러날 수 있어. 팀과 공유해.',
      },
      advice: {
        upright: '가만히 있어도 바람은 분다. 마음을 열어봐.',
        reversed: '결정은 불편해도 자유를 줘.',
      },
    },
    fortune: { upright: '교차로에 서 있어. 작은 선택이 길을 연다.', reversed: '안개가 걷히면 답이 보여.' },
    action: { upright: '결정 기준 3개를 적고 하나를 고르기.', reversed: '미루던 대화·메일 1건을 처리해.' },
    contentSeed: { upright: '눈가린 여인, 두 검', reversed: '눈가리개를 벗음, 열린 선택' },
  }),
  minorCard({
    id: 'swords_three',
    nameKo: '소드 3',
    nameEn: 'Three of Swords',
    number: 3,
    suit: 'swords',
    keywords: {
      upright: ['상처', '이별', '진실', '슬픔'],
      reversed: ['치유', '용서', '회복', '해소'],
    },
    meanings: {
      daily: {
        upright: '가슴 아픈 소식·비판·실망이 올 수 있어. 감정을 인정하고 혼자 압박하지 마.',
        reversed: '상처가 아물기 시작할 수 있어. 작은 위로와 시간이 도와줘.',
      },
      love: {
        upright: '이별·오해·질투의 아픔이 선명할 수 있어. 말보다 회복이 우선이야.',
        reversed: '화해·용서·대화로 금이 메워질 수 있어. 부드럽게 시작해봐.',
      },
      career: {
        upright: '거절·실패·팀 갈등에 마음이 상할 수 있어. 배움으로 전환할 여지를 찾아.',
        reversed: '피드백을 다시 읽으면 성장 포인트가 보일 수 있어.',
      },
      advice: {
        upright: '비가 오면 땅도 부드러져. 울어도 괜찮아.',
        reversed: '심장은 스스로 치유하는 법을 알아.',
      },
    },
    fortune: { upright: '아픔은 진실의 일부일 수 있어.', reversed: '회복의 바늘이 꿰맬 수 있어.' },
    action: { upright: '슬픔을 10분 인정하고 trusted 사람에게 연락해.', reversed: '용서·감사 1문장을 적어봐.' },
    contentSeed: { upright: '비 내리는 하트, 세 검', reversed: '구름 걷힘, 꿰맨 마음' },
  }),
  minorCard({
    id: 'swords_four',
    nameKo: '소드 4',
    nameEn: 'Four of Swords',
    number: 4,
    suit: 'swords',
    keywords: {
      upright: ['휴식', '회복', '명상', '재충전'],
      reversed: ['불안', '쉬지 못함', '번아웃', '조급한 복귀'],
    },
    meanings: {
      daily: {
        upright: '멈춰 쉬어야 할 때야. 수면·명상·디지털 디톡스가 내일의 집중력을 키워.',
        reversed: '쉬어야 하는데 몸이 경계 상태일 수 있어. 강제 휴식을 일정에 넣어.',
      },
      love: {
        upright: '관계에서 거리·침묵이 치유가 될 수 있어. 혼자만의 시간을 존중해.',
        reversed: '회피가 갈등을 키울 수 있어. 준비되면 짧게라도 대화해.',
      },
      career: {
        upright: '휴가·리서치·정리 기간에 좋아. 무리한 마감보다 회복이 먼저야.',
        reversed: '번아웃 직전이면 마감을 조정해. 팀에 알려.',
      },
      advice: {
        upright: '검을 잠시 벽에 걸어둬. 쉬는 것도 전략이야.',
        reversed: '쉬지 못하면 검은 흔들려. 멈춰.',
      },
    },
    fortune: { upright: '회복의 침대가 기다리고 있어.', reversed: '쉼 없는 전투는 지속 불가야.' },
    action: { upright: '오늘 30분 일정 비우고 수면·산책 중 하나.', reversed: '야근·알림 끄고 강제 휴식 1시간.' },
    contentSeed: { upright: '성당의 휴식, 걸린 검', reversed: '끊긴 수면, 다시 눕기' },
  }),
  minorCard({
    id: 'swords_five',
    nameKo: '소드 5',
    nameEn: 'Five of Swords',
    number: 5,
    suit: 'swords',
    keywords: {
      upright: ['갈등', '승패', '후회', '공허한 승리'],
      reversed: ['화해', '사과', '뒤돌아봄', '갈등 종료'],
    },
    meanings: {
      daily: {
        upright: '이기려다 관계·평판이 상할 수 있어. 이긴 것보다 잃은 것을 먼저 봐.',
        reversed: '화해·사과·정리의 기회가 와. 자존심보다 평화를 선택해봐.',
      },
      love: {
        upright: '말다툼·냉전·상처 주는 승부에 주의해. 맞서기보다 멈추는 쪽이 이겨.',
        reversed: '관계 회복을 시도하기 좋아. 진심 어린 사과가 통할 수 있어.',
      },
      career: {
        upright: '사내 정치·비난·불공정에 맞설 수 있어. 문서·기록으로 자신을 지켜.',
        reversed: '협상·합의로 마무리할 수 있어. 공통 이익을 찾아.',
      },
      advice: {
        upright: '모든 전투에 승리할 필요는 없어.',
        reversed: '돌아서면 길이 남아 있을 수 있어.',
      },
    },
    fortune: { upright: '빈 승리는 진짜 승리가 아닐 수 있어.', reversed: '화해의 문이 열릴 수 있어.' },
    action: { upright: '오늘 말다툼 1건을 멈추고 내일로 미뤄.', reversed: '사과·정리 메시지 1통을 보내.' },
    contentSeed: { upright: '뒤돌아선 승자, 떨어진 검', reversed: '손 내미는 화해' },
  }),
  minorCard({
    id: 'swords_six',
    nameKo: '소드 6',
    nameEn: 'Six of Swords',
    number: 6,
    suit: 'swords',
    keywords: {
      upright: ['이동', '전환', '회복 여정', '거리'],
      reversed: ['정체', '미련', '저항', '되돌아감'],
    },
    meanings: {
      daily: {
        upright: '조용히 상황을 벗어나 회복하는 흐름이야. 큰 변화보다 작은 이동이 도움이 돼.',
        reversed: '떠나야 하는데 막혀 있거나, 과거로 되돌아갈 유혹이 있어. 이유를 적어봐.',
      },
      love: {
        upright: '거리 두기·이별 후 회복·새 환경이 관계를 돕을 수 있어.',
        reversed: '과거 패턴이 반복될 수 있어. 같은 보트에 타지 않게 경계해.',
      },
      career: {
        upright: '이직·원격·프로젝트 전환·정리에 유리해. 가벼운 짐만 가져가.',
        reversed: '전환이 지연되면 스트레스가 커져. 작은 첫 걸음을 정해.',
      },
      advice: {
        upright: '강을 건너는 중이야. 앞쪽 물은 더 잔잔해.',
        reversed: '정체는 신호야. 방향만 다시 잡아.',
      },
    },
    fortune: { upright: '천천히 나아가면 마음이 가벼워져.', reversed: '건너편은 아직 멀지 않아.' },
    action: { upright: '환경·루틴 1가지를 바꿔 회복 공간을 만들어.', reversed: '되돌아가고 싶은 이유 3가지를 검토해.' },
    contentSeed: { upright: '보트의 여행, 잔잔한 강', reversed: '멈춘 보트, 되돌아보기' },
  }),
  minorCard({
    id: 'swords_seven',
    nameKo: '소드 7',
    nameEn: 'Seven of Swords',
    number: 7,
    suit: 'swords',
    keywords: {
      upright: ['전략', '은밀', '자기 보호', '회피'],
      reversed: ['진실', '들킴', '죄책감', '정직'],
    },
    meanings: {
      daily: {
        upright: '혼자 처리하거나 전략적으로 움직일 수 있어. 숨기기보다 보호 목적인지 확인해.',
        reversed: '비밀·거짓·자기기만이 드러날 수 있어. 정직하게 정리하면 가벼워져.',
      },
      love: {
        upright: '거리 두기·비밀·불안한 신뢰 이슈에 주의해. 확인 가능한 대화가 필요해.',
        reversed: '숨김이 풀리면 관계가 재정비될 수 있어. 솔직함을 선택해.',
      },
      career: {
        upright: '전략·리서치·선행 작업에 유리해. 윤리선을 넘지 않게.',
        reversed: '표절·누락·커뮤니케이션 오류를 바로잡을 때야.',
      },
      advice: {
        upright: '모든 검을 들고 갈 필요는 없어. 무엇을 남길지 골라.',
        reversed: '진실이 결국 가장 가벼운 길이야.',
      },
    },
    fortune: { upright: '조용한 전략이 통할 수 있어. 윤리는 지켜.', reversed: '숨김이 풀리면 정리할 시간이야.' },
    action: { upright: '혼자 할 일 1개를 끝내고 공유할 범위를 정해.', reversed: '미루던 고백·정리 1건을 처리해.' },
    contentSeed: { upright: '몰래 가는 검, 전략가', reversed: '들킨 그림자, 정직한 빛' },
  }),
  minorCard({
    id: 'swords_eight',
    nameKo: '소드 8',
    nameEn: 'Eight of Swords',
    number: 8,
    suit: 'swords',
    keywords: {
      upright: ['제한', '불안', '자기 속박', '두려움'],
      reversed: ['해방', '관점 전환', '도움', '탈출'],
    },
    meanings: {
      daily: {
        upright: '막힌 느낌이 크지만 상당 부분은 생각의 감옥일 수 있어. 작은 선택권을 찾아봐.',
        reversed: '묶임이 풀리기 시작해. 도움을 요청하면 길이 보여.',
      },
      love: {
        upright: '불안·질투·말 못 할 마음이 관계를 조여. 상대와 공포를 나눠봐.',
        reversed: '대화·치료·경계 설정으로 자유가 커질 수 있어.',
      },
      career: {
        upright: '완벽주의·비교·임포스터가 막을 수 있어. 할 수 있는 최소 단위만 정해.',
        reversed: '멘토·동료·리소스가 탈출구야. 혼자 끙끙대지 마.',
      },
      advice: {
        upright: '눈가리개는 느슨해. 한 걸음이면 빠져나올 수 있어.',
        reversed: '감옥 문은 열려 있었을 수 있어.',
      },
    },
    fortune: { upright: '두려움이 크게 보일 수 있어. 작은 빛을 따라.', reversed: '해방의 실마리가 보일 수 있어.' },
    action: { upright: '막다른 생각 1개를 “사실/추측”으로 나눠 적어.', reversed: '도움 요청 1통을 보내.' },
    contentSeed: { upright: '밧줄의 여인, 안개', reversed: '풀린 밧줄, 열린 문' },
  }),
  minorCard({
    id: 'swords_nine',
    nameKo: '소드 9',
    nameEn: 'Nine of Swords',
    number: 9,
    suit: 'swords',
    keywords: {
      upright: ['불안', '죄책감', '악몽', '걱정'],
      reversed: ['해방', '현실 점검', '지원', '회복'],
    },
    meanings: {
      daily: {
        upright: '머릿속 걱정이 밤까지 이어질 수 있어. 사실 체크와 수면 루틴이 우선이야.',
        reversed: '안개가 걷히고 도움을 받을 수 있어. 혼자 끌어안지 마.',
      },
      love: {
        upright: '불안·질투·상상이 커질 수 있어. 확인하지 않은 추측으로 싸우지 마.',
        reversed: '대화·상담으로 마음이 가벼워질 수 있어.',
      },
      career: {
        upright: '실수 걱정·마감 압박이 클 수 있어. 체크리스트로 통제 가능한 것만 해.',
        reversed: '실제 리스크는 생각보다 작을 수 있어. 데이터를 봐.',
      },
      advice: {
        upright: '밤의 검은 낮보다 크게 보여. 아침에 다시 봐.',
        reversed: '도움은 약함이 아니야.',
      },
    },
    fortune: { upright: '걱정은 마음이 보내는 신호일 수 있어.', reversed: '새벽이 오면 숨이 트일 거야.' },
    action: { upright: '걱정 목록을 적고 내일 할 1가지만 남겨.', reversed: '신뢰할 사람에게 걱정 1개를 말해.' },
    contentSeed: { upright: '깨어 있는 밤, 아홉 검', reversed: '창문 밖 새벽, 숨 고르기' },
  }),
  minorCard({
    id: 'swords_ten',
    nameKo: '소드 10',
    nameEn: 'Ten of Swords',
    number: 10,
    suit: 'swords',
    keywords: {
      upright: ['끝', '배신', '바닥', '전환'],
      reversed: ['회복', '재기', '끝나지 않은 것', '버티기'],
    },
    meanings: {
      daily: {
        upright: '한 사이클이 끝난 느낌이 강해. 더 아플 것도 없어—이제는 올라갈 때야.',
        reversed: '끝나지 않은 고통을 붙잡고 있을 수 있어. 놓아야 다음이 열려.',
      },
      love: {
        upright: '관계·신뢰의 종료점에 올 수 있어. 아픔을 인정하고 자신을 돌봐.',
        reversed: '회복·재시도·작은 희망이 남아 있을 수 있어. 서두르지 마.',
      },
      career: {
        upright: '프로젝트 종료·해고·큰 실패 후일 수 있어. 배운 것을 기록하고 재시작 계획을 세워.',
        reversed: '완전한 끝이 아닐 수 있어. 남은 자원으로 재구성해봐.',
      },
      advice: {
        upright: '가장 어두운 시각 뒤엔 새벽이 와.',
        reversed: '끝이라고 믿는 것이 정말 끝인지 확인해.',
      },
    },
    fortune: { upright: '바닥이면 다음은 위쪽뿐이야.', reversed: '아직 끝이 아닐 수 있어. 정리하고 선택해.' },
    action: { upright: '끝낸 일을 “종료”라고 적고 감사 1줄 남겨.', reversed: '붙잡은 실패 1개를 놓는 의식을 해봐.' },
    contentSeed: { upright: '새벽과 열 검, 끝과 시작', reversed: '일어나는 그림자, 재기' },
  }),
  minorCard({
    id: 'swords_page',
    nameKo: '소드 시종',
    nameEn: 'Page of Swords',
    number: 11,
    suit: 'swords',
    keywords: {
      upright: ['호기심', '관찰', '소식', '학습'],
      reversed: ['가십', '성급함', '오해', '말실수'],
    },
    meanings: {
      daily: {
        upright: '질문·리서치·새 정보가 들어와. 날카로운 관찰이 통찰로 바뀔 수 있어.',
        reversed: '말이 앞서거나 오해가 생길 수 있어. 말하기 전에 출처를 확인해.',
      },
      love: {
        upright: '솔직한 대화·메시지·플러팅이 있을 수 있어. 다만 상처 주지 않게 톤을 조절해.',
        reversed: '가십·질투·말다툼에 주의해. 확인 질문 하나로 오해를 줄여.',
      },
      career: {
        upright: '인터뷰·서베이·베타 테스트·학습에 좋아. 메모 습관을 살려.',
        reversed: '루머·잘못된 정보 공유를 피해. 사실 확인 후 전달해.',
      },
      advice: {
        upright: '어린 탐정처럼 세상을 물어봐.',
        reversed: '검은 말보다 먼저 서.',
      },
    },
    fortune: { upright: '새로운 정보가 열쇠일 수 있어.', reversed: '말 한마디가 오해를 부를 수 있어.' },
    action: { upright: '궁금한 것 1개를 검색·질문해.', reversed: '오해 소지 메시지 1개를 수정·삭제해.' },
    contentSeed: { upright: '바람 속 시종, 호기심의 눈', reversed: '날아간 말, 다시 쓰는 문장' },
  }),
  minorCard({
    id: 'swords_knight',
    nameKo: '소드 기사',
    nameEn: 'Knight of Swords',
    number: 12,
    suit: 'swords',
    keywords: {
      upright: ['돌진', '야망', '논리', '속도'],
      reversed: ['무모함', '공격성', '조급함', '충돌'],
    },
    meanings: {
      daily: {
        upright: '빠르게 결단·실행하는 날이야. 방향이 맞는지 한 번만 확인하고 달려.',
        reversed: '성급한 말·결정이 부메랑이 될 수 있어. 속도를 줄여.',
      },
      love: {
        upright: '직설적·열정적 접근이 통할 수 있어. 상대 마음도 읽고 속도를 맞춰.',
        reversed: '말다툼·냉정한 비판에 주의해. 한 박자 쉬어.',
      },
      career: {
        upright: '마감·피치·토론·긴급 대응에 강해. 팀에 방향을 공유해.',
        reversed: '독주·번아웃·충돌을 피해. 협업 루트를 열어.',
      },
      advice: {
        upright: '바람을 타고 가되, 누구를 태울지 생각해.',
        reversed: '빠른 검은 베일 수도 있어.',
      },
    },
    fortune: { upright: '돌파의 기운이 강해.', reversed: '멈춤이 오히려 승리일 수 있어.' },
    action: { upright: '미뤄둔 결정 1개를 오늘 실행해.', reversed: '보낼려던 날카로운 메시지를 하루 보류해.' },
    contentSeed: { upright: '돌진하는 기사, 바람의 검', reversed: '멈춘 말, 다시 조율' },
  }),
  minorCard({
    id: 'swords_queen',
    nameKo: '소드 여왕',
    nameEn: 'Queen of Swords',
    number: 13,
    suit: 'swords',
    keywords: {
      upright: ['명료', '독립', '경계', '진실'],
      reversed: ['냉정', '비판', '상처', '고립'],
    },
    meanings: {
      daily: {
        upright: '감정과 사실을 분리해 판단하기 좋아. 선명한 기준이 너를 지켜.',
        reversed: '차가움이 상처가 될 수 있어. 진실과 잔인함은 다르다는 걸 기억해.',
      },
      love: {
        upright: '솔직함·경계·명확한 기대가 관계를 건강하게 해.',
        reversed: '방어적·비판적 태도가 거리를 만들 수 있어. 부드러운 한 문장을 더해.',
      },
      career: {
        upright: '편집·법무·QA·피드백에 강해. 명확한 기준으로 팀을 돕는 역할이야.',
        reversed: '완벽주의 비판은 팀을 지칠게 해. 건설적 톤을 연습해.',
      },
      advice: {
        upright: '진실은 칼이지만 손잡이는 네가 만든다.',
        reversed: '차가움 뒤에 따뜻함이 있을 수 있어.',
      },
    },
    fortune: { upright: '명확함이 힘이 되는 날이야.', reversed: '경계는 유지하고 말은 부드럽게.' },
    action: { upright: '결정 기준을 문서로 공유해.', reversed: '비판 전에 감사 1문장을 먼저 써.' },
    contentSeed: { upright: '하늘의 여왕, 선명한 눈', reversed: '얼음 녹는 말, 열린 손' },
  }),
  minorCard({
    id: 'swords_king',
    nameKo: '소드 왕',
    nameEn: 'King of Swords',
    number: 14,
    suit: 'swords',
    keywords: {
      upright: ['권위', '논리', '전략', '공정'],
      reversed: ['독재', '냉혹', '조작', '불공정'],
    },
    meanings: {
      daily: {
        upright: '큰 그림에서 공정하게 판단할 수 있어. 규칙·원칙·데이터로 결정해.',
        reversed: '냉정함이 고집이 되거나 불공정함이 드러날 수 있어. 근거를 다시 봐.',
      },
      love: {
        upright: '성숙한 대화·약속·경계 설정에 유리해. 감정도 인정하며 말해.',
        reversed: '감정 무시·통제에 주의해. 듣는 시간을 늘려.',
      },
      career: {
        upright: '리더십·법·전략·최종 결정에 강해. 팀에 이유를 설명해.',
        reversed: '권위만으로 밀면 반발이 와. 투명하게 공유해.',
      },
      advice: {
        upright: '왕은 진실 위에 서 있어. 편들지 마.',
        reversed: '머리만 크면 마음이 외로워져.',
      },
    },
    fortune: { upright: '공정한 판단이 길을 연다.', reversed: '권력보다 신뢰가 왕좌를 지켜.' },
    action: { upright: '중요 결정의 근거 3가지를 적고 공유해.', reversed: '독단 1건을 팀 피드백으로 바꿔.' },
    contentSeed: { upright: '왕좌의 검, 전략의 왕', reversed: '무너진 공정, 다시 듣기' },
  }),
]
