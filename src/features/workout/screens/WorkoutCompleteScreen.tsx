import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
import { Colors } from "../../../styles/colors";
import { Spacing } from "../../../styles/spacing";
import { FontSize, FontWeight } from "../../../styles/typography";

type WorkoutCompleteRouteProp = RouteProp<
  RootStackParamList,
  "WorkoutComplete"
>;
type WorkoutCompleteNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WorkoutComplete"
>;

/**
 * WorkoutCompleteScreen
 * Tela de conclusão do treino com resumo e celebração
 */
export const WorkoutCompleteScreen: React.FC = () => {
  const route = useRoute<WorkoutCompleteRouteProp>();
  const navigation = useNavigation<WorkoutCompleteNavigationProp>();
  const { duration } = route.params;

  const scaleAnim = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleFinish = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>✓</Text>
            </View>
            <View style={styles.glowCircle} />
          </View>

          {/* Title */}
          <Text style={styles.title}>Treino Concluído! 🎉</Text>
          <Text style={styles.subtitle}>Excelente trabalho!</Text>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>{duration}</Text>
              <Text style={styles.statLabel}>minutos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>100%</Text>
              <Text style={styles.statLabel}>completo</Text>
            </View>
          </View>

          {/* Motivational Message */}
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              Você está um passo mais perto dos seus objetivos! 💪
            </Text>
          </View>

          {/* Actions */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleFinish}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Voltar ao Início</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Spacing.xl,
  },
  content: {
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: Spacing.xl,
    position: "relative",
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.brand.primary,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  glowCircle: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: Colors.brand.primary,
    opacity: 0.3,
  },
  iconText: {
    fontSize: 60,
    fontWeight: FontWeight.bold,
    color: Colors.text.inverse,
  },
  title: {
    fontSize: FontSize.display,
    fontWeight: FontWeight.black,
    color: Colors.text.primary,
    marginBottom: Spacing.sm,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    marginBottom: Spacing.xxl,
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.background.card,
    borderRadius: 16,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border.default,
  },
  statValue: {
    fontSize: FontSize.xxxl,
    fontWeight: FontWeight.bold,
    color: Colors.brand.primary,
    marginBottom: Spacing.xs,
  },
  statLabel: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.medium,
    color: Colors.text.secondary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  messageContainer: {
    backgroundColor: Colors.brand.primaryMuted,
    borderRadius: 12,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xxl,
    borderWidth: 1,
    borderColor: Colors.brand.primary,
  },
  message: {
    fontSize: FontSize.md,
    fontWeight: FontWeight.medium,
    color: Colors.text.primary,
    textAlign: "center",
    lineHeight: 22,
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
  primaryButtonText: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.bold,
    color: Colors.text.inverse,
  },
});
