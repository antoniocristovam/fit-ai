import { Workout } from "./types";

/**
 * Mock Data for Workout Execution
 * Use this data for testing and development
 */

export const mockWorkout: Workout = {
  id: "workout_chest_triceps_001",
  name: "Treino A - Peito e Tríceps",
  exercises: [
    {
      id: "ex_supino_reto_001",
      name: "Supino Reto com Barra",
      muscleGroup: "chest",
      sets: 4,
      reps: 12,
      weight: 80,
      restSeconds: 90,
      media: {
        type: "video",
        url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4",
        thumbnail:
          "https://cdn.musclewiki.com/media/uploads/thumbnails/male-barbell-bench-press-front.jpg",
      },
      instructions:
        "Deite no banco plano, pegue a barra com as mãos um pouco mais abertas que a largura dos ombros. Desça a barra controladamente até o peito e empurre de volta para cima.",
      tips: [
        "Mantenha os pés firmes no chão",
        "Inspire na descida e expire na subida",
        "Controle o movimento em ambas as fases",
        "Mantenha os ombros retraídos e estáveis",
      ],
    },
    {
      id: "ex_supino_inclinado_002",
      name: "Supino Inclinado com Halteres",
      muscleGroup: "chest",
      sets: 3,
      reps: 15,
      weight: 28,
      restSeconds: 60,
      media: {
        type: "video",
        url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-dumbbell-incline-bench-press-front.mp4",
        thumbnail:
          "https://cdn.musclewiki.com/media/uploads/thumbnails/male-dumbbell-incline-bench-press-front.jpg",
      },
      instructions:
        "No banco inclinado (30-45°), segure os halteres e execute o movimento de press mantendo controle total.",
      tips: [
        "Ajuste o banco entre 30-45 graus",
        "Mantenha os halteres alinhados",
        "Não tranque os cotovelos no topo",
      ],
    },
    {
      id: "ex_crossover_003",
      name: "Crossover no Cable",
      muscleGroup: "chest",
      sets: 3,
      reps: 15,
      weight: null,
      restSeconds: 45,
      media: {
        type: "video",
        url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-cable-crossover-front.mp4",
        thumbnail:
          "https://cdn.musclewiki.com/media/uploads/thumbnails/male-cable-crossover-front.jpg",
      },
      instructions:
        "Posicione-se entre os cabos altos, pegue as alças e execute um movimento de abraço à frente do corpo.",
      tips: [
        "Mantenha leve inclinação do tronco",
        "Cruze as mãos no final do movimento",
        "Controle a volta à posição inicial",
      ],
    },
    {
      id: "ex_triceps_testa_004",
      name: "Tríceps Testa com Barra W",
      muscleGroup: "arms",
      sets: 3,
      reps: 12,
      weight: 25,
      restSeconds: 60,
      media: {
        type: "video",
        url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-barbell-lying-triceps-extension-front.mp4",
        thumbnail:
          "https://cdn.musclewiki.com/media/uploads/thumbnails/male-barbell-lying-triceps-extension-front.jpg",
      },
      instructions:
        "Deitado no banco, segure a barra com pegada fechada e desça controladamente em direção à testa, mantendo cotovelos fixos.",
      tips: [
        "Mantenha os cotovelos fixos e apontando para cima",
        "Desça até quase encostar na testa",
        "Contraia o tríceps no topo do movimento",
      ],
    },
    {
      id: "ex_triceps_corda_005",
      name: "Tríceps Puxada com Corda",
      muscleGroup: "arms",
      sets: 3,
      reps: 15,
      weight: null,
      restSeconds: 45,
      media: {
        type: "video",
        url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-cable-rope-push-down-front.mp4",
        thumbnail:
          "https://cdn.musclewiki.com/media/uploads/thumbnails/male-cable-rope-push-down-front.jpg",
      },
      instructions:
        "No cabo alto com corda, empurre para baixo mantendo cotovelos junto ao corpo e separe a corda no final.",
      tips: [
        "Cotovelos colados ao corpo",
        "Separe as pontas da corda embaixo",
        "Contraia fortemente o tríceps",
        "Não use impulso do corpo",
      ],
    },
    {
      id: "ex_triceps_banco_006",
      name: "Mergulho no Banco",
      muscleGroup: "arms",
      sets: 3,
      reps: 15,
      weight: null,
      restSeconds: 60,
      media: {
        type: "video",
        url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-bodyweight-bench-dips-front.mp4",
        thumbnail:
          "https://cdn.musclewiki.com/media/uploads/thumbnails/male-bodyweight-bench-dips-front.jpg",
      },
      instructions:
        "Apoie as mãos no banco atrás de você e os calcanhares à frente. Desça o corpo flexionando os cotovelos.",
      tips: [
        "Desça até 90 graus nos cotovelos",
        "Mantenha o corpo próximo ao banco",
        "Pode adicionar peso no colo para progressão",
      ],
    },
  ],
  durationMinutes: 60,
  completedAt: null,
  createdAt: new Date().toISOString(),
};

