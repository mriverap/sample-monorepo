import { StyleSheet, Text, TouchableOpacity, ColorValue } from "react-native";
import React from "react";

type ButtonProps = {
  text: string;
};
export const FancyButton = (props: ButtonProps) => {
  const text = props.text ?? "Sample Button";
  return (
    <TouchableOpacity
      onPress={() => console.log("pressed the button")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});
