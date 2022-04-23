import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

export default function TodoListItem({
  index,
  todo,
  selectList,
  updateselectList,
}) {
  const getIconName = () => {
    const found = selectList.find((obj) => obj.value === todo.value);
    return found ? "check-circle" : "radio-button-unchecked";
  };

  return (
    <TouchableHighlight
      style={styles.todoHighlight}
      underlayColor={"#fcfcfc"}
      onPress={() => selectList.length !== 0 && updateselectList(todo)}
      onLongPress={() => {
        updateselectList(todo);
      }}
    >
      <View style={styles.todoContainer}>
        <Text style={[styles.index, styles.text]}>{index + 1}</Text>
        <Text style={[styles.text, styles.todo]}>{todo.value}</Text>
        {selectList.length !== 0 && (
          <MaterialIcons
            style={{ marginRight: 15 }}
            name={getIconName()}
            size={24}
            color="dodgerblue"
          />
        )}
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
    backgroundColor: "white",
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
