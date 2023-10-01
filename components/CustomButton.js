import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const CustomButton = ({onPress, text , color }) => {
  if(!color){
    color = "#9966CC";
  }

  return (
    <View style ={{alignItems:"center"}}>

      <TouchableOpacity style={{...styles.button, backgroundColor: color}} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#F5F5F5",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    margin: 10,
    elevation: 6,
  },
});
export default CustomButton