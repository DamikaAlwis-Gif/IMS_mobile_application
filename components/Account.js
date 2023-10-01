import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import globalStyles from './styles/globalStyles';
import axios from 'axios';
import url from './url';
import CustomButton from './CustomButton';
import { Image } from 'react-native';
import userImage from "./images/user.png"



const Account = ({navigation}) => {
  const [id, setID] = useState("");
  const [details , setDetails] = useState([]);
 const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    checkToken();
    
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setID(decoded.user_id);
      console.log(decoded.user_id);
    } else {
      navigation.navigate("Login");
    }
  };
  useEffect(() => {
  
    fetchDetails();
    
    
  }, [id]);

  const fetchDetails = async () => {
    try {
      const url1 = url.url + `:8800/auth/userbyid/${id}`;
      const res = await axios.get(url1);
      setDetails(res.data[0]);

      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
      
    }
  };
  const handleLogOUt = async () => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token Removed");
    } catch (error) {
      console.log(error);
    } finally {
      navigation.navigate("loadingScreen");
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={{ ...globalStyles.card, padding: 10 }}>
        <Image
          source={userImage}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            margin: 10,
            borderRadius: 100,
          }}
        ></Image>
        
        <View style={globalStyles.cardContent}>
          <View>
            <Text style={globalStyles.titleText}>
              User Name: {details.user_name}
            </Text>
          </View>

          <Text style={globalStyles.titleText}>Name: {details.name}</Text>
          <Text style={globalStyles.titleText}>User ID: {details.user_id}</Text>
          <Text style={globalStyles.titleText}>Email: {details.email}</Text>
          <Text style={globalStyles.titleText}>
            Phone Number: {details.phone_number}
          </Text>
          <Text style={globalStyles.titleText}>Role: {details.role}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomButton text="LOG OUT" onPress = {handleLogOUt} color="#FF6B6B" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,

  },
})

export default Account