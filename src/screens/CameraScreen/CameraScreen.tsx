import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, UIManager, findNodeHandle } from 'react-native';

import { CameraScreenProps } from '../../navigation/NavRouter';
import { commonStyles } from '../../styles';
import { RNTCameraView } from '../../native/ui/RNTCameraView';

const CameraScreen = ({ navigation, route }: CameraScreenProps) => {
  const reactTag = useRef<number | null>(null);

  const onCapture = (e: { nativeEvent: { url: any } }) => {
    console.log('onCapture');
    console.log(e.nativeEvent.url);
  };

  const takePhoto = () => {
    UIManager.dispatchViewManagerCommand(
      reactTag.current,
      UIManager['RNTCameraView'].Commands.takePhoto,
      [],
    );
  };
  return (
    <View style={commonStyles.darkContainer}>
      <Text style={styles.heading}>Camera Screen</Text>
      <RNTCameraView
        ref={ref => {
          reactTag.current = findNodeHandle(ref);
        }}
        style={styles.cameraContainer}
        onCapture={onCapture}
      />
      <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
        <Text>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // temp styling
  heading: {
    color: 'white',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
  },
  captureButton: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
});

export default CameraScreen;
