import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { ResultScreenProps } from '../../navigation/NavRouter';
import { commonStyles } from '../../styles';

const ResultScreen = ({ navigation, route }: ResultScreenProps) => {
  const url = route.params.url;

  return (
    <View style={commonStyles.darkContainer}>
      <Text style={styles.heading}>Result Screen</Text>
      <Image source={{ uri: url }} style={styles.previewImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  // temp styling
  heading: {
    color: 'white',
    textAlign: 'center',
  },
  previewImage: {
    flex: 1,
  },
});

export default ResultScreen;
