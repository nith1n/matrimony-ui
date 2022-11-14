import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 30, flex: 1, alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center", width: "100%" }}>
          <Button
            title="Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
          <Button
            title="Register"
            onPress={() => {
              navigation.navigate("Registration");
            }}
          />
        </View>
        <View style={{ flex: 0, width: "60%" }}>
          <Button
            title="Excecutive Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
