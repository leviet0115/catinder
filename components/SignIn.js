import * as Google from "expo-auth-session/providers/google";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth, db } from "./Firebase";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/authContext";
import { Button } from "react-native-paper";
import { Auth } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const [user, setUser] = useUser(null);
  const [googleInfo, setGoogleInfo] = useState(null);
  const nav = useNavigation();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "571620227432-9pugk2vjg04h1250af8qp1mao6enllc1.apps.googleusercontent.com",
  });

  useEffect(async () => {
    try {
      if (response?.type === "success") {
        const { id_token } = response.params;
        const { accessToken } = response.params;
        const credential = GoogleAuthProvider.credential(id_token, accessToken);
        await signInWithCredential(auth, credential);
        //console.log(user);
        //console.log(user.uid);
        const q = query(
          collection(db, "owners"),
          where("uid", "==", googleInfo.uid)
        );

        const querySnapshot = await getDocs(q);

        //console.log("from singin", querySnapshot.docs[0].data());
        const userData = querySnapshot.docs[0];
        setUser({
          ...userData.data(),
          docId: userData.id,
          name: googleInfo.displayName,
          email: googleInfo.email,
          image: googleInfo.photoURL,
        });
        //console.log("from signin", googleInfo);

        return nav.navigate("swipe");
      }
    } catch (error) {
      console.log(error);
    }
  }, [response]);

  useEffect(() => {
    onAuthStateChanged(auth, (loginUser) => {
      if (loginUser) {
        return setGoogleInfo(loginUser);
      } else {
        return setGoogleInfo(null);
      }
    });
  }, []);

  return (
    <View>
      <Button
        mode="contained"
        onPress={() => promptAsync()}
        disabled={!request}
        labelStyle={{ color: "white" }}
        color="#ff5b5b"
      >
        Sign in with Google
      </Button>
    </View>
  );
};

export default SignIn;
