import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";

const SearchScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}
      >
        <Input iconName="magnify" placeholder="Search using user id .." />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
