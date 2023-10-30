import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import globalStyles from "../components/styles/globalStyles";
import ChcekOuts from './../components/ChcekOuts';
const CheckOutsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ ...globalStyles.headerMain, headerTitle: "CHECK OUTS" }}
        name="CheckOuts"
        component={ChcekOuts}
      />
    </Stack.Navigator>
  );
};

export default CheckOutsStack;
