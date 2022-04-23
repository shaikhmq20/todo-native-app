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

  const deleteTask = () => {
    const newTasks = [...tasks];
    const indices = [];
    for (let item of selectList) indices.push(newTasks.indexOf(item));
    for (let index of indices) newTasks.splice(index, 1);
    setselectList([]);
    settasks(newTasks);
  };

  return (
    <View>
      <Navbar selectList={selectList} deleteTask={deleteTask} />
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
