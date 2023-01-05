import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const commonStyles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: theme.colors.darkBackground,
  },
  centeredContent: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  centerdText: {
    textAlign: 'center',
  },
  h1: {
    fontSize: 22,
    color: theme.colors.defalutTextColor,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    color: theme.colors.defalutTextColor,
  },
  p: {
    color: theme.colors.defalutTextColor,
  },
  buttonText: {
    color: theme.colors.buttonActiveTextColor,
    fontSize: 16,
    textAlign: 'center',
  },
});
