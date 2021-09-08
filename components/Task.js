import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";

import Eyepatch from "../assets/eyepatch.png";

const Task = (props) => {
  const { text } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={Eyepatch} />
      <Text>coucou {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    minHeight: 35,
    marginBottom: 10,
  },
  tinyLogo: {
    height: 20,
    width: 20,
  },
});

export default Task;
