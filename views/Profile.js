import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useUser } from "../contexts/authContext";
import styles from "../styles";
import RadioButtons from "../components/RadioButtons";
import Input from "../components/Input";
import Form from "../components/Form";
import Cat from "../components/Cat";
import { Card } from "react-native-paper";
import Home from "./Home";

const Profile = () => {
  const [user, setUser] = useUser();
  console.log("from profile", user);

  const cat = user.cat;

  return (
    <SafeAreaView>
      <Home />
      <View>
        <Card elevation={2}>
          <Card.Title title="Profile:" />
          <Card.Content>
            <View style={styles.row}>
              <Image source={{ uri: user.image }} style={styles.avatar} />
              <View>
                <Text>Name: {user.name} </Text>
                <Text>Email: {user.email} </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card elevation={2}>
          <Card.Title title="Cat profile:" />
          <Card.Content
            style={{
              height: 400,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View style={styles.row}>
              <Text>
                {cat.name} {cat.gender === "boy" ? "\u2642" : "\u2640"}
              </Text>
              <Text>Age: {cat.age}</Text>
            </View>
            <View style={styles.row}>
              <Text>
                Sterilized: {cat.isSterilized === true ? "\u2705" : "\u274C"}
              </Text>
              <Text>
                Vaccinated: {cat.isVaccinated === true ? "\u2705" : "\u274C"}
              </Text>
            </View>
            <View>
              <Image source={{ uri: cat.image }} style={styles.img}></Image>
            </View>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

// /style={{ justifyContent: "center", alignItems: "center" }

export default Profile;
