import { View, Text, Image } from "react-native";
import React from "react";

const BannerSlider = ({ data }) => {
  return (
    <View>
      <Image
        source={data.image}
        style={{ width: 300, height: 150, borderRadius: 10 }}
      />
    </View>
  );
};

export default BannerSlider;
