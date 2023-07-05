import React from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import {
  AntDesign,
  Ionicons,
  FontAwesome,
  Feather,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

export const SlicerBar = (props) => {
  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.logo}
              source={require("../../image/logo.png")}
            />
            <Image
              style={styles.avatar}
              source={require("../../image/avatar.png")}
            />
            <Text style={styles.textbold}>James B.</Text>
          </View>
          <Drawer.Section>
            <DrawerItem
              style={{
                backgroundColor: "black",
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              label="Home"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              icon={() => <AntDesign name="home" size={24} color="#bf32af" />}
              onPress={() => props.navigation.navigate("Home")}
            />
            <DrawerItem
              label="Reminder"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              icon={() => (
                <FontAwesome name="bell-o" size={24} color="#959EA7" />
              )}
              onPress={() => props.navigation.navigate("ItemScreen")}
            />
            <DrawerItem
              label="Invite your friends"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Invite your friends")}
              icon={() => (
                <Ionicons name="person-outline" size={24} color="#959EA7" />
              )}
            />
            <DrawerItem
              label="Send a testimonial"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Send a testimonial")}
              icon={() => <Feather name="mail" size={24} color="#959EA7" />}
            />
            <DrawerItem
              label="Welcome video"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Welcome video")}
              icon={() => (
                <Ionicons name="videocam-outline" size={24} color="#959EA7" />
              )}
            />
            <DrawerItem
              label="Rewards"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Rewards")}
              icon={() => <Entypo name="medal" size={24} color="#959EA7" />}
            />
            <DrawerItem
              label="Help & Support"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Help & Support")}
              icon={() => (
                <Feather name="help-circle" size={24} color="#959EA7" />
              )}
            />
            <DrawerItem
              label="Settings"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Settings")}
              icon={() => (
                <AntDesign name="setting" size={24} color="#959EA7" />
              )}
            />
            <DrawerItem
              label="Disclaimer"
              labelStyle={{
                fontSize: 15,
                fontWeight: "400",
                lineHeight: 20,
                color: "#959EA7",
              }}
              onPress={() => props.navigation.navigate("Disclaimer")}
              icon={() => (
                <MaterialIcons name="dangerous" size={24} color="#959EA7" />
              )}
            />
          </Drawer.Section>
          <Text style={styles.text}>
            Powered by <Text style={styles.textup}>UpNow</Text>
          </Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderWidth: 0,
  },
  logo: {
    marginTop: 40,
    height: 45,
    width: 45,
    borderRadius: 45,
    marginLeft: 26,
  },
  avatar: {
    height: 65,
    width: 65,
    marginTop: 21,
    marginLeft: 45,
  },
  textbold: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 24,
    color: "#ffffff",
    marginTop: 21,
    marginLeft: 45,
  },
  section: {
    flex: 1,
    marginTop: 24,
  },
  text: {
    marginLeft: 26,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "300",
    lineHeight: 20,
    marginTop: 20,
  },
  textup: {
    fontWeight: "700",
  },
});
