import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, UIManager, findNodeHandle } from 'react-native';

import { CameraScreenProps } from '../../navigation/NavRouter';
import { commonStyles, theme } from '../../styles';
import { RNTCameraView } from '../../native/ui/RNTCameraView';

const CameraScreen = ({ navigation }: CameraScreenProps) => {
  const reactTag = useRef<number | null>(null);

  const onCapture = (e: { nativeEvent: { url: any } }) => {
    console.log('onCapture');
    console.log(e.nativeEvent.url);
    navigation.navigate('ResultScreen', { url: e.nativeEvent.url });
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
      <RNTCameraView
        ref={ref => {
          reactTag.current = findNodeHandle(ref);
        }}
        style={styles.cameraContainer}
        onCapture={onCapture}
      />
      <View style={styles.captureButtonContainer}>
        <View style={styles.captureButtonBorder}>
          <TouchableOpacity style={styles.captureButton} onPress={takePhoto} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    marginTop: '10%',
    marginBottom: '5%',
  },
  captureButtonContainer: {
    height: 100,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButtonBorder: {
    height: 76,
    width: 76,
    borderRadius: 76,
    backgroundColor: theme.colors.lightButtonColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureButton: {
    height: 72,
    width: 72,
    borderRadius: 72,
    borderWidth: 4,
    borderColor: theme.colors.darkBackground,
    backgroundColor: theme.colors.lightButtonColor,
  },
});

export default CameraScreen;
