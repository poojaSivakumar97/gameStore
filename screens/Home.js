import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../Models/data";
import { windowWidth } from "../utlis/Dimensions";
import BannerSlider from "../components/BannerSlider";

const Home = () => {
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#20315f" }}>
            Hello Joey!
          </Text>

          <TouchableOpacity>
            <Image
              source={require("../assets/images/user-profile.jpg")}
              style={{ height: 35, width: 35, borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            color={"#C6C6C6"}
            size={22}
            style={{ marginRight: 6 }}
          />
          <TextInput placeholder="search" />
        </View>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#20315f" }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0aada8", fontSize: 18 }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    // paddingTop: 20,
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    borderRadius: 3,
    borderColor: "#C6C6C6",
    padding: 5,
    borderWidth: 1,
    // marginBottom: 20,
  },
});
export default Home;
