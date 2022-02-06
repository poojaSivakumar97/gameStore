import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#8200d6" }}
        {...props}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopColor: "#ccc",
          borderTopWidth: 0.5,
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", marginLeft: 10, marginVertical: 10 }}
        >
          <Ionicons name="share-social-outline" size={18} />
          <Text style={{ marginLeft: 10 }}>Tell a friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", marginLeft: 10, marginVertical: 10 }}
        >
          <Ionicons name="log-out-outline" size={18} />
          <Text style={{ marginLeft: 10 }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
