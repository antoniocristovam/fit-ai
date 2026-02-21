import React from 'react';
import { Text, View } from 'react-native';
import type { Exercise } from '../../../../types';
import { MUSCLE_GROUP_CONFIG } from '../../mock';
import { styles } from './styles';

interface WorkoutProgressProps {
  exercises: Exercise[];
  currentIndex: number;
  completedIds: string[];
}

export function WorkoutProgress({
  exercises,
  currentIndex,
  completedIds,
}: WorkoutProgressProps): React.JSX.Element {
  const completedCount = completedIds.length;
  const progressPct = (completedCount / exercises.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>PROGRESSO DO TREINO</Text>
        <Text style={styles.countText}>
          {completedCount} de {exercises.length}
        </Text>
      </View>

      <View style={styles.dotsRow}>
        {exercises.map((exercise, index) => {
          const isCompleted = completedIds.includes(exercise.id);
          const isCurrent = index === currentIndex && !isCompleted;
          const config = MUSCLE_GROUP_CONFIG[exercise.muscleGroup];

          return (
            <View
              key={exercise.id}
              style={[
                styles.exerciseDot,
                isCompleted && { backgroundColor: config?.color ?? '#B5FF4D' },
                isCurrent && {
                  borderColor: config?.color ?? '#B5FF4D',
                  backgroundColor: config?.colorMuted ?? 'rgba(181,255,77,0.1)',
                },
              ]}
            />
          );
        })}
      </View>

      <View style={styles.progressTrack}>
        <View
          style={[
            styles.progressFill,
            { width: `${progressPct}%` as `${number}%` },
          ]}
        />
      </View>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.legendDotCompleted]} />
          <Text style={styles.legendText}>Concluído</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.legendDotCurrent]} />
          <Text style={styles.legendText}>Atual</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, styles.legendDotPending]} />
          <Text style={styles.legendText}>Pendente</Text>
        </View>
      </View>
    </View>
  );
}
