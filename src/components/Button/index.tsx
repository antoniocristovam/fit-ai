import * as React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../styles/colors';
import { labelVariantStyles, sizeStyles, styles, variantStyles } from './styles';
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
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
      disabled={isDisabled}
      activeOpacity={0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? Colors.text.inverse : Colors.brand.primary}
        />
      ) : (
        <Text style={[styles.label, labelVariantStyles[variant]]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
