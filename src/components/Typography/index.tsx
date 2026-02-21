import React from 'react';
import { Text } from 'react-native';
import { variantStyles } from './styles';
import { TypographyProps } from './types';

export function Typography({
  variant = 'body',
  color,
  style,
  ...rest
}: TypographyProps): React.JSX.Element {
  return (
    <Text
      style={[variantStyles[variant], color ? { color } : null, style]}
      {...rest}
    />
  );
}
