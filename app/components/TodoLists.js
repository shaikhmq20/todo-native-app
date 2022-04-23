import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoLists({ tasks, ...props }) {
  return (
    <View style={styles.todoListContainer}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TodoListItem index={tasks.indexOf(item)} todo={item} {...props} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    alignItems: "center",
    padding: 35,
  }
})
