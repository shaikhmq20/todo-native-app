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
    <View
      style={{
        marginTop: 15,
        backgroundColor: "#D4F1F4",
        borderRadius: 50,
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <TouchableHighlight
        style={styles.todoHighlight}
        underlayColor={"#B1D4E0"}
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
              color="#77DD77"
            />
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  index: {
    marginLeft: 15,
    marginRight: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#05445E",
  },
  todo: {
    marginRight: "auto",
    width: "60%"
  },
  todoHighLight: {
    borderRadius: 50,
  },
  todoContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
