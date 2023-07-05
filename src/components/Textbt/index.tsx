import React from "react";
import { Pressable, StyleSheet, Text} from 'react-native';

interface TextProps {
  onPress: () => void,
  text: String,
}

const Textbt = ({onPress,text}: TextProps) =>  {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title} >{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    marginLeft: 7,
 
  }
})
export default Textbt;