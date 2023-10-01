
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
  card: {
    padding: 4,
    backgroundColor: "#D8D8D8",
    marginTop: 10,
    borderRadius: 10,
    elevation: 7,
  },

  titleText: {
    fontSize: 18,
    //fontWeight: "bold",
    //color: "#333",
    alignSelf: "center",
    color: "white",
    marginBottom: 5,
  },
  cardContent: {
    backgroundColor: "#8688BC",
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,

  },
});

export default globalStyles;