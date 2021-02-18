import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNetInfo } from '@react-native-community/netinfo';

import LandingScreen from './screens/landing';
import TampilanScreen from './screens/Navigator';
import NoNetWorkScreen from './screens/noNetwork';
import ForgetScrenn from './screens/auth/lupa-password';
import AuthPhoneScreen from './screens/auth/register/authPhone';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login'
import LogStaffScreen from './screens/auth/login/staff';
import LogKasirScreen from './screens/auth/login/kasir';

const Stack = createStackNavigator();

function Navigator() {

  const netInfo = useNetInfo();

  const a = 1
  const b = 2

  return (
    <NavigationContainer>

      <Stack.Navigator 
        headerMode="none"
      >
        { netInfo.isConnected && netInfo.isInternetReachable ? 
        <>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Tampilan" component={TampilanScreen} /> 
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginStaff" component={LogStaffScreen} />
      <Stack.Screen name="LoginKasir" component={LogKasirScreen} />
      <Stack.Screen name="AuthPhone" component={AuthPhoneScreen} />
      <Stack.Screen name="ForgetPass" component={ForgetScrenn} />
        </>  :
      <Stack.Screen name="NoNetwork" component={NoNetWorkScreen} />
      } 
      </Stack.Navigator>

    </NavigationContainer>  
  ) 
}

export default Navigator;