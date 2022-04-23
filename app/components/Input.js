import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

import TodoLists from "../components/TodoLists";

export default function Input() {
  const [task, settask] = useState("");
  const [selectList, setselectList] = useState([]);
  const [tasks, settasks] = useState([]);

  const addTask = (task) => {
    const found = tasks.find((obj) => obj.value === task.value);
    if (!found && task.value !== "")
      settasks([task, ...tasks]);
    else if (found)
      alert("Cannot add Duplicate Task");
  };

  const updateselectList = (task) => {
    const found = selectList.find((obj) => obj.value === task.value);
    if (!found) {
      setselectList([task, ...selectList]);
    } else if (found) {
      const newselectList = selectList.filter((obj) => obj.value !== task.value);
      setselectList(newselectList);
    }
  }

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
      <TodoLists tasks={tasks} selectList={selectList} updateselectList={updateselectList}/>
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
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
