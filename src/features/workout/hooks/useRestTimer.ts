import { useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
import { WORKOUT_CONSTANTS } from "../constants";

interface UseRestTimerProps {
  initialTime: number;
  onComplete: () => void;
  onTick?: (timeRemaining: number) => void;
}

interface UseRestTimerReturn {
  timeRemaining: number;
  isRunning: boolean;
  isCritical: boolean;
  progress: number;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (newTime?: number) => void;
  addTime: (seconds: number) => void;
  skip: () => void;
}

/**
 * Custom hook for managing rest timer with background support
 * Handles timer state, progress calculation, and background behavior
 */
export const useRestTimer = ({
  initialTime,
  onComplete,
  onTick,
}: UseRestTimerProps): UseRestTimerReturn => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(initialTime);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const backgroundTimeRef = useRef<number | null>(null);
  const appStateRef = useRef(AppState.currentState);

  // Calculate if timer is in critical state (last 10 seconds)
  const isCritical =
    timeRemaining <= WORKOUT_CONSTANTS.CRITICAL_TIME_THRESHOLD &&
    timeRemaining > 0;

  // Calculate progress percentage
  const progress =
    totalTime > 0 ? ((totalTime - timeRemaining) / totalTime) * 100 : 0;

  // Handle timer countdown
  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;

          // Call onTick callback
          if (onTick) {
            onTick(newTime);
          }

          // Check if timer completed
          if (newTime <= 0) {
            setIsRunning(false);
            onComplete();
            return 0;
          }

          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeRemaining, onComplete, onTick]);

  // Handle app state changes (background/foreground)
  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [isRunning]);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    // When app goes to background
    if (
      appStateRef.current.match(/active/) &&
      nextAppState.match(/inactive|background/)
    ) {
      if (isRunning) {
        backgroundTimeRef.current = Date.now();
      }
    }

    // When app comes to foreground
    if (
      appStateRef.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      if (isRunning && backgroundTimeRef.current) {
        const elapsedSeconds = Math.floor(
          (Date.now() - backgroundTimeRef.current) / 1000,
        );
        setTimeRemaining((prev) => {
          const newTime = Math.max(0, prev - elapsedSeconds);
          if (newTime === 0) {
            setIsRunning(false);
            onComplete();
          }
          return newTime;
        });
        backgroundTimeRef.current = null;
      }
    }

    appStateRef.current = nextAppState;
  };

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const resume = () => {
    setIsRunning(true);
  };

  const reset = (newTime?: number) => {
    const time = newTime ?? initialTime;
    setTimeRemaining(time);
    setTotalTime(time);
    setIsRunning(false);
    backgroundTimeRef.current = null;
  };

  const addTime = (seconds: number) => {
    setTimeRemaining((prev) =>
      Math.min(prev + seconds, WORKOUT_CONSTANTS.MAX_REST_TIME),
    );
    setTotalTime((prev) =>
      Math.min(prev + seconds, WORKOUT_CONSTANTS.MAX_REST_TIME),
    );
  };

  const skip = () => {
    setTimeRemaining(0);
    setIsRunning(false);
    onComplete();
  };

  return {
    timeRemaining,
    isRunning,
    isCritical,
    progress,
    start,
    pause,
    resume,
    reset,
    addTime,
    skip,
  };
};
