import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Task from "../components/Task";

const InProgress = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const onChangeInput = (text) => {
    setTask(text);
  };
  const createTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.tasksSection}>
        {tasks.map((item, index) => {
          return <Task key={index} text={item} />;
        })}
      </View>

      <View style={styles.addTaskSection}>
        <TextInput
          style={styles.addInput}
          onChangeText={(text) => onChangeInput(text)}
          value={task}
          placeholder="ajouter une tâche"
        />
        <TouchableOpacity style={styles.addButton} onPress={() => createTask()}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    borderColor: "green",
    borderWidth: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tasksSection: {
    marginTop: 5,
    width: "100%",
    borderColor: "tomato",
    borderWidth: 5,
  },
  addTaskSection: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    bottom: 15,
    width: "100%",
  },
  addInput: {
    backgroundColor: "#CED3DC",
    width: "70%",
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "#4E8098",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    padding: 10,
  },
  addText: {
    fontSize: 25,
    color: "#CED3DC",
  },
});

export default InProgress;