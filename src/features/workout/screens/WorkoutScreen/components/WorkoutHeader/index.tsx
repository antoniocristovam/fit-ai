import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface WorkoutHeaderProps {
  workoutName: string;
  elapsedSeconds: number;
  exerciseIndex: number;
  totalExercises: number;
  onExitPress?: () => void;
}

function formatElapsed(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function WorkoutHeader({
  workoutName,
  elapsedSeconds,
  exerciseIndex,
  totalExercises,
  onExitPress,
}: WorkoutHeaderProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.exitBtn}
        onPress={onExitPress}
        activeOpacity={0.7}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Text style={styles.exitIcon}>✕</Text>
      </TouchableOpacity>

      <View style={styles.centerBlock}>
        <Text style={styles.workoutName} numberOfLines={1}>
          {workoutName}
        </Text>
        <View style={styles.countRow}>
          <View style={styles.countDot} />
          <Text style={styles.countText}>
            {exerciseIndex + 1} de {totalExercises} exercícios
          </Text>
        </View>
      </View>

      <View style={styles.elapsedBlock}>
        <Text style={styles.elapsedLabel}>TEMPO</Text>
        <Text style={styles.elapsedValue}>{formatElapsed(elapsedSeconds)}</Text>
      </View>
    </View>
  );
}
