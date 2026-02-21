import { TextProps } from 'react-native';

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'label';

export interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
}
