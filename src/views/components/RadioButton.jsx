import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RadioButtonRN from "radio-buttons-react-native";

const RadioButton = ({ label }) => {
  const data = [
    {
      label: "Male",
    },
    {
      label: "Female",
    },
    {
      label: "Other",
    },
  ];
  // const data = ["male","famale","other"]
  return (
    <View style={styles.radioButtonContainer}>
      <Text style={styles.label}>{label}</Text>
      <RadioButtonRN
        data={data}
        style={styles.radioButton}
        boxStyle={styles.radioButtonBox}
        textStyle={styles.textStyle}
        box={false}
        selectedBtn={(e) => console.log("" + e.label)}
      />
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    top: -5,
  },
  radioButtonContainer: {
    marginVertical: 10,
    height: 55,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  radioButtonBox: {
    flex: 1,
  },
  textStyle: {
    marginLeft: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 5,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
});
