import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "23" },
    { name: "Friend #2", age: "45" },
    { name: "Friend #3", age: "66" },
    { name: "Friend #4", age: "33" },
    { name: "Friend #5", age: "34" },
    { name: "Friend #6", age: "22" },
    { name: "Friend #7", age: "78" },
    { name: "Friend #8", age: "19" },
    { name: "Friend #9", age: "21" },
  ];

  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === { item: { name: 'Friend #1' }, index: 0 }
        console.log(item.age);

        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
