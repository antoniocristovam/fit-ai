import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import { BorderRadius, Spacing } from '../../../../../../styles/spacing';
import { FontSize, FontWeight } from '../../../../../../styles/typography';

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

  list: {
    backgroundColor: Colors.background.card,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.border.default,
    overflow: 'hidden',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.default,
    minHeight: 76,
  },

  itemLast: {
    borderBottomWidth: 0,
  },

  accentBar: {
    width: 3,
    borderRadius: BorderRadius.full,
    marginVertical: Spacing.md,
    marginLeft: Spacing.md,
    marginRight: 0,
  },

  content: {
    flex: 1,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    gap: 4,
  },

  contentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.text.primary,
  },

  chevron: {
    fontSize: 18,
    color: Colors.text.tertiary,
    marginLeft: Spacing.xs,
  },

  description: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
    color: Colors.text.secondary,
    lineHeight: FontSize.sm * 1.55,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xxs,
    marginTop: 2,
  },

  timeDot: {
    width: 5,
    height: 5,
    borderRadius: BorderRadius.full,
    opacity: 0.6,
  },

  time: {
    fontSize: 10,
    fontWeight: FontWeight.semibold,
    color: Colors.text.tertiary,
    letterSpacing: 0.4,
  },
});
