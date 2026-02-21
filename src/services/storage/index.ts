import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  authToken: '@fit-ai:auth-token',
  refreshToken: '@fit-ai:refresh-token',
  userProfile: '@fit-ai:user-profile',
  onboardingCompleted: '@fit-ai:onboarding-completed',
} as const;

type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

export const storage = {
  get: async <T>(key: StorageKey): Promise<T | null> => {
    const value = await AsyncStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  },

  set: async <T>(key: StorageKey, value: T): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  remove: async (key: StorageKey): Promise<void> => {
    await AsyncStorage.removeItem(key);
  },

  clear: async (): Promise<void> => {
    await AsyncStorage.clear();
  },
};
