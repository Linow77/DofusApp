import React from "react";

import { StyleSheet, View, Text } from "react-native";
import NavBar from "../components/NavBar";

const Infos = () => {
  return (
    <>
      <NavBar />
      <View style={styles.screen}>
        <Text>infos</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default Infos;
