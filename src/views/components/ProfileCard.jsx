import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileCard = ({ userData }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.profileImage}></View>
      <View style={styles.profileDetail}>
        <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 5 }}>
          {userData.fullName}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "gray" }}>
          IT Professionel
        </Text>
        <Text>
          {userData.religion} | {userData.cast} | Moolam
        </Text>
        <Text>
          <Icon name="map-marker-outline" style={{ fontSize: 16 }} />
          Malappuram
        </Text>
      </View>
      <TouchableOpacity style={styles.viewProfileBtn}>
        <Text>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  profileDetail: {
    alignItems: "center",
    // backgroundColor: "blue",
    marginVertical: 10,
    width: "100%",
  },
  cardContainer: {
    padding: 10,
    width: 200,
    height: 350,
    // backgroundColor: "white",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
  },
  profileImage: {
    width: 180,
    height: 180,
    // backgroundColor: "yellow",
    borderRadius: 90,
    borderWidth: 0.5,
  },
  viewProfileBtn: {
    // backgroundColor: "white",
    height: 35,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 8,
  },
});
