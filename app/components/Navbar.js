import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Navbar({ selectList, deleteTask, unselect }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo</Text>
      {selectList.length !== 0 && (
        <View style={{flexDirection: "row", marginLeft: "auto", marginRight: 20}}>
          <View style={{marginHorizontal: 15}}>
            <TouchableHighlight
              style={styles.iconContainer}
              underlayColor={"#63acf2"}
              onPress={() => unselect()}
            >
              <MaterialIcons name="cancel" size={30} color="white" />
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              style={styles.iconContainer}
              underlayColor={"#63acf2"}
              onPress={() => deleteTask()}
            >
              <MaterialCommunityIcons name="delete" size={30} color="white" />
            </TouchableHighlight>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 15,
    height: 75,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "800",
  },
  iconContainer: {
    // marginLeft: "auto",
    borderRadius: 35,
    padding: 7,
  },
});
