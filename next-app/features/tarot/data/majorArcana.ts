import type { TarotCard } from '@/features/tarot/types/tarot.types'

const majorArcanaImageUrls: Record<string, string> = {
  the_fool: '/assets/tarot/major_00_the_fool_park_lyra.png',
  the_magician: '/assets/tarot/major_01_the_magician_park_lyra.png',
  the_high_priestess: '/assets/tarot/major_02_the_high_priestess_park_lyra.png',
  the_empress: '/assets/tarot/major_03_the_empress_park_lyra.png',
  the_emperor: '/assets/tarot/major_04_the_emperor_park_lyra.png',
  the_hierophant: '/assets/tarot/major_05_the_hierophant_park_lyra.png',
  the_lovers: '/assets/tarot/major_06_the_lovers_park_lyra.png',
  the_chariot: '/assets/tarot/major_07_the_chariot_park_lyra.png',
  strength: '/assets/tarot/major_08_strength_park_lyra.png',
  the_hermit: '/assets/tarot/major_09_the_hermit_park_lyra.png',
  wheel_of_fortune: '/assets/tarot/major_10_wheel_of_fortune_park_lyra.png',
  justice: '/assets/tarot/major_11_justice_park_lyra.png',
  the_hanged_man: '/assets/tarot/major_12_the_hanged_man_park_lyra.png',
  death: '/assets/tarot/major_13_death_park_lyra.png',
  temperance: '/assets/tarot/major_14_temperance_park_lyra.png',
  the_devil: '/assets/tarot/major_15_the_devil_park_lyra.png',
  the_tower: '/assets/tarot/major_16_the_tower_park_lyra.png',
  the_star: '/assets/tarot/major_17_the_star_park_lyra.png',
  the_moon: '/assets/tarot/major_18_the_moon_park_lyra.png',
  the_sun: '/assets/tarot/major_19_the_sun_park_lyra.png',
  judgement: '/assets/tarot/major_20_judgement_park_lyra.png',
  the_world: '/assets/tarot/major_21_the_world_park_lyra.png',
}

