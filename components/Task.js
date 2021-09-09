import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";

import dd from "../assets/dragodindes/doreePrune.png";
import Eyepatch from "../assets/players/eyepatch.png";
import clock from "../assets/content/clock.png";
import wheel from "../assets/content/wheel.png";

const Task = (props) => {
  const { text } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.imageLogo} source={dd} />
        <Text style={styles.imageText}>125{text}</Text>
      </View>
      <Text style={styles.raceText}>Emeraude et Turquoise {text}</Text>
      <View style={styles.timeView}>
        <Text style={styles.timeText}>2j 13h</Text>
        <Image style={styles.timeImage} source={clock} />
      </View>
      <View style={styles.playerView}>
        <Image style={styles.wheelImage} source={wheel} />
        <Image style={styles.playerImage} source={Eyepatch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    minHeight: 54,
    marginBottom: 10,
    padding: 10,
  },
  imageView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLogo: {
    height: 25,
    width: 25,
  },
  imageText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#980303",
  },
  raceText: {
    fontSize: 14,
    color: "#1A1A1A",
  },
  timeView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  timeText: {
    fontSize: 12,
    marginRight: 5,
  },
  timeImage: {
    height: 20,
    width: 20,
  },
  playerView: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  wheelImage: {
    position: "absolute",
    height: 35,
    width: 35,
  },
  playerImage: {
    position: "absolute",
    height: 25,
    width: 25,
  },
});

export default Task;
