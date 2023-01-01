import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CameraScreenProps } from '../../navigation/NavRouter';

const CameraScreen = ({ navigation, route }: CameraScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', textAlign: 'center' }}>Camera Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default CameraScreen;
