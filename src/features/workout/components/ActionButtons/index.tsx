import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Colors } from "../../../../styles/colors";
import { Spacing } from "../../../../styles/spacing";
import { FontSize, FontWeight } from "../../../../styles/typography";

interface ActionButtonsProps {
  onCompleteSet: () => void;
  onSkipExercise: () => void;
  onFinishWorkout: () => void;
  isLastSet: boolean;
  disabled?: boolean;
}

/**
 * ActionButtons Component
 * Primary action buttons for workout execution
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCompleteSet,
  onSkipExercise,
  onFinishWorkout,
  isLastSet,
  disabled = false,
}) => {
  const handleFinishWorkout = () => {
    Alert.alert(
      "Finalizar Treino",
      "Tem certeza que deseja finalizar o treino agora?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Finalizar",
          style: "destructive",
          onPress: onFinishWorkout,
        },
      ],
    );
  };

  const handleSkipExercise = () => {
    Alert.alert("Pular Exercício", "Deseja pular este exercício?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Pular",
        style: "default",
        onPress: onSkipExercise,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Primary Action Button */}
      <TouchableOpacity
        style={[styles.primaryButton, disabled && styles.buttonDisabled]}
        onPress={onCompleteSet}
        activeOpacity={0.8}
        disabled={disabled}
      >
        <View style={styles.primaryButtonContent}>
          <Text style={styles.primaryButtonText}>
            {isLastSet ? "Completar Exercício" : "Completar Série"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Secondary Actions */}
      <View style={styles.secondaryActions}>
        <TouchableOpacity
          style={[styles.secondaryButton, disabled && styles.buttonDisabled]}
          onPress={handleSkipExercise}
          activeOpacity={0.7}
          disabled={disabled}
        >
          <Text style={styles.secondaryButtonText}>Pular Exercício</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tertiaryButton}
          onPress={handleFinishWorkout}
          activeOpacity={0.7}
        >
          <Text style={styles.tertiaryButtonText}>Finalizar Treino</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    gap: Spacing.md,
  },
  primaryButton: {
    width: "100%",
    paddingVertical: Spacing.lg,
    backgroundColor: Colors.brand.primary,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  primaryButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  primaryButtonText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.text.inverse,
    letterSpacing: 0.5,
  },
  secondaryActions: {
    flexDirection: "row",
    gap: Spacing.md,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border.default,
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.text.secondary,
  },
  tertiaryButton: {
    flex: 1,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.background.card,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.feedback.error,
    alignItems: "center",
  },
  tertiaryButtonText: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.semibold,
    color: Colors.feedback.error,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});
