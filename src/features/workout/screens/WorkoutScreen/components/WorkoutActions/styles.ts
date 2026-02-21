import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

export const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },

  primaryWrapper: {
    position: 'relative',
  },

  primaryGlow: {
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
    shadowRadius: 28,
  },

  primaryBtn: {
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 28,
    elevation: 18,
  },

  secondaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.card,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.border.default,
    overflow: 'hidden',
  },

  secondaryBtn: {
    flex: 1,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
    letterSpacing: 1.2,
  },

  nextText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    letterSpacing: 1.2,
  },

  secondarySep: {
    width: 1,
    height: 20,
    backgroundColor: Colors.border.default,
  },

  finishBtn: {
    alignSelf: 'center',
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
  },

  finishText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.feedback.error,
    letterSpacing: 0.3,
    opacity: 0.7,
  },
});
