import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNTER_INCREMENT = 1;

const CounterScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_increase":
        return state.counter + action.payload > 10
          ? state
          : { ...state, counter: state.counter + action.payload };

      case "change_decrease":
        return state.counter + action.payload < 0
          ? state
          : { ...state, counter: state.counter + action.payload };
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "change_increase", payload: COUNTER_INCREMENT })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "change_decrease", payload: -1 * COUNTER_INCREMENT })
        }
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

// () => {
//           setCounter(counter + 1);
//         }
