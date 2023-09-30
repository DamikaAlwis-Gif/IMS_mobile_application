
import {StyleSheet} from 'react-native';
const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerMain: {
    headerBackVisible: false,
    headerBlurEffect: "systemUltraThinMaterial",
    headerTitle: "Home",
    headerTitleAlign: "center",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 25,
    },

    // headerTransparent: true,
    // headerBlurEffect: "extraLight",
    headerStyle: {
      backgroundColor: "#8688BC",
    },
    // headerRight: () => (
    //   <Button
    //     onPress={() => alert("This is a button!")}
    //     title="Info"
    //     color="#fff"
    //   />
    // ),
  },
  header: {
   
    headerTitleAlign: "center",
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 25,
    },

    // headerTransparent: true,
    // headerBlurEffect: "extraLight",
    headerStyle: {
      backgroundColor: "#8688BC",
    },
    // headerRight: () => (
    //   <Button
    //     onPress={() => alert("This is a button!")}
    //     title="Info"
    //     color="#fff"
    //   />
    // ),
  },
});

export default globalStyles;