import React from 'react'
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from './HomeStack';
import AccountStack from "./AccountStack";
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
        name="AccountStack"
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        component={AccountStack}
      />
      <Tab.Screen
        name="ReservationsStack"
        options={{
          headerShown: false,
          tabBarLabel: "Reservations",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
        component={ReservationsStack}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;