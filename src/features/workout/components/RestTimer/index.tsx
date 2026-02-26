import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { useRestTimer } from "../../hooks";
import { Colors } from "../../../../styles/colors";
import { Spacing } from "../../../../styles/spacing";
import { FontSize, FontWeight } from "../../../../styles/typography";
import { WORKOUT_CONSTANTS } from "../../constants";

interface RestTimerProps {
  restSeconds: number;
  onComplete: () => void;
  autoStart?: boolean;
}

/**
 * RestTimer Component
 * Advanced rest timer with visual feedback, animations, and quick controls
 */
export const RestTimer: React.FC<RestTimerProps> = ({
  restSeconds,
  onComplete,
  autoStart = true,
}) => {
  const timer = useRestTimer({
    initialTime: restSeconds,
    onComplete: () => {
      Vibration.vibrate([0, 200, 100, 200]);
      onComplete();
    },
    onTick: (timeRemaining) => {
      // Haptic feedback on last 3 seconds
      if (timeRemaining <= 3 && timeRemaining > 0) {
        Vibration.vibrate(50);
      }
    },
  });

  const pulseAnim = React.useRef(new Animated.Value(1)).current;
  const glowAnim = React.useRef(new Animated.Value(0)).current;

  // Auto start timer
  useEffect(() => {
    if (autoStart) {
      timer.start();
    }
  }, [autoStart]);

  // Pulse animation for critical time
  useEffect(() => {
    if (timer.isCritical) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [timer.isCritical]);

  // Glow animation
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const glowOpacity = glowAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.5],
  });

  return (
    <View style={styles.container}>
      {/* Timer Display */}
      <View style={styles.timerContainer}>
        <Animated.View
          style={[
            styles.timerCircle,
            {
              transform: [{ scale: pulseAnim }],
              borderColor: timer.isCritical
                ? Colors.feedback.error
                : Colors.brand.primary,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.glowCircle,
              {
                opacity: glowOpacity,
                borderColor: timer.isCritical
                  ? Colors.feedback.error
                  : Colors.brand.primary,
              },
            ]}
          />
          <Text
            style={[
              styles.timerText,
              timer.isCritical && styles.timerTextCritical,
            ]}
          >
            {formatTime(timer.timeRemaining)}
          </Text>
          <Text style={styles.timerLabel}>DESCANSO</Text>
        </Animated.View>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <Animated.View
            style={[
              styles.progressBarFill,
              {
                width: `${timer.progress}%`,
                backgroundColor: timer.isCritical
                  ? Colors.feedback.error
                  : Colors.brand.primary,
              },
            ]}
          />
        </View>
      </View>

      {/* Quick Add Time Buttons */}
      <View style={styles.quickActionsContainer}>
        {WORKOUT_CONSTANTS.QUICK_ADD_TIME_OPTIONS.map((seconds) => (
          <TouchableOpacity
            key={seconds}
            style={styles.quickAddButton}
            onPress={() => timer.addTime(seconds)}
            activeOpacity={0.7}
          >
            <Text style={styles.quickAddText}>+{seconds}s</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Control Buttons */}
      <View style={styles.controlsContainer}>
        {timer.isRunning ? (
          <TouchableOpacity
            style={styles.pauseButton}
            onPress={timer.pause}
            activeOpacity={0.8}
          >
            <Text style={styles.pauseButtonText}>Pausar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.resumeButton}
            onPress={timer.resume}
            activeOpacity={0.8}
          >
            <Text style={styles.resumeButtonText}>Retomar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.skipButton}
          onPress={timer.skip}
          activeOpacity={0.8}
        >
          <Text style={styles.skipButtonText}>Pular Descanso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
  },
  timerContainer: {
    alignItems: "center",
    marginBottom: Spacing.xxl,
  },
  timerCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.card,
    position: "relative",
  },
  glowCircle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 8,
    top: -16,
    left: -16,
  },
  timerText: {
    fontSize: 72,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    marginBottom: Spacing.xs,
  },
  timerTextCritical: {
    color: Colors.feedback.error,
  },
  timerLabel: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    letterSpacing: 2,
  },
  progressBarContainer: {
    width: "100%",
    marginBottom: Spacing.xl,
  },
  progressBarBackground: {
    width: "100%",
    height: 8,
    backgroundColor: Colors.background.card,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
  quickActionsContainer: {
    flexDirection: "row",
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  quickAddButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  quickAddText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.text.primary,
  },
  controlsContainer: {
    width: "100%",
    gap: Spacing.md,
  },
  pauseButton: {
    width: "100%",
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.background.card,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.brand.primary,
    alignItems: "center",
  },
  pauseButtonText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
  },
  resumeButton: {
    width: "100%",
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.brand.primary,
    borderRadius: 16,
    alignItems: "center",
  },
  resumeButtonText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.text.inverse,
  },
  skipButton: {
    width: "100%",
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.background.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border.default,
    alignItems: "center",
  },
  skipButtonText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
  },
});
