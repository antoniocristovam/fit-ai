import { useState, useCallback } from "react";
import {
  Workout,
  WorkoutExecution,
  ExerciseExecution,
  Exercise,
  WorkoutExecutionStatus,
} from "../types";
import { WORKOUT_CONSTANTS } from "../constants";

interface UseWorkoutExecutionProps {
  workout: Workout;
}

interface UseWorkoutExecutionReturn {
  execution: WorkoutExecution;
  currentExercise: ExerciseExecution | null;
  status: WorkoutExecutionStatus;
  completeSet: () => void;
  completeExercise: () => void;
  skipExercise: () => void;
  startRest: () => void;
  endRest: () => void;
  finishWorkout: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  goToNextExercise: () => void;
  goToPreviousExercise: () => void;
}

const createExerciseExecution = (exercise: Exercise): ExerciseExecution => ({
  exerciseId: exercise.id,
  exercise,
  currentSet: 0,
  sets: Array.from({ length: exercise.sets }, (_, i) => ({
    setNumber: i + 1,
    completed: false,
    reps: exercise.reps,
    weight: exercise.weight,
  })),
  completed: false,
  skipped: false,
});

/**
 * Hook to manage complete workout execution state
 */
export const useWorkoutExecution = ({
  workout,
}: UseWorkoutExecutionProps): UseWorkoutExecutionReturn => {
  const [execution, setExecution] = useState<WorkoutExecution>(() => ({
    workoutId: workout.id,
    workout,
    currentExerciseIndex: 0,
    exercises: workout.exercises.map(createExerciseExecution),
    startedAt: new Date().toISOString(),
    completedAt: null,
    isResting: false,
    restTimeRemaining: 0,
  }));

  const currentExercise =
    execution.exercises[execution.currentExerciseIndex] || null;

  // Determine current status
  const status: WorkoutExecutionStatus = execution.completedAt
    ? "completed"
    : execution.isResting
      ? "resting"
      : "exercising";

  const completeSet = useCallback(() => {
    setExecution((prev) => {
      const newExercises = [...prev.exercises];
      const currentEx = newExercises[prev.currentExerciseIndex];

      if (!currentEx || currentEx.completed) return prev;

      // Mark current set as completed
      currentEx.sets[currentEx.currentSet].completed = true;

      // Move to next set
      if (currentEx.currentSet < currentEx.sets.length - 1) {
        currentEx.currentSet += 1;
      } else {
        // All sets completed
        currentEx.completed = true;
      }

      return {
        ...prev,
        exercises: newExercises,
      };
    });
  }, []);

  const completeExercise = useCallback(() => {
    setExecution((prev) => {
      const newExercises = [...prev.exercises];
      const currentEx = newExercises[prev.currentExerciseIndex];

      if (!currentEx) return prev;

      // Mark all remaining sets as completed
      currentEx.sets.forEach((set) => {
        set.completed = true;
      });
      currentEx.completed = true;
      currentEx.currentSet = currentEx.sets.length - 1;

      return {
        ...prev,
        exercises: newExercises,
      };
    });
  }, []);

  const skipExercise = useCallback(() => {
    setExecution((prev) => {
      const newExercises = [...prev.exercises];
      const currentEx = newExercises[prev.currentExerciseIndex];

      if (!currentEx) return prev;

      currentEx.skipped = true;
      currentEx.completed = true;

      return {
        ...prev,
        exercises: newExercises,
      };
    });
  }, []);

  const startRest = useCallback(() => {
    setExecution((prev) => {
      const currentEx = prev.exercises[prev.currentExerciseIndex];
      const restTime =
        prev.customRestTime ||
        currentEx?.exercise.restSeconds ||
        WORKOUT_CONSTANTS.DEFAULT_REST_TIME;

      return {
        ...prev,
        isResting: true,
        restTimeRemaining: restTime,
      };
    });
  }, []);

  const endRest = useCallback(() => {
    setExecution((prev) => ({
      ...prev,
      isResting: false,
      restTimeRemaining: 0,
      customRestTime: undefined,
    }));
  }, []);

  const goToNextExercise = useCallback(() => {
    setExecution((prev) => {
      if (prev.currentExerciseIndex < prev.exercises.length - 1) {
        return {
          ...prev,
          currentExerciseIndex: prev.currentExerciseIndex + 1,
          isResting: false,
        };
      }
      return prev;
    });
  }, []);

  const goToPreviousExercise = useCallback(() => {
    setExecution((prev) => {
      if (prev.currentExerciseIndex > 0) {
        return {
          ...prev,
          currentExerciseIndex: prev.currentExerciseIndex - 1,
          isResting: false,
        };
      }
      return prev;
    });
  }, []);

  const finishWorkout = useCallback(() => {
    setExecution((prev) => ({
      ...prev,
      completedAt: new Date().toISOString(),
      isResting: false,
    }));
  }, []);

  const canGoNext =
    execution.currentExerciseIndex < execution.exercises.length - 1;
  const canGoPrevious = execution.currentExerciseIndex > 0;

  return {
    execution,
    currentExercise,
    status,
    completeSet,
    completeExercise,
    skipExercise,
    startRest,
    endRest,
    finishWorkout,
    canGoNext,
    canGoPrevious,
    goToNextExercise,
    goToPreviousExercise,
  };
};
