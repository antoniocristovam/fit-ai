import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.default,
  },

  exitBtn: {
    width: 36,
    height: 36,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.background.card,
    borderWidth: 1,
    borderColor: Colors.border.default,
    justifyContent: 'center',
    alignItems: 'center',
  },

  exitIcon: {
    fontSize: 13,
    color: Colors.text.secondary,
    fontWeight: FontWeight.semibold,
  },

  centerBlock: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },

  workoutName: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    letterSpacing: 0.3,
  },

  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xxs,
  },

  countDot: {
    width: 5,
    height: 5,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.brand.primary,
  },

  countText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 0.3,
  },

  elapsedBlock: {
    alignItems: 'flex-end',
    gap: 2,
    minWidth: 56,
  },

  elapsedLabel: {
    fontSize: 9,
    fontWeight: FontWeight.bold,
    color: Colors.text.tertiary,
    letterSpacing: 1.5,
  },

  elapsedValue: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.black,
    color: Colors.brand.primary,
    letterSpacing: 1,
    includeFontPadding: false,
  },
});
