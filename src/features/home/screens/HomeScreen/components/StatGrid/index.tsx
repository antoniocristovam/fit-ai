import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { StatData } from '../../mock';
import { styles } from './styles';

interface StatGridProps {
  stats: StatData[];
  onStatPress?: (stat: StatData) => void;
}

interface StatCardProps {
  stat: StatData;
  onPress?: () => void;
}

function StatCard({ stat, onPress }: StatCardProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.card, stat.accent && styles.cardAccent]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {stat.accent && <View style={styles.accentDecor} pointerEvents="none" />}

      <Text style={styles.cardLabel}>{stat.label.toUpperCase()}</Text>

      <View style={styles.valueRow}>
        <Text style={[styles.value, stat.accent && styles.valueAccent]}>
          {stat.value}
        </Text>
        <Text style={[styles.unit, stat.accent && styles.unitAccent]}>
          {stat.unit}
        </Text>
      </View>

      {stat.trend ? (
        <Text style={styles.trend}>{stat.trend}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

export function StatGrid({ stats, onStatPress }: StatGridProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>ESTATÍSTICAS</Text>

      <View style={styles.grid}>
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
            onPress={() => onStatPress?.(stat)}
          />
        ))}
      </View>
    </View>
  );
}
