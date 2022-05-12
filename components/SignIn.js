import * as React from "react";
import * as Google from "expo-auth-session/providers/google";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import { Button, View } from "react-native";

const SignIn = () => {
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "571620227432-9pugk2vjg04h1250af8qp1mao6enllc1.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    if (response?.type === "success") {
      const { id_token } = response.params;
      const { accessToken } = response.params;

      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token, accessToken);
      signInWithCredential(auth, credential);
      console.log(user); //remeber to remove this
    }
  }, [response]);

  return (
    <View>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default SignIn;
