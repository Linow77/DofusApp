import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useHistory } from "react-router-native";

const Home = () => {
  const data = require("../data/user.json");
  const users = data.users;
  const history = useHistory();

  console.log(users);
  return (
    <View style={styles.screen}>
      <Text>Selection du compte</Text>
      {users.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => history.push("/inProgress")}
          >
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#393E41",
  },
});
export default Home;
