import { View, Image, Text } from "react-native";
import IconBtn from "../components/IconBtn";
import styles from "../styles";

const Swipe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Image source={require("../img/cat1.jpg")} style={styles.img} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: 300,
            height: 30,
          }}
        >
          <Text>
            Rome <Text style={styles.boy}>&#9794;</Text>
          </Text>
          <Text>Age: 2</Text>
          <Text>Sterilize: &#10003;</Text>
        </View>
      </View>
      <View style={styles.iconGroup}>
        <IconBtn
          img={require("../img/yes.png")}
          handler={() => console.log("Right!")}
        />
        <IconBtn
          img={require("../img/no.png")}
          handler={() => console.log("Left!")}
        />
      </View>
    </View>
  );
};

export default Swipe;
