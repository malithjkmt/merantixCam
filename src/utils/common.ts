import { openSettings as _openSettings } from 'react-native-permissions';

export const openSettings = async () => {
  try {
    await _openSettings();
  } catch (err) {
    console.log('Error opening settings');
  }
};
