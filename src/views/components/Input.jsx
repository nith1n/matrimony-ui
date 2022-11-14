import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{ marginVertical: 10 }}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          { borderColor: error ? "red" : isFocused ? "blue" : "black" },
        ]}
      >
        <Icon name={iconName} style={styles.icon} />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          {...props}
          style={{ flex: 1 }}
        />
        {password && (
          <Icon
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ fontSize: 20 }}
            onPress={() => {
              setHidePassword(!hidePassword);
            }}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: "tomato", fontSize: 12, marginTop: 5 }}>
          Error
        </Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 5,
    top: -10,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  inputContainer: {
    height: 55,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
  },
  icon: {
    fontSize: 22,
    marginRight: 10,
  },
});
