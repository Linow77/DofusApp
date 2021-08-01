import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  Button,
  TextInput,
} from "react-native";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function App() {
  const [task, setTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  const onChangeInput = (text) => {
    setTask(text);
  };
  const createTask = () => {
    setTasks([...tasks, task]);
    setTask(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naissances</Text>
      {tasks.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
      <View style={styles.addTaskSection}>
        <TextInput
          style={styles.addInput}
          onChangeText={(text) => onChangeInput(text)}
          value={task}
        />
        <Button
          style={styles.addButton}
          title="+"
          onPress={() => createTask()}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBarManager.HEIGHT,
    paddingTop: 10,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addTaskSection: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-around",
    bottom: 30,
    width: "100%",
  },
  addInput: {
    backgroundColor: "lightgrey",
    width: "70%",
  },
  addButton: {
    fontSize: 25,
  },
});
