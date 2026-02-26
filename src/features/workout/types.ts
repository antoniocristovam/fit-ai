export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "arms"
  | "legs"
  | "core"
  | "glutes"
  | "cardio";

export type ExerciseMediaType = "image" | "gif" | "video";

export interface ExerciseMedia {
  type: ExerciseMediaType;
  url: string;
  thumbnail?: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  sets: number;
  reps: number;
  weight: number | null;
  restSeconds: number;
  media?: ExerciseMedia;
  instructions?: string;
  tips?: string[];
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
  durationMinutes: number;
  completedAt: string | null;
  createdAt: string;
}

// Workout Execution Types
export interface ExerciseSet {
  setNumber: number;
  completed: boolean;
  reps: number;
  weight: number | null;
}

export interface ExerciseExecution {
  exerciseId: string;
  exercise: Exercise;
  currentSet: number;
  sets: ExerciseSet[];
  completed: boolean;
  skipped: boolean;
}

export interface WorkoutExecution {
  workoutId: string;
  workout: Workout;
  currentExerciseIndex: number;
  exercises: ExerciseExecution[];
  startedAt: string;
  completedAt: string | null;
  isResting: boolean;
  restTimeRemaining: number;
  customRestTime?: number;
}

export type WorkoutExecutionStatus =
  | "exercising"
  | "resting"
  | "paused"
  | "completed";
