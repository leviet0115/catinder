import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, Butto, SafeAreaView } from "react-native";
import styles from "../styles";
import Cat from "../components/Cat";
import SwipeTool from "../components/SwipeTool";
import { useEffect, useState } from "react";
import { db } from "../components/Firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useUser } from "../contexts/authContext";
import Home from "./Home";

const Swipe = () => {
  const nav = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const [current, setCurrent] = useState(null);
  const [user, setUser] = useUser();

  //console.log("from swipe:", user);

  useEffect(async () => {
    try {
      const users = [];
      const querySnapshot = await getDocs(collection(db, "owners"));
      querySnapshot.forEach((owner) => {
        users.push({ ...owner.data(), docId: owner.id });
      });

      const candidates = users.filter(
        (u) => u.uid !== user.uid && !user.likes.includes(user.docId)
      );
      setProfiles(users);
      setCurrent({ ...users[0], index: 0 });
    } catch (error) {
      console.log(error);
    }
  }, [db]);

  const handleSkip = () => {
    let nextIndex = current.index + 1;
    if (nextIndex < profiles.length) {
      return setCurrent({ ...profiles[nextIndex], index: nextIndex });
    }
    setCurrent(null);
  };

  const handleLike = async () => {
    try {
      const userRef = doc(db, "owners", user.docId);
      //const likedUserRef = doc(db, "owners", current.docId);
      await updateDoc(userRef, { likes: [...user.likes, current.docId] });
      handleSkip();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Home />
      {current === null ? (
        <View>
          <View style={styles.infoBox}>
            <Text>No cat available at the moment</Text>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <Text> </Text>
          </View>
          <Cat
            cat={current.cat}
            tool={<SwipeTool handleSkip={handleSkip} handleLike={handleLike} />}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Swipe;
