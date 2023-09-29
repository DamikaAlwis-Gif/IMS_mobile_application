import { useState, useEffect } from "react";
import { DataTable, Text } from "react-native-paper";
import axios from "axios";
import { ScrollView, TouchableOpacity, View, StyleSheet } from "react-native";
import url from "./url";

const Resource = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([20, 10]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const [labs, setLabs] = useState(["Computer lab", "IoT lab"]);
  const [resources, setResources] = useState([]);
  const [intialResources, setintialResources] = useState([]);
  const [types, setTypes] = useState([]);
  const [labsLoaded, setLabsLoaded] = useState(true); // change the value to false
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const handlePressIcon = () => setExpanded(!expanded);
  const [selectedItem, setSelectedItem] = useState("item1"); // Initialize with a default value

  const handleItemChange = (value) => {
    setSelectedItem(value);
  };

  useEffect(() => {
    labsLoaded && fetchAllResources();
  }, [labs]);

  const fetchAllResources = async () => {
    try {
      const params = labs.join(",");
      const url1 = url.url + `:8800/resources/${params}`;
      const res = await axios.get(url1);

      setResources(res.data.data);
      setintialResources(res.data.data);
      setTypes(res.data.typeList);
    } catch (error) {
      console.log(error);
    }
  };

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, resources.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  //console.log(resources);
  const handlePress = (id) => {
    // Handle the press event here
    navigation.navigate("MoreDetails", { id: id });
    console.log("Pressed");
  };

  const handleHoverIn = () => {
    // When hovered, set isHovered to true to disable the Pressable
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    // When the hover ends, set isHovered back to false to enable the Pressable
    setIsHovered(false);
  };
  const formatAvailability = (availability) => {
    if (availability === "Available") {
      return <Text style={{ color: "green" }}>Available</Text>;
    } else if (availability === "Checked out") {
      return <Text style={{ color: "red" }}>Checked out</Text>;
    } else if (availability === "Under maintenance") {
      return <Text style={{ color: "orange" }}>Maintenance</Text>;
    } else {
      return <Text style={{ color: "red" }}>{availability}</Text>;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <DataTable>
        <DataTable.Header
          style={{
            fontWeight: "bold",
            backgroundColor: "#8688BC",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            //borderRadius: 6,
          }}
        >
          <DataTable.Title>
            <Text variant="titleSmall" style={{ color: "white" }}>
              ID
            </Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text variant="titleSmall" style={{ color: "white" }}>
              Name
            </Text>
          </DataTable.Title>
          <DataTable.Title numeric>
            <Text variant="titleSmall" style={{ color: "white" }}>
              Availability
            </Text>
          </DataTable.Title>
        </DataTable.Header>

        <ScrollView style={{ maxHeight: "75%" }}>
          {resources.slice(from, to).map((item) => (
            <TouchableOpacity
              key={item.resource_id}
              onPress={() => handlePress(item.resource_id)}
              onHoverIn={handleHoverIn}
              onHoverOut={handleHoverOut}
              disabled={isHovered}
            >
              <DataTable.Row
                key={item.resource_id}
                style={{
                  backgroundColor: "#F5F5F5",
                  borderWidth: 1,
                  borderStyle: "dotted",
                  borderColor: "black",
                }}
              >
                <DataTable.Cell style={{ flex: 0.5 }}>
                  {item.resource_id}
                </DataTable.Cell>

                <DataTable.Cell style={{ flex: 2 }}>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {formatAvailability(item.availability)}
                </DataTable.Cell>
              </DataTable.Row>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <DataTable.Pagination
          style={{
            backgroundColor: "#F5F5F5",
            borderWidth: 1,
            borderStyle: "dotted",
            borderColor: "black",
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          page={page}
          numberOfPages={Math.ceil(resources.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${resources.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
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

export default Resource;
