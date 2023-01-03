import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { openSettings } from '../../utils/common';
import { NoPermissionScreenProps } from '../../navigation/NavRouter';
import { commonStyles } from '../../styles';

const NoPermissionScreen = ({}: NoPermissionScreenProps) => {
  return (
    <View style={[commonStyles.darkContainer, styles.container]}>
      <Text style={[commonStyles.h1, commonStyles.centerdText, styles.title]}>MerantixCam</Text>
      <View style={commonStyles.centeredContent}>
        <Text style={[commonStyles.h2, commonStyles.centerdText, styles.heading]}>
          Permission to Access Camera is Disabled
        </Text>
        <Text style={[commonStyles.p, commonStyles.centerdText]}>
          {
            'Permission to access camera is required to take photo.\nPlease go to Settings and allow MerantixCam to access the camera'
          }
        </Text>
        <TouchableOpacity style={styles.button} onPress={openSettings}>
          <Text style={commonStyles.buttonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  title: {
    marginBottom: 20,
  },
  heading: {
    marginBottom: 20,
  },
  button: {
    padding: 20,
  },
});

export default NoPermissionScreen;
