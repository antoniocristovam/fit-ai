import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { ButtonSize, ButtonVariant } from './types';

export const buttonVariantStyles: Record<ButtonVariant, object> = {
  primary: {
    backgroundColor: theme.colors.brand.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: theme.colors.brand.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: theme.colors.feedback.error,
  },
};

export const buttonSizeStyles: Record<ButtonSize, object> = {
  sm: { paddingVertical: theme.spacing.xs, paddingHorizontal: theme.spacing.md },
  md: { paddingVertical: theme.spacing.sm, paddingHorizontal: theme.spacing.lg },
  lg: { paddingVertical: theme.spacing.md, paddingHorizontal: theme.spacing.xl },
};

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.md,
    gap: theme.spacing.xs,
  },
  fullWidth: {
    width: '100%',
  },
  label: {
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.text.inverse,
  },
  labelSecondary: {
    color: theme.colors.brand.primary,
  },
  labelGhost: {
    color: theme.colors.brand.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});
