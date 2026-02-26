/**
 * Workout Execution Constants
 * Configuration values for workout timer, rest periods, and UI behavior
 */

export const WORKOUT_CONSTANTS = {
  // Rest Timer Configuration
  DEFAULT_REST_TIME: 60, // seconds
  MIN_REST_TIME: 15, // seconds
  MAX_REST_TIME: 300, // seconds (5 minutes)
  QUICK_ADD_TIME_OPTIONS: [15, 30, 60], // seconds

  // Visual Feedback
  CRITICAL_TIME_THRESHOLD: 10, // seconds - when timer turns critical color
  TIMER_UPDATE_INTERVAL: 100, // milliseconds

  // Animations
  ANIMATION_DURATION: 300, // milliseconds
  GLOW_ANIMATION_DURATION: 1000, // milliseconds

  // Media Preview
  VIDEO_LOOP: true,
  VIDEO_MUTED: false,
  AUTO_PLAY_NEXT_EXERCISE: false,
} as const;

export const WORKOUT_MESSAGES = {
  REST_COMPLETE_TITLE: "Descanso Completo!",
  REST_COMPLETE_MESSAGE: "Prepare-se para o próximo exercício",
  WORKOUT_COMPLETE_TITLE: "Treino Concluído! 🎉",
  WORKOUT_COMPLETE_MESSAGE: "Excelente trabalho!",
  EXERCISE_SKIPPED: "Exercício pulado",
  EXERCISE_COMPLETED: "Exercício concluído",
} as const;

export const HAPTIC_FEEDBACK = {
  LIGHT: "light",
  MEDIUM: "medium",
  HEAVY: "heavy",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
} as const;
