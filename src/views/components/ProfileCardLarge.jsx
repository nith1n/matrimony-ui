import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileCardLarge = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>ProfileCardLarge</Text>
    </View>
  );
};

export default ProfileCardLarge;

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    backgroundColor: "lime",
    margin: 10,
  },
  profileImage: {
    width: 180,
    height: 180,
    // backgroundColor: "yellow",
    borderRadius: 90,
    borderWidth: 0.5,
  },
});
