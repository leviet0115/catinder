import { View, Image, Text } from "react-native";
import { Card } from "react-native-paper";
import styles from "../styles";

const Cat = ({ cat, tool }) => {
  return (
    <View>
      <Card elevation={2} style={{ width: 350, height: 550 }}>
        <Card.Cover
          source={{ uri: cat.image }}
          style={{ width: "100%", height: 400 }}
        />
        <Card.Content style={{ height: 50, justifyContent: "center" }}>
          <View style={styles.row}>
            <Text>
              {cat.name} {cat.gender === "boy" ? "\u2642" : "\u2640"}
            </Text>
            <Text>Age: {cat.age}</Text>
            <Text>
              Sterilize: {cat.isSterilized === true ? "\u2705" : "\u274C"}
            </Text>
          </View>
        </Card.Content>
        <Card.Actions
          style={{
            width: "100%",
            height: 50,
            padding: 10,
            justifyContent: "center",
          }}
        >
          {tool}
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Cat;
