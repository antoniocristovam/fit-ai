import { StyleSheet } from 'react-native';
import { Colors } from '../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../styles/typography';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },

  bgOrbTop: {
    position: 'absolute',
    top: -140,
    right: -120,
    width: 380,
    height: 380,
    borderRadius: 190,
    backgroundColor: Colors.brand.primaryMuted,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 90,
  },

  bgOrbBottom: {
    position: 'absolute',
    bottom: -110,
    left: -100,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(181, 255, 77, 0.04)',
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl + Spacing.lg,
    paddingBottom: Spacing.xxl,
  },

  brandSection: {
    alignItems: 'center',
    marginBottom: Spacing.xxl + Spacing.sm,
  },

  logoWrap: {
    width: 96,
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },

  logoGlow: {
    position: 'absolute',
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.brand.primaryMuted,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 36,
    elevation: 20,
  },

  logoDiamond: {
    width: 66,
    height: 66,
    transform: [{ rotate: '45deg' }],
    borderWidth: 2,
    borderColor: Colors.brand.primary,
    backgroundColor: Colors.brand.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.sm,
  },

  logoLetter: {
    transform: [{ rotate: '-45deg' }],
    fontSize: 28,
    fontWeight: FontWeight.black,
    color: Colors.brand.primary,
    lineHeight: 28,
    includeFontPadding: false,
  },

  appName: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    letterSpacing: 8,
    marginBottom: Spacing.xs,
  },

  appNameAccent: {
    color: Colors.brand.primary,
  },

  tagline: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.tertiary,
    letterSpacing: 4.5,
    marginBottom: Spacing.lg,
  },

  taglineDivider: {
    width: 36,
    height: 1.5,
    backgroundColor: Colors.brand.primary,
    opacity: 0.45,
    borderRadius: BorderRadius.full,
  },

  card: {
    backgroundColor: Colors.background.secondary,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.border.default,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
    marginBottom: Spacing.xl,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 28,
    elevation: 14,
  },

  cardHighlight: {
    position: 'absolute',
    top: 0,
    left: Spacing.xl,
    right: Spacing.xl,
    height: 1,
    backgroundColor: Colors.brand.primary,
    opacity: 0.2,
    borderRadius: BorderRadius.full,
  },

  cardHeader: {
    marginBottom: Spacing.xl,
  },

  cardTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    marginBottom: Spacing.xxs,
    letterSpacing: 0.2,
  },

  cardSubtitle: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
  },

  fields: {
    gap: Spacing.md,
    marginBottom: Spacing.xs,
  },

  eyeToggle: {
    fontSize: 9,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    letterSpacing: 1,
    paddingVertical: Spacing.xxs,
  },

  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: Spacing.xs,
    marginBottom: Spacing.xl,
    paddingVertical: Spacing.xxs,
  },

  forgotText: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 0.2,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.border.default,
  },

  loginBtn: {
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 30,
    elevation: 18,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Spacing.xs,
  },

  footerText: {
    fontSize: FontSize.sm,
    color: Colors.text.secondary,
  },

  footerLink: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.brand.primary,
    letterSpacing: 0.2,
  },
});
