import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExerciseExecution } from "../../types";
import { Colors } from "../../../../styles/colors";
import { Spacing } from "../../../../styles/spacing";
import { FontSize, FontWeight } from "../../../../styles/typography";

interface ExerciseInfoProps {
  exerciseExecution: ExerciseExecution;
  exerciseNumber: number;
  totalExercises: number;
}

/**
 * ExerciseInfo Component
 * Displays current exercise information (name, sets, reps)
 */
export const ExerciseInfo: React.FC<ExerciseInfoProps> = ({
  exerciseExecution,
  exerciseNumber,
  totalExercises,
}) => {
  const { exercise, currentSet, sets } = exerciseExecution;
  const currentSetData = sets[currentSet];
  const completedSets = sets.filter((s) => s.completed).length;

  return (
    <View style={styles.container}>
      {/* Exercise Number Indicator */}
      <View style={styles.exerciseNumberContainer}>
        <Text style={styles.exerciseNumber}>
          Exercício {exerciseNumber} de {totalExercises}
        </Text>
      </View>

      {/* Exercise Name */}
      <Text style={styles.exerciseName}>{exercise.name}</Text>

      {/* Sets and Reps Info */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>SÉRIES</Text>
          <Text style={styles.statValue}>
            {completedSets + 1}/{sets.length}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.statItem}>
          <Text style={styles.statLabel}>REPETIÇÕES</Text>
          <Text style={styles.statValue}>
            {currentSetData?.reps || exercise.reps}
          </Text>
        </View>

        {exercise.weight && (
          <>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>PESO</Text>
              <Text style={styles.statValue}>{exercise.weight} kg</Text>
            </View>
          </>
        )}
      </View>

      {/* Set Progress Indicators */}
      <View style={styles.setProgressContainer}>
        {sets.map((set, index) => (
          <View
            key={set.setNumber}
            style={[
              styles.setIndicator,
              set.completed && styles.setIndicatorCompleted,
              index === currentSet &&
                !set.completed &&
                styles.setIndicatorCurrent,
            ]}
          >
            <Text
              style={[
                styles.setIndicatorText,
                set.completed && styles.setIndicatorTextCompleted,
                index === currentSet &&
                  !set.completed &&
                  styles.setIndicatorTextCurrent,
              ]}
            >
              {set.setNumber}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  exerciseNumberContainer: {
    marginBottom: Spacing.sm,
  },
  exerciseNumber: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  exerciseName: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    marginBottom: Spacing.lg,
    letterSpacing: -0.5,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.background.card,
    borderRadius: 16,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.lg,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
    marginBottom: 4,
    letterSpacing: 1,
  },
  statValue: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: Colors.border.default,
    marginHorizontal: Spacing.sm,
  },
  setProgressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Spacing.sm,
  },
  setIndicator: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.background.card,
    borderWidth: 2,
    borderColor: Colors.border.default,
    justifyContent: "center",
    alignItems: "center",
  },
  setIndicatorCurrent: {
    borderColor: Colors.brand.primary,
    backgroundColor: Colors.brand.primaryMuted,
  },
  setIndicatorCompleted: {
    backgroundColor: Colors.brand.primary,
    borderColor: Colors.brand.primary,
  },
  setIndicatorText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.text.secondary,
  },
  setIndicatorTextCurrent: {
    color: Colors.brand.primary,
  },
  setIndicatorTextCompleted: {
    color: Colors.text.inverse,
  },
});
