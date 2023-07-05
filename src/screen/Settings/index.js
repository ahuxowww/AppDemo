import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get('window').height;
const Settings = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.container}>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>My Subscriptions</Text>
          <AntDesign name="right" size={24} color="#eb17c0" style={{paddingRight: 23}} />
        </Pressable>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>Profile Tag</Text>
          <AntDesign name="right" size={24} color="#eb17c0" style={{paddingRight: 23}} />
        </Pressable>
        <Pressable
        style={styles.button}
        onPress={()=> navigation.navigate("Send a testimonial")}
        >
          <Text style={styles.text}>User Info</Text>
          <AntDesign name="right" size={24} color="#eb17c0" style={{paddingRight: 23}} />
        </Pressable>

      </View>
      <View style={styles.bottom}>
      <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>Terms & Conditions</Text>
        </Pressable>
        <Pressable
        style={styles.button}
        >
          <Text style={styles.text}>Privacy policy</Text>
        </Pressable>
        <Pressable
        style={[styles.button,{marginTop: 40,bottom: 0}]}
        >
          <Text style={[styles.text,{color: '#FF4471'}]}>Delete account</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2D3748",
    height: "100%",
    width: "100%",
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    marginLeft: 24,
    alignSeft: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: "#ffffff",
    textAlign: 'center',
  },
  container: {
    marginTop: 28,
  },
  button: {
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padddingRight: 24,
    paddingLeft: 24,
    backgroundColor: '#24285c',
    marginVertical: 4,
    alignItems: 'center'
  },
  text: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 15,
  },
  bottom: {
   marginTop: height-500,
  },
});

export default Settings;
