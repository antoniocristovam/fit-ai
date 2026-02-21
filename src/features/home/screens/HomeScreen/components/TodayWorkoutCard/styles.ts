import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

export const styles = StyleSheet.create({
  shadow: {
    borderRadius: 24,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
  },

  card: {
    backgroundColor: Colors.background.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.border.default,
    padding: Spacing.xl,
    overflow: 'hidden',
    gap: Spacing.md,
  },

  cardDecor: {
    position: 'absolute',
    top: -24,
    right: -24,
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.brand.primaryMuted,
    transform: [{ rotate: '30deg' }],
  },

  cardHighlight: {
    position: 'absolute',
    top: 0,
    left: Spacing.xl,
    right: Spacing.xl,
    height: 1,
    backgroundColor: Colors.brand.primary,
    opacity: 0.25,
    borderRadius: BorderRadius.full,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  badge: {
    backgroundColor: Colors.brand.primaryMuted,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'rgba(181, 255, 77, 0.3)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },

  badgeText: {
    fontSize: 9,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    letterSpacing: 1.5,
  },

  chevron: {
    fontSize: 22,
    color: Colors.text.tertiary,
  },

  nameBlock: {
    gap: 2,
  },

  category: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  name: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    letterSpacing: 0.2,
  },

  muscleGroups: {
    flexDirection: 'row',
    gap: Spacing.xs,
    flexWrap: 'wrap',
  },

  muscleChip: {
    backgroundColor: Colors.background.input,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border.default,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },

  muscleChipText: {
    fontSize: 10,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
    letterSpacing: 1,
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },

  statItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },

  statValue: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
  },

  statLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
  },

  statSep: {
    width: 1,
    height: 18,
    backgroundColor: Colors.border.default,
  },

  progressSection: {
    gap: Spacing.xs,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  progressLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 0.4,
  },

  progressPct: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
  },

  progressTrack: {
    height: 4,
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
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },

  ctaWrapper: {
    marginTop: Spacing.xxs,
  },

  ctaGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.brand.primaryGlow,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 22,
  },

  ctaBtn: {
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.55,
    shadowRadius: 24,
    elevation: 16,
  },
});
