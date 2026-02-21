import { StyleSheet } from 'react-native';
import { Colors } from '../../../../styles/colors';
import { Spacing } from '../../../../styles/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },

  bgOrb: {
    position: 'absolute',
    bottom: -120,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: Colors.brand.primaryMuted,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 60,
  },

  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xxxl,
    gap: Spacing.xl,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.brand.primary,
    opacity: 0.06,
    marginHorizontal: Spacing.xs,
  },
});
