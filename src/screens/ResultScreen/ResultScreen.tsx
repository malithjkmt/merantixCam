import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ResultScreenProps } from '../../navigation/NavRouter';
import { commonStyles } from '../../styles';

const ResultScreen = ({ navigation, route }: ResultScreenProps) => {
  return (
    <View style={commonStyles.darkContainer}>
      <Text style={styles.heading}>Result Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // temp styling
  heading: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ResultScreen;
