import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CustomSwitch = ({ selectionMode, option1, option2, onSelectSwitch }) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updateSelection = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        width: "90%",
        alignItems: "center",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
      }}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          padding: 5,
          backgroundColor: getSelectionMode == 1 ? "#AD40AF" : "#e4e4e4",
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => updateSelection(1)}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "#fff" : "#AD40AF",
            fontSize: 18,
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          padding: 5,
          backgroundColor: getSelectionMode == 2 ? "#AD40AF" : "#e4e4e4",
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => updateSelection(2)}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "#fff" : "#AD40AF",
            fontSize: 18,
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
