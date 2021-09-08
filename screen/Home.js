import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from "react-native";

import { useHistory } from "react-router-native";

const Home = () => {
  const data = require("../data/admin.json");
  const users = data.users;
  const history = useHistory();

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  const checkPassword = (password) => {
    if (password === "7931") {
      history.push("/inProgress");
    } else {
      alert("T'as pas le droit de venir ici :p");
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.text}>Administrateur</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => history.push("/inProgress")}
        >
          <Text style={styles.text}>Invité</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <Text style={styles.text}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setText(text)}
              value={text}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => checkPassword(text)}
            >
              <Text style={styles.textStyle}>Valider</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Retour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexGrow: 1,
  },
  buttonArea: {
    height: 150,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#393E41",
  },
  modal: {
    alignSelf: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  modalView: {
    width: 300,

    display: "flex",

    alignItems: "center",
    backgroundColor: "#E8EAED",
    borderWidth: 5,
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: "30%",
    fontSize: 15,
  },
  modalButton: {
    backgroundColor: "#F6F6F6",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default Home;
