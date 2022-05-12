import { View, Image } from "react-native";
import SignIn from "../components/SignIn";

const LogIn = () => {
  return (
    <View>
      <Image
        source={require("../img/logo.png")}
        style={{ width: 150, height: 150, marginBottom: 50 }}
      />
      <SignIn />
    </View>
  );
};

export default LogIn;
