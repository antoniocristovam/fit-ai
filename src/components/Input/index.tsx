import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Colors } from '../../styles/colors';
import { styles } from './styles';
import { InputProps } from './types';

export function Input({
  label,
  error,
  hint,
  leftIcon,
  rightAccessory,
  style,
  onFocus,
  onBlur,
  ...rest
}: InputProps): React.JSX.Element {
  const [focused, setFocused] = React.useState(false);

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.inputRow,
          focused && styles.inputRowFocused,
          error ? styles.inputRowError : null,
        ]}
      >
        {leftIcon}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={Colors.text.tertiary}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
        {rightAccessory}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {hint && !error ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}
