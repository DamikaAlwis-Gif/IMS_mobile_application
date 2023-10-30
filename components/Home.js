import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import CustomButton from "./CustomButton";
import { Surface, Text } from "react-native-paper";


const Home = ({ navigation }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const pressHandler = () => {
    navigation.navigate("Resource");
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
      <View>
       
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            alignSelf: "center",
            color: "#8688BC",
            marginBottom: 20,
          }}
        >
          SEE WHAT'S AVAILABLE !
        </Text>
      </View>
      <Image
        source={require("./images/bg3.jpg")}
        style={{
          width: 400,
          height: 350,
          alignSelf: "center",
          margin: 10,
        }}
      ></Image>
      {/* <View>
        <Text variant="headlineSmall" style={{ alignSelf: "center" }}>
          Wisdom Education Laboratories
        </Text>
      </View> */}

      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Surface style={styles.surface} elevation={4}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}> 128 </Text>
            <Text style={{ color: "white", fontSize: 20 }}> Items</Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}> Available now</Text>
        </Surface>
        <Surface style={styles.surface} elevation={4}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}> 34 </Text>
            <Text style={{ color: "white", fontSize: 20 }}> Items</Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}> Checked out</Text>
        </Surface>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Surface style={styles.surface} elevation={4}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}> 33 </Text>
            <Text style={{ color: "white", fontSize: 20 }}> Items</Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}> Under maintenance</Text>
        </Surface>
        <Surface style={styles.surface} elevation={4}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 40 }}> 3 </Text>
            <Text style={{ color: "white", fontSize: 20 }}> Items</Text>
          </View>
          <Text style={{ color: "white", fontSize: 20 }}>Out of order</Text>
        </Surface>
      </View> */}
      <View style={{ justifyContent: "center" }}>
        <CustomButton text="RESOURCES" onPress={pressHandler} />
        {/* <CustomButton text="LOG OUT" onPress={handleLogOUt} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  surface: {
    padding: 8,
    height: 165,
    width: 165,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#1E90FF",
  },
});

export default Home;
