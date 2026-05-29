import { minorCard } from '@/features/tarot/data/minor/cardFactory'
import type { TarotCard } from '@/features/tarot/types/tarot.types'

export const pentaclesMinor: TarotCard[] = [
  minorCard({
    id: 'pentacles_ace',
    nameKo: '펜타클 에이스',
    nameEn: 'Ace of Pentacles',
    number: 1,
    suit: 'pentacles',
    keywords: {
      upright: ['기회', '시작', '물질', '씨앗'],
      reversed: ['기회 놓침', '불안정', '계획 부족', '지연'],
    },
    meanings: {
      daily: {
        upright: '돈·일·건강·프로젝트에 새 씨앗이 떨어질 수 있어. 작은 투자·습관 하나를 시작해봐.',
        reversed: '기회가 스쳐 지나갈 수 있어. 준비·예산·일정을 먼저 점검해.',
      },
      love: {
        upright: '안정·약속·실질적 지원의 기운이 있어. 말보다 행동·시간·선물로 보여줘.',
        reversed: '불안정·현실 압박이 관계를 흔들 수 있어. 기대치를 맞춰봐.',
      },
      career: {
        upright: '수입·계약·새 클라이언트·포트폴리오에 유리해. 제안서를 오늘내봐.',
        reversed: '재정·일정 리스크를 확인해. 서명 전 숫자를 다시 봐.',
      },
      advice: {
        upright: '땅에 떨어진 동전을 주워. 작은 기회가 자란다.',
        reversed: '씨앗은 있는데 흙이 부족할 수 있어. 기반부터.',
      },
    },
    fortune: { upright: '현실적인 좋은 소식이 올 수 있어.', reversed: '기회는 다시 올 수 있어. 준비를.' },
    action: { upright: '저축·견적·포트폴리오 1건을 오늘 처리해.', reversed: '예산·일정표를 10분 정리해.' },
    contentSeed: { upright: '손의 동전, 새 프로젝트 씨앗', reversed: '놓친 동전, 다시 준비' },
  }),
  minorCard({
    id: 'pentacles_two',
    nameKo: '펜타클 2',
    nameEn: 'Two of Pentacles',
    number: 2,
    suit: 'pentacles',
    keywords: {
      upright: ['균형', '멀티태스킹', '유연', '조율'],
      reversed: ['불균형', '과부하', '혼란', '재정 스트레스'],
    },
    meanings: {
      daily: {
        upright: '여러 일을 저글링하는 날이야. 우선순위와 시간 블록이 생명줄이야.',
        reversed: '공이 떨어질 수 있어. 하나를 내려놓거나 마감을 조정해.',
      },
      love: {
        upright: '일·연애·가정 균형을 맞추는 게 중요해. 함께 일정을 조율해봐.',
        reversed: '한쪽만 바쁘면 관계가 비틀려. 시간 약속을 재협상해.',
      },
      career: {
        upright: '병행 프로젝트·프리랜스·사이드에 유리해. 캘린더로 충돌을 막아.',
        reversed: '과로·지연·비용 초과에 주의해. 범위를 줄여.',
      },
      advice: {
        upright: '춤추듯 균형을 잡아. 완벽한 정지는 없어.',
        reversed: '저글링 공을 하나 내려놔.',
      },
    },
    fortune: { upright: '유연하면 다 돌아간다.', reversed: '균형이 깨지면 멈춰서 맞춰.' },
    action: { upright: '이번 주 우선순위 3개만 남기고 나머지 연기.', reversed: '취소·위임할 일 1개를 오늘 처리.' },
    contentSeed: { upright: '무한대 리듬, 저글링', reversed: '떨어진 공, 다시 맞추기' },
  }),
  minorCard({
    id: 'pentacles_three',
    nameKo: '펜타클 3',
    nameEn: 'Three of Pentacles',
    number: 3,
    suit: 'pentacles',
    keywords: {
      upright: ['협업', '기술', '품질', '멘토십'],
      reversed: ['미스커뮤니케이션', '품질 저하', '고집', '팀 불화'],
    },
    meanings: {
      daily: {
        upright: '팀워크·피드백·장인정신이 빛나는 날이야. 네 역할을 명확히 하고 기여해.',
        reversed: '소통·기준이 어긋날 수 있어. 브리프를 다시 맞춰.',
      },
      love: {
        upright: '함께 무언가를 만드는 관계·공동 목표에 좋아. 집·돈·미래 계획을 협력해봐.',
        reversed: '기대 불일치·역할 갈등을 대화로 풀어.',
      },
      career: {
        upright: '협업·외주·포트폴리오 리뷰·멘토링에 최적이야. 칭찬도 구체적으로 전해.',
        reversed: '품질·마감 문제는 조기에 공유해. 혼자 끙끙대지 마.',
      },
      advice: {
        upright: '대성당은 여럿이 쌓아 올려.',
        reversed: '설계도를 다시 펼쳐봐.',
      },
    },
    fortune: { upright: '함께 만들면 완성도가 올라가.', reversed: '팀 기준을 맞추면 길이 열려.' },
    action: { upright: '협업자에게 피드백 요청 1통을 보내.', reversed: '브리프·역할 문서를 15분 업데이트.' },
    contentSeed: { upright: '대성당의 장인, 세 사람', reversed: '어긋난 청사진, 다시 맞춤' },
  }),
  minorCard({
    id: 'pentacles_four',
    nameKo: '펜타클 4',
    nameEn: 'Four of Pentacles',
    number: 4,
    suit: 'pentacles',
    keywords: {
      upright: ['안정', '저축', '보존', '통제'],
      reversed: ['인색', '집착', '손실 두려움', '과소비'],
    },
    meanings: {
      daily: {
        upright: '재정·시간·에너지를 지키는 날이야. 안전 마진을 확보하면 마음이 편해져.',
        reversed: '너무 쥐거나 반대로 과하게 쓸 수 있어. 균형 잡힌 예산을 봐.',
      },
      love: {
        upright: '안정·소유욕·보호가 커질 수 있어. 사랑과 통제는 다르다는 걸 기억해.',
        reversed: '벽을 내리면 관계가 숨 쉬어. 작은 신뢰를 보여줘.',
      },
      career: {
        upright: '비용 절감·계약 보호·IP 관리에 유리해. 백업과 저작권을 챙겨.',
        reversed: '투자·성장을 막는 인색함을 점검해. 필요한 지출은 투자야.',
      },
      advice: {
        upright: '쥐는 것도 지혜지만 숨 막히게 쥐지 마.',
        reversed: '손을 펴면 새 흐름이 들어와.',
      },
    },
    fortune: { upright: '기반을 단단히 할 수 있어.', reversed: '너무 쥐면 기회도 막혀.' },
    action: { upright: '이번 달 고정비·저축 목표를 10분 점검.', reversed: '불필요한 구독·지출 1개를 끊어.' },
    contentSeed: { upright: '동전을 안은 사람, 안전', reversed: '열린 손, 흐르는 자원' },
  }),
  minorCard({
    id: 'pentacles_five',
    nameKo: '펜타클 5',
    nameEn: 'Five of Pentacles',
    number: 5,
    suit: 'pentacles',
    keywords: {
      upright: ['결핍', '외로움', '어려움', '도움 필요'],
      reversed: ['회복', '지원', '희망', '자원 발견'],
    },
    meanings: {
      daily: {
        upright: '재정·건강·소속감에서 부족함을 느낄 수 있어. 도움을 요청하는 것도 용기야.',
        reversed: '지원·기회·커뮤니티가 보일 수 있어. 문을 두드려봐.',
      },
      love: {
        upright: '거리·외로움·현실적 어려움이 관계를 시험할 수 있어. 함께 버티는 방법을 찾아.',
        reversed: '화해·지원·따뜻한 손길이 올 수 있어.',
      },
      career: {
        upright: '수입 감소·거절·프로젝트 공백에 대비해. 네트워크에 솔직히 알려.',
        reversed: '새 제안·지원금·협업이 들어올 수 있어.',
      },
      advice: {
        upright: '밖은 춥지만 안쪽 문은 열려 있을 수 있어.',
        reversed: '도움은 이미 근처에 있을 수 있어.',
      },
    },
    fortune: { upright: '힘든 시기지만 혼자가 아닐 수 있어.', reversed: '회복의 빛이 보일 수 있어.' },
    action: { upright: '도움 요청 1통(멘토·친구·커뮤니티)을 보내.', reversed: '받은 지원에 감사 답장을 해.' },
    contentSeed: { upright: '눈보라, 성당 밖', reversed: '문을 두드림, 따뜻한 안쪽' },
  }),
  minorCard({
    id: 'pentacles_six',
    nameKo: '펜타클 6',
    nameEn: 'Six of Pentacles',
    number: 6,
    suit: 'pentacles',
    keywords: {
      upright: ['나눔', '지원', '공정', '후원'],
      reversed: ['불균형', '빚', '의존', '조건부'],
    },
    meanings: {
      daily: {
        upright: '주고받음·후원·팁·멘토링의 균형이 좋아. 받을 때도 감사를 표현해.',
        reversed: '일방적 관계·불공정 계약에 주의해. 조건을 명확히.',
      },
      love: {
        upright: '서로 돌보는 관계·실질적 지원이 돋보여. 주는 것과 받는 것을 맞춰봐.',
        reversed: '의존·통제·조건부 사랑을 점검해.',
      },
      career: {
        upright: '후원·그랜트·협찬·공정한 대가에 유리해. 계약서에 숫자를 박아.',
        reversed: '저가·무상 착취를 거절할 타이밍이야.',
      },
      advice: {
        upright: '저울은 양쪽을 봐. 네가 줄 수 있을 때 줄어.',
        reversed: '불공정한 거래는 오래가지 않아.',
      },
    },
    fortune: { upright: '좋은 교환이 올 수 있어.', reversed: '균형을 맞추면 흐름이 살아.' },
    action: { upright: '도움 준 사람·받은 사람에게 감사·정산 1건.', reversed: '불공정한 조건 1개를 재협상해.' },
    contentSeed: { upright: '저울과 동전, 나눔', reversed: '기울어진 저울, 다시 맞춤' },
  }),
  minorCard({
    id: 'pentacles_seven',
    nameKo: '펜타클 7',
    nameEn: 'Seven of Pentacles',
    number: 7,
    suit: 'pentacles',
    keywords: {
      upright: ['인내', '평가', '장기', '기다림'],
      reversed: ['조급함', '낭비', '방향 수정', '포기'],
    },
    meanings: {
      daily: {
        upright: '씨를 심고 기다리는 시기야. 중간 점검으로 방향만 다듬어봐.',
        reversed: '결과가 안 와 답답할 수 있어. 전략 수정 또는 인내 중 하나를 선택해.',
      },
      love: {
        upright: '관계·투자가 천천히 자라. 조급한 확인보다 신뢰의 시간을 줘.',
        reversed: '기대와 속도가 안 맞으면 대화로 조율해.',
      },
      career: {
        upright: '장기 프로젝트·브랜드·채널 성장에 유리해. KPI를 다시 보며 조정해.',
        reversed: '잘못된 나무에 물을 주고 있을 수 있어. ROI를 점검해.',
      },
      advice: {
        upright: '수확 전에 덤불을 가꿔.',
        reversed: '기다림과 포기는 다르다. 어느 쪽인지 물어봐.',
      },
    },
    fortune: { upright: '노력은 쌓이고 있어. 조금만 더.', reversed: '방향 수정이 필요할 수 있어.' },
    action: { upright: '진행 중 프로젝트 KPI 3개를 점검해.', reversed: '성과 없는 작업 1개 중단 여부를 결정해.' },
    contentSeed: { upright: '덤불을 돌보는 사람, 기다림', reversed: '다른 밭, 전략 수정' },
  }),
  minorCard({
    id: 'pentacles_eight',
    nameKo: '펜타클 8',
    nameEn: 'Eight of Pentacles',
    number: 8,
    suit: 'pentacles',
    keywords: {
      upright: ['연습', '장인', '집중', '스킬'],
      reversed: ['완벽주의', '지루함', '품질 저하', '동기 부족'],
    },
    meanings: {
      daily: {
        upright: '반복 연습·디테일·마스터하기 좋은 날이야. 1% 개선에 집중해.',
        reversed: '지루하거나 완벽주의로 멈출 수 있어. 작은 완성으로 동기를 회복해.',
      },
      love: {
        upright: '관계도 꾸준한 작은 노력이 쌓여. 일상의 배려가 사랑이야.',
        reversed: '관계 유지보수를 잊지 마. 말 한마디·시간 약속을 지켜.',
      },
      career: {
        upright: '포트폴리오·튜토리얼·연습·납품 품질에 최적이야. 피드백 루프를 짧게.',
        reversed: '번아웃·단조로움을 바꿀 루틴 하나를 넣어.',
      },
      advice: {
        upright: '손끝이 기억하게 반복해.',
        reversed: '완벽한 100%보다 끝낸 80%가 낫다.',
      },
    },
    fortune: { upright: '실력이 눈에 띄게 자랄 수 있어.', reversed: '동기를 회복하면 손이 다시 움직여.' },
    action: { upright: '핵심 스킬 25분 연습 블록을 잡아.', reversed: '지루한 작업에 작은 보상을 붙여.' },
    contentSeed: { upright: '장인의 벤치, 여덟 동전', reversed: '멈춘 망치, 다시 리듬' },
  }),
  minorCard({
    id: 'pentacles_nine',
    nameKo: '펜타클 9',
    nameEn: 'Nine of Pentacles',
    number: 9,
    suit: 'pentacles',
    keywords: {
      upright: ['풍요', '자립', '여유', '성취'],
      reversed: ['외로움', '과시', '불안', '의존'],
    },
    meanings: {
      daily: {
        upright: '스스로 만든 안락함·성과를 누릴 수 있어. 자립을 인정하고 쉬어가.',
        reversed: '겉은 화려한데 공허하거나 의존이 있을 수 있어. 진짜 원하는 풍요를 정의해.',
      },
      love: {
        upright: '건강한 독립·자존감이 매력이 돼. 혼자서도 괜찮은 사람이 관계를 풍요롭게 해.',
        reversed: '외로움·비교·의존을 점검해. 관계는 선택이야.',
      },
      career: {
        upright: '프리랜스·1인 브랜드·수익 안정에 유리해. 성과를 기록하고 가격을 존중해.',
        reversed: '과시·번아웃·외로운 성공에 주의해. 지원 네트워크를 유지해.',
      },
      advice: {
        upright: '네가 만든 정원에서 쉬어도 돼.',
        reversed: '풍요는 숫자만이 아니야.',
      },
    },
    fortune: { upright: '자립의 열매를 맛볼 수 있어.', reversed: '진짜 풍요의 기준을 다시 골라.' },
    action: { upright: '최근 성과 1개를 기록하고 스스로에게 보상해.', reversed: '외로움일 땐 trusted 사람과 시간을 가져.' },
    contentSeed: { upright: '포도원의 여인, 자립', reversed: '빈 정원, 다시 채우기' },
  }),
  minorCard({
    id: 'pentacles_ten',
    nameKo: '펜타클 10',
    nameEn: 'Ten of Pentacles',
    number: 10,
    suit: 'pentacles',
    keywords: {
      upright: ['유산', '가문', '장기 안정', '레거시'],
      reversed: ['가족 갈등', '재정 불안', '단기 시야', '상실'],
    },
    meanings: {
      daily: {
        upright: '가족·팀·브랜드의 장기 자산이 돋보여. 오늘의 선택이 미래에 남는다고 생각해.',
        reversed: '가족·재정·유산 이슈가 스트레스일 수 있어. 대화와 문서로 정리해.',
      },
      love: {
        upright: '장기 관계·가정·미래 계획·안정에 좋아. 공통의 뿌리를 돌봐.',
        reversed: '가족 압력·돈 문제가 관계를 흔들 수 있어. 경계를 세워.',
      },
      career: {
        upright: '회사·IP·패시브·브랜드 자산에 유리해. 장기 계약·저작권을 챙겨.',
        reversed: '단기 이익만 쫓으면 레거시가 약해져. 지속 가능성을 봐.',
      },
      advice: {
        upright: '네가 남길 것을 오늘부터 쌓아.',
        reversed: '과거의 짐과 선물을 구분해.',
      },
    },
    fortune: { upright: '오래 가는 안정이 보일 수 있어.', reversed: '기반을 다시 다지면 회복돼.' },
    action: { upright: '장기 목표·가족·팀 자산 1가지를 문서화해.', reversed: '재정·가족 갈등 1건을 대화로 정리해.' },
    contentSeed: { upright: '가문의 정원, 열 동전', reversed: '금이 간 틈, 다시 쌓기' },
  }),
  minorCard({
    id: 'pentacles_page',
    nameKo: '펜타클 시종',
    nameEn: 'Page of Pentacles',
    number: 11,
    suit: 'pentacles',
    keywords: {
      upright: ['학습', '제안', '실용', '호기심'],
      reversed: ['미루기', '게으름', '비현실', '집중 부족'],
    },
    meanings: {
      daily: {
        upright: '새 스킬·인턴·제안·학습 기회가 와. 작은 실습으로 시작해봐.',
        reversed: '계획만 있고 실행이 없을 수 있어. 20분 실습으로 바꿔.',
      },
      love: {
        upright: '진지한 관심·실질적 제안·안정적 접근이 통할 수 있어.',
        reversed: '말만 약속하고 행동이 없을 수 있어. 일관성을 봐.',
      },
      career: {
        upright: '스터디·자격·포트폴리오·첫 수익에 좋아. 배움을 기록해.',
        reversed: '산만함·미루기를 끊고 마감 하나를 지켜.',
      },
      advice: {
        upright: '손에 든 동전처럼 작은 배움이 시작이야.',
        reversed: '책상만 보면 동전은 안 자라.',
      },
    },
    fortune: { upright: '실용적인 소식·제안이 올 수 있어.', reversed: '작은 실행이 문을 열어.' },
    action: { upright: '배우고 싶은 스킬 20분 튜토리얼 시작.', reversed: '미룬 과제 1개를 30분 안에 끝내.' },
    contentSeed: { upright: '동전을 든 학생, 새 스킬', reversed: '미루는 책상, 첫 20분' },
  }),
  minorCard({
    id: 'pentacles_knight',
    nameKo: '펜타클 기사',
    nameEn: 'Knight of Pentacles',
    number: 12,
    suit: 'pentacles',
    keywords: {
      upright: ['성실', '루틴', '신뢰', '꾸준함'],
      reversed: ['지루함', '완고', '정체', '게으름'],
    },
    meanings: {
      daily: {
        upright: '느리지만 확실한 진행이 최고야. 루틴·체크리스트·납기를 지켜.',
        reversed: '지루함·고집·정체에 빠질 수 있어. 작은 변화 하나를 넣어.',
      },
      love: {
        upright: '믿음직한 배려·약속 이행이 사랑이야. 말보다 꾸준함을 보여줘.',
        reversed: '관계가 지루하거나 답답할 수 있어. 새 데이트 루틴을 시도해.',
      },
      career: {
        upright: '장기 클라이언트·유지보수·신뢰 구축에 강해. 품질과 일정을 약속해.',
        reversed: '변화 거부·정체를 깨기 위해 실험 1개를 허용해.',
      },
      advice: {
        upright: '거북이도 결국 도착해.',
        reversed: '느림과 멈춤은 달라. 어느 쪽인지 봐.',
      },
    },
    fortune: { upright: '꾸준함이 보상받을 수 있어.', reversed: '루틴에 신선함을 더하면 움직여.' },
    action: { upright: '오늘 반복 루틴 1개를 시간에 고정해.', reversed: '지루한 루틴 1개를 10% 바꿔봐.' },
    contentSeed: { upright: '느린 말의 기사, 땅의 신뢰', reversed: '멈춘 말, 새 길' },
  }),
  minorCard({
    id: 'pentacles_queen',
    nameKo: '펜타클 여왕',
    nameEn: 'Queen of Pentacles',
    number: 13,
    suit: 'pentacles',
    keywords: {
      upright: ['돌봄', '실용', '풍요', '안정'],
      reversed: ['과보호', '질투', '일가정 불균형', '소비'],
    },
    meanings: {
      daily: {
        upright: '집·몸·돈·일을 따뜻하게 관리하기 좋아. 실용적 배려가 오늘의 마법이야.',
        reversed: '모든 걸 혼자 챙기다 지칠 수 있어. 도움을 받고 소비를 점검해.',
      },
      love: {
        upright: '안정·요리·시간·공간으로 사랑을 보여줄 수 있어. 받는 사람도 고마움을 표현해.',
        reversed: '과보호·통제·질투를 경계해. 네 욕구도 말해.',
      },
      career: {
        upright: '운영·PM·재무·브랜드 케어에 강해. 팀의 안정을 만드는 역할이야.',
        reversed: '일과 삶 경계가 무너지면 번아웃이 와. 휴식을 일정에 넣어.',
      },
      advice: {
        upright: '풍요는 돌보는 손에서 자라.',
        reversed: '여왕도 쉬어야 정원이 자라.',
      },
    },
    fortune: { upright: '실질적인 안락함이 커질 수 있어.', reversed: '돌봄은 자신에게도.' },
    action: { upright: '집·작업 공간·몸 중 1곳을 15분 정리해.', reversed: '혼자 짊어진 일 1개를 나눠.' },
    contentSeed: { upright: '정원의 여왕, 실용적 풍요', reversed: '지친 돌봄, 다시 쉬기' },
  }),
  minorCard({
    id: 'pentacles_king',
    nameKo: '펜타클 왕',
    nameEn: 'King of Pentacles',
    number: 14,
    suit: 'pentacles',
    keywords: {
      upright: ['풍요', '사업', '안정', '성공'],
      reversed: ['탐욕', '물질주의', '완고', '리스크'],
    },
    meanings: {
      daily: {
        upright: '재정·사업·장기 투자·안정적 성공에 유리해. 숫자와 품질을 함께 봐.',
        reversed: '돈·통제·탐욕에 집착할 수 있어. 가치와 윤리를 다시 확인해.',
      },
      love: {
        upright: '안정·보호·실질적 지원이 관계를 단단하게 해. 감정 표현도 잊지 마.',
        reversed: '물질로 사랑을 대체하거나 통제하지 마.',
      },
      career: {
        upright: 'CEO·창업·투자·브랜드 확장에 강해. 팀과 장기 비전을 공유해.',
        reversed: '리스크·탐욕·불공정 거래를 피해. 지속 가능성을 우선해.',
      },
      advice: {
        upright: '왕국은 숫자와 신뢰로 지켜져.',
        reversed: '금으로 살 수 없는 것도 있어.',
      },
    },
    fortune: { upright: '물질적 안정과 성취가 가까워.', reversed: '진짜 부는 관계와 건강에도 있어.' },
    action: { upright: '분기 재무·목표를 20분 리뷰해.', reversed: '돈 때문에 흔들리는 우선순위 1개를 조정해.' },
    contentSeed: { upright: '왕좌의 풍요, 사업의 왕', reversed: '무거운 왕관, 가벼운 가치' },
  }),
]
