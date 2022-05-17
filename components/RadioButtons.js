import { RadioButton } from "react-native-paper";
import { View, FlatList, Text, TouchableHighlight } from "react-native";
import styles from "../styles";

const RadioButtons = ({ label, choices, state, setState }) => {
  const renderItem = (item) => {
    let value = item;
    if (item === "Yes") {
      value = true;
    } else if (item === "No") {
      value = false;
    }
    return (
      <View style={styles.radioBtn}>
        <Text>{item}</Text>
        <TouchableHighlight style={styles.checkBox}>
          <RadioButton
            onPress={() => setState(value)}
            status={state === value ? "checked" : "unchecked"}
            uncheckedColor="grey"
          />
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View styles={{ flexDirection: "row" }}>
      <Text style={styles.strong}>{label}:</Text>
      <FlatList
        data={choices}
        numColumns={choices.length}
        keyExtractor={(item, index) => index}
        renderItem={(item) => renderItem(item.item)}
      />
    </View>
  );
};

export default RadioButtons;
