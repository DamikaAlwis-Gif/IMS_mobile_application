import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../components/About";
const AboutStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About}   />
      
    </Stack.Navigator>
  );
}

export default AboutStack