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
- Componentes devem ter pasta própria:

src/
  components/
    Button/
      index.tsx
      styles.ts
      types.ts (opcional)

- Navegação deve ficar em:
src/navigation/

- Hooks devem ficar em:
src/hooks/

- Estilos globais em:
src/styles/theme.ts

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