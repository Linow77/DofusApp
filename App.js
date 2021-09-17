import React from "react";
import { StyleSheet, View, NativeModules } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import Home from "./screen/Home";
import InProgress from "./screen/InProgress";
import Infos from "./screen/Infos";
import Done from "./screen/Done";
import AddTask from "./screen/AddTask";
import UpdateTask from "./screen/UpdateTask";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/inProgress" component={InProgress} />
        <Route path="/infos" component={Infos} />
        <Route path="/done" component={Done} />
        <Route path="/addTask" component={AddTask} />
        <Route path="/updateTask:id" component={UpdateTask} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#E8EAED",
    paddingTop: STATUSBAR_HEIGHT,
    paddingHorizontal: 15,
    height: "100%",
  },
});
