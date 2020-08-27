import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import LoginScreen from '../screens/LoginScreen';
import { UnloggedParamList } from '../types';

const UnloggedStack = createStackNavigator<UnloggedParamList>();

export default function UnloggedNavigator() {
  return (
    <UnloggedStack.Navigator>
        <UnloggedStack.Screen name="Login" component={LoginScreen}/>
    </UnloggedStack.Navigator>
  );
}
