import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import CustomButton from "./CustomButton";

const Home = ({ navigation }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const pressHandler = () => {
    navigation.navigate("Resource");
  };

  const handleLogOUt = async() => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token Removed");
    }
    catch(error){
      console.log(error);
    }
    finally{
       navigation.navigate("loadingScreen");
    }
};
  useEffect (() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decoded = jwtDecode(token);
        setName(decoded.name);
        setRole(decoded.role);
      } else {
        navigation.navigate("Login");
      }
    };
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{}}>Home Screen</Text>
      <Text style={{}}>Welcome {name} {role}</Text>
      <View>
        
        <CustomButton text="RESOURCES" onPress={pressHandler} />
        
        <CustomButton text="LOG OUT" onPress={handleLogOUt} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default Home;
