import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];

const data =["123","123","12313","dadsa","asd"];

const DropDown = ({ label, iconName, placeholder, margin,  ...props }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && { color: "blue" }]}>{label}</Text>
    );
  };

  return (
    <View style={[styles.container, margin && { margin: margin }]}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name={iconName}
            size={20}
          />
        )}
        {...props}
      // containerStyle={{ top: -20 }}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 10,
    flex: 1,
  },
  dropdown: {
    height: 55,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  icon: {
    fontSize: 22,
    marginRight: 10,
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
  placeholderStyle: {
    fontSize: 14,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
