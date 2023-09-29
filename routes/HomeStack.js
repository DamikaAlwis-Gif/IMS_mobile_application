import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Resource from "../components/Resource";
import MoreDetails from "../components/MoreDetails";

const HomeStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Resource"
        component={Resource}
      />
      <Stack.Screen name="MoreDetails" component={MoreDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;