export type DayStatus = 'trained' | 'missed' | 'rest' | 'today';
export type AlertType = 'achievement' | 'reminder' | 'info';

export interface WeekDay {
  label: string;
  status: DayStatus;
}

export interface TodayWorkoutData {
  category: string;
  name: string;
  muscleGroups: string[];
  exerciseCount: number;
  durationMinutes: number;
  weeklyProgressPct: number;
}

export interface StatData {
  id: string;
  label: string;
  value: string;
  unit: string;
  trend?: string;
  accent?: boolean;
}

export interface AlertData {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  time: string;
}

export const MOCK_WEEK_DAYS: WeekDay[] = [
  { label: 'S', status: 'trained' },
  { label: 'T', status: 'trained' },
  { label: 'Q', status: 'missed' },
  { label: 'Q', status: 'trained' },
  { label: 'S', status: 'trained' },
  { label: 'S', status: 'rest' },
  { label: 'D', status: 'today' },
];

export const MOCK_TODAY_WORKOUT: TodayWorkoutData = {
  category: 'Upper Body Power',
  name: 'Peito + Tríceps',
  muscleGroups: ['PEITO', 'TRÍCEPS', 'OMBROS'],
  exerciseCount: 6,
  durationMinutes: 60,
  weeklyProgressPct: 65,
};

export const MOCK_STATS: StatData[] = [
  {
    id: 'streak',
    label: 'Sequência',
    value: '12',
    unit: 'dias',
    trend: '↑ recorde pessoal',
    accent: true,
  },
  {
    id: 'goal',
    label: 'Meta do mês',
    value: '87',
    unit: '%',
  },
  {
    id: 'avg',
    label: 'Duração média',
    value: '48',
    unit: 'min',
  },
  {
    id: 'total',
    label: 'Treinos no mês',
    value: '24',
    unit: 'sessões',
  },
];

export const MOCK_ALERTS: AlertData[] = [
  {
    id: '1',
    type: 'achievement',
    title: 'Meta semanal atingida!',
    description: 'Você completou 5 de 5 treinos programados esta semana.',
    time: 'Agora',
  },
  {
    id: '2',
    type: 'reminder',
    title: 'Lembrete de treino',
    description: 'Peito + Tríceps · Amanhã às 07:00',
    time: 'Amanhã',
  },
  {
    id: '3',
    type: 'info',
    title: 'Plano atualizado pelo AI',
    description: 'Seu coach gerou uma nova periodização com base no seu progresso.',
    time: '2 dias atrás',
  },
];
