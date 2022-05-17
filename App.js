import * as React from "react";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Warning: Async Storage has been extracted from react-native core",
]);
import { AuthProvider } from "./contexts/authContext";
import Navigation from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./views/Home";

// Initialize Firebase

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
