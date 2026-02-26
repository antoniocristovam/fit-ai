import { Workout } from "../features/workout/types";

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  WorkoutExecution: { workout: Workout };
  WorkoutComplete: { workoutId: string; duration: number };
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type AppTabParamList = {
  Home: undefined;
  Workout: undefined;
  Nutrition: undefined;
  AiCoach: undefined;
  Profile: undefined;
};
