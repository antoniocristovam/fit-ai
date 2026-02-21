import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

const SCREEN_W = Dimensions.get('window').width;
const GRID_H_PADDING = Spacing.lg * 2;
const GRID_GAP = Spacing.sm;
const CARD_W = (SCREEN_W - GRID_H_PADDING - GRID_GAP) / 2;

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },

  sectionLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
    letterSpacing: 2.5,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GRID_GAP,
  },

  card: {
    width: CARD_W,
    backgroundColor: Colors.background.card,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.border.default,
    padding: Spacing.lg,
    gap: Spacing.xxs,
    overflow: 'hidden',
    minHeight: 110,
    justifyContent: 'flex-end',
  },

  cardAccent: {
    borderColor: 'rgba(181, 255, 77, 0.28)',
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },

  accentDecor: {
    position: 'absolute',
    top: -28,
    right: -28,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: Colors.brand.primaryMuted,
  },

  cardLabel: {
    fontSize: 9,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
    letterSpacing: 1.5,
    marginBottom: Spacing.xs,
  },

  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },

  value: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    lineHeight: FontSize.xxxl,
    includeFontPadding: false,
  },

  valueAccent: {
    color: Colors.brand.primary,
  },

  unit: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    marginBottom: 2,
  },

  unitAccent: {
    color: Colors.brand.primary,
    opacity: 0.7,
  },

  trend: {
    fontSize: 10,
    fontWeight: FontWeight.semibold,
    color: Colors.brand.primary,
    letterSpacing: 0.3,
    marginTop: Spacing.xxs,
  },
});
