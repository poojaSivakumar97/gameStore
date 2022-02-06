import { View, Text } from "react-native";
import React from "react";

const GameDetails = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>{route.params?.title}</Text>
    </View>
  );
};

export default GameDetails;
