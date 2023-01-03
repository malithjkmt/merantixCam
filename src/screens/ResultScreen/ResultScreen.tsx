import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { ResultScreenProps } from '../../navigation/NavRouter';
import { commonStyles } from '../../styles';
import { IconButton } from '../../components';
import { Icons } from '../../assets/images';

const ResultScreen = ({ navigation, route }: ResultScreenProps) => {
  const url = route.params.url;

  return (
    <View style={commonStyles.darkContainer}>
      <Image source={{ uri: url }} style={styles.previewImage} />
      <View style={styles.buttonRow}>
        <IconButton label="Retake" icon={Icons.retryIcon} onPress={() => navigation.goBack()} />
        <IconButton label="Use photo" icon={Icons.useIcon} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  previewImage: {
    flex: 1,
    marginTop: '10%',
    marginBottom: '5%',
    borderRadius: 15,
  },
  buttonRow: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});

export default ResultScreen;
