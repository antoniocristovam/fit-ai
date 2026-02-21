import type { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightAccessory?: ReactNode;
}
