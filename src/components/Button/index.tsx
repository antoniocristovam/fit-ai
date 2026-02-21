import React, { JSX } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../styles/theme';
import { buttonSizeStyles, buttonVariantStyles, styles } from './styles';
import { ButtonProps } from './types';

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  style,
  ...rest
}: ButtonProps): React.JSX.Element {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.base,
        buttonVariantStyles[variant],
        buttonSizeStyles[size],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.text.inverse} />
      ) : (
        <Text
          style={[
            styles.label,
            variant === 'secondary' && styles.labelSecondary,
            variant === 'ghost' && styles.labelGhost,
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}
