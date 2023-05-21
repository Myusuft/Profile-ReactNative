import { View, Text } from 'react-native'
import React from 'react'

import{createStackNavigator} from '@react-navigation/stack';

import {Main,Login,Register} from "../../screen";

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
    initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}
            options={{headerShown:false}}/>
             <Stack.Screen name="Register" component={Register}
            options={{headerShown:false}}/>
        <Stack.Screen name="Main" component={Main}
            options={{headerShown:false}}/>
        
    </Stack.Navigator>
  )
}

export default Routes