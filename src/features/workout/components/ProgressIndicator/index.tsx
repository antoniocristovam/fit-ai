import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WorkoutExecution } from "../../types";
import { Colors } from "../../../../styles/colors";
import { Spacing } from "../../../../styles/spacing";
import { FontSize, FontWeight } from "../../../../styles/typography";

interface ProgressIndicatorProps {
  execution: WorkoutExecution;
}

/**
 * ProgressIndicator Component
 * Displays overall workout progress
 */
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  execution,
}) => {
  const totalExercises = execution.exercises.length;
  const completedExercises = execution.exercises.filter(
    (ex) => ex.completed,
  ).length;
  const progress =
    totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

  const totalSets = execution.exercises.reduce(
    (acc, ex) => acc + ex.sets.length,
    0,
  );
  const completedSets = execution.exercises.reduce(
    (acc, ex) => acc + ex.sets.filter((s) => s.completed).length,
    0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.workoutName}>{execution.workout.name}</Text>
        <Text style={styles.progressText}>
          {completedExercises}/{totalExercises} exercícios
        </Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.percentageText}>{Math.round(progress)}%</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{completedSets}</Text>
          <Text style={styles.statLabel}>Séries completas</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{totalSets - completedSets}</Text>
          <Text style={styles.statLabel}>Séries restantes</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.card,
    borderRadius: 20,
    padding: Spacing.lg,
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Spacing.md,
  },
  workoutName: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    flex: 1,
  },
  progressText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    color: Colors.brand.primary,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.background.secondary,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: Colors.brand.primary,
    borderRadius: 4,
  },
  percentageText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.bold,
    color: Colors.text.primary,
    minWidth: 40,
    textAlign: "right",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: FontSize.xxl,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    marginBottom: 2,
  },
  statLabel: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    textAlign: "center",
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: Colors.border.default,
    marginHorizontal: Spacing.md,
  },
});
