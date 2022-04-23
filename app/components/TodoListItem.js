import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

import { MaterialIcons } from '@expo/vector-icons';

export default function TodoListItem({ index, todo }) {
  return (
    <TouchableHighlight style={styles.todoHighlight} underlayColor={"lightgrey"}onPress={() => console.log(todo)}>
      <View style={styles.todoContainer}>
        <Text style={[styles.index, styles.text]}>{index + 1}</Text>
        <Text style={[styles.text, styles.todo]}>{todo.value}</Text>
        <MaterialIcons style={{marginRight: 15}} name="check-box" size={24} color="dodgerblue" />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  index: {
    marginHorizontal: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
  todo: {
    marginRight: "auto",
  },
  todoHighLight: {
    backgroundColor: '#fcfcfc',
  },
  todoContainer: {
    borderRadius: 10,
    width: "100%",
    paddingTop: 15,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
  },
});
