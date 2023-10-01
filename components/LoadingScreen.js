import React from 'react'
import { View , StyleSheet} from 'react-native'
import { Button } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from 'react-native-paper';
import CustomButton from './CustomButton';


const LoadingScreen = ({navigation}) => {
    const handleProceed = async() => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          navigation.navigate("TabNavigation");
        } else{
            navigation.navigate("Login");
        }
        
    };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#8688BC",
        }}
      >
        WISDOM EDUCATION
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#8688BC",
          marginBottom: 20,
        }}
      >
        LABORATORIES
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          alignSelf: "center",
          color: "#8688BC",
          marginBottom: 20,
          fontFamily: "sans-serif",
        }}
      >
        Inventory Management System
      </Text>

      <CustomButton text="PROCEED" onPress={handleProceed} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
});

export default LoadingScreen