import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DropDown from "./DropDown";

const DatePicker = ({ label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.datePicker}>
        <DropDown label="Day" placeholder="" margin={5} />
        <DropDown label="Month" placeholder="" margin={5} />
        <DropDown label="Year" placeholder="" margin={5} />
      </View>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: "row",
  },
  label: {
    fontSize: 14,
    left: 5,
  },
});
