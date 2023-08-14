import {createContext} from 'react';

type AppPreferences = {
  fontScalingFactor: number;
  theme: string | 'default';
};

export type AppState = {
  elapsedTime: number;
  preferences: AppPreferences;
};

export type AppStateContextValue = AppState & {
  isLoadingPersistedState: boolean;
  updateAppState: (updatedState: Partial<AppState>) => Promise<void>;
};

export const defaultAppStateValue: AppStateContextValue = {
  elapsedTime: 0,
  preferences: {
    fontScalingFactor: 1,
    theme: 'default',
  },
  async updateAppState(_) {},
  isLoadingPersistedState: true,
};

export const AppStateContext =
  createContext<AppStateContextValue>(defaultAppStateValue);
