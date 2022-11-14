import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import ProfileCard from "./ProfileCard";
// import { AuthContext } from "../context/authContext";
import { UserDataContext } from "../context/userDataContext";

const DailyMatchCard = () => {
  const { userDetails, userData } = useContext(UserDataContext);

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{
        // padding: 20,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {userData.map((data, index) => (
        <ProfileCard userData={data} key={index} />
      ))}
    </ScrollView>
  );
};

export default DailyMatchCard;

const styles = StyleSheet.create({});
