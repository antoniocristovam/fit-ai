import { Colors } from './colors';
import { BorderRadius, Spacing } from './spacing';
import { FontSize, FontWeight, LineHeight } from './typography';

export const theme = {
  colors: Colors,
  spacing: Spacing,
  borderRadius: BorderRadius,
  fontSize: FontSize,
  fontWeight: FontWeight,
  lineHeight: LineHeight,
} as const;

export type Theme = typeof theme;
