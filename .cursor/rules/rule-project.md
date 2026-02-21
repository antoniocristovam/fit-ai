# Project Rules — React Native + TypeScript

## Stack
- React Native
- TypeScript obrigatório
- Functional Components apenas (sem classes)
- React Hooks para gerenciamento de estado
- React Navigation para navegação

---

## File Structure

- Todos os arquivos devem ser `.ts` ou `.tsx`
- Arquitetura baseada em Feature-Sliced Design + Clean Architecture

```
src/
├── app/
│   └── providers/        # Providers globais (theme, auth, store)
│       └── index.tsx
│
├── navigation/           # Stacks e tabs de navegação
│   ├── index.tsx
│   ├── RootNavigator.tsx
│   ├── AuthNavigator.tsx
│   └── AppNavigator.tsx
│
├── features/             # Módulos de domínio (feature-first)
│   ├── auth/
│   │   ├── components/   # Componentes exclusivos da feature
│   │   ├── hooks/        # Hooks exclusivos da feature
│   │   ├── screens/      # Telas da feature
│   │   ├── services/     # Chamadas de API da feature
│   │   └── types.ts
│   ├── workout/
│   ├── nutrition/
│   └── ai-coach/
│
├── components/           # Componentes compartilhados (design system)
│   ├── Button/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── Input/
│   ├── Typography/
│   ├── Card/
│   └── Layout/
│
├── hooks/                # Hooks utilitários compartilhados
│
├── services/             # Serviços externos
│   ├── api/
│   │   ├── client.ts     # HTTP client
│   │   └── endpoints.ts  # Endpoints centralizados
│   └── storage/
│       └── index.ts      # AsyncStorage wrapper
│
├── store/                # Gerenciamento de estado global
│   ├── index.ts
│   └── slices/
│
├── styles/               # Design tokens e tema global
│   ├── theme.ts          # Tema consolidado (fonte da verdade)
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
│
├── types/                # Tipos globais TypeScript
│   ├── navigation.ts
│   └── common.ts
│
└── utils/                # Funções utilitárias puras
    ├── formatters.ts
    └── validators.ts
```

**Regras de importação:**
- `features/` só importa de `components/`, `hooks/`, `services/`, `store/`, `styles/`, `types/`, `utils/`
- `features/` NÃO importa de outras `features/` (evitar acoplamento)
- `components/` compartilhados NÃO importam de `features/`

---

## TypeScript Rules

- Nunca usar `any`
- Sempre tipar props de componentes
- Sempre tipar retorno de funções
- Preferir `interface` para tipar objetos
- Usar `enum` para estados fixos
- Evitar `as unknown as`

---

## Component Rules

- Componentes devem ser pequenos e reutilizáveis
- Separar lógica em hooks customizados
- Nenhuma lógica complexa dentro do JSX
- Nenhum estilo inline (usar StyleSheet.create)

---

## Styling

- Usar StyleSheet.create sempre
- Cores devem vir do theme
- Espaçamentos padronizados
- Não usar valores mágicos repetidos

---

## Naming Conventions

- Componentes: PascalCase
- Funções e variáveis: camelCase
- Hooks: devem começar com `use`
- Tipos e interfaces: PascalCase
- Arquivos de componente: PascalCase

---

## Clean Code

- Remover imports não usados
- Não deixar console.log no código final
- Evitar funções grandes (máx ~40 linhas)
- Uma responsabilidade por componente

---

## Git

- Padrão de commit:
  feat:
  fix:
  refactor:
  style:
  chore:

- Branches:
  feature/nome-da-feature
  fix/nome-do-bug

---

## Testing

- Jest + React Native Testing Library
- Componentes críticos devem ter teste
- Testar render e interação básica