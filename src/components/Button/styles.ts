import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { BorderRadius, Spacing } from '../../styles/spacing';
import { FontSize, FontWeight } from '../../styles/typography';
import { ButtonSize, ButtonVariant } from './types';

export const variantStyles: Record<ButtonVariant, object> = {
  primary: {
    backgroundColor: Colors.brand.primary,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.brand.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
};

export const sizeStyles: Record<ButtonSize, object> = {
  sm: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
  },
  md: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  lg: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
  },
};

export const labelVariantStyles: Record<ButtonVariant, object> = {
  primary: { color: Colors.text.inverse },
  outline: { color: Colors.brand.primary },
  ghost: { color: Colors.text.secondary },
};

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.md,
    gap: Spacing.xs,
  },
  fullWidth: {
    width: '100%',
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    letterSpacing: 1.5,
  },
  disabled: {
    opacity: 0.4,
  },
});
