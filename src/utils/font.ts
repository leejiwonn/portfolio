const Weight = {
  EXTRA_BOLD: 800,
  BOLD: 700,
  SEMI_BOLD: 600,
  MEDIUM: 500,
  LIGHT: 300,
} as const;

const FontSize = {
  SIZE_HEAD_01: 96,
  SIZE_HEAD_02: 82,
  SIZE_HEAD_03: 64,
  SIZE_HEAD_04: 52,
  SIZE_TITLE_01: 36,
  SIZE_TITLE_02: 32,
  SIZE_TITLE_03: 28,
  SIZE_BODY_01: 24,
  SIZE_BODY_02: 20,
  SIZE_BODY_03: 16,
  SIZE_CAPTION_01: 14,
  SIZE_CAPTION_02: 12,
} as const;

const Align = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

const FontType = {
  EXTRA_BOLD_HEAD_01: 'EXTRA_BOLD_HEAD_01',
  EXTRA_BOLD_HEAD_02: 'EXTRA_BOLD_HEAD_02',
  EXTRA_BOLD_HEAD_03: 'EXTRA_BOLD_HEAD_03',
  EXTRA_BOLD_HEAD_04: 'EXTRA_BOLD_HEAD_04',

  BOLD_TITLE_01: 'BOLD_TITLE_01',
  BOLD_TITLE_02: 'BOLD_TITLE_02',
  BOLD_TITLE_03: 'BOLD_TITLE_03',
  BOLD_BODY_01: 'BOLD_BODY_01',
  BOLD_BODY_02: 'BOLD_BODY_02',
  BOLD_BODY_03: 'BOLD_BODY_03',

  SEMI_BOLD_TITLE_01: 'SEMI_BOLD_TITLE_01',
  SEMI_BOLD_TITLE_02: 'SEMI_BOLD_TITLE_02',
  SEMI_BOLD_TITLE_03: 'SEMI_BOLD_TITLE_03',
  SEMI_BOLD_BODY_01: 'SEMI_BOLD_BODY_01',
  SEMI_BOLD_BODY_02: 'SEMI_BOLD_BODY_02',
  SEMI_BOLD_BODY_03: 'SEMI_BOLD_BODY_03',
  SEMI_BOLD_CAPTION_01: 'SEMI_BOLD_CAPTION_01',
  SEMI_BOLD_CAPTION_02: 'SEMI_BOLD_CAPTION_02',

  MEDIUM_HEAD_02: 'MEDIUM_HEAD_02',
  MEDIUM_TITLE_01: 'MEDIUM_TITLE_01',
  MEDIUM_TITLE_02: 'MEDIUM_TITLE_02',
  MEDIUM_TITLE_03: 'MEDIUM_TITLE_03',
  MEDIUM_BODY_01: 'MEDIUM_BODY_01',
  MEDIUM_BODY_02: 'MEDIUM_BODY_02',
  MEDIUM_BODY_03: 'MEDIUM_BODY_03',
  MEDIUM_CAPTION_01: 'MEDIUM_CAPTION_01',
  MEDIUM_CAPTION_02: 'MEDIUM_CAPTION_02',

  LIGHT_TITLE_01: 'LIGHT_TITLE_01',
  LIGHT_TITLE_02: 'LIGHT_TITLE_02',
  LIGHT_TITLE_03: 'LIGHT_TITLE_03',
  LIGHT_BODY_01: 'LIGHT_BODY_01',
  LIGHT_BODY_02: 'LIGHT_BODY_02',
  LIGHT_BODY_03: 'LIGHT_BODY_03',
  LIGHT_CAPTION_01: 'LIGHT_CAPTION_01',
  LIGHT_CAPTION_02: 'LIGHT_CAPTION_02',
} as const;

