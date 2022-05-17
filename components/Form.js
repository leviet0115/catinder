import { View, Button, Image, ScrollView } from "react-native";
import { useState } from "react";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import { useUser } from "../contexts/authContext";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { db, storage } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import styles from "../styles";

const Form = ({ owner }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Boy");
  const [isVaccinated, setIsVacinated] = useState(true);
  const [isSterilized, setIsSterilized] = useState(true);
  const [age, setAge] = useState("1");
  const user = useUser();
  const [image, setImage] = useState(null);

  const openImagePickerAsync = async () => {
    try {
      let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
      setImage({ localUri: pickerResult.uri });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      let newCat = {
        name,
        age,
        isVaccinated,
        isSterilized,
        owner,
      };
      console.log(newCat);
      const catRef = await addDoc(collection(db, "cats"), newCat);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View>
        <Input label="Name" value={name} handler={(text) => setName(text)} />
        <Input label="Age" value={age} handler={(text) => setAge(text)} />
        <RadioButtons
          label="Gender"
          choices={["Boy", "Girl"]}
          state={gender}
          setState={setGender}
        />
        <RadioButtons
          label="Fully vaccinated"
          choices={["Yes", "No"]}
          state={isVaccinated}
          setState={setIsVacinated}
        />
        <RadioButtons
          label="Sterilized"
          choices={["Yes", "No"]}
          state={isSterilized}
          setState={setIsSterilized}
        />
        <Button title="Save" onPress={handleSubmit}></Button>
      </View>
    </View>
  );
};

/*const uploadImg = async () => {
  const base64string = await FileSystem.readAsStringAsync(image.localUri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const blob = b64toBlob(base64string, "image/png");
  const imageRef = ref(storage, "images/1");
  //console.log(typeof base64string);

  //const file = "data:image/png;base64," + base64string;
  //const snapshot = uploadString(imageRef, base64string, "base64");
  const snapshot = await uploadBytes(imageRef, blob);
  console.log("done");
};*/

export default Form;
