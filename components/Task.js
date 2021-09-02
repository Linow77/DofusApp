import React from "react";

import { StyleSheet, View, Text } from "react-native";

const Task = (props) => {
  const { text } = props;

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90C2E7",
    borderRadius: 10,
    minHeight: 35,
    marginBottom: 10,
  },
});

export default Task;
