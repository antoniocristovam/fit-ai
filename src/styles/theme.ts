import { Colors } from './colors';
import { Spacing, BorderRadius } from './spacing';
import { FontSize, FontWeight, LineHeight } from './typography';

export const theme = {
  colors: {
    background: {
      primary: Colors.neutral[0],
      secondary: Colors.neutral[50],
      dark: Colors.neutral[900],
    },
    text: {
      primary: Colors.neutral[900],
      secondary: Colors.neutral[500],
      inverse: Colors.neutral[0],
      disabled: Colors.neutral[300],
    },
    brand: {
      primary: Colors.primary[500],
      light: Colors.primary[100],
      dark: Colors.primary[700],
    },
    feedback: Colors.feedback,
    border: Colors.neutral[200],
  },
  spacing: Spacing,
  borderRadius: BorderRadius,
  fontSize: FontSize,
  fontWeight: FontWeight,
  lineHeight: LineHeight,
} as const;

export type Theme = typeof theme;
