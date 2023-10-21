import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reservations from "../components/Reservations";
import globalStyles from "../components/styles/globalStyles";

const ReservationsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen 
      options={{ ...globalStyles.headerMain , headerTitle: "RESERVATIONS"}}
      name="Reservations" 
      component={Reservations}
       />
    </Stack.Navigator>
  );
};

export default ReservationsStack;
