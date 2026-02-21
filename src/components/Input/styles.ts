import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/colors';
import { BorderRadius, Spacing } from '../../styles/spacing';
import { FontSize, FontWeight } from '../../styles/typography';

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.xxs,
  },
  label: {
    fontSize: 10,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.input,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border.default,
    paddingHorizontal: Spacing.md,
    height: 54,
    gap: Spacing.sm,
  },
  inputRowFocused: {
    borderColor: Colors.border.focus,
  },
  inputRowError: {
    borderColor: Colors.border.error,
  },
  input: {
    flex: 1,
    fontSize: FontSize.md,
    color: Colors.text.primary,
    height: '100%',
  },
  error: {
    fontSize: FontSize.xs,
    color: Colors.feedback.error,
    marginTop: 2,
  },
  hint: {
    fontSize: FontSize.xs,
    color: Colors.text.secondary,
    marginTop: 2,
  },
});
