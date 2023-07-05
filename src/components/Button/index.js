import { Text, Pressable, StyleSheet } from "react-native";

const Button = ({ onPress, text, bgcolor,fontSize }) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container,
      bgcolor ? {backgroundColor:bgcolor} : {},
    ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});

export default Button;
