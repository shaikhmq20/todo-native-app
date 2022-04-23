import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Navbar({ selectList, deleteTask }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo</Text>
      {selectList.length !== 0 && (
        <TouchableHighlight
          style={styles.iconContainer}
          underlayColor={"#63acf2"}
          onPress={() => deleteTask()}
        >
          <MaterialCommunityIcons name="delete" size={30} color="white" />
        </TouchableHighlight>
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
    fontWeight: "600",
  },
  iconContainer: {
    marginLeft: "auto",
    borderRadius: 25,
    padding: 5,
  },
});
