import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNav from "./src/navigation/AppNav";
import { AuthProvider } from "./src/views/context/authContext";
import { UserDataProvider } from "./src/views/context/userDataContext";

export default function App() {
  return (
    <AuthProvider>
      <UserDataProvider>
        <AppNav />
      </UserDataProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
