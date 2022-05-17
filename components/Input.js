import { View, Text, TextInput } from "react-native";
import styles from "../styles";

const Input = ({ label, value, handler }) => {
  return (
    <View>
      <Text style={styles.strong}>{label}</Text>
      <TextInput value={value} style={styles.input} onChangeText={handler} />
    </View>
  );
};

export default Input;
