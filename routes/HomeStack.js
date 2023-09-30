import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Resource from "../components/Resource";
import MoreDetails from "../components/MoreDetails";
import { Button } from "react-native";
import globalStyles from '../components/styles/globalStyles';
const HomeStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
      options={{ ...globalStyles.headerMain , headerTitle: "HOME"}}
        component={Home}
      />
      <Stack.Screen
        name="Resource"
        options={{ ...globalStyles.header , headerTitle: "RESOURCES"}}
        component={Resource}
      />
      <Stack.Screen
        name="MoreDetails"
        options={{ ...globalStyles.header, headerTitle: "MORE ..." }}
        component={MoreDetails}
      />
    </Stack.Navigator>
  );
}


export default HomeStack;