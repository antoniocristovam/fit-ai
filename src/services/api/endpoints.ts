export const Endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh',
  },
  user: {
    profile: '/user/profile',
    updateProfile: '/user/profile',
  },
  workout: {
    list: '/workouts',
    detail: (id: string) => `/workouts/${id}`,
    create: '/workouts',
    update: (id: string) => `/workouts/${id}`,
    delete: (id: string) => `/workouts/${id}`,
  },
  nutrition: {
    list: '/nutrition',
    detail: (id: string) => `/nutrition/${id}`,
    create: '/nutrition',
  },
  aiCoach: {
    chat: '/ai/chat',
    history: '/ai/history',
    suggestions: '/ai/suggestions',
  },
} as const;
