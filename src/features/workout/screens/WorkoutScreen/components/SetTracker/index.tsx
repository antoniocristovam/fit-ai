import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from './styles';

interface SetTrackerProps {
  totalSets: number;
  currentSet: number;
}

interface SetDotProps {
  index: number;
  status: 'completed' | 'current' | 'pending';
}

function SetDot({ index, status }: SetDotProps): React.JSX.Element {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (status !== 'current') return;

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.18,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [status, pulseAnim]);

  if (status === 'completed') {
    return (
      <View style={[styles.dot, styles.dotCompleted]}>
        <Text style={styles.checkmark}>✓</Text>
      </View>
    );
  }

  if (status === 'current') {
    return (
      <Animated.View
        style={[styles.dot, styles.dotCurrent, { transform: [{ scale: pulseAnim }] }]}
      >
        <Text style={styles.currentNumber}>{index + 1}</Text>
      </Animated.View>
    );
  }

  return (
    <View style={[styles.dot, styles.dotPending]}>
      <Text style={styles.pendingNumber}>{index + 1}</Text>
    </View>
  );
}

export function SetTracker({ totalSets, currentSet }: SetTrackerProps): React.JSX.Element {
  const completedCount = currentSet - 1;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>SÉRIES</Text>
        <Text style={styles.subLabel}>
          {currentSet} de {totalSets}
        </Text>
      </View>

      <View style={styles.dotsRow}>
        {Array.from({ length: totalSets }, (_, i) => {
          let status: 'completed' | 'current' | 'pending';
          if (i < completedCount) {
            status = 'completed';
          } else if (i === completedCount) {
            status = 'current';
          } else {
            status = 'pending';
          }
          return <SetDot key={i} index={i} status={status} />;
        })}
      </View>
    </View>
  );
}
