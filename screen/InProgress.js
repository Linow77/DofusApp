import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";

import Task from "../components/Task";
import NavBar from "../components/NavBar";

import { useHistory } from "react-router";

//utils
import { clearAsyncStorage,getData } from "../utils/asyncStorage";

const InProgress = () => {
  const [task, setTask] = useState(null)

  const history = useHistory();

  const deleteTask = () => {
    clearAsyncStorage()
    getData(setTask)
  }

  
  //get all data
  useEffect(() => {
    getData(setTask)
  }, [])
  

  return (
    <>
      <NavBar />
      <ScrollView style={styles.scrollView}>
        <View style={styles.screen}>
          <View style={styles.tasksSection}>
            {task != null ?  task.map((item, index) => {
              return <Task key={index} number={item.number} race={item.name} />;
            }): null }
          </View>
        </View>
      </ScrollView>

      <TouchableHighlight
        style={styles.deleteButton}
        onPress={() => deleteTask()
          }
        underlayColor="#E8EAED"
        activeOpacity={0.6}
      >
        <View style={styles.deleteSign}>
          <View style={styles.rectangle}></View>
          <View style={styles.rectangle2}></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.addButton}
        onPress={() => history.push("/addTask")}
        underlayColor="#E8EAED"
        activeOpacity={0.6}
      >
        <View style={styles.addSign}>
          <View style={styles.rectangle3}></View>
          <View style={styles.rectangle4}></View>
        </View>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
  },
  scrollView: {
    width: "100%", //utile ?
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tasksSection: {
    marginTop: 5,
    width: "100%",
  },
  addButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  deleteButton: {
    position: "absolute",
    bottom: 15,
    left: 15,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  addText: {
    fontSize: 25,
    color: "#4BB3FD",
  },
  deleteSign: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    position: "absolute",
    height: 3,
    width: 21.5,
    transform: [{ rotate: "45deg" }],
    backgroundColor: "#E94F37",
  },
  rectangle2: {
    position: "absolute",
    width: 3,
    height: 21.5,
    backgroundColor: "#E94F37",
    transform: [{ rotate: "45deg" }],
  },
  addSign: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle3: {
    position: "absolute",
    height: 3,
    width: 21.5,
    backgroundColor: "#4BB3FD",
  },
  rectangle4: {
    position: "absolute",
    width: 3,
    height: 21.5,
    backgroundColor: "#4BB3FD",
  },
});

export default InProgress;
