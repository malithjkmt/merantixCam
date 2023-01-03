/**
 *
 * @format
 */

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import CameraScreen from '../screens/CameraScreen';
import ResultScreen from '../screens/ResultScreen';
import NoPermissionScreen from '../screens/NoPermissionScreen';

type RootStackParamList = {
  CameraScreen: undefined;
  ResultScreen: { url: string };
  NoPermissionScreen: undefined;
};

export type CameraScreenProps = NativeStackScreenProps<RootStackParamList, 'CameraScreen'>;
export type ResultScreenProps = NativeStackScreenProps<RootStackParamList, 'ResultScreen'>;
export type NoPermissionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'NoPermissionScreen'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavRouter: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="NoPermissionScreen"
          component={NoPermissionScreen}
          options={{ headerShown: false, animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { NavRouter };
