import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from './routes/HomeStack';
import AboutStack from "./routes/AccountStack";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import globalStyles from './components/styles/globalStyles';
import ReservationsStack from './routes/ReservationsStack';
import Login from './components/Login';
import TabNavigation from './routes/TabNavigation';
import LoadingScreen from './components/LoadingScreen';
import { Provider } from 'react-native-paper';

export default function App() {
 
  //const Drawer = createDrawerNavigator();
  //const Tab = createMaterialBottomTabNavigator();
  const Stack = createNativeStackNavigator();


  return (
    //<Login/>
    <Provider>
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="loadingScreen"
            options={{
              headerShown: false,
            }}
            component={LoadingScreen}
          />
          <Stack.Screen
            name="Login"
            options={{
              ...globalStyles.headerMain,
              headerTitle: "LOGIN",
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="TabNavigation"
            options={{ headerShown: false }}
            component={TabNavigation}
          />
        </Stack.Navigator>

        {/* <Tab.Navigator initialRouteName="HomeStack">
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
        
      </Tab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
