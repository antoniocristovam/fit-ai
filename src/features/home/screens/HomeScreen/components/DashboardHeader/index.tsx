import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface DashboardHeaderProps {
  userName: string;
  notificationCount?: number;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
}

function getDateLabel(): string {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

export function DashboardHeader({
  userName,
  notificationCount = 0,
  onNotificationPress,
  onProfilePress,
}: DashboardHeaderProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.logoRow}>
          <View style={styles.logoDiamond}>
            <Text style={styles.logoLetter}>F</Text>
          </View>
          <Text style={styles.logoText}>
            {'FIT'}
            <Text style={styles.logoAccent}>{'AI'}</Text>
          </Text>
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.notifBtn}
            onPress={onNotificationPress}
            activeOpacity={0.7}
          >
            <View style={styles.notifIconOuter}>
              <View style={styles.notifIconInner} />
            </View>
            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.avatarBtn}
            onPress={onProfilePress}
            activeOpacity={0.8}
          >
            <Text style={styles.avatarInitial}>
              {userName.charAt(0).toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.greetingBlock}>
        <Text style={styles.greeting}>
          {getGreeting()},{' '}
          <Text style={styles.greetingName}>{userName}</Text>
        </Text>
        <Text style={styles.date}>{getDateLabel()}</Text>
      </View>
    </View>
  );
}
