import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';
import type { DayStatus } from '../../mock';

export const dayDotStyles: Record<DayStatus, object> = {
  trained: {
    backgroundColor: Colors.brand.primary,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 6,
  },
  missed: {
    backgroundColor: 'rgba(255, 69, 58, 0.1)',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 69, 58, 0.35)',
  },
  rest: {
    backgroundColor: Colors.background.card,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  today: {
    backgroundColor: Colors.brand.primaryMuted,
    borderWidth: 2,
    borderColor: Colors.brand.primary,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.secondary,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.border.default,
    padding: Spacing.lg,
    gap: Spacing.md,
  },

  sectionLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
    letterSpacing: 2.5,
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dayColumn: {
    alignItems: 'center',
    gap: Spacing.xxs,
  },

  dayLabel: {
    fontSize: 10,
    fontWeight: FontWeight.semibold,
    color: Colors.text.tertiary,
    letterSpacing: 0.5,
  },

  dayDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  trainedInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.text.inverse,
    opacity: 0.5,
  },

  todayInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.brand.primary,
  },

  missedInner: {
    width: 8,
    height: 2,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.feedback.error,
    opacity: 0.6,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingTop: Spacing.xxs,
  },

  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xxs,
  },

  summaryDot: {
    width: 7,
    height: 7,
    borderRadius: BorderRadius.full,
  },

  summaryDotTrained: {
    backgroundColor: Colors.brand.primary,
  },

  summaryDotMissed: {
    backgroundColor: Colors.feedback.error,
    opacity: 0.7,
  },

  summaryDotToday: {
    backgroundColor: Colors.brand.primary,
    borderWidth: 1.5,
    borderColor: Colors.brand.primary,
    opacity: 0.5,
  },

  summaryValue: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
  },

  summaryLabel: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
  },

  summaryDivider: {
    width: 1,
    height: 12,
    backgroundColor: Colors.border.default,
  },
});
