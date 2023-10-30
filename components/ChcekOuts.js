import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import globalStyles from "./styles/globalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import axios from "axios";
import url from "./url";
import { formatDate } from "./utils/formatDate";

const ChcekOuts = () => {
  const [id, setID] = useState("");
  const [details, setDetails] = useState([]);
  const [IDLoaded, setIDLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setID(decoded.user_id);
      setIDLoaded(true);
      console.log(decoded.user_id);
    } else {
      navigation.navigate("Login");
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  const fetchDetails = async () => {
    try {
      const url1 = url.url + `:8800/checkout/myCheckOuts/${id}`;
      const res = await axios.get(url1);
      setDetails(res.data.data);
      setLoaded(true);
      // console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id !== "") {
      fetchDetails();
    }
  }, [IDLoaded]);

  return (
    <View style={globalStyles.container}>
      {loaded && details.length > 0 ? (
        <ScrollView>
          {details.map((item) => {
            return (
              <View
                key={details.indexOf(item)}
                style={{
                  ...globalStyles.cardContent,
                  marginTop: 10,
                  backgroundColor:
                    item.status === "Overdue" ? "#DC143C" : "#008000",
                }}
              >
                <Text style={globalStyles.cardText}>
                  {"Status: " + item.status}
                </Text>
                <Text style={globalStyles.cardText}>
                  {"Resource ID: " + item.resource_id}
                </Text>
                <Text style={globalStyles.cardText}>
                  {"Resource Name: " + item.name}
                </Text>
                <Text style={globalStyles.cardText}>
                  {"Check Out Time: " + formatDate(item.check_out_datetime)}
                </Text>
                <Text style={globalStyles.cardText}>
                  {"Due Time: " + formatDate(item.due_datetime)}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <Text
          style={{ ...globalStyles.titleText, color: "black", fontSize: 25 }}
        >
          No Check Outs
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({});

export default ChcekOuts;