type Align = typeof Align[keyof typeof Align];
type FontType = typeof FontType[keyof typeof FontType];
type FontStyle = { size: number; weight: number };

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Font {
  export const getStyle = (font: FontType): FontStyle => {
    return {
      weight: getWeight(font),
      size: getSize(font),
    };
  };

  const getSize = (font: FontType) => {
    switch (font) {
      case FontType.EXTRA_BOLD_HEAD_01: {
        return FontSize.SIZE_HEAD_01;
      }

      case FontType.EXTRA_BOLD_HEAD_02:
      case FontType.MEDIUM_HEAD_02: {
        return FontSize.SIZE_HEAD_02;
      }

      case FontType.EXTRA_BOLD_HEAD_03: {
        return FontSize.SIZE_HEAD_03;
      }

      case FontType.EXTRA_BOLD_HEAD_04: {
        return FontSize.SIZE_HEAD_04;
      }

      case FontType.BOLD_TITLE_01:
      case FontType.SEMI_BOLD_TITLE_01:
      case FontType.MEDIUM_TITLE_01:
      case FontType.LIGHT_TITLE_01: {
        return FontSize.SIZE_TITLE_01;
      }

      case FontType.BOLD_TITLE_02:
      case FontType.SEMI_BOLD_TITLE_02:
      case FontType.MEDIUM_TITLE_02:
      case FontType.LIGHT_TITLE_02: {
        return FontSize.SIZE_TITLE_02;
      }

      case FontType.BOLD_TITLE_03:
      case FontType.SEMI_BOLD_TITLE_03:
      case FontType.MEDIUM_TITLE_03:
      case FontType.LIGHT_TITLE_03: {
        return FontSize.SIZE_TITLE_03;
      }

      case FontType.BOLD_BODY_01:
      case FontType.SEMI_BOLD_BODY_01:
      case FontType.MEDIUM_BODY_01:
      case FontType.LIGHT_BODY_01: {
        return FontSize.SIZE_BODY_01;
      }

      case FontType.BOLD_BODY_02:
      case FontType.SEMI_BOLD_BODY_02:
      case FontType.MEDIUM_BODY_02:
      case FontType.LIGHT_BODY_02: {
        return FontSize.SIZE_BODY_02;
      }

      case FontType.BOLD_BODY_03:
      case FontType.SEMI_BOLD_BODY_03:
      case FontType.MEDIUM_BODY_03:
      case FontType.LIGHT_BODY_03: {
        return FontSize.SIZE_BODY_03;
      }

      case FontType.SEMI_BOLD_CAPTION_01:
      case FontType.MEDIUM_CAPTION_01:
      case FontType.LIGHT_CAPTION_01: {
        return FontSize.SIZE_CAPTION_01;
      }

      case FontType.SEMI_BOLD_CAPTION_02:
      case FontType.MEDIUM_CAPTION_02:
      case FontType.LIGHT_CAPTION_02: {
        return FontSize.SIZE_CAPTION_02;
      }
    }

    return FontSize.SIZE_BODY_02;
  };

  const getWeight = (font: FontType) => {
    switch (font) {
      case FontType.EXTRA_BOLD_HEAD_01:
      case FontType.EXTRA_BOLD_HEAD_02:
      case FontType.EXTRA_BOLD_HEAD_03:
      case FontType.EXTRA_BOLD_HEAD_04: {
        return Weight.EXTRA_BOLD;
      }

      case FontType.BOLD_TITLE_01:
      case FontType.BOLD_TITLE_02:
      case FontType.BOLD_TITLE_03:
      case FontType.BOLD_BODY_01:
      case FontType.BOLD_BODY_02:
      case FontType.BOLD_BODY_03: {
        return Weight.BOLD;
      }

      case FontType.SEMI_BOLD_TITLE_01:
      case FontType.SEMI_BOLD_TITLE_02:
      case FontType.SEMI_BOLD_TITLE_03:
      case FontType.SEMI_BOLD_BODY_01:
      case FontType.SEMI_BOLD_BODY_02:
      case FontType.SEMI_BOLD_BODY_03:
      case FontType.SEMI_BOLD_CAPTION_01:
      case FontType.SEMI_BOLD_CAPTION_02: {
        return Weight.SEMI_BOLD;
      }

      case FontType.MEDIUM_HEAD_02:
      case FontType.MEDIUM_TITLE_01:
      case FontType.MEDIUM_TITLE_02:
      case FontType.MEDIUM_TITLE_03:
      case FontType.MEDIUM_BODY_01:
      case FontType.MEDIUM_BODY_02:
      case FontType.MEDIUM_BODY_03:
      case FontType.MEDIUM_CAPTION_01:
      case FontType.MEDIUM_CAPTION_02: {
        return Weight.MEDIUM;
      }

      case FontType.LIGHT_TITLE_01:
      case FontType.LIGHT_TITLE_02:
      case FontType.LIGHT_TITLE_03:
      case FontType.LIGHT_BODY_01:
      case FontType.LIGHT_BODY_02:
      case FontType.LIGHT_BODY_03:
      case FontType.LIGHT_CAPTION_01:
      case FontType.LIGHT_CAPTION_02: {
        return Weight.LIGHT;
      }
    }

    return Weight.MEDIUM;
  };
}

export { Font, FontType, Align };
