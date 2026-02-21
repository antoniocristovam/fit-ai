import React from 'react';
import { RootStackParamList } from '../types/navigation';

/**
 * Install: npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
 *
 * Uncomment and configure after installing:
 *
 * import { NavigationContainer } from '@react-navigation/native';
 * import { createNativeStackNavigator } from '@react-navigation/native-stack';
 * import { AuthNavigator } from './AuthNavigator';
 * import { AppNavigator } from './AppNavigator';
 *
 * const Stack = createNativeStackNavigator<RootStackParamList>();
 *
 * export function RootNavigator(): React.JSX.Element {
 *   const isAuthenticated = false; // replace with auth state
 *   return (
 *     <NavigationContainer>
 *       <Stack.Navigator screenOptions={{ headerShown: false }}>
 *         {isAuthenticated ? (
 *           <Stack.Screen name="App" component={AppNavigator} />
 *         ) : (
 *           <Stack.Screen name="Auth" component={AuthNavigator} />
 *         )}
 *       </Stack.Navigator>
 *     </NavigationContainer>
 *   );
 * }
 */

export function RootNavigator(): React.JSX.Element {
  return <></>;
}

export type { RootStackParamList };
