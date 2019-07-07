import { StyleSheet } from "react-native";
import colors from "./colors";
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F88F40",
    height: 50
  },
  buttonContainer: {
    justifyContent: "flex-end"
  },
  imageView: {
    alignItems: "center",
    backgroundColor: "#4A4B4A",
    flex: 3,
    justifyContent: "center"
  },
  camButton: {
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    width: "100%",
    paddingVertical: 8,
    flexDirection: "row",
    backgroundColor: colors.LightOrange,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    marginLeft: 4,
    fontSize: 18,
    color: colors.white
  },
  carouselView: {
    //backgroundColor: "red",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 8
  }
});
