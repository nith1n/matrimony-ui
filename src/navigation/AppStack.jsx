import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/screens/HomeScreen";
import React from "react";
import SearchScreen from "../views/screens/SearchScreen";
import ProfileScreen from "../views/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
