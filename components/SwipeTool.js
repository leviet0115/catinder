import { View, Text } from "react-native";
import IconBtn from "./IconBtn";
import styles from "../styles";

const SwipeTool = ({ handleSkip, handleLike }) => {
  return (
    <View style={styles.iconGroup}>
      <IconBtn img={require("../img/yes.png")} handler={handleLike} />
      <IconBtn img={require("../img/no.png")} handler={handleSkip} />
    </View>
  );
};

export default SwipeTool;
