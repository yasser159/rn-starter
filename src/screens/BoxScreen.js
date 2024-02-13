import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    //width: 100,
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    //borderWidth: 3,
    backgroundColor: "red",
    height: 100,
    width: 100,
  },

  textTwoStyle: {
    //borderWidth: 3,
    backgroundColor: "green",
    height: 100,
    width: 100,
    //alignSelf: "right",
    //top: 90,
    marginTop: 90,
  },
  textThreeStyle: {
    //borderWidth: 3,
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
