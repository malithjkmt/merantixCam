/**
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavRouter } from './navigation/NavRouter';
import { commonStyles } from './styles';

const App = () => {
  return (
    <SafeAreaView style={commonStyles.darkContainer}>
      <StatusBar barStyle="light-content" />
      <NavRouter />
    </SafeAreaView>
  );
};

export default App;
