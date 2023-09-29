import React from 'react'
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import ReservationsStack from './ReservationsStack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen
        name="HomeStack"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="AboutStack"
        options={{
          headerShown: false,
          tabBarLabel: "account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={AboutStack}
      />
      <Tab.Screen
        name="ReservationsStack"
        options={{
          headerShown: false,
          tabBarLabel: "account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={ReservationsStack}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;