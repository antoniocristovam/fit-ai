import React from 'react';
import { AuthStackParamList } from '../types/navigation';

/**
 * Install: npx expo install @react-navigation/native-stack
 *
 * Uncomment and configure after installing:
 *
 * import { createNativeStackNavigator } from '@react-navigation/native-stack';
 *
 * const Stack = createNativeStackNavigator<AuthStackParamList>();
 *
 * export function AuthNavigator(): React.JSX.Element {
 *   return (
 *     <Stack.Navigator screenOptions={{ headerShown: false }}>
 *       <Stack.Screen name="Login" component={LoginScreen} />
 *       <Stack.Screen name="Register" component={RegisterScreen} />
 *       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
 *     </Stack.Navigator>
 *   );
 * }
 */

export function AuthNavigator(): React.JSX.Element {
  return <></>;
}

export type { AuthStackParamList };
