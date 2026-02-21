import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xxs,
  },
  label: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.text.primary,
  },
  input: {
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    fontSize: theme.fontSize.md,
    color: theme.colors.text.primary,
    backgroundColor: theme.colors.background.primary,
  },
  inputError: {
    borderColor: theme.colors.feedback.error,
  },
  error: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.feedback.error,
  },
  hint: {
    fontSize: theme.fontSize.xs,
    color: theme.colors.text.secondary,
  },
});
