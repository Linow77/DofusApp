import React from "react";

import { StyleSheet, View, Text } from "react-native";
import NavBar from "../components/NavBar";

const UpdateTask = () => {
  return (
    <>
      <View style={styles.screen}>
        <Text>update</Text>
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

export default UpdateTask;
