import React from "react";
import { StyleSheet, View, NativeModules } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import InProgress from "./screen/InProgress";
import Infos from "./screen/Infos";
import Finished from "./screen/Finished";
import NavBar from "./components/NavBar";

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <NavBar></NavBar>

        <Route exact path="/" component={InProgress} />
        <Route path="/infos" component={Infos} />
        <Route path="/finished" component={Finished} />
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
