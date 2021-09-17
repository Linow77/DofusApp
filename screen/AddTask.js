import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
} from "react-native";

import { useHistory } from "react-router";

//images
import Arrow from "../assets/content/arrow.png";
import Check from "../assets/content/check.png";

import ModalDropdown from "react-native-modal-dropdown";

const AddTask = () => {
  const history = useHistory();
  return (
    <View style={styles.screen}>
      <TouchableHighlight
        style={styles.backButton}
        onPress={() => history.push("/inProgress")}
        underlayColor="#E8EAED"
        activeOpacity={0.6}
      >
        <View style={styles.backView}>
          <Image style={styles.backImage} source={Arrow} />
          <Text style={styles.backText}>Retour</Text>
        </View>
      </TouchableHighlight>

      <Text style={styles.title}>Ajout d'un évènement</Text>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>Race</Text>
        <TextInput style={styles.inputText}></TextInput>
      </View>

      <View style={styles.inputView}>
        <View style={styles.inputBox2}>
          <Text style={styles.inputLabel}>Eleveur</Text>
          <TextInput style={styles.inputText}></TextInput>
        </View>
        <View style={styles.inputBox2}>
          <Text style={styles.inputLabel}>Quantité</Text>
          <TextInput style={styles.inputText}></TextInput>
        </View>
      </View>

      <TouchableHighlight
        style={styles.confirmButton}
        onPress={() => history.push("/inProgress")}
        underlayColor="#E8EAED"
        activeOpacity={0.6}
      >
        <Image style={styles.confirmImage} source={Check} />
      </TouchableHighlight>

      <ModalDropdown
        options={["option 1", "option 2"]}
        dropdownStyle={styles.dropContainer}
      >
        <Text style={styles.inputLabel}>Quantité</Text>
      </ModalDropdown>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
  },
  backButton: {
    width: "100%",
    marginTop: 10,
  },
  backView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  backImage: {
    height: 15,
    width: 15,
    transform: [{ rotate: "90deg" }],
    marginRight: 10,
  },
  backText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    color: "#1A1A1A",
  },
  inputBox: {
    width: "100%",
    marginTop: 20,
  },
  inputBox2: {
    width: "42%",
    marginTop: 20,
  },
  inputView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#1A1A1A",
  },
  inputText: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    height: 38,
    //shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  confirmButton: {
    position: "absolute",
    bottom: 15,
    right: 0,
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
  confirmImage: {
    position: "relative",
    height: 25,
    width: 25,
  },
  dropContainer: {
    width: "100%",
  },
});

export default AddTask;
