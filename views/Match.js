import { View } from "react-native";

const Match = ({ navigation }) => {
  console.log(navigation.getParam("name"));

  return <View></View>;
};

export default Match;
