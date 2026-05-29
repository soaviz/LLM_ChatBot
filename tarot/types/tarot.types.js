/**
 * @fileoverview VENUX Tarot — 공유 타입 정의 (JSDoc + TypeScript-compatible)
 * TypeScript 전환 시 이 파일만 .ts 로 교체하면 됨
 */

// ─────────────────────────────────────────────────────────
// Enum-like constants (JS에서 string literal union 대체)
// ─────────────────────────────────────────────────────────

/** @enum {string} */
export const ArcanaType = /** @type {const} */ ({
  MAJOR: 'major',
  MINOR: 'minor',
});

/** @enum {string} */
export const TarotCategory = /** @type {const} */ ({
  DAILY:  'daily',
  LOVE:   'love',
  WORK:   'work',
  ADVICE: 'advice',
});

/** @enum {string} */
export const DeckMode = /** @type {const} */ ({
  MAJOR_ONLY: 'majorOnly',
  FULL_DECK:  'fullDeck',
});

/** @enum {string} */
export const MinorSuit = /** @type {const} */ ({
  WANDS:   'wands',
  CUPS:    'cups',
  SWORDS:  'swords',
  PENTACLES: 'pentacles',
});

/** @enum {string} */
export const TarotSymbol = /** @type {const} */ ({
  STAR:   'star',
  MOON:   'moon',
  SUN:    'sun',
  TOWER:  'tower',
  WORLD:  'world',
  HEART:  'heart',
  EYE:    'eye',
  WHEEL:  'wheel',
  BELL:   'bell',
  WIND:   'wind',
  WAND:   'wand',
  FLOWER: 'flower',
});

// ─────────────────────────────────────────────────────────
// JSDoc @typedef — TypeScript interface 등가
// ─────────────────────────────────────────────────────────

/**
 * 타로 카드 메시지 (카테고리별)
 * @typedef {Object} TarotMessages
 * @property {string} daily  - 오늘의 운세 메시지
 * @property {string} love   - 연애운 메시지
 * @property {string} work   - 직업운 메시지
 * @property {string} advice - 조언 메시지
 */

/**
 * 타로 카드 기본 인터페이스 (Major + Minor 공통)
 * @typedef {Object} TarotCard
 * @property {string}                    id         - 고유 식별자 (예: 'fool', 'ace_wands')
 * @property {number}                    num        - 카드 번호 (0-21: major, 1-14: minor)
 * @property {'major'|'minor'}           arcana     - 아르카나 종류
 * @property {string}                    name       - 카드명 (한국어)
 * @property {string}                    nameEn     - 카드명 (영어)
 * @property {string}                    keyword    - 핵심 키워드 (한국어)
 * @property {string}                    color      - 대표 색상 HEX
 * @property {string}                    sym        - 아이콘 심볼 키
 * @property {string}                    upright    - 정방향 의미
 * @property {string}                    reversed   - 역방향 의미
 * @property {TarotMessages}             msgs       - 카테고리별 메시지
 * @property {string}                    aiContext  - AI 프롬프트 주입용 컨텍스트
 */

/**
 * 마이너 아르카나 전용 확장
 * @typedef {TarotCard & { suit: 'wands'|'cups'|'swords'|'pentacles' }} MinorArcanaCard
 */

/**
 * 오늘의 타로 상태 (localStorage 저장 구조)
 * @typedef {Object} DailyTarotState
 * @property {string}       date          - 날짜 'YYYY-MM-DD' (KST)
 * @property {string}       cardId        - 오늘 뽑은 카드 ID
 * @property {string}       cat           - 선택한 카테고리
 * @property {boolean}      chatFreeUsed  - 무료 채팅 소진 여부
 * @property {number}       chatMsgCount  - 오늘 전송한 채팅 수
 */

/**
 * 덱 설정
 * @typedef {Object} DeckConfig
 * @property {'majorOnly'|'fullDeck'} mode  - 덱 모드
 * @property {TarotCard[]}            cards - 현재 활성 카드 배열
 */

/**
 * 타로 접근 권한 결과
 * @typedef {Object} TarotAccessResult
 * @property {boolean} allowed   - 접근 가능 여부
 * @property {'free'|'coin'|'byok'|'blocked'} reason - 접근 이유
 * @property {number}  remaining - 남은 무료/코인 횟수
 */

/**
 * AI 채팅 메시지
 * @typedef {Object} TarotChatMessage
 * @property {'user'|'assistant'|'system'} role    - 역할
 * @property {string}                      content - 내용
 */

/**
 * 타로 리딩 결과
 * @typedef {Object} TarotReading
 * @property {TarotCard}    card      - 뽑힌 카드
 * @property {string}       category  - 카테고리
 * @property {string}       message   - 결과 메시지
 * @property {string}       date      - 리딩 날짜 (KST)
 */
