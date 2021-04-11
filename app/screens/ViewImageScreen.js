import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from '../config/colors';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        top: 40,
        left: 30,
        backgroundColor: colors.primary,
        position: "absolute"
    },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    top: 40,
    right: 30,
    backgroundColor: colors.secondary,
    position: "absolute"
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
