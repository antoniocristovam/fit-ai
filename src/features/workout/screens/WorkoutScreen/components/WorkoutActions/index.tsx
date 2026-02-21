import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../../../../components/Button';
import { styles } from './styles';

interface WorkoutActionsProps {
  isRestPhase: boolean;
  isLastExercise: boolean;
  onCompleteSet: () => void;
  onSkipExercise: () => void;
  onFinishWorkout: () => void;
}

export function WorkoutActions({
  isRestPhase,
  isLastExercise,
  onCompleteSet,
  onSkipExercise,
  onFinishWorkout,
}: WorkoutActionsProps): React.JSX.Element {
  const glowOpacity = useRef(new Animated.Value(0.35)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(glowOpacity, {
          toValue: 0.88,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0.35,
          duration: 1400,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [glowOpacity]);

  const primaryLabel = isRestPhase ? 'PULAR DESCANSO' : 'CONCLUIR SÉRIE';
  const nextLabel = isLastExercise ? 'FINALIZAR ›' : 'PULAR ›';

  return (
    <View style={styles.container}>
      <View style={styles.primaryWrapper}>
        <Animated.View
          pointerEvents="none"
          style={[styles.primaryGlow, { opacity: glowOpacity }]}
        />
        <Button
          label={primaryLabel}
          variant="primary"
          size="lg"
          fullWidth
          onPress={onCompleteSet}
          style={styles.primaryBtn}
        />
      </View>

      <View style={styles.secondaryRow}>
        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={onSkipExercise}
          activeOpacity={0.7}
        >
          <Text style={styles.secondaryText}>PULAR EXERCÍCIO</Text>
        </TouchableOpacity>

        <View style={styles.secondarySep} />

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={onCompleteSet}
          activeOpacity={0.7}
        >
          <Text style={styles.nextText}>{nextLabel}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.finishBtn}
        onPress={onFinishWorkout}
        activeOpacity={0.6}
      >
        <Text style={styles.finishText}>Encerrar treino</Text>
      </TouchableOpacity>
    </View>
  );
}
