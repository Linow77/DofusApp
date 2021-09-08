import React from "react";

import { StyleSheet, View, Text } from "react-native";

const Finished = () => {
  return (
    <View style={styles.screen}>
      <Text>finished</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
  },
});

export default Finished;
