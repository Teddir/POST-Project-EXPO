import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Landing,
  Login,
  Register,
  RegisterNew,
  ForgetPass,
  NoNetwork,
  HomeScreen,
  // AuthPhone,
} from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { styles } from '../style/styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppRouter = () => {
  const netInfo = useNetInfo();

  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode={false}
      screenOptions={{animationEnabled: false}}>
        { netInfo.isConnected && netInfo.isInternetReachable ? 
        <>
        <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="RegisterNew" component={RegisterNew}/>
        <Stack.Screen name="ForgetPass" component={ForgetPass}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        {/* <Stack.Screen name="AuthPhone" component={AuthPhone}/> */}
        </> :
        <Stack.Screen name="NoNetwork" component={NoNetwork}/>
        }

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
