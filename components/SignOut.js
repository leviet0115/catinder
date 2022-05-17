import { Button } from "react-native-paper";
import { useUser } from "../contexts/authContext";
import { auth } from "./Firebase";

const SignOut = () => {
  const [user, setUser] = useUser();

  const signOut = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((err) => console.log(err));
  };

  return (
    <Button
      mode="contained"
      onPress={signOut}
      labelStyle={{ color: "white" }}
      color="#ff5b5b"
      style={{ width: 200, marginTop: 20 }}
    >
      Sign Out
    </Button>
  );
};

export default SignOut;
