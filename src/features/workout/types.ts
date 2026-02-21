export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'arms'
  | 'legs'
  | 'core'
  | 'glutes'
  | 'cardio';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  sets: number;
  reps: number;
  weight: number | null;
  restSeconds: number;
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
  durationMinutes: number;
  completedAt: string | null;
  createdAt: string;
}
