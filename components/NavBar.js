import React from "react";

import { useLocation } from "react-router";

import { StyleSheet, View, Text } from "react-native";

import { Link } from "react-router-native";

const NavBar = () => {
  let location = useLocation();

  return (
    <View style={styles.navBar}>
      <Link to="/infos" underlayColor="#E8EAED">
        {location.pathname === "/infos" ? (
          <Text style={styles.activenavItem}>Infos</Text>
        ) : (
          <Text style={styles.navItem}>Infos</Text>
        )}
      </Link>

      <Link to="/" underlayColor="#E8EAED">
        {location.pathname === "/" ? (
          <Text style={styles.activenavItem}>En cours</Text>
        ) : (
          <Text style={styles.navItem}>En cours</Text>
        )}
      </Link>
      <Link to="/finished" underlayColor="#E8EAED">
        {location.pathname === "/finished" ? (
          <Text style={styles.activenavItem}>Terminées</Text>
        ) : (
          <Text style={styles.navItem}>Terminées</Text>
        )}
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
  },
  navItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#BDBAB9",
  },
  activenavItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#393E41",
  },
});

export default NavBar;
