import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { Button } from "react-native";

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
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "571620227432-9pugk2vjg04h1250af8qp1mao6enllc1.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const credential = provider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
