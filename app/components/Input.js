import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

import TodoLists from "../components/TodoLists";

export default function Input({
  task,
  tasks,
  settask,
  selectList,
  updateselectList,
  addTask,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={task}
        onChangeText={(task) => {
          settask(task);
        }}
        style={styles.input}
        placeholder="Want to do some task?"
        onSubmitEditing={() => {
          addTask({ value: task });
          settask("");
        }}
      />
      <TodoLists
        tasks={tasks}
        selectList={selectList}
        updateselectList={updateselectList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginVertical: 20,
    height: "85%",
  },
  input: {
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderRadius: 10,
    width: "75%",
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
