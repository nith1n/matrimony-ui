import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";
import DatePicker from "../components/DatePicker";
import { UserDataContext } from "../context/userDataContext";
// import CustomDatePicker from "../components/DatePicker";

const RegistrationScreen = ({ navigation }) => {
  const { branchDetails, branchData } = useContext(UserDataContext);
  console.log("branch " + branchData);
  const [inputs, setInputs] = React.useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    branchDetails();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}
      >
        <Text style={styles.headerTitle}>Register for free</Text>

        <View style={{ margin: 20 }}>
          <DropDown
            label="Profile created for"
            iconName="account-question-outline"
            placeholder="Select an option"
            search
          />

          <Input
            label="Fullname"
            iconName="account-outline"
            placeholder="Enter your fullname"
          />
          <RadioButton label="Gender" />
          <DatePicker label="Date of birth" />
          <DropDown
            label="Branch"
            iconName="select-place"
            placeholder="Select you branch"
            search
            data={branchData}
          />
          <Input
            label="Mobile"
            iconName="phone-outline"
            placeholder="Enter your mobile number"
          />
          <Input
            label="Email"
            iconName="email-outline"
            placeholder="Enter your email id"
          />

          <Input
            label="Password"
            iconName="lock-outline"
            placeholder="Enter the password"
            password
          />

          <Button title="Register" />
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Already have an account ? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    fontWeight: "bold",
  },
  loginText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
