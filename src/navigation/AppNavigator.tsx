import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './navigators/MainNavigator/MainNavigator';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
