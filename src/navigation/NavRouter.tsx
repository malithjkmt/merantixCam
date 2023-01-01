/**
 *
 * @format
 */

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import CameraScreen from '../screens/CameraScreen';
import ResultScreen from '../screens/ResultScreen';

type RootStackParamList = {
  CameraScreen: undefined;
  ResultScreen: { url: string };
};

export type CameraScreenProps = NativeStackScreenProps<RootStackParamList, 'CameraScreen'>;
export type ResultScreenProps = NativeStackScreenProps<RootStackParamList, 'ResultScreen'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavRouter: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ headerShown: false, animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { NavRouter };
