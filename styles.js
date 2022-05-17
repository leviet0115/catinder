import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  loginView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 300,
    height: 300,
  },

  icon: {
    width: 30,
    height: 30,
  },

  iconFrame: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderStyle: "solid",
    backgroundColor: "#F8FAFB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  iconGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },

  infoBox: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 350,
    height: 550,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },

  boy: {
    color: "blue",
    fontWeight: "bold",
  },

  //form
  input: {
    width: 300,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
  },

  radioBtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 100,
  },

  strong: {
    fontWeight: "bold",
  },

  checkBox: {
    width: 35,
    height: 35,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 30,
  },

  //image
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
