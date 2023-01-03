import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, UIManager, findNodeHandle, Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { openSettings } from '../../utils/common';
import { CameraScreenProps } from '../../navigation/NavRouter';
import { commonStyles, theme } from '../../styles';
import { RNTCameraView } from '../../native/ui/RNTCameraView';

const CameraScreen = ({ navigation }: CameraScreenProps) => {
  const reactTag = useRef<number | null>(null);

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const checkPermissions = async () => {
    const result = await check(PERMISSIONS.IOS.CAMERA);
    console.log(result);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        goToSettings();
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
        requestPermissions();
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        goToSettings();
        break;
    }
  };

  const requestPermissions = async () => {
    const result = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);

    console.log(result);
  };

  const goToSettings = async () => {
    try {
      Alert.alert(
        'MerantixCam Needs Permisions',
        'Please allow MerantixCam to access camera from the settings',
        [
          { text: 'Open Settings', onPress: openSettings },
          { text: 'Cancel', onPress: onNoPermissionGranted },
        ],
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onNoPermissionGranted = () => {
    navigation.reset({
      routes: [{ name: 'NoPermissionScreen' }],
    });
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
