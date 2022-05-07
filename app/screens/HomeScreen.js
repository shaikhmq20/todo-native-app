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
    if (!found && task.value !== "") settasks([...tasks, task]);
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
    const indices = [];
    for (let selected of selectList) {
      indices.push(tasks.indexOf(selected));
    }
    const newTasks = [];
    for (let i = 0; i < tasks.length; i++) {
      if (indices.indexOf(i) == -1) newTasks.push(tasks[i]);
    }
    settasks(newTasks);
    console.log("Hello World")
    setselectList([]);
  };

  const unselect = () => {
    setselectList([]);
  }

  return (
    <View>
      <Navbar selectList={selectList} deleteTask={deleteTask} unselect={unselect}/>
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
