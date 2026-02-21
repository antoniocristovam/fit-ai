import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
    letterSpacing: 2.5,
  },

  subLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
  },

  dotsRow: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },

  dot: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dotCompleted: {
    backgroundColor: Colors.brand.primary,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },

  dotCurrent: {
    backgroundColor: Colors.brand.primaryMuted,
    borderWidth: 2.5,
    borderColor: Colors.brand.primary,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 12,
    elevation: 8,
  },

  dotPending: {
    backgroundColor: Colors.background.card,
    borderWidth: 1.5,
    borderColor: Colors.border.default,
  },

  checkmark: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.black,
    color: Colors.text.inverse,
    includeFontPadding: false,
  },

  currentNumber: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.black,
    color: Colors.brand.primary,
    includeFontPadding: false,
  },

  pendingNumber: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.text.tertiary,
    includeFontPadding: false,
  },

  completedCount: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.brand.primary,
    letterSpacing: 0.3,
    alignSelf: 'flex-end',
  },

  restBadge: {
    backgroundColor: Colors.brand.primaryMuted,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(181, 255, 77, 0.3)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },

  restBadgeText: {
    fontSize: 9,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    letterSpacing: 1.2,
  },
});
