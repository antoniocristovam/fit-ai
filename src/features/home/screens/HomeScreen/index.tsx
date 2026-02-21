import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { AlertsFeed } from './components/AlertsFeed';
import { DashboardHeader } from './components/DashboardHeader';
import { StatGrid } from './components/StatGrid';
import { TodayWorkoutCard } from './components/TodayWorkoutCard';
import { WeeklyTracker } from './components/WeeklyTracker';
import {
  MOCK_ALERTS,
  MOCK_STATS,
  MOCK_TODAY_WORKOUT,
  MOCK_WEEK_DAYS,
} from './mock';
import { styles } from './styles';

const TRAINED_COUNT = MOCK_WEEK_DAYS.filter(d => d.status === 'trained').length;
const MISSED_COUNT = MOCK_WEEK_DAYS.filter(d => d.status === 'missed').length;

export function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.bgOrb} pointerEvents="none" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces
      >
        <DashboardHeader
          userName="Lucas"
          notificationCount={MOCK_ALERTS.length}
        />

        <WeeklyTracker
          days={MOCK_WEEK_DAYS}
          trainedCount={TRAINED_COUNT}
          missedCount={MISSED_COUNT}
        />

        <TodayWorkoutCard workout={MOCK_TODAY_WORKOUT} />

        <StatGrid stats={MOCK_STATS} />

        <AlertsFeed alerts={MOCK_ALERTS} />
      </ScrollView>
    </View>
  );
}
