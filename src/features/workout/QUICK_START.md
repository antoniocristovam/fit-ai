# 🚀 Quick Start Guide - Workout Execution Feature

## ⚡ Instalação Rápida

### 1. Instalar Dependências

```bash
# Instalar expo-av para suporte a vídeo
npm install expo-av

# Ou com yarn
yarn add expo-av
```

### 2. Verificar Estrutura

Todos os arquivos devem estar em:

```
src/features/workout/
├── types.ts
├── constants.ts
├── mockData.ts
├── components/
├── hooks/
├── screens/
├── services/
└── navigation/
```

## 🎯 Teste Rápido

### Opção 1: Teste Standalone (Recomendado)

Crie um arquivo de teste temporário:

```tsx
// src/TestWorkoutExecution.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkoutExecutionScreen } from "./features/workout/screens";
import { mockWorkout } from "./features/workout/mockData";
import { View, Button, StyleSheet } from "react-native";
import { Colors } from "./styles/colors";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Button
      title="🏋️ Iniciar Treino de Teste"
      onPress={() =>
        navigation.navigate("WorkoutExecution", { workout: mockWorkout })
      }
    />
  </View>
);

export default function TestApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="WorkoutExecution"
          component={WorkoutExecutionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background.primary,
  },
});
```

Depois, no seu `App.tsx`:

```tsx
import TestApp from "./src/TestWorkoutExecution";

export default TestApp;
```

### Opção 2: Integrar na Navegação Existente

No seu navegador existente:

```tsx
import { WorkoutExecutionScreen } from "./features/workout/screens";
import { mockWorkout } from "./features/workout/mockData";

// ... no seu Stack.Navigator
<Stack.Screen
  name="WorkoutExecution"
  component={WorkoutExecutionScreen}
  options={{ gestureEnabled: false }}
/>;

// Para navegar:
navigation.navigate("WorkoutExecution", {
  workout: mockWorkout,
});
```

## 🎨 Customização Rápida

### Mudar Cores do Tema

```typescript
// src/styles/colors.ts
export const Colors = {
  brand: {
    primary: "#B5FF4D", // ← Mude para sua cor primária
    primaryMuted: "rgba(181, 255, 77, 0.08)",
    primaryGlow: "rgba(181, 255, 77, 0.18)",
  },
  // ... resto das cores
};
```

### Ajustar Tempos de Descanso

```typescript
// src/features/workout/constants.ts
export const WORKOUT_CONSTANTS = {
  DEFAULT_REST_TIME: 60, // ← Tempo padrão em segundos
  QUICK_ADD_TIME_OPTIONS: [15, 30, 60], // ← Botões de adicionar tempo
  CRITICAL_TIME_THRESHOLD: 10, // ← Quando fica vermelho
  // ...
};
```

## 📊 Testando com Dados Diferentes

### Criar seu próprio workout:

```typescript
const meuTreino: Workout = {
  id: "meu_treino_1",
  name: "Meu Treino Personalizado",
  exercises: [
    {
      id: "ex_1",
      name: "Agachamento",
      muscleGroup: "legs",
      sets: 3,
      reps: 15,
      weight: 60,
      restSeconds: 90,
      // Opcional: adicionar vídeo
      media: {
        type: "video",
        url: "https://seu-video.mp4",
      },
    },
    // ... mais exercícios
  ],
  durationMinutes: 45,
  completedAt: null,
  createdAt: new Date().toISOString(),
};

// Usar:
navigation.navigate("WorkoutExecution", { workout: meuTreino });
```

## 🐛 Troubleshooting

### Erro: "Cannot find module 'expo-av'"

```bash
npm install expo-av
```

### Erro: Navigation types

Certifique-se de ter instalado:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

### Vídeos não aparecem

1. Verifique se a URL é válida e acessível
2. Teste com uma imagem primeiro:

```typescript
media: {
  type: 'image',
  url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
}
```

### Timer não funciona em background

- iOS: Funciona automaticamente com o hook useRestTimer
- Android: Pode precisar de configuração adicional no AndroidManifest.xml

### Erros de TypeScript

Execute:

```bash
npm run type-check
# ou
npx tsc --noEmit
```

## 📱 Teste no Device

### Expo Go

```bash
npx expo start
```

### iOS Simulator

```bash
npx expo run:ios
```

### Android Emulator

```bash
npx expo run:android
```

## 🎭 Features para Testar

1. **Timer de Descanso**
   - Complete uma série → observe o timer iniciar
   - Teste pausar/retomar
   - Adicione +15s, +30s, +60s
   - Observe animação nos últimos 10 segundos

2. **Navegação de Exercícios**
   - Complete todas as séries de um exercício
   - Veja transição para próximo exercício
   - Teste pular exercício

3. **Progresso**
   - Observe barra de progresso atualizar
   - Veja indicadores de série mudar
   - Confira estatísticas

4. **Finalização**
   - Complete o último exercício
   - Veja alert de conclusão
   - Teste botão "Finalizar Treino" no meio

5. **Preview de Mídia**
   - Teste com vídeo
   - Teste com imagem
   - Teste sem mídia

## 🔍 Debug Mode

Adicione logs para debug:

```typescript
// No WorkoutExecutionScreen.tsx, adicione:
useEffect(() => {
  console.log("Current Exercise:", currentExercise?.exercise.name);
  console.log("Status:", status);
  console.log("Execution:", execution);
}, [currentExercise, status, execution]);
```

## 📚 Próximos Passos

Depois de testar a funcionalidade básica:

1. **Integrar com Backend**
   - Buscar workouts da API
   - Salvar progresso

2. **Adicionar Persistência**
   - Salvar sessão localmente
   - Recuperar se app fechar

3. **Analytics**
   - Trackear eventos importantes
   - Medir engajamento

4. **Live Activities (iOS)**
   - Seguir guia em `services/liveActivity.ts`
   - Implementar native module

5. **Melhorias de UX**
   - Sons de feedback
   - Mais animações
   - Celebrações de conquistas

## 💡 Dicas

- Use `mockWorkout` ou `mockWorkoutAlternative` para testes rápidos
- Comece com 2-3 exercícios para ciclos de teste mais rápidos
- Ajuste `restSeconds` para valores baixos (10-15s) em testes
- Use React Native Debugger para inspecionar estado
- Console.log é seu amigo!

## ✅ Checklist de Teste

- [ ] Instalar dependências
- [ ] App inicia sem erros
- [ ] Navegar para tela de execução
- [ ] Preview de exercício aparece
- [ ] Informações de exercício corretas
- [ ] Completar série funciona
- [ ] Timer de descanso inicia
- [ ] Timer tem animações
- [ ] Adicionar tempo funciona
- [ ] Pausar/retomar funciona
- [ ] Pular descanso funciona
- [ ] Passar para próximo exercício
- [ ] Finalizar treino mostra alert
- [ ] Voltar com back button pede confirmação
- [ ] Progresso atualiza corretamente

## 🆘 Precisa de Ajuda?

Verifique:

1. `README.md` - Documentação completa
2. `DESIGN_GUIDE.md` - Guia visual
3. `mockData.ts` - Exemplos de dados
4. `navigation/example.tsx` - Exemplos de navegação

---

**Bom treino! 💪**
