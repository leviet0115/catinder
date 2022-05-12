import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    width: 310,
    height: 400,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },

  boy: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default styles;
