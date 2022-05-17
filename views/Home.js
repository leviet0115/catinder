import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { Card } from "react-native-paper";
import IconBtn from "../components/IconBtn";
import styles from "../styles";

const Home = () => {
  const nav = useNavigation();
  return (
    <Card elevation={0} style={{ width: "100%" }}>
      <Card.Actions style={{ justifyContent: "space-between" }}>
        <IconBtn
          img={require("../img/user.png")}
          handler={() => nav.navigate("profile")}
        />
        <IconBtn
          img={require("../img/logo.png")}
          handler={() => nav.navigate("swipe")}
        />
        <IconBtn
          img={require("../img/chat.png")}
          handler={() => nav.navigate("matches")}
        />
      </Card.Actions>
    </Card>
    /*
    <View style={styles.row}>
      <Button title="Swipe" onPress={() => nav.navigate("swipe")}></Button>
      <Button title="Profile" onPress={() => nav.navigate("profile")}></Button>
    </View>*/
  );
};

export default Home;
