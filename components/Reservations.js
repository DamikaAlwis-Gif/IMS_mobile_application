import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Reservations = () => {
  return (
    <View style = {styles.container}>
        <Text>Reservations Screen</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});


export default Reservations