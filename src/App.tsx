import {AppNavigator} from './navigation/AppNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppStateContextProvider} from './state/AppState/AppStateContextProvider';
import {AppThemeProvider} from './theme/AppThemeProvider';
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <AppStateContextProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </QueryClientProvider>
      </AppThemeProvider>
    </AppStateContextProvider>
  );
}

export default App;
