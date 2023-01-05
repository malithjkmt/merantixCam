import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, ImageURISource } from 'react-native';

interface IconButtonProps {
  label: string;
  icon: ImageURISource;
  onPress: () => void;
}

export const IconButton: FC<IconButtonProps> = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.leftIcon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  leftIcon: {
    width: 15,
    height: 10,
    marginRight: 10,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});
