/**
 * Test App - Workout Execution Feature
 *
 * Este é um app de teste para demonstrar a funcionalidade
 * de execução de treino sem afetar o App.tsx principal.
 *
 * Para usar:
 * 1. Recarregue o VSCode (Cmd/Ctrl + Shift + P -> "Reload Window")
 * 2. No App.tsx, importe e use este componente
 * 3. Ou rode: npx expo start
 */

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutExecutionScreen } from "./features/workout/screens";
import { mockWorkout } from "./features/workout/mockData";
import { Colors } from "./styles/colors";
import { FontSize, FontWeight } from "./styles/typography";
import { Spacing } from "./styles/spacing";

const Stack = createNativeStackNavigator();

/**
 * Home Screen - Tela inicial de teste
 */
function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🏋️ Fit AI Workout</Text>
        <Text style={styles.subtitle}>Teste de Execução de Treino</Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            navigation.navigate("WorkoutExecution", { workout: mockWorkout })
          }
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Iniciar Treino A</Text>
          <Text style={styles.buttonSubtext}>
            Peito e Tríceps • 6 exercícios
          </Text>
        </TouchableOpacity>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>✨ Features Incluídas:</Text>
          <Text style={styles.infoText}>• Preview de exercícios com vídeo</Text>
          <Text style={styles.infoText}>
            • Cronômetro inteligente de descanso
          </Text>
          <Text style={styles.infoText}>• Animações e feedback visual</Text>
          <Text style={styles.infoText}>• Controles avançados de treino</Text>
          <Text style={styles.infoText}>
            • Interface premium dark + verde neon
          </Text>
        </View>

        <Text style={styles.hint}>
          Dica: Reduza restSeconds no mockData.ts para testes mais rápidos
        </Text>
      </View>
    </View>
  );
}

/**
 * Componente principal de teste
 */
export default function TestWorkoutApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: Colors.background.primary },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WorkoutExecution"
          component={WorkoutExecutionScreen}
          options={{
            gestureEnabled: false, // Previne swipe back durante o treino
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
  },
  title: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    marginBottom: Spacing.xs,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.xl,
    textAlign: "center",
  },
  primaryButton: {
    width: "100%",
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
    backgroundColor: Colors.brand.primary,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: Spacing.xl,
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  primaryButtonText: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.text.inverse,
    marginBottom: 4,
  },
  buttonSubtext: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.text.inverse,
    opacity: 0.8,
  },
  infoCard: {
    width: "100%",
    backgroundColor: Colors.background.card,
    borderRadius: 16,
    padding: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.border.default,
    marginBottom: Spacing.xl,
  },
  infoTitle: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    marginBottom: Spacing.sm,
  },
  infoText: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    marginBottom: 4,
    paddingLeft: Spacing.sm,
  },
  hint: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.medium,
    color: Colors.text.tertiary,
    textAlign: "center",
    fontStyle: "italic",
  },
});
