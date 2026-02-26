/**
 * Navigation Setup Example for Workout Execution
 *
 * This file shows how to integrate the WorkoutExecutionScreen
 * into your navigation structure.
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutExecutionScreen } from "../screens";
import { Workout } from "../types";

// Define the navigation param list
export type WorkoutStackParamList = {
  WorkoutList: undefined;
  WorkoutDetail: { workoutId: string };
  WorkoutExecution: { workout: Workout };
  WorkoutComplete: { workoutId: string; duration: number };
};

// Create the stack navigator
const WorkoutStack = createNativeStackNavigator<WorkoutStackParamList>();

/**
 * Workout Navigator
 * Handles all workout-related screens
 */
export const WorkoutNavigator = () => {
  return (
    <WorkoutStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: false, // Disable swipe back during workout
      }}
    >
      {/* Your other workout screens */}
      {/* <WorkoutStack.Screen name="WorkoutList" component={WorkoutListScreen} /> */}
      {/* <WorkoutStack.Screen name="WorkoutDetail" component={WorkoutDetailScreen} /> */}

      {/* Workout Execution Screen */}
      <WorkoutStack.Screen
        name="WorkoutExecution"
        component={WorkoutExecutionScreen}
        options={{
          gestureEnabled: false, // Prevent accidental swipe back
          animation: "fade",
        }}
      />

      {/* Workout Complete Screen */}
      {/* <WorkoutStack.Screen name="WorkoutComplete" component={WorkoutCompleteScreen} /> */}
    </WorkoutStack.Navigator>
  );
};

/**
 * Example: How to navigate to WorkoutExecution from another screen
 */

// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { mockWorkout } from '../mockData';
//
// type NavigationProp = NativeStackNavigationProp<WorkoutStackParamList, 'WorkoutDetail'>;
//
// const WorkoutDetailScreen = () => {
//   const navigation = useNavigation<NavigationProp>();
//
//   const handleStartWorkout = () => {
//     navigation.navigate('WorkoutExecution', {
//       workout: mockWorkout, // Or fetch from your API/state
//     });
//   };
//
//   return (
//     <Button onPress={handleStartWorkout} title="Iniciar Treino" />
//   );
// };

/**
 * Example: Deep linking configuration
 */
export const workoutLinking = {
  prefixes: ["fitai://", "https://fitai.app"],
  config: {
    screens: {
      Workout: {
        screens: {
          WorkoutExecution: "workout/execute/:workoutId",
          WorkoutComplete: "workout/complete/:workoutId",
        },
      },
    },
  },
};

/**
 * Type-safe navigation helpers
 */

// Import in your components:
// import { useWorkoutNavigation } from '@/features/workout/navigation/example';

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const useWorkoutNavigation = () => {
  return useNavigation<NativeStackNavigationProp<WorkoutStackParamList>>();
};

/**
 * Example: Start workout with loading state
 */

// import { useState } from 'react';
// import { fetchWorkoutById } from '../services/api';
//
// export const useStartWorkout = () => {
//   const navigation = useWorkoutNavigation();
//   const [loading, setLoading] = useState(false);
//
//   const startWorkout = async (workoutId: string) => {
//     try {
//       setLoading(true);
//       const workout = await fetchWorkoutById(workoutId);
//
//       navigation.navigate('WorkoutExecution', { workout });
//     } catch (error) {
//       console.error('Failed to start workout:', error);
//       Alert.alert('Erro', 'Não foi possível iniciar o treino');
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   return { startWorkout, loading };
// };
