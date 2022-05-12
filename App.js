import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import styles from "./styles";
import { initializeApp } from "firebase/app";
import { Button, View, LogBox, Image } from "react-native";
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
LogBox.ignoreLogs([
  "Warning: Async Storage has been extracted from react-native core",
]);

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyD2bcorII46QAmyUBByOeOGSWd6PgIatVI",
  authDomain: "lv-catinder.firebaseapp.com",
  databaseURL:
    "https://lv-catinder-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lv-catinder",
  storageBucket: "lv-catinder.appspot.com",
  messagingSenderId: "571620227432",
  appId: "1:571620227432:web:f05227cc5fc422d12afedd",
});

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}
