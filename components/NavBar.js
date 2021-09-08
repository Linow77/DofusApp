import React from "react";

import { StyleSheet, View, Text } from "react-native";

import { Link } from "react-router-native";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <Link to="/infos" underlayColor="#f0f4f7">
        <Text style={styles.navItem}>Infos</Text>
      </Link>
      <Link to="/" underlayColor="#f0f4f7">
        <Text style={styles.navItem}>En cours</Text>
      </Link>
      <Link to="/finished" underlayColor="#f0f4f7">
        <Text style={styles.navItem}> Terminées</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
    borderWidth: 5,
  },
  navItem: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NavBar;
