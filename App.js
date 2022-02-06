import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Navigations/AuthStack";
import AppStack from "./Navigations/AppStack";

const App = () => {
  return (
    <NavigationContainer>
      {/* Authentication stack */}
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
