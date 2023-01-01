import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CameraScreenProps } from '../../navigation/NavRouter';
import { commonStyles } from '../../styles';

const CameraScreen = ({ navigation, route }: CameraScreenProps) => {
  return (
    <View style={commonStyles.darkContainer}>
      <Text style={styles.heading}>Camera Screen</Text>
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

export default CameraScreen;
