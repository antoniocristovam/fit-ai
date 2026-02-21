import { Colors } from '../../styles/colors';
import { FontSize, FontWeight } from '../../styles/typography';
import { TypographyVariant } from './types';

export const variantStyles: Record<TypographyVariant, object> = {
  display: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    letterSpacing: -2,
    lineHeight: 52,
  },
  h1: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    letterSpacing: -0.8,
    lineHeight: 40,
  },
  h2: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    letterSpacing: -0.4,
  },
  h3: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.semibold,
    color: Colors.text.primary,
  },
  body: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.regular,
    color: Colors.text.primary,
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  caption: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
    lineHeight: 16,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.text.primary,
    letterSpacing: 0.2,
  },
  overline: {
    fontSize: 10,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
};
