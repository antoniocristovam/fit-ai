import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../../../../styles/colors';
import type { AlertData, AlertType } from '../../mock';
import { styles } from './styles';

interface AlertsFeedProps {
  alerts: AlertData[];
  onAlertPress?: (alert: AlertData) => void;
}

interface AlertItemProps {
  alert: AlertData;
  isLast: boolean;
  onPress: () => void;
}

function resolveAccentColor(type: AlertType): string {
  switch (type) {
    case 'achievement':
      return Colors.brand.primary;
    case 'reminder':
      return Colors.feedback.warning;
    case 'info':
      return Colors.feedback.info;
  }
}

function AlertItem({ alert, isLast, onPress }: AlertItemProps): React.JSX.Element {
  const accentColor = resolveAccentColor(alert.type);

  return (
    <TouchableOpacity
      style={[styles.item, isLast && styles.itemLast]}
      activeOpacity={0.75}
      onPress={onPress}
    >
      <View style={[styles.accentBar, { backgroundColor: accentColor }]} />

      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Text style={styles.title} numberOfLines={1}>
            {alert.title}
          </Text>
          <Text style={styles.chevron}>›</Text>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {alert.description}
        </Text>

        <View style={styles.timeRow}>
          <View style={[styles.timeDot, { backgroundColor: accentColor }]} />
          <Text style={styles.time}>{alert.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function AlertsFeed({ alerts, onAlertPress }: AlertsFeedProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionLabel}>ALERTAS E METAS</Text>

      <View style={styles.list}>
        {alerts.map((alert, index) => (
          <AlertItem
            key={alert.id}
            alert={alert}
            isLast={index === alerts.length - 1}
            onPress={() => onAlertPress?.(alert)}
          />
        ))}
      </View>
    </View>
  );
}
