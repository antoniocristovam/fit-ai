import React from 'react';
import { Text, View } from 'react-native';
import type { WeekDay } from '../../mock';
import { dayDotStyles, styles } from './styles';

interface WeeklyTrackerProps {
  days: WeekDay[];
  trainedCount: number;
  missedCount: number;
}

interface DayDotProps {
  day: WeekDay;
}

function DayDot({ day }: DayDotProps): React.JSX.Element {
  return (
    <View style={styles.dayColumn}>
      <Text style={styles.dayLabel}>{day.label}</Text>
      <View style={[styles.dayDot, dayDotStyles[day.status]]}>
        {day.status === 'trained' && <View style={styles.trainedInner} />}
        {day.status === 'today' && <View style={styles.todayInner} />}
        {day.status === 'missed' && <View style={styles.missedInner} />}
      </View>
    </View>
  );
}

export function WeeklyTracker({
  days,
  trainedCount,
  missedCount,
}: WeeklyTrackerProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>ESTA SEMANA</Text>

      <View style={styles.daysRow}>
        {days.map((day, index) => (
          <DayDot key={index} day={day} />
        ))}
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryItem}>
          <View style={[styles.summaryDot, styles.summaryDotTrained]} />
          <Text style={styles.summaryValue}>{trainedCount}</Text>
          <Text style={styles.summaryLabel}>treinos</Text>
        </View>

        <View style={styles.summaryDivider} />

        <View style={styles.summaryItem}>
          <View style={[styles.summaryDot, styles.summaryDotMissed]} />
          <Text style={styles.summaryValue}>{missedCount}</Text>
          <Text style={styles.summaryLabel}>faltas</Text>
        </View>

        <View style={styles.summaryDivider} />

        <View style={styles.summaryItem}>
          <View style={[styles.summaryDot, styles.summaryDotToday]} />
          <Text style={styles.summaryLabel}>hoje</Text>
        </View>
      </View>
    </View>
  );
}