export const mockWorkoutAlternative: Workout = {
  id: "workout_legs_001",
  name: "Treino B - Pernas Completo",
  exercises: [
    {
      id: "ex_agachamento_001",
      name: "Agachamento Livre",
      muscleGroup: "legs",
      sets: 4,
      reps: 10,
      weight: 100,
      restSeconds: 120,
      instructions:
        "Com a barra apoiada nas costas, desça até as coxas ficarem paralelas ao chão.",
      tips: [
        "Mantenha o core contraído",
        "Joelhos alinhados com os pés",
        "Olhar para frente",
      ],
    },
    {
      id: "ex_leg_press_002",
      name: "Leg Press 45°",
      muscleGroup: "legs",
      sets: 4,
      reps: 12,
      weight: 180,
      restSeconds: 90,
      instructions:
        "Na máquina de leg press, empurre a plataforma mantendo os pés na largura dos ombros.",
      tips: [
        "Não tranque os joelhos",
        "Desça até 90 graus",
        "Empurre com o calcanhar",
      ],
    },
    {
      id: "ex_cadeira_extensora_003",
      name: "Cadeira Extensora",
      muscleGroup: "legs",
      sets: 3,
      reps: 15,
      weight: 40,
      restSeconds: 60,
      instructions:
        "Sentado na máquina, estenda as pernas completamente contraindo o quadríceps.",
      tips: [
        "Contraia no topo",
        "Desça controladamente",
        "Mantenha as costas apoiadas",
      ],
    },
    {
      id: "ex_cadeira_flexora_004",
      name: "Cadeira Flexora",
      muscleGroup: "legs",
      sets: 3,
      reps: 15,
      weight: 35,
      restSeconds: 60,
      instructions:
        "Deitado na máquina, flexione as pernas trazendo os calcanhares em direção aos glúteos.",
      tips: [
        "Contraia os posteriores",
        "Movimento controlado",
        "Não arqueie as costas",
      ],
    },
    {
      id: "ex_panturrilha_005",
      name: "Panturrilha em Pé",
      muscleGroup: "legs",
      sets: 4,
      reps: 20,
      weight: 80,
      restSeconds: 45,
      instructions:
        "Na máquina, suba na ponta dos pés ao máximo e desça alongando bem.",
      tips: ["Amplitude completa", "Pausa no topo", "Alongue embaixo"],
    },
  ],
  durationMinutes: 55,
  completedAt: null,
  createdAt: new Date().toISOString(),
};

/**
 * Mock exercise with different media types
 */
export const exerciseMediaExamples = {
  withVideo: {
    type: "video" as const,
    url: "https://cdn.musclewiki.com/media/uploads/videos/branded/male-barbell-bench-press-front.mp4",
    thumbnail:
      "https://cdn.musclewiki.com/media/uploads/thumbnails/male-barbell-bench-press-front.jpg",
  },
  withGif: {
    type: "gif" as const,
    url: "https://media.giphy.com/media/example.gif",
  },
  withImage: {
    type: "image" as const,
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  },
};
