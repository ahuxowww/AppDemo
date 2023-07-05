import { View, Image, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require("../../image/Combined-Shape.png")}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={styles.titleHeader}>UPNOW</Text>
        <Text style={styles.textHeader}>Digital Hypnotheropy</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    height: 131,
    borderBottomWidth: 1,
    borderColor: "#2D8CFF",
    paddingTop: 60,
    padding: 24,
  },
  image: {
    width: 50.35,
    height: 50.35,
    resizeMode: "cover",
  },
  text: {
    marginLeft: 18.65,
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 24,
    fontStyle: "normal",
    color: "#ffffff",
  },
  textHeader: {
    marginTop: 5.55,
    fontSize: 14.07,
    lineHeight: 18,
    fontWeight: "400",
    color: "#2D8CFF",
    fontStyle: "normal",
  },
});

export default Header;
