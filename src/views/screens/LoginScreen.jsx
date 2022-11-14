import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { AuthContext } from "../context/authContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={styles.headerTitle}>Login</Text>

        <View style={{ margin: 20 }}>
          <Input
            label="Email"
            iconName="email-outline"
            placeholder="Enter your email id"
            onChangeText={(email) => setEmail(email)}
          />
          <Input
            label="Password"
            iconName="lock-outline"
            placeholder="Enter your password"
            password
            onChangeText={(passwd) => setPassword(passwd)}
          />
          <Button
            title="Login"
            onPress={() => {
              login(email, password);
            }}
          />
          <Text
            style={styles.loginText}
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            Do not have an account ? Register for free
          </Text>
          {/* <Text>{test}</Text> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
