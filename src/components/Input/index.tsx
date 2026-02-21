import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { InputProps } from './types';

export function Input({
  label,
  error,
  hint,
  style,
  ...rest
}: InputProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.inputError : null, style]}
        placeholderTextColor="#94a3b8"
        {...rest}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {hint && !error ? <Text style={styles.hint}>{hint}</Text> : null}
    </View>
  );
}
