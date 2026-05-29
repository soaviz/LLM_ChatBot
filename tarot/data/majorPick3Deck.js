/**
 * VenuX 타로 3장 리딩 — 메이저 아르카나 22장
 * @typedef {Object} TarotPick3Card
 * @property {string} id
 * @property {number} number
 * @property {string} nameKo
 * @property {string} nameEn
 * @property {'major'} arcana
 * @property {string[]} keywords
 * @property {string} loveMeaning
 * @property {string} moneyMeaning
 * @property {string} careerMeaning
 * @property {string} imageBack
 * @property {string} imageFront
 * @property {string} color
 * @property {string} sym
 */

/** @type {TarotPick3Card[]} */
const MAJOR_PICK3_DECK = [
  { id: 'the_fool', number: 0, nameKo: '바보', nameEn: 'The Fool', arcana: 'major', keywords: ['시작', '모험', '순수', '가능성'], loveMeaning: '마음이 가볍게 열리는 흐름이에요. 설렘을 부담 없이 표현해도 괜찮아요.', moneyMeaning: '작은 시도가 새로운 기회로 이어질 수 있어요. 완벽한 계획보다 첫 걸음이 중요해요.', careerMeaning: '새로운 배움이나 프로젝트를 시작하기 좋은 날이에요. 어색해도 괜찮다고 스스로에게 말해주세요.', imageBack: '', imageFront: 'the_fool', color: '#34d399', sym: 'wind' },
  { id: 'the_magician', number: 1, nameKo: '마법사', nameEn: 'The Magician', arcana: 'major', keywords: ['실행', '집중', '능력', '창조'], loveMeaning: '말과 행동이 맞을 때 매력이 커져요. 진심을 작은 행동으로 보여주세요.', moneyMeaning: '가진 자원을 잘 연결하면 수익의 실마리가 보여요. 한 가지에 집중해 실행해보세요.', careerMeaning: '기획을 결과물로 바꾸기 좋은 에너지예요. 손에 있는 도구를 믿고 움직여보세요.', imageBack: '', imageFront: 'the_magician', color: '#e879f9', sym: 'wand' },
  { id: 'the_high_priestess', number: 2, nameKo: '여사제', nameEn: 'The High Priestess', arcana: 'major', keywords: ['직관', '침묵', '내면', '관찰'], loveMeaning: '말보다 분위기와 태도가 진심을 말해줄 수 있어요. 조용히 마음을 읽어보세요.', moneyMeaning: '서두르지 않을수록 판단이 선명해져요. 숫자 사이의 패턴을 느껴보세요.', careerMeaning: '혼자 정리하는 시간이 답을 줘요. 직관을 메모로 남겨두면 도움이 돼요.', imageBack: '', imageFront: 'the_high_priestess', color: '#818cf8', sym: 'eye' },
  { id: 'the_empress', number: 3, nameKo: '여황제', nameEn: 'The Empress', arcana: 'major', keywords: ['풍요', '돌봄', '창조', '안정'], loveMeaning: '따뜻한 애정과 배려가 관계를 키워요. 받는 것도 주는 것만큼 소중해요.', moneyMeaning: '풍요는 천천히 자라요. 지출과 저축의 균형을 부드럽게 맞춰보세요.', careerMeaning: '창의적인 아이디어가 빛나는 날이에요. 만든 것을 세상에 내보일 용기를 가져보세요.', imageBack: '', imageFront: 'the_empress', color: '#fb923c', sym: 'flower' },
  { id: 'the_emperor', number: 4, nameKo: '황제', nameEn: 'The Emperor', arcana: 'major', keywords: ['구조', '안정', '책임', '리더십'], loveMeaning: '신뢰와 약속이 사랑을 단단하게 해요. 책임 있는 말 한마디가 큰 힘이 돼요.', moneyMeaning: '계획과 규칙이 재정을 지켜줘요. 기준을 세우면 마음도 편안해져요.', careerMeaning: '리더십이 필요한 순간이에요. 흔들리지 않는 태도가 팀을 안정시켜요.', imageBack: '', imageFront: 'the_emperor', color: '#f59e0b', sym: 'tower' },
  { id: 'the_hierophant', number: 5, nameKo: '교황', nameEn: 'The Hierophant', arcana: 'major', keywords: ['전통', '배움', '가치', '조언'], loveMeaning: '공통의 가치가 두 사람을 가깝게 해요. 진솔한 대화가 깊이를 만들어요.', moneyMeaning: '검증된 방법을 따르면 안정감이 생겨요. 멘토의 조언에 귀 기울여보세요.', careerMeaning: '배움과 자격이 성장의 열쇠예요. 기본을 다지면 다음 단계가 열려요.', imageBack: '', imageFront: 'the_hierophant', color: '#a78bfa', sym: 'bell' },
  { id: 'the_lovers', number: 6, nameKo: '연인', nameEn: 'The Lovers', arcana: 'major', keywords: ['선택', '연결', '조화', '진심'], loveMeaning: '마음이 끌리는 쪽을 인정할 때 관계가 살아나요. 진심을 숨기지 마세요.', moneyMeaning: '협력과 파트너십이 재물의 흐름을 넓혀요. 함께할 사람을 신중히 골라보세요.', careerMeaning: '중요한 선택의 날이에요. 가치관에 맞는 길을 고르면 후회가 적어요.', imageBack: '', imageFront: 'the_lovers', color: '#f472b6', sym: 'heart' },
  { id: 'the_chariot', number: 7, nameKo: '전차', nameEn: 'The Chariot', arcana: 'major', keywords: ['의지', '전진', '승리', '집중'], loveMeaning: '적극적인 관심이 관계를 앞으로 이끌어요. 노력은 상대에게도 전해져요.', moneyMeaning: '목표를 향해 밀어붙이면 성과가 따라와요. 방향만 잃지 않으면 돼요.', careerMeaning: '마감과 도전을 이겨낼 힘이 있어요. 집중력이 승부를 가르는 날이에요.', imageBack: '', imageFront: 'the_chariot', color: '#60a5fa', sym: 'wheel' },
  { id: 'strength', number: 8, nameKo: '힘', nameEn: 'Strength', arcana: 'major', keywords: ['용기', '인내', '온화', '자신감'], loveMeaning: '부드러움이 가장 강한 사랑의 언어예요. 상대를 다독이며 기다려주세요.', moneyMeaning: '조급함을 내려놓으면 흐름이 부드러워져요. 꾸준함이 재물의 기반이에요.', careerMeaning: '압박 속에서도 침착함을 유지할 수 있어요. 자신감을 잃지 마세요.', imageBack: '', imageFront: 'strength', color: '#f97316', sym: 'sun' },
  { id: 'the_hermit', number: 9, nameKo: '은둔자', nameEn: 'The Hermit', arcana: 'major', keywords: ['성찰', '고요', '지혜', '탐색'], loveMeaning: '서두르지 않아도 괜찮아요. 천천히 알아가는 과정도 아름다워요.', moneyMeaning: '지금은 큰 지출보다 점검의 시기예요. 필요와 욕구를 구분해보세요.', careerMeaning: '혼자 깊이 생각할 시간이 필요해요. 내면의 답이 방향을 알려줄 거예요.', imageBack: '', imageFront: 'the_hermit', color: '#a78bfa', sym: 'eye' },
  { id: 'wheel_of_fortune', number: 10, nameKo: '운명의 수레바퀴', nameEn: 'Wheel of Fortune', arcana: 'major', keywords: ['변화', '기회', '순환', '전환'], loveMeaning: '관계의 흐름이 바뀌고 있어요. 자연스러운 타이밍을 믿어보세요.', moneyMeaning: '운의 바퀴가 좋은 쪽으로 돌아가요. 기회가 오면 망설이지 마세요.', careerMeaning: '전환점에 서 있어요. 변화를 두려워하기보다 준비해보세요.', imageBack: '', imageFront: 'wheel_of_fortune', color: '#fbbf24', sym: 'wheel' },
  { id: 'justice', number: 11, nameKo: '정의', nameEn: 'Justice', arcana: 'major', keywords: ['균형', '공정', '진실', '책임'], loveMeaning: '공정한 마음이 관계를 건강하게 해요. 주고받음의 균형을 살펴보세요.', moneyMeaning: '계약과 기록이 중요해요. 감정보다 사실을 기준으로 판단하세요.', careerMeaning: '정직한 선택이 장기적으로 이익이에요. 책임 있는 태도가 인정받아요.', imageBack: '', imageFront: 'justice', color: '#34d399', sym: 'world' },
  { id: 'the_hanged_man', number: 12, nameKo: '매달린 사람', nameEn: 'The Hanged Man', arcana: 'major', keywords: ['관점', '희생', '멈춤', '수용'], loveMeaning: '잠시 멈춰 바라보면 관계가 새롭게 보여요. 다른 각도를 시도해보세요.', moneyMeaning: '속도를 늦추는 것이 오히려 손실을 줄여요. 기다림도 전략이에요.', careerMeaning: '익숙한 방식을 내려놓을 때 통찰이 와요. 유연함이 답이 될 수 있어요.', imageBack: '', imageFront: 'the_hanged_man', color: '#67e8f9', sym: 'moon' },
  { id: 'death', number: 13, nameKo: '죽음', nameEn: 'Death', arcana: 'major', keywords: ['끝', '변화', '재탄생', '정리'], loveMeaning: '오래된 패턴이 끝나고 새로운 사랑의 방식이 시작될 수 있어요. 두려워하지 마세요.', moneyMeaning: '낡은 습관을 정리하면 흐름이 맑아져요. 비우면 채워질 공간이 생겨요.', careerMeaning: '전환의 시기예요. 끝은 다음 성장을 위한 문이에요.', imageBack: '', imageFront: 'death', color: '#94a3b8', sym: 'tower' },
  { id: 'temperance', number: 14, nameKo: '절제', nameEn: 'Temperance', arcana: 'major', keywords: ['균형', '조화', '인내', '조율'], loveMeaning: '서로의 페이스를 맞추면 관계가 편안해져요. 중간 지점을 찾아보세요.', moneyMeaning: '극단을 피하면 재정이 안정돼요. 소비와 저축의 황금비를 찾아보세요.', careerMeaning: '꾸준한 조율이 성과를 만들어요. 한 번에 다 하려 하지 마세요.', imageBack: '', imageFront: 'temperance', color: '#38bdf8', sym: 'world' },
  { id: 'the_devil', number: 15, nameKo: '악마', nameEn: 'The Devil', arcana: 'major', keywords: ['집착', '유혹', '속박', '인식'], loveMeaning: '집착과 사랑을 구분해보세요. 자유로운 마음이 더 깊은 연결을 만들어요.', moneyMeaning: '충동 소비에 주의해요. 습관을 알아차리는 것만으로도 변화가 시작돼요.', careerMeaning: '나를 묶는 패턴을 직시할 때예요. 인식이 곧 해방의 첫걸음이에요.', imageBack: '', imageFront: 'the_devil', color: '#f87171', sym: 'tower' },
  { id: 'the_tower', number: 16, nameKo: '탑', nameEn: 'The Tower', arcana: 'major', keywords: ['변화', '깨달음', '해방', '전환'], loveMeaning: '숨겨둔 감정이 드러날 수 있어요. 솔직함이 오히려 관계를 살려요.', moneyMeaning: '예상 밖의 변화에 유연하게 대응하세요. 무너진 자리에 더 나은 기반이 올 수 있어요.', careerMeaning: '기존 구조가 흔들릴 수 있어요. 위기 속에서 새로운 가능성을 찾아보세요.', imageBack: '', imageFront: 'the_tower', color: '#ef4444', sym: 'tower' },
  { id: 'the_star', number: 17, nameKo: '별', nameEn: 'The Star', arcana: 'major', keywords: ['희망', '치유', '영감', '평화'], loveMeaning: '마음이 치유되고 있어요. 다시 믿어도 괜찮다는 신호가 와요.', moneyMeaning: '희망적인 흐름이 보여요. 장기적인 꿈에 조금씩 투자해보세요.', careerMeaning: '영감이 찾아오는 밤이에요. 비전을 적어두면 길이 선명해져요.', imageBack: '', imageFront: 'the_star', color: '#c77dff', sym: 'star' },
  { id: 'the_moon', number: 18, nameKo: '달', nameEn: 'The Moon', arcana: 'major', keywords: ['직관', '감정', '불안', '탐색'], loveMeaning: '모든 감정이 다 드러나지 않았을 수 있어요. 서두르지 말고 느껴보세요.', moneyMeaning: '불확실함 속에서 직관을 믿되, 사실 확인은 잊지 마세요.', careerMeaning: '안개 속을 걷는 느낌이 들 수 있어요. 조용히 내면의 나침반을 들어보세요.', imageBack: '', imageFront: 'the_moon', color: '#7eb8f7', sym: 'moon' },
  { id: 'the_sun', number: 19, nameKo: '태양', nameEn: 'The Sun', arcana: 'major', keywords: ['기쁨', '성공', '활력', '명료'], loveMeaning: '밝고 따뜻한 에너지가 가득해요. 사랑을 숨기지 말고 표현해보세요.', moneyMeaning: '좋은 소식이나 성과가 기대돼요. 자신감 있게 보여주세요.', careerMeaning: '성취와 인정의 날이에요. 당당하게 빛나도 괜찮아요.', imageBack: '', imageFront: 'the_sun', color: '#ffb347', sym: 'sun' },
  { id: 'judgement', number: 20, nameKo: '심판', nameEn: 'Judgement', arcana: 'major', keywords: ['각성', '부름', '정리', '새 출발'], loveMeaning: '관계에서 중요한 깨달음이 올 수 있어요. 과거를 정리하고 앞으로 가보세요.', moneyMeaning: '재정을 재평가하기 좋은 시기예요. 새로운 기준을 세워보세요.', careerMeaning: '부름에 응답할 때예요. 진짜 하고 싶은 일로 방향을 맞춰보세요.', imageBack: '', imageFront: 'judgement', color: '#38bdf8', sym: 'bell' },
  { id: 'the_world', number: 21, nameKo: '세계', nameEn: 'The World', arcana: 'major', keywords: ['완성', '통합', '성취', '확장'], loveMeaning: '관계가 한 단계 완성에 가까워요. 함께한 여정을 인정해보세요.', moneyMeaning: '노력의 결실이 보이기 시작해요. 성과를 기록하고 다음 목표를 세워보세요.', careerMeaning: '하나의 사이클이 마무리돼요. 완성을 축하하고 새 문을 열 준비를 하세요.', imageBack: '', imageFront: 'the_world', color: '#4ade80', sym: 'world' },
];

if (typeof window !== 'undefined') {
  window.MAJOR_PICK3_DECK = MAJOR_PICK3_DECK;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAJOR_PICK3_DECK };
}
