import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

import TodoLists from "../components/TodoLists";

export default function Input() {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([
    { value: "First task" },
    { value: "Second Task" },
  ]);

  const addTask = (task) => {
    const found = tasks.find((obj) => obj.value === task.value);
    if (!found && task.value !== "")
      settasks([task, ...tasks]);
    else if (found)
      alert("Cannot add Duplicate Task");
  };

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
          addTask({value: task});
          settask("");
        }}
      />
      <TodoLists tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "dodgerblue",
    borderRadius: 10,
    width: "75%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
