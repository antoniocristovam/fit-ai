import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../../../../components/Button';
import type { TodayWorkoutData } from '../../mock';
import { styles } from './styles';

interface TodayWorkoutCardProps {
  workout: TodayWorkoutData;
  onStartPress?: () => void;
  onDetailPress?: () => void;
}

function ProgressBar({ pct }: { pct: number }): React.JSX.Element {
  return (
    <View style={styles.progressSection}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressLabel}>Progresso semanal</Text>
        <Text style={styles.progressPct}>{pct}%</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${pct}%` as `${number}%` }]} />
      </View>
    </View>
  );
}

export function TodayWorkoutCard({
  workout,
  onStartPress,
  onDetailPress,
}: TodayWorkoutCardProps): React.JSX.Element {
  const glowOpacity = useRef(new Animated.Value(0.35)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowOpacity, {
          toValue: 0.9,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(glowOpacity, {
          toValue: 0.35,
          duration: 1400,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [glowOpacity]);

  return (
    <View style={styles.shadow}>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.95}
        onPress={onDetailPress}
      >
        <View style={styles.cardDecor} />
        <View style={styles.cardHighlight} />

        <View style={styles.topRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>TREINO DO DIA</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.nameBlock}>
          <Text style={styles.category}>{workout.category}</Text>
          <Text style={styles.name}>{workout.name}</Text>
        </View>

        <View style={styles.muscleGroups}>
          {workout.muscleGroups.map((group) => (
            <View key={group} style={styles.muscleChip}>
              <Text style={styles.muscleChipText}>{group}</Text>
            </View>
          ))}
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{workout.exerciseCount}</Text>
            <Text style={styles.statLabel}>exercícios</Text>
          </View>
          <View style={styles.statSep} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{workout.durationMinutes}</Text>
            <Text style={styles.statLabel}>minutos</Text>
          </View>
        </View>

        <ProgressBar pct={workout.weeklyProgressPct} />

        <View style={styles.ctaWrapper}>
          <Animated.View
            pointerEvents="none"
            style={[styles.ctaGlow, { opacity: glowOpacity }]}
          />
          <Button
            label="INICIAR TREINO"
            variant="primary"
            size="lg"
            fullWidth
            onPress={onStartPress}
            style={styles.ctaBtn}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
