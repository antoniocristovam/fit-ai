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

  countText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.brand.primary,
    letterSpacing: 0.3,
  },

  dotsRow: {
    flexDirection: 'row',
    gap: Spacing.xs,
    alignItems: 'center',
  },

  exerciseDot: {
    flex: 1,
    height: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.background.card,
    borderWidth: 1.5,
    borderColor: Colors.border.default,
  },

  progressTrack: {
    height: 3,
    backgroundColor: Colors.border.default,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: Colors.brand.primary,
    borderRadius: BorderRadius.full,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },

  legendRow: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xxs,
  },

  legendDot: {
    width: 7,
    height: 7,
    borderRadius: BorderRadius.full,
  },

  legendDotCompleted: {
    backgroundColor: Colors.brand.primary,
  },

  legendDotCurrent: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.brand.primary,
  },

  legendDotPending: {
    backgroundColor: Colors.background.card,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },

  legendText: {
    fontSize: 10,
    fontWeight: FontWeight.regular,
    color: Colors.text.tertiary,
  },
});
