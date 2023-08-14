import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  AppState,
  AppStateContext,
  AppStateContextValue,
  defaultAppStateValue,
} from './AppStateContext';

type AppStateProviderProps = {
  children: React.ReactNode;
};

export const AppStateContextProvider: React.FC<AppStateProviderProps> = ({
  children,
}) => {
  const [state, setState] =
    useState<AppStateContextValue>(defaultAppStateValue);

  const updateState = async (updatedState: Partial<AppState>) => {
    const newState: AppStateContextValue = {
      ...state,
      ...updatedState,
    };
    await AsyncStorage.setItem('globalAppState', JSON.stringify(newState));
    setState(newState);
  };

  useEffect(() => {
    // Load the persisted state from AsyncStorage
    const loadState = async () => {
      const persistedState = await AsyncStorage.getItem('globalAppState');
      if (persistedState) {
        const parsedPersistedState = JSON.parse(persistedState);
        setState({...parsedPersistedState, isLoadingPersistedState: false});
      } else {
        setState({...defaultAppStateValue, isLoadingPersistedState: false});
      }
    };

    loadState();
  }, []);

  const appStateWithUpdater = {...state, updateAppState: updateState};

  return (
    <AppStateContext.Provider value={appStateWithUpdater}>
      {children}
    </AppStateContext.Provider>
  );
};
