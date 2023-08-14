import {AppStateContext} from '@/state/AppState';
import type {AppStateContextValue} from '@/state/AppState';
import {useContext} from 'react';

export const useAppState = (): AppStateContextValue => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }

  return context;
};
