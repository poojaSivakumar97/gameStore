import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { sliderData, freeGames, paidGames } from "../Models/data";
import { windowWidth } from "../utlis/Dimensions";
import BannerSlider from "../components/BannerSlider";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

const Home = () => {
  const [gamesTab, setGamestab] = useState(1);
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };
  const onSelectSwitch = (value) => {
    setGamestab(value);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 20, marginTop: 20 }}>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 22, color: "#20315f", fontWeight: "bold" }}>
            Hello Joey!
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/user-profile.jpg")}
              style={{ height: 35, width: 35, borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.searchConatiner}>
          <Feather name="search" size={22} color="#C6C6C6" />
          <TextInput placeholder="search" />
        </View>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 18, color: "#20315f", fontWeight: "bold" }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0aada8" }}>see all</Text>
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
        <CustomSwitch
          selectionMode={1}
          option1={"Free Games"}
          option2={"Paid Games"}
          onSelectSwitch={onSelectSwitch}
        />
        <View style={{ marginBottom: 30 }}>
          {gamesTab == 1 &&
            freeGames.map((game) => {
              return <ListItem key={game.id} data={game} />;
            })}
          {gamesTab == 2 &&
            paidGames.map((game) => {
              return <ListItem key={game.id} data={game} />;
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchConatiner: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
    borderColor: "#C6C6C6",
    borderWidth: 1,
  },
});

export default Home;
