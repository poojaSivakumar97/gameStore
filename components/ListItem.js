import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import React from "react";
import { windowWidth } from "../utlis/Dimensions";

const ListItem = ({ data, onPress }) => {
  return (
    <View style={styles.gameDetails}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={data.poster}
          style={{ height: 55, width: 50, borderRadius: 5 }}
        />
        <View style={{ marginLeft: 10, width: windowWidth - 220 }}>
          <Text style={{ fontSize: 14 }}>{data.subtitle}</Text>
          <Text
            numberOfLines={1}
            style={{ fontSize: 16, textTransform: "uppercase" }}
          >
            {data.title}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0aada8",
          borderRadius: 10,
          width: 80,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          //   marginVertical: 20,
          //   marginBottom: 20,
        }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 16, color: "#fff" }}>
          {data.isFree == "Yes" ? "Free" : data.price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  gameDetails: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default ListItem;
