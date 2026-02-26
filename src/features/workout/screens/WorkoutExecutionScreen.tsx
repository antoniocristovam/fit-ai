import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ExercisePreview,
  ExerciseInfo,
  RestTimer,
  ProgressIndicator,
  ActionButtons,
} from "../components";
import { useWorkoutExecution } from "../hooks";
import { Workout } from "../types";
import { Colors } from "../../../styles/colors";
import { Spacing } from "../../../styles/spacing";
import { FontSize, FontWeight } from "../../../styles/typography";

// Navigation types (adjust according to your navigation setup)
type WorkoutStackParamList = {
  WorkoutExecution: {
    workout: Workout;
  };
  WorkoutComplete: {
    workoutId: string;
    duration: number;
  };
};

type WorkoutExecutionScreenRouteProp = RouteProp<
  WorkoutStackParamList,
  "WorkoutExecution"
>;
type WorkoutExecutionScreenNavigationProp = NativeStackNavigationProp<
  WorkoutStackParamList,
  "WorkoutExecution"
>;

/**
 * WorkoutExecutionScreen
 * Main screen for executing workouts with immersive UX
 */
export const WorkoutExecutionScreen: React.FC = () => {
  const navigation = useNavigation<WorkoutExecutionScreenNavigationProp>();
  const route = useRoute<WorkoutExecutionScreenRouteProp>();
  const { workout } = route.params;

  const {
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
    goToNextExercise,
  } = useWorkoutExecution({ workout });

  // Handle back button press
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      if (status === "completed") {
        return;
      }

      e.preventDefault();

      Alert.alert(
        "Sair do Treino?",
        "Seu progresso será perdido. Deseja realmente sair?",
        [
          { text: "Continuar Treino", style: "cancel" },
          {
            text: "Sair",
            style: "destructive",
            onPress: () => navigation.dispatch(e.data.action),
          },
        ],
      );
    });

    return unsubscribe;
  }, [navigation, status]);

  // Handle workout completion
  useEffect(() => {
    if (status === "completed") {
      const duration = Math.floor(
        (new Date().getTime() - new Date(execution.startedAt).getTime()) /
          1000 /
          60,
      );

      Alert.alert(
        "Treino Concluído! 🎉",
        `Parabéns! Você completou o treino em ${duration} minutos.`,
        [
          {
            text: "Ver Resumo",
            onPress: () => {
              navigation.replace("WorkoutComplete", {
                workoutId: workout.id,
                duration,
              });
            },
          },
        ],
        { cancelable: false },
      );
    }
  }, [status, execution, navigation, workout.id]);

  const handleCompleteSet = () => {
    completeSet();

    if (!currentExercise) return;

    // Check if this was the last set
    const isLastSet =
      currentExercise.currentSet >= currentExercise.sets.length - 1;

    if (isLastSet) {
      // Exercise completed
      completeExercise();

      if (canGoNext) {
        // More exercises remaining
        Alert.alert(
          "Exercício Completo! ✓",
          "Prepare-se para o próximo exercício",
          [
            {
              text: "Próximo Exercício",
              onPress: () => {
                goToNextExercise();
              },
            },
          ],
        );
      } else {
        // Last exercise - finish workout
        finishWorkout();
      }
    } else {
      // Start rest period after completing a set
      startRest();
    }
  };

  const handleSkipExercise = () => {
    skipExercise();
    if (canGoNext) {
      goToNextExercise();
    } else {
      finishWorkout();
    }
  };

  const handleRestComplete = () => {
    endRest();
  };

  if (!currentExercise) {
    return null;
  }

  const isLastSet =
    currentExercise.currentSet >= currentExercise.sets.length - 1 ||
    currentExercise.sets[currentExercise.currentSet]?.completed;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.background.primary}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Treino em Andamento</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {status === "resting" ? (
        // Rest Mode
        <View style={styles.restContainer}>
          <RestTimer
            restSeconds={execution.restTimeRemaining}
            onComplete={handleRestComplete}
            autoStart={true}
          />
        </View>
      ) : (
        // Exercise Mode
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Progress Indicator */}
          <ProgressIndicator execution={execution} />

          {/* Exercise Preview */}
          <ExercisePreview media={currentExercise.exercise.media} />

          {/* Exercise Info */}
          <ExerciseInfo
            exerciseExecution={currentExercise}
            exerciseNumber={execution.currentExerciseIndex + 1}
            totalExercises={execution.exercises.length}
          />

          {/* Spacer */}
          <View style={styles.spacer} />
        </ScrollView>
      )}

      {/* Action Buttons */}
      {status !== "resting" && (
        <View style={styles.actionsContainer}>
          <ActionButtons
            onCompleteSet={handleCompleteSet}
            onSkipExercise={handleSkipExercise}
            onFinishWorkout={finishWorkout}
            isLastSet={isLastSet}
            disabled={currentExercise.completed}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.default,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: Colors.background.card,
  },
  backButtonText: {
    fontSize: FontSize.xxl,
    color: Colors.text.primary,
  },
  headerTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.text.primary,
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  restContainer: {
    flex: 1,
    justifyContent: "center",
  },
  actionsContainer: {
    backgroundColor: Colors.background.primary,
    borderTopWidth: 1,
    borderTopColor: Colors.border.default,
    paddingTop: Spacing.md,
  },
  spacer: {
    height: Spacing.xxl,
  },
});
