import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reservations from "../components/Reservations";

const ReservationsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Reservations" component={Reservations} />
    </Stack.Navigator>
  );
};

export default ReservationsStack;
