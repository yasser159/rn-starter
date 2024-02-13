import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
          //console.log(newValue);
        }}
      />

      <Text>Your name is:{password}</Text>
      {password.length < 4 ? (
        <Text style={{ color: "red" }}>
          Password must be at least 4 charecters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    // color: red,
  },
});

export default TextScreen;

//{true ? <Text>That was true</Text> : null}
