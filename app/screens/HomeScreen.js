import { View, Text } from "react-native";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";

export default function HomeScreen() {
  const [task, settask] = useState("");
  const [selectList, setselectList] = useState([]);
  const [tasks, settasks] = useState([]);

  const addTask = (task) => {
    const found = tasks.find((obj) => obj.value === task.value);
    if (!found && task.value !== "") settasks([task, ...tasks]);
    else if (found) alert("Cannot add Duplicate Task");
  };

  const updateselectList = (task) => {
    const found = selectList.find((obj) => obj.value === task.value);
    if (!found) {
      setselectList([task, ...selectList]);
    } else if (found) {
      const newselectList = selectList.filter(
        (obj) => obj.value !== task.value
      );
      setselectList(newselectList);
    }
  };

  return (
    <View>
      <Navbar />
      <Input
        task={task}
        tasks={tasks}
        selectList={selectList}
        updateselectList={updateselectList}
        settask={settask}
        settasks={settasks}
        addTask={addTask}
      />
    </View>
  );
}