const majorArcanaCards: TarotCard[] = [
  {
    id: 'the_fool',
    nameKo: '광대',
    nameEn: 'The Fool',
    number: 0,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['시작', '모험', '순수함', '가능성'],
      reversed: ['성급함', '준비 부족', '산만함', '가벼운 회피'],
    },
    meanings: {
      daily: {
        upright: '오늘은 작게라도 새 흐름을 열기 좋은 날이야. 완벽한 계획보다 첫 움직임이 더 큰 힌트를 줄 수 있어.',
        reversed: '시작하고 싶은 마음은 좋지만 발밑을 한 번 더 봐. 오늘은 충동보다 준비물 체크가 너를 지켜줘.',
      },
      love: {
        upright: '관계에서 가벼운 대화와 솔직한 호기심이 문을 열 수 있어. 결과보다 편안한 접촉을 먼저 생각해봐.',
        reversed: '설렘을 이유로 서두르지 마. 상대의 속도와 네 감정의 안전선을 함께 확인하는 게 좋아.',
      },
      career: {
        upright: '새 아이디어를 시험하기 좋은 흐름이야. 큰 결정 전 작은 프로토타입으로 가능성을 확인해봐.',
        reversed: '일을 벌리기 전에 목표와 자원을 정리해. 오늘의 핵심은 시작보다 방향 확인이야.',
      },
      advice: {
        upright: '두려움이 줄어들 때까지 기다리지 말고, 부담 없는 한 걸음을 골라봐.',
        reversed: '마음이 들떠 있다면 체크리스트를 짧게 써봐. 자유에도 최소한의 기준은 필요해.',
      },
    },
    fortune: {
      upright: '새로운 문이 보일 수 있어. 문을 열지는 네 선택이야.',
      reversed: '잠깐 멈춰도 흐름은 사라지지 않아. 준비하면 더 가볍게 움직일 수 있어.',
    },
    action: {
      upright: '오늘 처음 해볼 일 하나를 15분만 시도해.',
      reversed: '시작 전 필요한 것 3가지를 적고 하나만 준비해.',
    },
    contentSeed: {
      upright: '첫 시도, 어색하지만 반짝이는 시작, 작은 용기의 기록',
      reversed: '성급함을 다듬는 과정, 준비의 미학, 멈춤 뒤 다시 시작',
    },
  },
  {
    id: 'the_magician',
    nameKo: '마법사',
    nameEn: 'The Magician',
    number: 1,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['실행력', '집중', '기술', '창조'],
      reversed: ['분산', '과장', '자원 낭비', '망설임'],
    },
    meanings: {
      daily: {
        upright: '이미 가진 도구가 생각보다 많아. 오늘은 하나를 골라 실제 결과물로 바꾸는 데 집중해봐.',
        reversed: '할 수 있는 것이 많아서 오히려 흩어질 수 있어. 가장 중요한 한 가지에 에너지를 모아봐.',
      },
      love: {
        upright: '말과 행동의 일치가 매력으로 보일 수 있어. 마음을 표현하되 작은 행동으로 확인시켜줘.',
        reversed: '상대에게 멋져 보이려는 마음이 커질 수 있어. 꾸미기보다 진짜 의도를 말해봐.',
      },
      career: {
        upright: '기획, 말하기, 제작 능력이 연결되는 날이야. 손에 있는 자원을 묶어 빠르게 실행해봐.',
        reversed: '아이디어는 좋은데 산출물이 흐려질 수 있어. 범위를 줄이고 완료 기준을 정해.',
      },
      advice: {
        upright: '도구는 이미 준비돼 있어. 오늘은 사용하는 사람이 되는 쪽을 선택해.',
        reversed: '능력을 증명하려 애쓰기보다 하나를 끝내는 경험을 만들어.',
      },
    },
    fortune: {
      upright: '손에 든 것이 길이 될 수 있어. 작동시키면 흐름이 보일 거야.',
      reversed: '말보다 결과물이 필요한 날이야. 작은 완성이 자신감을 돌려줘.',
    },
    action: {
      upright: '오늘 만들 수 있는 최소 결과물 하나를 정해서 끝내.',
      reversed: '열어둔 작업 탭을 줄이고 핵심 작업 하나만 남겨.',
    },
    contentSeed: {
      upright: '도구를 연결하는 사람, 말이 현실이 되는 순간, 손끝의 집중',
      reversed: '흩어진 에너지 수습, 과장을 덜어낸 진짜 능력, 작은 완성',
    },
  },
  {
    id: 'the_high_priestess',
    nameKo: '여사제',
    nameEn: 'The High Priestess',
    number: 2,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['직관', '침묵', '내면', '관찰'],
      reversed: ['억압', '혼란', '불신', '과잉 해석'],
    },
    meanings: {
      daily: {
        upright: '오늘은 바깥의 소음보다 안쪽의 미세한 감각이 더 정확할 수 있어. 서두르지 말고 관찰해봐.',
        reversed: '느낌이 많아 판단이 흐려질 수 있어. 사실과 감정을 분리해서 적어보면 도움이 돼.',
      },
      love: {
        upright: '상대의 말보다 반복되는 태도가 힌트가 될 수 있어. 묻기 전에 먼저 조용히 바라봐.',
        reversed: '혼자 추측이 커지면 마음이 지칠 수 있어. 확인 가능한 것부터 부드럽게 물어봐.',
      },
      career: {
        upright: '데이터 사이에 숨어 있는 패턴을 읽기 좋은 날이야. 회의보다 정리 시간이 더 생산적일 수 있어.',
        reversed: '불확실한 정보로 결론을 내리지 마. 근거가 부족한 부분을 표시해두는 게 좋아.',
      },
      advice: {
        upright: '대답을 만들기보다 대답이 올라올 공간을 만들어.',
        reversed: '직관과 불안을 구분해. 몸이 편안해지는 선택을 기준으로 삼아봐.',
      },
    },
    fortune: {
      upright: '조용한 힌트가 가까이에 있어. 느리게 보면 보일 수 있어.',
      reversed: '혼란은 신호일 수 있지만 결론은 아니야. 확인의 시간이 필요해.',
    },
    action: {
      upright: '휴대폰 없이 10분 동안 오늘의 감각을 메모해.',
      reversed: '걱정과 사실을 두 칸으로 나눠 적어봐.',
    },
    contentSeed: {
      upright: '침묵 속의 대답, 달빛 아래 숨은 진실, 직관의 노트',
      reversed: '불안과 직관의 경계, 추측을 내려놓는 밤, 확인의 언어',
    },
  },
  {
    id: 'the_empress',
    nameKo: '여황제',
    nameEn: 'The Empress',
    number: 3,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['풍요', '창조', '돌봄', '감각'],
      reversed: ['소진', '과잉 돌봄', '불균형', '창작 정체'],
    },
    meanings: {
      daily: {
        upright: '오늘은 감각을 회복할수록 에너지가 살아나. 먹고 쉬고 만드는 기본을 다정하게 챙겨봐.',
        reversed: '남을 챙기느라 네 리듬이 밀릴 수 있어. 먼저 너를 채우는 시간이 필요해.',
      },
      love: {
        upright: '따뜻한 표현이 관계를 부드럽게 만들 수 있어. 작은 배려를 아끼지 않아도 좋아.',
        reversed: '애정이 부담으로 변하지 않게 경계를 확인해. 돌봄과 희생은 같은 말이 아니야.',
      },
      career: {
        upright: '아이디어가 형태를 갖기 좋은 흐름이야. 감각적인 디테일을 결과물에 넣어봐.',
        reversed: '완벽한 아름다움에 막히기보다 초안을 먼저 꺼내. 창작은 돌봄처럼 반복으로 자라.',
      },
      advice: {
        upright: '네가 좋아하는 감각 하나를 오늘의 작업에 섞어봐.',
        reversed: '에너지가 비어 있다면 더 만들기 전에 회복부터 선택해.',
      },
    },
    fortune: {
      upright: '따뜻한 것이 자라날 수 있는 날이야. 돌본 만큼 형태가 생겨.',
      reversed: '비어 있는 컵으로는 오래 줄 수 없어. 먼저 채워도 괜찮아.',
    },
    action: {
      upright: '좋아하는 향, 색, 음악 중 하나를 작업 환경에 넣어.',
      reversed: '오늘 해야 할 돌봄 중 하나를 줄이거나 도움을 요청해.',
    },
    contentSeed: {
      upright: '감각의 풍요, 자라나는 창작물, 나를 돌보는 장면',
      reversed: '소진된 창작자, 돌봄의 경계, 다시 채우는 오후',
    },
  },
  {
    id: 'the_emperor',
    nameKo: '황제',
    nameEn: 'The Emperor',
    number: 4,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['구조', '안정', '책임', '기준'],
      reversed: ['경직', '통제', '압박', '불안정'],
    },
    meanings: {
      daily: {
        upright: '오늘은 기준을 세우면 마음이 편해질 수 있어. 시간, 돈, 작업 범위를 숫자로 정리해봐.',
        reversed: '계획이 너를 돕는 대신 누르고 있다면 조정이 필요해. 규칙은 바꿀 수 있어야 오래가.',
      },
      love: {
        upright: '관계에서 안정감을 주는 행동이 중요해. 약속을 작게 잡고 지키는 것이 신뢰가 돼.',
        reversed: '상대나 나를 통제하려는 마음이 올라올 수 있어. 요구보다 필요를 말해봐.',
      },
      career: {
        upright: '체계가 성과를 밀어주는 날이야. 역할, 마감, 우선순위를 분명히 해봐.',
        reversed: '책임감이 과해지면 판단이 굳을 수 있어. 위임하거나 기준을 낮출 부분을 찾아.',
      },
      advice: {
        upright: '오늘의 왕국은 작은 루틴 하나에서 시작돼.',
        reversed: '강해 보이려 하기보다 안정적인 방식을 다시 설계해.',
      },
    },
    fortune: {
      upright: '단단한 틀이 너를 가둘 수도, 지켜줄 수도 있어. 오늘은 지켜주는 쪽으로 써봐.',
      reversed: '너무 꽉 쥐면 흐름이 막혀. 손의 힘을 조금 빼도 무너지지 않아.',
    },
    action: {
      upright: '오늘의 우선순위 3개와 마감 시간을 적어.',
      reversed: '지금 너무 빡빡한 규칙 하나를 현실적으로 낮춰.',
    },
    contentSeed: {
      upright: '책상 위의 질서, 책임 있는 리더, 안정감을 주는 루틴',
      reversed: '통제를 내려놓는 연습, 부드러운 권위, 다시 설계한 규칙',
    },
  },
  {
    id: 'the_hierophant',
    nameKo: '교황',
    nameEn: 'The Hierophant',
    number: 5,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['배움', '전통', '멘토', '공동체'],
      reversed: ['관습 의심', '독립', '낡은 규칙', '새 관점'],
    },
    meanings: {
      daily: {
        upright: '검증된 방법을 참고하면 시간을 아낄 수 있어. 오늘은 혼자 헤매기보다 배워보는 날이야.',
        reversed: '남들이 정한 방식이 꼭 너에게 맞지는 않을 수 있어. 규칙의 이유를 먼저 물어봐.',
      },
      love: {
        upright: '공통된 가치관이 관계를 안정시킬 수 있어. 서로 중요하게 여기는 것을 이야기해봐.',
        reversed: '관계의 모양을 남의 기준으로 판단하지 마. 둘만의 규칙을 세워도 괜찮아.',
      },
      career: {
        upright: '멘토, 문서, 기존 프로세스가 도움이 돼. 이미 있는 지식을 잘 빌려 써봐.',
        reversed: '관성적인 업무 방식이 효율을 막을 수 있어. 바꿀 수 있는 작은 규칙을 찾아.',
      },
      advice: {
        upright: '배우는 태도가 오늘의 지름길이야.',
        reversed: '존중하되 그대로 따르지는 마. 네 상황에 맞게 번역해.',
      },
    },
    fortune: {
      upright: '좋은 조언이 가까이 있을 수 있어. 듣고 골라 쓰면 돼.',
      reversed: '낡은 답이 전부는 아니야. 너만의 문장을 만들어도 좋아.',
    },
    action: {
      upright: '믿을 만한 자료 하나를 읽고 실행 포인트 1개를 뽑아.',
      reversed: '당연하다고 여긴 규칙 하나에 왜 필요한지 질문해.',
    },
    contentSeed: {
      upright: '멘토의 한마디, 오래된 지혜의 재해석, 공동체의 온기',
      reversed: '규칙 밖의 배움, 나만의 의식, 전통을 새로 쓰는 사람',
    },
  },
  {
    id: 'the_lovers',
    nameKo: '연인',
    nameEn: 'The Lovers',
    number: 6,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['선택', '연결', '조화', '진심'],
      reversed: ['갈등', '불일치', '회피', '흔들림'],
    },
    meanings: {
      daily: {
        upright: '오늘은 무엇을 선택하느냐보다 왜 선택하는지가 중요해. 네 가치와 맞는 쪽을 살펴봐.',
        reversed: '마음과 행동이 어긋나면 피곤해질 수 있어. 우선 네 진심을 정확히 확인해.',
      },
      love: {
        upright: '진솔한 대화가 가까움을 만들 수 있어. 상대를 설득하기보다 마음을 나눠봐.',
        reversed: '관계 안의 차이를 무시하지 마. 맞추기 전에 어디가 다른지 인정하는 게 먼저야.',
      },
      career: {
        upright: '협업이나 파트너십에서 좋은 힌트가 생길 수 있어. 혼자보다 함께 설계해봐.',
        reversed: '팀의 방향이 다를 수 있어. 불편한 지점을 명확히 말해야 정리가 돼.',
      },
      advice: {
        upright: '선택은 진심을 현실로 옮기는 방식이야.',
        reversed: '모두를 만족시키려 하기보다 네 기준을 먼저 세워.',
      },
    },
    fortune: {
      upright: '마음이 끌리는 선택에 이유가 있을 수 있어. 천천히 들어봐.',
      reversed: '망설임도 정보야. 왜 흔들리는지 보면 선택이 정리돼.',
    },
    action: {
      upright: '오늘 중요한 선택 하나에 네 가치 3가지를 대입해봐.',
      reversed: '싫은 것과 원하는 것을 각각 3개씩 적어.',
    },
    contentSeed: {
      upright: '두 사람이 마주 보는 순간, 선택 앞의 진심, 연결의 온도',
      reversed: '엇갈린 마음의 지도, 모두를 만족시키지 않는 용기, 갈등의 번역',
    },
  },
  {
    id: 'the_chariot',
    nameKo: '전차',
    nameEn: 'The Chariot',
    number: 7,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['전진', '의지', '집중', '승부감'],
      reversed: ['방향 상실', '과속', '분산', '무리'],
    },
    meanings: {
      daily: {
        upright: '오늘은 추진력이 살아날 수 있어. 목적지를 분명히 하면 속도가 너를 도와줘.',
        reversed: '빨리 가려는 마음이 방향을 흐릴 수 있어. 출발 전에 목표를 한 문장으로 정리해.',
      },
      love: {
        upright: '관계에서 적극적인 표현이 도움이 될 수 있어. 다만 상대의 반응도 함께 살펴봐.',
        reversed: '밀어붙이기보다 속도를 맞추는 게 좋아. 이기는 대화보다 이어지는 대화를 선택해.',
      },
      career: {
        upright: '마감이나 목표를 향해 힘 있게 움직이기 좋은 날이야. 방해 요소를 줄여봐.',
        reversed: '일이 많아질수록 핸들이 흔들릴 수 있어. 지금은 속도보다 통제가 중요해.',
      },
      advice: {
        upright: '목표를 작게 고정하고 앞으로 밀어.',
        reversed: '멈춤은 실패가 아니야. 방향을 되찾는 기술이야.',
      },
    },
    fortune: {
      upright: '움직이면 길이 더 또렷해질 수 있어. 오늘의 힘을 한곳에 써봐.',
      reversed: '속도를 줄이면 더 멀리 갈 수 있어. 핸들을 다시 잡아.',
    },
    action: {
      upright: '90분 집중 블록 하나를 정하고 알림을 꺼.',
      reversed: '오늘 하지 않을 일 2개를 먼저 정해.',
    },
    contentSeed: {
      upright: '도시를 가르는 전차, 집중의 질주, 목적지를 향한 눈빛',
      reversed: '과속 뒤의 정지선, 방향을 다시 잡는 손, 멈춰 선 전차',
    },
  },
  {
    id: 'strength',
    nameKo: '힘',
    nameEn: 'Strength',
    number: 8,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['용기', '인내', '부드러움', '자기조절'],
      reversed: ['자책', '소진', '불안', '감정 과부하'],
    },
    meanings: {
      daily: {
        upright: '오늘의 힘은 크게 밀어붙이는 데 있지 않아. 차분히 버티고 부드럽게 조절하는 데 있어.',
        reversed: '스스로에게 너무 엄격해질 수 있어. 오늘은 채찍보다 회복이 더 좋은 선택이야.',
      },
      love: {
        upright: '따뜻한 인내가 관계를 안정시킬 수 있어. 바로 결론 내리기보다 마음을 들어봐.',
        reversed: '참는 것만이 사랑은 아니야. 힘든 지점은 부드럽게 표현해야 해.',
      },
      career: {
        upright: '압박 속에서도 페이스를 지키면 실력이 드러날 수 있어. 조용히 꾸준한 쪽을 택해.',
        reversed: '번아웃 신호를 무시하지 마. 일정 조정이 성과를 지키는 방법일 수 있어.',
      },
      advice: {
        upright: '오늘은 부드러운 태도가 가장 강한 전략이야.',
        reversed: '나를 몰아붙이는 말을 멈추고 필요한 도움을 하나 요청해.',
      },
    },
    fortune: {
      upright: '조용한 용기가 너를 지탱할 수 있어. 크게 증명하지 않아도 돼.',
      reversed: '약해진 게 아니라 많이 쓴 거야. 회복도 힘의 일부야.',
    },
    action: {
      upright: '어려운 대화 하나를 공격 없이 차분히 시작해.',
      reversed: '오늘 자신에게 하는 말 중 하나를 더 다정하게 바꿔.',
    },
    contentSeed: {
      upright: '부드러운 힘, 손끝의 용기, 조용히 길들이는 마음',
      reversed: '소진된 용기의 회복, 자책을 멈추는 장면, 나를 안아주는 힘',
    },
  },
  {
    id: 'the_hermit',
    nameKo: '은둔자',
    nameEn: 'The Hermit',
    number: 9,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['성찰', '고요', '탐구', '내면의 빛'],
      reversed: ['고립', '회피', '외로움', '닫힘'],
    },
    meanings: {
      daily: {
        upright: '조용히 생각할 시간이 필요해. 혼자 있는 시간이 오늘의 방향을 더 선명하게 만들 수 있어.',
        reversed: '혼자만의 시간이 회복이 아니라 단절이 되고 있다면 작은 연결을 시도해봐.',
      },
      love: {
        upright: '관계 안에서도 자기 마음을 들여다볼 시간이 필요해. 거리를 두는 것이 꼭 멀어짐은 아니야.',
        reversed: '마음을 닫은 채 기다리면 오해가 커질 수 있어. 짧게라도 상태를 알려줘.',
      },
      career: {
        upright: '깊이 파고드는 작업에 적합한 날이야. 혼자 정리하고 검토하는 시간을 확보해.',
        reversed: '너무 오래 혼자 붙잡고 있으면 막힐 수 있어. 한 사람에게 피드백을 구해봐.',
      },
      advice: {
        upright: '내면의 작은 등불이 가리키는 방향을 따라가.',
        reversed: '고립과 집중을 구분해. 필요하면 문을 조금 열어.',
      },
    },
    fortune: {
      upright: '답은 조용한 곳에서 더 잘 들릴 수 있어. 오늘은 깊게 보는 날이야.',
      reversed: '혼자 버티는 시간이 길어졌다면 연결도 선택지야.',
    },
    action: {
      upright: '30분 동안 혼자 문제를 정리하고 결론 한 줄을 써.',
      reversed: '믿을 만한 사람 한 명에게 현재 고민을 짧게 공유해.',
    },
    contentSeed: {
      upright: '등불을 든 사람, 고요한 탐구, 혼자서 찾은 문장',
      reversed: '닫힌 방의 창문, 고립에서 연결로, 말하지 못한 마음',
    },
  },
  {
    id: 'wheel_of_fortune',
    nameKo: '운명의 수레바퀴',
    nameEn: 'Wheel of Fortune',
    number: 10,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['전환', '흐름', '기회', '순환'],
      reversed: ['지연', '반복', '저항', '타이밍 조정'],
    },
    meanings: {
      daily: {
        upright: '작은 전환점이 보일 수 있어. 흐름을 억지로 만들기보다 열린 틈을 잘 알아차려봐.',
        reversed: '비슷한 패턴이 반복될 수 있어. 이번에는 다르게 반응할 방법을 찾아봐.',
      },
      love: {
        upright: '관계의 분위기가 바뀔 수 있어. 자연스러운 대화의 타이밍을 놓치지 마.',
        reversed: '같은 문제로 돌아왔다면 탓하기보다 패턴을 살펴봐. 바꿀 수 있는 반응이 있을 거야.',
      },
      career: {
        upright: '상황이 움직이는 신호가 있을 수 있어. 준비된 사람에게 기회가 더 잘 보일 거야.',
        reversed: '타이밍이 조금 늦어지는 듯해도 정비할 시간이 생긴 거야. 자료와 포트폴리오를 다듬어.',
      },
      advice: {
        upright: '흐름을 읽고 작게 올라타. 모든 것을 통제할 필요는 없어.',
        reversed: '반복되는 선택을 바꾸면 반복되는 결과도 달라질 수 있어.',
      },
    },
    fortune: {
      upright: '흐름이 움직이고 있어. 오늘은 신호를 잘 보는 사람이 유리해.',
      reversed: '멈춘 듯해도 순환은 계속돼. 이번에는 다른 선택을 해봐.',
    },
    action: {
      upright: '최근 생긴 기회 하나에 작은 응답을 보내.',
      reversed: '반복되는 문제 하나를 적고 이번에 다르게 할 행동을 정해.',
    },
    contentSeed: {
      upright: '돌아가는 빛의 바퀴, 타이밍의 문, 흐름 위에 선 사람',
      reversed: '반복의 고리, 느려진 시계, 패턴을 바꾸는 손',
    },
  },
  {
    id: 'justice',
    nameKo: '정의',
    nameEn: 'Justice',
    number: 11,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['균형', '공정함', '책임', '사실'],
      reversed: ['편향', '회피', '불균형', '미정리'],
    },
    meanings: {
      daily: {
        upright: '오늘은 감정보다 사실을 차분히 보는 태도가 필요해. 균형 잡힌 판단이 마음을 가볍게 해줄 수 있어.',
        reversed: '한쪽 이야기만 듣고 결론 내리지 마. 빠진 정보가 있는지 확인해봐.',
      },
      love: {
        upright: '서로의 입장을 공정하게 듣는 시간이 필요해. 책임을 나누면 관계가 더 안정될 수 있어.',
        reversed: '억울함이 쌓였다면 조용히 정리해 말해봐. 비난보다 사실 중심이 좋아.',
      },
      career: {
        upright: '계약, 기준, 피드백을 꼼꼼히 볼 때야. 명확한 기록이 너를 도와줄 수 있어.',
        reversed: '업무 기준이 모호하면 문제가 생길 수 있어. 합의된 내용을 문서로 남겨.',
      },
      advice: {
        upright: '균형은 모두에게 같은 양이 아니라 필요한 만큼을 보는 일이야.',
        reversed: '감정의 결론과 사실의 결론을 따로 적어봐.',
      },
    },
    fortune: {
      upright: '정리한 만큼 선명해질 수 있어. 오늘은 기준이 힘이 돼.',
      reversed: '불균형을 느낀다면 이유가 있어. 차분히 근거를 모아봐.',
    },
    action: {
      upright: '결정 전 사실, 감정, 원하는 결과를 세 줄로 분리해.',
      reversed: '모호한 약속 하나를 문장으로 확인해.',
    },
    contentSeed: {
      upright: '저울 위의 선택, 공정한 대화, 기록이 지켜주는 하루',
      reversed: '기울어진 저울, 말하지 못한 억울함, 사실을 다시 맞추는 장면',
    },
  },
  {
    id: 'the_hanged_man',
    nameKo: '매달린 사람',
    nameEn: 'The Hanged Man',
    number: 12,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['멈춤', '관점 전환', '수용', '기다림'],
      reversed: ['정체감', '희생 과다', '저항', '불편한 지연'],
    },
    meanings: {
      daily: {
        upright: '오늘은 빨리 해결하려 할수록 답이 멀어질 수 있어. 잠깐 멈춰 다른 각도에서 봐.',
        reversed: '기다림이 배움이 아니라 소모가 되고 있다면 조건을 다시 확인해봐.',
      },
      love: {
        upright: '상대 입장에서 바라보면 새로운 이해가 생길 수 있어. 결론보다 관점 전환이 먼저야.',
        reversed: '한쪽만 계속 맞추고 있다면 균형을 다시 잡아야 해. 네 마음도 중요한 정보야.',
      },
      career: {
        upright: '프로젝트를 다른 구조로 보면 막힌 부분이 풀릴 수 있어. 오늘은 재배치가 핵심이야.',
        reversed: '계속 미뤄지는 일이 있다면 결정 기준이 빠졌을 수 있어. 다음 조건을 명확히 해.',
      },
      advice: {
        upright: '멈춤을 실패로 보지 마. 관점이 바뀌면 선택지도 바뀌어.',
        reversed: '희생이 습관이 되지 않게 네 몫을 확인해.',
      },
    },
    fortune: {
      upright: '잠깐 거꾸로 보면 보이지 않던 길이 보일 수 있어.',
      reversed: '기다리는 이유가 흐려졌다면 다시 물어볼 때야.',
    },
    action: {
      upright: '막힌 문제를 제3자의 입장에서 5줄로 다시 써.',
      reversed: '내가 감당하지 않아도 되는 일 하나를 분리해.',
    },
    contentSeed: {
      upright: '거꾸로 본 풍경, 멈춤 속의 통찰, 시간을 접는 사람',
      reversed: '오래 매달린 마음, 희생의 경계, 내려와 다시 걷기',
    },
  },
  {
    id: 'death',
    nameKo: '변화',
    nameEn: 'Death',
    number: 13,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['전환', '마무리', '정리', '새 출발'],
      reversed: ['미련', '저항', '지연', '놓지 못함'],
    },
    meanings: {
      daily: {
        upright: '무언가를 정리하면 새 공간이 생길 수 있어. 오늘은 끝내는 행동이 시작을 도와줘.',
        reversed: '이미 지나간 방식에 계속 기대고 있을 수 있어. 아쉬움과 필요를 구분해봐.',
      },
      love: {
        upright: '관계의 오래된 패턴을 바꾸기 좋은 때야. 끝을 말하기보다 변화를 위한 대화를 시작해.',
        reversed: '붙잡는 마음이 커질 수 있어. 정말 원하는 것이 사람인지 익숙함인지 살펴봐.',
      },
      career: {
        upright: '낡은 프로세스를 정리하면 작업 속도가 좋아질 수 있어. 종료할 일을 먼저 정해.',
        reversed: '바꿔야 할 것을 알면서도 미루고 있을 수 있어. 작은 폐기부터 시작해.',
      },
      advice: {
        upright: '끝은 무서운 예언이 아니라 공간을 만드는 선택일 수 있어.',
        reversed: '놓지 못한 이유를 다정하게 확인하고, 하나씩 가볍게 해.',
      },
    },
    fortune: {
      upright: '정리가 새로운 가능성을 부를 수 있어. 비워야 보이는 것이 있어.',
      reversed: '미련은 자연스러워. 다만 미련이 네 선택을 대신하게 두지는 마.',
    },
    action: {
      upright: '오늘 더 이상 필요 없는 파일, 약속, 생각 중 하나를 정리해.',
      reversed: '놓기 어려운 이유를 쓰고 아직 필요한 것만 남겨.',
    },
    contentSeed: {
      upright: '비워진 방의 빛, 오래된 장면의 마무리, 다시 싹트는 시작',
      reversed: '붙잡은 손을 천천히 펴는 순간, 미련의 이름, 정리 전의 밤',
    },
  },
  {
    id: 'temperance',
    nameKo: '절제',
    nameEn: 'Temperance',
    number: 14,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['균형', '조율', '회복', '중용'],
      reversed: ['과함', '불균형', '조급함', '소모'],
    },
    meanings: {
      daily: {
        upright: '오늘은 극단보다 조율이 좋아. 속도와 휴식, 일과 감정을 적당히 섞어봐.',
        reversed: '너무 몰아치거나 너무 미루는 흐름이 생길 수 있어. 중간 지점을 다시 잡아.',
      },
      love: {
        upright: '서로의 페이스를 맞추면 관계가 편안해질 수 있어. 같은 속도보다 조율이 중요해.',
        reversed: '한쪽 감정이 과열될 수 있어. 바로 반응하기보다 시간을 두고 말해봐.',
      },
      career: {
        upright: '여러 자원을 섞어 좋은 결과를 만들 수 있어. 협업과 일정 조율에 유리해.',
        reversed: '업무량과 에너지가 맞지 않을 수 있어. 일정, 범위, 기대치를 다시 조정해.',
      },
      advice: {
        upright: '좋은 리듬은 억지가 아니라 조율에서 나와.',
        reversed: '과한 것을 줄이면 필요한 것이 더 잘 보여.',
      },
    },
    fortune: {
      upright: '섞고 맞추는 과정에서 답이 나올 수 있어. 오늘은 부드러운 균형의 날이야.',
      reversed: '한쪽으로 치우쳤다는 신호가 있다면 늦기 전에 조정해.',
    },
    action: {
      upright: '오늘 일정에 회복 시간 20분을 먼저 넣어.',
      reversed: '과하게 잡은 목표 하나를 현실적인 크기로 줄여.',
    },
    contentSeed: {
      upright: '두 컵 사이 흐르는 빛, 균형의 레시피, 조율되는 하루',
      reversed: '넘치는 컵, 속도를 낮추는 손, 다시 맞추는 리듬',
    },
  },
  {
    id: 'the_devil',
    nameKo: '악마',
    nameEn: 'The Devil',
    number: 15,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['집착', '습관', '유혹', '그림자'],
      reversed: ['자각', '해방', '거리두기', '회복'],
    },
    meanings: {
      daily: {
        upright: '반복되는 습관이 오늘의 선택을 좁힐 수 있어. 탓하기보다 무엇에 묶였는지 알아차려봐.',
        reversed: '묶여 있던 패턴을 조금씩 풀 힘이 생길 수 있어. 완벽한 탈출보다 작은 거리두기가 중요해.',
      },
      love: {
        upright: '강한 끌림이 판단을 흐릴 수 있어. 애정, 불안, 집착을 구분해서 바라봐.',
        reversed: '관계 속 불편한 패턴을 알아차릴 수 있어. 부드럽지만 분명한 경계가 도움이 돼.',
      },
      career: {
        upright: '성과 압박이나 인정 욕구가 과해질 수 있어. 왜 이 일을 하는지 다시 확인해봐.',
        reversed: '소모적인 업무 습관을 줄일 기회야. 끊을 수 있는 반복 행동 하나를 찾아.',
      },
      advice: {
        upright: '그림자를 보는 건 무서운 일이 아니라 선택권을 되찾는 일이야.',
        reversed: '작게 멀어지는 행동이 자유의 시작이 될 수 있어.',
      },
    },
    fortune: {
      upright: '나를 묶는 것을 알아차리면 이미 선택지가 생겨.',
      reversed: '이전보다 조금 더 자유롭게 반응할 수 있어. 그 작은 차이를 믿어봐.',
    },
    action: {
      upright: '오늘 반복적으로 확인하는 앱이나 생각 하나에 제한 시간을 걸어.',
      reversed: '나를 편하게 만드는 건강한 대체 행동 하나를 정해.',
    },
    contentSeed: {
      upright: '빛 아래 드러난 그림자, 끌림과 경계, 습관의 사슬',
      reversed: '느슨해지는 매듭, 자유를 연습하는 사람, 그림자와 화해',
    },
  },
  {
    id: 'the_tower',
    nameKo: '탑',
    nameEn: 'The Tower',
    number: 16,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['각성', '재정렬', '충격', '진실'],
      reversed: ['회피', '불안', '변화 지연', '점검'],
    },
    meanings: {
      daily: {
        upright: '예상 밖의 정보가 기존 생각을 흔들 수 있어. 놀람을 결론으로 만들지 말고 재정렬의 신호로 봐.',
        reversed: '불편한 문제를 미루고 있을 수 있어. 작은 균열을 지금 점검하면 부담을 줄일 수 있어.',
      },
      love: {
        upright: '솔직한 대화가 필요할 수 있어. 무너뜨리기보다 숨은 사실을 함께 보는 태도가 중요해.',
        reversed: '갈등을 피하려다 마음이 더 쌓일 수 있어. 안전한 방식으로 한 가지부터 말해봐.',
      },
      career: {
        upright: '프로젝트 구조를 급히 바꿔야 할 신호가 있을 수 있어. 당황보다 우선순위 재정렬이 필요해.',
        reversed: '위험 요소를 알고도 미루고 있다면 체크리스트를 만들어. 작은 수정이 큰 부담을 줄여.',
      },
      advice: {
        upright: '흔들림은 끝이 아니라 다시 설계하라는 알림일 수 있어.',
        reversed: '피하고 싶은 것 하나를 작게 확인해. 확인이 불안을 줄여줘.',
      },
    },
    fortune: {
      upright: '갑작스러운 깨달음이 올 수 있어. 놀람 뒤에 무엇을 바꿀지 보면 돼.',
      reversed: '불안을 크게 키우기보다 점검표로 낮춰봐. 손댈 수 있는 것부터.',
    },
    action: {
      upright: '오늘 가장 불안정한 계획 하나의 대안을 적어.',
      reversed: '미뤄둔 확인 메시지나 점검 하나를 처리해.',
    },
    contentSeed: {
      upright: '번개 뒤의 재설계, 흔들리는 탑과 새 지도, 진실의 순간',
      reversed: '균열을 보는 손전등, 미루던 점검, 무너지기 전의 수정',
    },
  },
  {
    id: 'the_star',
    nameKo: '별',
    nameEn: 'The Star',
    number: 17,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['희망', '치유', '영감', '회복'],
      reversed: ['낙담', '의심', '회복 지연', '희미한 믿음'],
    },
    meanings: {
      daily: {
        upright: '오늘은 조금 가벼워질 수 있는 힌트가 있어. 큰 확신보다 작은 희망을 돌보는 날이야.',
        reversed: '희망이 멀게 느껴질 수 있어. 그래도 회복을 돕는 아주 작은 루틴은 남겨둘 수 있어.',
      },
      love: {
        upright: '상처 뒤에도 부드러운 대화가 가능해질 수 있어. 기대를 강요하지 말고 마음을 열어봐.',
        reversed: '관계에 대한 믿음이 약해졌다면 속도를 늦춰. 신뢰는 작은 반복으로 회복돼.',
      },
      career: {
        upright: '영감과 장기 비전이 살아날 수 있어. 오늘 떠오른 아이디어를 기록해둬.',
        reversed: '성과가 늦어 보여도 방향을 잃은 건 아닐 수 있어. 작은 개선 지표를 봐.',
      },
      advice: {
        upright: '희망을 큰 말로 만들지 말고 오늘 가능한 회복 행동으로 바꿔.',
        reversed: '믿음이 약한 날에도 나를 돌보는 행동은 선택할 수 있어.',
      },
    },
    fortune: {
      upright: '희미한 빛이라도 방향을 알려줄 수 있어. 오늘은 그 빛을 따라가봐.',
      reversed: '별이 안 보이는 날도 있어. 잠깐 쉬어도 하늘은 그대로야.',
    },
    action: {
      upright: '영감을 준 문장이나 이미지를 하나 저장해.',
      reversed: '회복을 돕는 아주 작은 행동 하나를 10분만 해.',
    },
    contentSeed: {
      upright: '밤하늘의 회복, 물을 붓는 사람, 희망의 작은 루틴',
      reversed: '구름 뒤의 별, 늦게 오는 회복, 희미한 믿음을 지키는 손',
    },
  },
  {
    id: 'the_moon',
    nameKo: '달',
    nameEn: 'The Moon',
    number: 18,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['직관', '감정', '무의식', '상상'],
      reversed: ['명확화', '불안 완화', '현실 확인', '오해 해소'],
    },
    meanings: {
      daily: {
        upright: '감정의 물결이 크게 느껴질 수 있어. 오늘은 확정하기보다 관찰하고 기록하는 쪽이 좋아.',
        reversed: '흐릿하던 것이 조금씩 선명해질 수 있어. 오해를 줄이려면 확인 가능한 것부터 봐.',
      },
      love: {
        upright: '상대의 마음을 단정하기 쉬운 날이야. 추측이 커지기 전에 부드럽게 확인해봐.',
        reversed: '감정의 안개가 걷히며 대화가 쉬워질 수 있어. 솔직하지만 차분하게 말해.',
      },
      career: {
        upright: '정보가 불완전할 수 있어. 상상력은 좋지만 결정 전 검증이 필요해.',
        reversed: '불명확한 지점이 정리될 수 있어. 자료를 다시 읽으면 빠진 단서가 보일 거야.',
      },
      advice: {
        upright: '느낌은 소중하지만 결론은 천천히 내려.',
        reversed: '현실 확인은 직관을 부정하는 게 아니라 도와주는 일이야.',
      },
    },
    fortune: {
      upright: '달빛은 모든 것을 선명히 보여주진 않아. 그래서 천천히 보는 지혜가 필요해.',
      reversed: '안개가 조금 걷힐 수 있어. 확인한 만큼 마음도 차분해져.',
    },
    action: {
      upright: '불안한 생각 하나를 적고 근거가 있는지 표시해.',
      reversed: '헷갈리는 일 하나를 직접 확인할 질문으로 바꿔.',
    },
    contentSeed: {
      upright: '달빛 아래 감정의 파도, 꿈과 현실 사이, 안개 낀 길',
      reversed: '안개가 걷히는 새벽, 오해의 실마리, 현실 확인의 빛',
    },
  },
  {
    id: 'the_sun',
    nameKo: '태양',
    nameEn: 'The Sun',
    number: 19,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['활력', '명료함', '기쁨', '자신감'],
      reversed: ['지친 낙관', '과열', '숨은 부담', '회복 필요'],
    },
    meanings: {
      daily: {
        upright: '밝은 에너지가 올라올 수 있어. 오늘은 좋은 것을 숨기지 말고 밖으로 꺼내봐.',
        reversed: '밝게 지내려는 마음 뒤에 피로가 있을 수 있어. 억지 웃음보다 진짜 회복이 필요해.',
      },
      love: {
        upright: '솔직하고 따뜻한 표현이 관계를 밝게 만들 수 있어. 좋은 마음을 아끼지 마.',
        reversed: '기대가 커질수록 서운함도 커질 수 있어. 상대에게 바라는 것을 현실적으로 조정해.',
      },
      career: {
        upright: '성과를 보여주기 좋은 날이야. 네 작업을 명확하게 설명하면 반응이 좋아질 수 있어.',
        reversed: '너무 많은 에너지를 한 번에 쓰지 마. 보여주는 것과 쉬는 것의 균형을 잡아.',
      },
      advice: {
        upright: '오늘은 밝은 쪽을 선택해도 괜찮아. 기쁨도 중요한 정보야.',
        reversed: '낙관은 좋지만 몸의 신호를 무시하지 마.',
      },
    },
    fortune: {
      upright: '명료한 빛이 들어올 수 있어. 네 장점을 드러내기 좋은 날이야.',
      reversed: '빛이 강하면 그림자도 보여. 쉬어가면 다시 밝아질 수 있어.',
    },
    action: {
      upright: '최근 만든 것 하나를 누군가에게 보여줘.',
      reversed: '오늘 에너지를 아끼기 위해 일정 하나를 가볍게 조정해.',
    },
    contentSeed: {
      upright: '햇빛 속의 자신감, 공개되는 작업물, 웃음이 번지는 장면',
      reversed: '강한 빛 뒤의 피로, 쉬어가는 태양, 밝음의 속도 조절',
    },
  },
  {
    id: 'judgement',
    nameKo: '심판',
    nameEn: 'Judgement',
    number: 20,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['각성', '응답', '재평가', '새 단계'],
      reversed: ['자기비판', '미룸', '과거 집착', '부름 회피'],
    },
    meanings: {
      daily: {
        upright: '오늘은 오래된 선택을 다시 바라볼 수 있어. 자책보다 배움의 관점으로 정리해봐.',
        reversed: '스스로를 너무 엄하게 평가할 수 있어. 과거의 나를 벌주기보다 지금의 선택을 봐.',
      },
      love: {
        upright: '관계에서 중요한 깨달음이 생길 수 있어. 솔직한 정리가 다음 대화를 도와줘.',
        reversed: '지난 실수나 기억이 현재를 가릴 수 있어. 반복하지 않을 방법에 집중해.',
      },
      career: {
        upright: '성과와 방향을 재평가하기 좋은 날이야. 다음 단계로 갈 기준을 정해봐.',
        reversed: '평가받는 두려움 때문에 미루고 있을 수 있어. 완벽보다 제출 가능한 형태를 만들어.',
      },
      advice: {
        upright: '부름은 거창하지 않아. 지금 더 정직하게 살라는 작은 신호일 수 있어.',
        reversed: '자책을 계획으로 바꿔. 그게 가장 현실적인 회복이야.',
      },
    },
    fortune: {
      upright: '새로운 단계로 부르는 신호가 있을 수 있어. 준비된 만큼 응답해봐.',
      reversed: '과거의 목소리가 커도 현재의 선택권은 네게 있어.',
    },
    action: {
      upright: '최근 3개월을 돌아보고 계속할 것, 멈출 것, 바꿀 것을 적어.',
      reversed: '자책 문장 하나를 다음 행동 문장으로 바꿔.',
    },
    contentSeed: {
      upright: '새벽의 호출, 다시 깨어나는 사람, 다음 단계의 문',
      reversed: '자책을 내려놓는 의식, 과거와 현재의 대화, 미뤄둔 응답',
    },
  },
  {
    id: 'the_world',
    nameKo: '세계',
    nameEn: 'The World',
    number: 21,
    arcana: 'major',
    imageUrl: '',
    keywords: {
      upright: ['완성', '통합', '성취', '확장'],
      reversed: ['미완성', '마무리 지연', '흩어짐', '마지막 점검'],
    },
    meanings: {
      daily: {
        upright: '하나의 흐름을 마무리하거나 통합하기 좋은 날이야. 끝낸 것을 인정하는 것도 중요한 행동이야.',
        reversed: '거의 다 왔지만 작은 마무리가 남아 있을 수 있어. 마지막 10퍼센트를 차분히 정리해.',
      },
      love: {
        upright: '서로를 더 넓게 이해하는 흐름이 생길 수 있어. 관계의 성장을 인정해봐.',
        reversed: '관계의 한 단계가 완전히 정리되지 않았을 수 있어. 남은 이야기를 부드럽게 나눠.',
      },
      career: {
        upright: '프로젝트를 공개하거나 마무리하기 좋은 에너지야. 결과를 정리해 다음 기회로 연결해.',
        reversed: '완료 직전의 디테일이 중요해. 체크리스트로 누락을 줄여봐.',
      },
      advice: {
        upright: '완성은 끝이 아니라 다음 순환의 발판이야.',
        reversed: '마무리를 미루지 마. 닫아야 다음 문이 보여.',
      },
    },
    fortune: {
      upright: '하나의 원이 닫히고 더 넓은 원이 열릴 수 있어. 성취를 조용히 인정해.',
      reversed: '아직 남은 조각이 있어도 괜찮아. 오늘 하나만 맞추면 충분해.',
    },
    action: {
      upright: '끝낸 일 하나를 기록하고 배운 점 3가지를 남겨.',
      reversed: '미완성 작업 하나의 마지막 체크리스트를 작성해.',
    },
    contentSeed: {
      upright: '완성된 원, 세계를 통과한 사람, 다음 여정 전의 축하',
      reversed: '마지막 퍼즐 조각, 닫히지 않은 문, 완성을 향한 정리',
    },
  },
]

export const majorArcana: TarotCard[] = majorArcanaCards.map(card => ({
  ...card,
  imageUrl: majorArcanaImageUrls[card.id] ?? card.imageUrl ?? '',
}))
