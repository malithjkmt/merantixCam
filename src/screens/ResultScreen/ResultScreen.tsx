import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ResultScreenProps } from '../../navigation/NavRouter';

const ResultScreen = ({ navigation, route }: ResultScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', textAlign: 'center' }}>Result Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default ResultScreen;
