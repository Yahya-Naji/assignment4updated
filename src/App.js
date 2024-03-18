import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/AppNavigation';
import { NotesProvider } from './context/NotesContext';

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </NotesProvider>
  );
}
