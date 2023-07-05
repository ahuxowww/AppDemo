import { Text, Pressable, StyleSheet } from "react-native";

const ButtonTT = ({ onPress, text, bgcolor, color}) => {
  return (
    <Pressable onPress={onPress} style={[
      styles.container,
      bgcolor ? {backgroundColor:bgcolor} : {},
    ]}>
      <Text style={[styles.text, 
      color ? {color: color} : {},
      ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    padding: 15,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: 'Nippo-Medium'
  },
});

export default ButtonTT;
