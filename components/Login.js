import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, TextInput } from "react-native-paper";
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from './url';
import CustomButton from './CustomButton';

const Login = ({navigation}) => {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(true);

    const handleSubmit = async () => {
      const url1 = url.url+":8800/auth/login/mobile";
      const data = {
        username: username,
        password: password,
      };
      try {
        const res = await axios.post(url1, data);
        console.log(res.data);
        if (res.data.status === "ok") {
          AsyncStorage.setItem("token", res.data.token);
          navigation.navigate("TabNavigation");
        } else {
         
          alert(res.data.err);
        }
      } catch (error) {
       alert("Error");
      }

    }
    
    
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

      <View style={{ marginTop: 20 }}>
        <TextInput
          label="User name"
          value={username}
          mode="outlined"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput
          label="Pass word"
          mode="outlined"
          secureTextEntry={passwordVisible}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* <Button
            // style={{ marginTop: 20 , height: 50}}
            style={{ marginTop: 20 }}
            icon="login"
            mode="contained"
            onPress={() => handleSubmit()}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
          </Button> */}
        <CustomButton text="LOGIN" onPress={handleSubmit} />
      </View>
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

export default Login