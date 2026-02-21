import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { TypographyVariant } from './types';

export const variantStyles: Record<TypographyVariant, object> = {
  heading1: {
    fontSize: theme.fontSize.xxxl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  heading2: {
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.text.primary,
  },
  heading3: {
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.text.primary,
  },
  body: {
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.text.primary,
  },
  bodySmall: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.text.primary,
  },
  caption: {
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.text.secondary,
  },
  label: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.text.primary,
  },
};

export const styles = StyleSheet.create({
  base: {},
});
