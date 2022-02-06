import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Home from "../screens/Home";
import GameDetails from "../screens/GameDetails";
import CartScreen from "../screens/CartScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={({ route }) => ({ title: route.params?.title })}
      />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#AD40AF" },
      }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#AD40AF",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
          tabBarBadge: "3",
          tabBarBadgeStyle: { backgroundColor: "yellow" },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  //   console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  //   console.log(routeName);
  if (routeName !== "home") {
    return "none";
  }
  return "flex";
};

export default TabNavigator;
