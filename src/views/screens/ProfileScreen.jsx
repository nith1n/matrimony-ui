import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ContentCard from "../components/ContentCard";
import Button from "../components/Button";
import { AuthContext } from "../context/authContext";

import { Avatar, DataTable } from "react-native-paper";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
      <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
        <View style={styles.profileHeaderCard}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={styles.profilePictureContainer}>
              <Avatar.Image size={128} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Nithin Remesh
              </Text>
              <Text>22Yrs / Cherthala</Text>
            </View>
          </View>
          <View style={styles.interestCardContainer}>
            <ContentCard header="Interests" />
          </View>
        </View>
        <View style={{ padding: 30 }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title textStyle={{ fontSize: 20 }}>
                Personel Details
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Name</DataTable.Cell>
              <DataTable.Cell>Nithin Remesh</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Age</DataTable.Cell>
              <DataTable.Cell>23</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Height</DataTable.Cell>
              <DataTable.Cell>163 cm</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Weight</DataTable.Cell>
              <DataTable.Cell>78 kg</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Martial Status</DataTable.Cell>
              <DataTable.Cell>Never Married</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Header>
              <DataTable.Title>Education / Occupation</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell>Education</DataTable.Cell>
              <DataTable.Cell>
                BTech in Computer Science Engineering
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Occupation</DataTable.Cell>
              <DataTable.Cell>
                Software Developer at Mozanta Technologies Private Limited
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <Button
            title="Sign out"
            onPress={() => {
              logout();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileHeaderCard: {
    width: "100%",
    height: 220,
    backgroundColor: "#e6f2c5",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  profilePictureContainer: {
    // height: 150,
    // width: 150,
    // borderRadius: 75,
    // borderWidth: 5,
    // borderColor: "#000",
  },
  interestCardContainer: {
    height: 200,
    width: "60%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
