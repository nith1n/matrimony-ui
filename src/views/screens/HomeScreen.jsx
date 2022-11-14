import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DailyMatchCard from "../components/DailyMatchCard";
import ProfileCardLarge from "../components/ProfileCardLarge";
import Button from "../components/Button";
import { UserDataContext } from "../context/userDataContext";

const HomeScreen = () => {
  const { userDetails, userData } = useContext(UserDataContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.homeHeaderContainer}>
          <Text style={styles.headerTitle}>Hello, Nithin R</Text>
        </View>
        <DailyMatchCard />
        <ProfileCardLarge />
        <Button
          title="get users"
          onPress={() => {
            userDetails();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeHeaderContainer: {
    height: 130,
    // backgroundColor: "red",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
