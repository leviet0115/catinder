import { SafeAreaView, View, Image } from "react-native";
import SignIn from "../components/SignIn";
import styles from "../styles";

const LogIn = () => {
  return (
    <SafeAreaView style={styles.loginView}>
      <Image
        source={require("../img/logo.png")}
        style={{ width: 150, height: 150, marginBottom: 50 }}
      />
      <SignIn />
    </SafeAreaView>
  );
};

export default LogIn;
