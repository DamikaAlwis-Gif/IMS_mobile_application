import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from '../components/Account';
import globalStyles from '../components/styles/globalStyles';

const AccountStack = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account}  
      options={{...globalStyles.headerMain, headerTitle: "ACCOUNT"}} />
      
    </Stack.Navigator>
  );
}

export default AccountStack;