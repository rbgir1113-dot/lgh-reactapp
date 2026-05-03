import theme from "../../../styles/theme";

export const colors = {
  primary:            theme.PALETTE.primary.main,
  primaryDark:        theme.PALETTE.primary.dark,
  primaryLight:       theme.PALETTE.primary.extraLight,
  primaryMid:         "rgba(67, 89, 252, 0.4)",
  gradientMain:       theme.GRADIENT.deepBlue,
  textWhite:          theme.PALETTE.white,
  textMain:           theme.TEXT_COLOR.basic,
  textSub:            theme.GRAYSCALE[9],
  bgCard:             "#FFFFFF",
  bgSection:          theme.GRAYSCALE[10],
  bgPage:             theme.GRAYSCALE[10],
  bgPopupOverlay:     "rgba(0, 0, 0, 0.45)",
  border:             theme.GRAYSCALE[8],
  live:               theme.PALETTE.secondary.main,
  liveBg:             theme.PALETTE.secondary.light,
  red:                theme.PALETTE.red,
  danger:             theme.PALETTE.red,
  dangerOverlay:      "rgba(255, 80, 80, 0.5)",
  overlayWhite15:     "rgba(255, 255, 255, 0.15)",
  tagOnPrimary:       "rgba(255, 255, 255, 0.15)",
  tagOnPrimaryBorder: "rgba(255, 255, 255, 0.30)",
  accessibilitySign:  theme.PALETTE.third.main,
  accessibilityRead:  theme.PALETTE.warning.main,
};

export const fonts = {
  family: "'pretendard', sans-serif",
  weight: {
    light:   theme.FONT_WEIGHT.light,
    regular: theme.FONT_WEIGHT.regular,
    medium:  theme.FONT_WEIGHT.medium,
    bold:    theme.FONT_WEIGHT.bold,
  },
  size: {
    xs:   theme.FONT_SIZE.h12,
    sm:   theme.FONT_SIZE.h11,
    md:   theme.FONT_SIZE.h10,
    base: theme.FONT_SIZE.h9,
    xl:   theme.FONT_SIZE.h7,
  },
};

export const radius = {
  card:   "20px",
  pill:   "100px",
  button: "12px",
  input:  "8px",
  sm:     "6px",
};

export const shadows = {
  float: "0 8px 24px rgba(0, 0, 0, 0.12)",
};
