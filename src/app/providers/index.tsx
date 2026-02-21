import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Wrap all global providers here (theme, auth context, store, etc.)
 * This keeps App.tsx clean and providers composable.
 */
export function Providers({ children }: ProvidersProps): React.JSX.Element {
  return <>{children}</>;
}
