import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../features/home/screens/HomeScreen";
import {
  WorkoutExecutionScreen,
  WorkoutCompleteScreen,
} from "../features/workout/screens";
import { RootStackParamList } from "../types/navigation";
import { Colors } from "../styles/colors";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background.primary },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WorkoutExecution"
          component={WorkoutExecutionScreen}
          options={{
            gestureEnabled: false, // Previne swipe back durante treino
          }}
        />
        <Stack.Screen
          name="WorkoutComplete"
          component={WorkoutCompleteScreen}
          options={{
            gestureEnabled: false,
            animation: "fade",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type { RootStackParamList };
