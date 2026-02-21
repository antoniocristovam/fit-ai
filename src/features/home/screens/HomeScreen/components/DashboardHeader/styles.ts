import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: Spacing.xs,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },

  logoDiamond: {
    width: 30,
    height: 30,
    transform: [{ rotate: '45deg' }],
    borderWidth: 1.5,
    borderColor: Colors.brand.primary,
    backgroundColor: Colors.brand.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.sm - 2,
  },

  logoLetter: {
    transform: [{ rotate: '-45deg' }],
    fontSize: 12,
    fontWeight: FontWeight.black,
    color: Colors.brand.primary,
    lineHeight: 12,
    includeFontPadding: false,
  },

  logoText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    letterSpacing: 3,
  },

  logoAccent: {
    color: Colors.brand.primary,
  },

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },

  notifBtn: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.background.card,
    borderWidth: 1,
    borderColor: Colors.border.default,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notifIconOuter: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: Colors.text.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notifIconInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.brand.primary,
  },

  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeText: {
    fontSize: 8,
    fontWeight: FontWeight.black,
    color: Colors.text.inverse,
  },

  avatarBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.brand.primaryMuted,
    borderWidth: 1.5,
    borderColor: Colors.brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  avatarInitial: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
  },

  greetingBlock: {
    gap: Spacing.xxs,
  },

  greeting: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
  },

  greetingName: {
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
  },

  date: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.text.tertiary,
    textTransform: 'capitalize',
  },
});
