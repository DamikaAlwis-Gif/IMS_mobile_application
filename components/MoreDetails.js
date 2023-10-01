import React, { useEffect, useState } from 'react'
import { View, FlatList, ScrollView, Image } from 'react-native';
import {  Text , Button} from "react-native-paper";
import axios from 'axios';
import url from "./url";
import globalStyles from './styles/globalStyles';
import CustomButton from './CustomButton';

const MoreDetails = ({route, navigation}) => {
    
    const[details,setDetails] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const {id} = route.params;
                const res = await axios.get( url.url +`:8800/resources/usermore/${id}`);
                setDetails(res.data[0]);
                setLoaded(true);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetails();

    }, []);
    const formatText = (text) => {
      const temp = text.replace(/_/g, " ");
      return temp.charAt(0).toUpperCase() + temp.slice(1);
    };



  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View
          style={{
            padding: 4,
            backgroundColor: "#D8D8D8",
            marginTop: 10,
            borderRadius: 10,
            elevation: 7,
          }}
        >
          <Image
            source={{ uri: details.img_url }}
            style={{ width: 300, height: 200, alignSelf: "center", margin: 10 }}
          ></Image>
          <View style={{ marginTop: 20 }}>
            {Object.keys(details).map((key) => {
              if (key === "img_url") {
                return null;
              }
              return (
                <View
                  key={key}
                  style={{
                    padding: 5,
                    backgroundColor: "#8688BC",
                    borderColor: "black",
                    borderRadius: 10,
                    margin: 3,
                  }}
                >
                  <Text
                    variant="titleSmall"
                    style={{ textAlign: "center", color: "white" }}
                  >
                    {formatText(key) + " : " + details[key]}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={{ maxWidth: "", marginTop: 20 }}>
          {/* <Button mode="contained" onPress={() => console.log("Pressed")}>
          Reserve
        </Button> */}
          <CustomButton text="RESERVE" onPress={() => console.log("Pressed")} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MoreDetails