# 🏋️ Workout Execution Feature - Documentação Completa

## 📋 Visão Geral

Sistema completo de execução de treino com experiência imersiva e motivadora, incluindo:

- Preview visual do exercício (imagem, GIF ou vídeo)
- Cronômetro de descanso inteligente com contagem regressiva
- Indicadores de progresso visuais
- Suporte a Live Activities no iOS (Dynamic Island)
- Interface premium dark com verde neon (#B5FF4D)

## 🗂️ Estrutura de Arquivos

```
src/features/workout/
├── types.ts                          # Tipos TypeScript
├── constants.ts                      # Constantes de configuração
├── components/
│   ├── index.ts
│   ├── ExercisePreview/
│   │   └── index.tsx                # Preview do exercício (imagem/GIF/vídeo)
│   ├── ExerciseInfo/
│   │   └── index.tsx                # Informações do exercício
│   ├── RestTimer/
│   │   └── index.tsx                # Cronômetro de descanso
│   ├── ProgressIndicator/
│   │   └── index.tsx                # Indicador de progresso
│   └── ActionButtons/
│       └── index.tsx                # Botões de ação
├── hooks/
│   ├── index.ts
│   ├── useRestTimer.ts              # Hook para timer com suporte a background
│   └── useWorkoutExecution.ts       # Hook para gerenciar execução do treino
├── screens/
│   ├── index.ts
│   └── WorkoutExecutionScreen.tsx   # Tela principal de execução
└── services/
    ├── index.ts
    └── liveActivity.ts              # Serviço de Live Activities (iOS)
```

## 🎨 Design System

### Paleta de Cores

- **Primary Brand**: `#B5FF4D` (Verde neon vibrante)
- **Background**: `#0A0A0A` (Preto profundo)
- **Cards**: `#161616` (Cinza escuro)
- **Success**: `#32D74B`
- **Error/Critical**: `#FF453A`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#8E8E93`

### Características Visuais

- Dark theme predominante
- Gradientes e glow sutil nos elementos principais
- Bordas arredondadas
- Animações suaves
- Feedback visual claro

## 🧩 Componentes Principais

### 1. ExercisePreview

Exibe o preview do exercício (imagem, GIF ou vídeo).

**Props:**

```typescript
interface ExercisePreviewProps {
  media?: ExerciseMedia;
  fallbackImage?: ImageSourcePropType;
}
```

**Uso:**

```tsx
<ExercisePreview
  media={{
    type: "video",
    url: "https://example.com/exercise.mp4",
  }}
/>
```

### 2. ExerciseInfo

Mostra informações do exercício atual (nome, séries, reps, peso).

**Props:**

```typescript
interface ExerciseInfoProps {
  exerciseExecution: ExerciseExecution;
  exerciseNumber: number;
  totalExercises: number;
}
```

### 3. RestTimer

Cronômetro de descanso com animações e controles.

**Props:**

```typescript
interface RestTimerProps {
  restSeconds: number;
  onComplete: () => void;
  autoStart?: boolean;
}
```

**Features:**

- Contagem regressiva animada
- Modo crítico (últimos 10 segundos)
- Botões de adicionar tempo (+15s, +30s, +60s)
- Pausar/retomar
- Pular descanso
- Vibração nos últimos 3 segundos

### 4. ProgressIndicator

Indicador visual do progresso do treino.

**Props:**

```typescript
interface ProgressIndicatorProps {
  execution: WorkoutExecution;
}
```

### 5. ActionButtons

Botões de ação principal (completar série/exercício, pular, finalizar).

**Props:**

```typescript
interface ActionButtonsProps {
  onCompleteSet: () => void;
  onSkipExercise: () => void;
  onFinishWorkout: () => void;
  isLastSet: boolean;
  disabled?: boolean;
}
```

## 🎣 Hooks Customizados

### useRestTimer

Gerencia o cronômetro de descanso com suporte a background.

**Retorno:**

```typescript
{
  timeRemaining: number;
  isRunning: boolean;
  isCritical: boolean;
  progress: number;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (newTime?: number) => void;
  addTime: (seconds: number) => void;
  skip: () => void;
}
```

**Features:**

- Continua rodando em background
- Sincroniza ao retornar ao app
- Callbacks para tick e complete
- Modo crítico automático

### useWorkoutExecution

Gerencia todo o estado da execução do treino.

**Retorno:**

```typescript
{
  execution: WorkoutExecution;
  currentExercise: ExerciseExecution | null;
  status: WorkoutExecutionStatus;
  completeSet: () => void;
  completeExercise: () => void;
  skipExercise: () => void;
  startRest: () => void;
  endRest: () => void;
  finishWorkout: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  goToNextExercise: () => void;
  goToPreviousExercise: () => void;
}
```

## 📱 WorkoutExecutionScreen

Tela principal que orquestra todos os componentes.

### Navegação

```typescript
navigation.navigate("WorkoutExecution", {
  workout: {
    id: "1",
    name: "Treino A - Peito e Tríceps",
    exercises: [
      {
        id: "ex1",
        name: "Supino Reto",
        muscleGroup: "chest",
        sets: 4,
        reps: 12,
        weight: 80,
        restSeconds: 90,
        media: {
          type: "video",
          url: "https://example.com/supino.mp4",
        },
      },
      // ... mais exercícios
    ],
    durationMinutes: 60,
    completedAt: null,
    createdAt: new Date().toISOString(),
  },
});
```

### Fluxo de Execução

1. **Exercício Ativo**: Mostra preview, info e botões de ação
2. **Descanso**: Mostra cronômetro de descanso em tela cheia
3. **Transição**: Ao completar série → descanso → próxima série
4. **Próximo Exercício**: Ao completar exercício → alerta → próximo exercício
5. **Finalização**: Ao completar último exercício → tela de resumo

## 🍎 Live Activities (iOS)

### Estrutura Preparada

O sistema está preparado para integrar Live Activities no iOS através do serviço `liveActivity.ts`.

### Uso

```tsx
import { useLiveActivity } from "../services";

const {
  startWorkoutActivity,
  updateRestTimer,
  endWorkoutActivity,
  isSupported,
} = useLiveActivity();

// Iniciar Live Activity
await startWorkoutActivity("Treino A", "Supino Reto", 1, 8, 90);

// Atualizar timer
await updateRestTimer(60, true);

// Finalizar
await endWorkoutActivity();
```

### Implementação Nativa Necessária

Para ativar completamente o Live Activities, é necessário:

1. Criar Widget Extension no Xcode
2. Definir ActivityAttributes em Swift
3. Criar views SwiftUI para Dynamic Island
4. Criar bridge Native Module
5. Configurar Info.plist

Documentação completa disponível em `services/liveActivity.ts`.

## ⚙️ Constantes de Configuração

```typescript
WORKOUT_CONSTANTS = {
  DEFAULT_REST_TIME: 60,
  MIN_REST_TIME: 15,
  MAX_REST_TIME: 300,
  QUICK_ADD_TIME_OPTIONS: [15, 30, 60],
  CRITICAL_TIME_THRESHOLD: 10,
  TIMER_UPDATE_INTERVAL: 100,
  ANIMATION_DURATION: 300,
  GLOW_ANIMATION_DURATION: 1000,
};
```

## 🎯 Exemplo de Dados Mock

```typescript
const mockWorkout: Workout = {
  id: "workout_1",
  name: "Treino A - Peito e Tríceps",
  exercises: [
    {
      id: "ex1",
      name: "Supino Reto com Barra",
      muscleGroup: "chest",
      sets: 4,
      reps: 12,
      weight: 80,
      restSeconds: 90,
      media: {
        type: "video",
        url: "https://example.com/supino-reto.mp4",
        thumbnail: "https://example.com/supino-reto-thumb.jpg",
      },
      instructions: "Deite no banco e posicione a barra na altura dos olhos...",
      tips: [
        "Mantenha os pés firmes no chão",
        "Inspire na descida e expire na subida",
        "Controle o movimento",
      ],
    },
    {
      id: "ex2",
      name: "Supino Inclinado com Halteres",
      muscleGroup: "chest",
      sets: 3,
      reps: 15,
      weight: 28,
      restSeconds: 60,
      media: {
        type: "gif",
        url: "https://example.com/supino-inclinado.gif",
      },
    },
    {
      id: "ex3",
      name: "Crossover",
      muscleGroup: "chest",
      sets: 3,
      reps: 15,
      weight: null,
      restSeconds: 45,
      media: {
        type: "image",
        url: "https://example.com/crossover.jpg",
      },
    },
  ],
  durationMinutes: 60,
  completedAt: null,
  createdAt: new Date().toISOString(),
};
```

## 🚀 Próximos Passos para Implementação

### 1. Integração com Backend

```typescript
// Em services/api/workoutApi.ts
export const startWorkoutSession = async (workoutId: string) => {
  const response = await api.post("/workouts/sessions", { workoutId });
  return response.data;
};

export const saveSetCompletion = async (sessionId: string, setData: any) => {
  await api.post(`/workouts/sessions/${sessionId}/sets`, setData);
};
```

### 2. Sincronização de Dados

- Salvar progresso localmente (AsyncStorage)
- Sincronizar com backend quando online
- Recuperar sessão incompleta

### 3. Analytics e Tracking

```typescript
// Track eventos importantes
analytics.logEvent("workout_started", { workoutId, workoutName });
analytics.logEvent("set_completed", { exerciseId, setNumber });
analytics.logEvent("workout_completed", { duration, exercisesCompleted });
```

### 4. Notificações

- Notificação ao minimizar app durante descanso
- Lembrete se usuário não voltar
- Comemoração ao completar treino

### 5. Melhorias de UX

- Sons de feedback (opcional)
- Modo landscape para vídeos
- Zoom no preview de imagem
- Histórico de séries anteriores
- Notas por exercício

## 📦 Dependências Necessárias

Adicione ao `package.json`:

```json
{
  "dependencies": {
    "expo-av": "~14.0.0",
    "@react-navigation/native": "^6.x",
    "@react-navigation/native-stack": "^6.x"
  }
}
```

Instale com:

```bash
npm install expo-av
```

ou

```bash
yarn add expo-av
```

## 🎨 Customização

### Ajustar Cores

Edite `src/styles/colors.ts` para mudar a paleta de cores.

### Ajustar Tempos

Edite `src/features/workout/constants.ts` para ajustar tempos padrão.

### Adicionar Animações

Utilize `react-native-reanimated` para animações mais complexas.

## ✅ Checklist de Implementação

- [x] Tipos TypeScript definidos
- [x] Componentes base criados
- [x] Hooks customizados implementados
- [x] Tela principal de execução
- [x] Sistema de timer com background
- [x] Interface premium dark
- [x] Estrutura para Live Activities
- [ ] Integração com backend
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Implementação nativa iOS (Live Activities)
- [ ] Analytics e tracking
- [ ] Persistência local

## 📝 Notas Importantes

1. **Permissões**: Verifique permissões de áudio caso use sons
2. **Performance**: Videos podem consumir memória - use compressão adequada
3. **Background**: Timer continua em background por tempo limitado no iOS
4. **Live Activities**: Requer iOS 16.1+ e implementação nativa
5. **Haptics**: Vibração consome bateria - use com moderação

## 🤝 Contribuindo

Para adicionar novas features:

1. Crie novos componentes em `components/`
2. Adicione lógica em hooks customizados
3. Mantenha tipagem forte com TypeScript
4. Siga o design system existente
5. Documente no README

---

**Desenvolvido com ❤️ para uma experiência fitness premium**
