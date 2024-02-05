import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text>Sola7fat</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native! </Text>

      <Text style={styles.subHeaderStyle}> My name is {greeting}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
