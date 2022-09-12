import { TouchableOpacity, Text, View } from "react-native";
import React, { useState } from "react";

export const Counter = (props) => {
  const [value, setValue] = useState(0);

  const addStep = () => {
    const newValue: number = (props.step as number) + value;
    setValue(newValue);
  };
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          width: 200,
          marginHorizontal: 40,
          marginVertical: 5,
          alignItems: "center",
        }}
        onPress={() => addStep()}
      >
        <Text>{value}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "gray",
          width: 200,
          marginHorizontal: 40,
          marginVertical: 5,
          alignItems: "center",
        }}
        onPress={() => setValue(0)}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </>
  );
};
