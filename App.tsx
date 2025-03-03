import React from 'react';
import { ThemeProvider } from './themes/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/RootNavigation/StackNav';

const App: React.FC = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
