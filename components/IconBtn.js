import { TouchableOpacity, View, Image } from "react-native";
import styles from "../styles";

const IconBtn = ({ img, handler }) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.iconFrame}>
        <Image source={img} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default IconBtn;
