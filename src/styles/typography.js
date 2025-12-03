/**
 * Typography 설정
 * 피그마 스타일: {Category}/{Number}_{Weight}
 * Tailwind 클래스: text-{category}-{number}-{weight}
 *
 * @example
 * 피그마: Heading/3_SemiBold → text-heading-3-semibold
 * 피그마: Title/1_Medium → text-title-1-medium
 */

const fontFamily = {
  sans: [
    'Pretendard Variable',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
};

const fontWeight = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

/**
 * 특정 스타일에 여러 weight 변형을 자동 생성하는 헬퍼 함수
 * @param {string} name - 스타일 이름 (예: 'title-1')
 * @param {string} size - 폰트 크기 (예: '16px')
 * @param {string} lineHeight - 행간 (예: '24px')
 * @param {string} letterSpacing - 자간 (예: '0em')
 * @param {string[]} weights - 생성할 weight 배열 (예: ['semibold', 'medium', 'regular'])
 * @returns {Object} weight 변형이 적용된 스타일 객체
 */
function createFontVariants(name, size, lineHeight, letterSpacing, weights) {
  const variants = {};
  weights.forEach((weight) => {
    variants[`${name}-${weight}`] = [
      size,
      {
        fontWeight: fontWeight[weight],
        lineHeight,
        letterSpacing,
      },
    ];
  });
  return variants;
}

/**
 * fontSize 설정
 * 형식: [fontSize, { fontWeight, lineHeight, letterSpacing }]
 * 모든 폰트는 bold, semibold, medium, regular weight를 모두 지원
 */
const allWeights = ['bold', 'semibold', 'medium', 'regular'];

const fontSize = {
  // ============================================
  // Heading
  // ============================================
  ...createFontVariants('heading-1', '28px', '36px', '-0.02em', allWeights),
  ...createFontVariants('heading-2', '24px', '32px', '-0.01em', allWeights),
  ...createFontVariants('heading-3', '20px', '28px', '0em', allWeights),

  // ============================================
  // Title
  // ============================================
  ...createFontVariants('title-1', '16px', '24px', '0em', allWeights),
  ...createFontVariants('title-2', '15px', '22px', '0em', allWeights),
  ...createFontVariants('title-3', '14px', '21px', '0em', allWeights),

  // ============================================
  // Body
  // ============================================
  ...createFontVariants('body-1', '16px', '24px', '0em', allWeights),
  ...createFontVariants('body-2', '14px', '20px', '0em', allWeights),

  // ============================================
  // Caption
  // ============================================
  ...createFontVariants('caption-1', '12px', '16px', '0.02em', allWeights),
  ...createFontVariants('caption-2', '11px', '14px', '0.02em', allWeights),
};

module.exports = {
  fontFamily,
  fontWeight,
  fontSize,
};
