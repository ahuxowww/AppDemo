import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";

import { logoutAC } from "../../redux/actions/action";
import { logout } from "../../redux/thunks/thunk";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const Send = () => {
  const dispatch = useDispatch();
  const logoutHandler = useCallback(() => {
    dispatch(logout(), logoutAC());
  }, []);
  let email = '19020590@gmail.com';
  let password = '******';

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>User info</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={require("../../image/avatar.png")}
          />
          <Pressable style={styles.button}>
            <Text style={styles.textcolor}>Change profile photo</Text>
          </Pressable>
        </View>
        <View style={styles.info}>
          <LinearGradient
            colors={["#000000", "#1c1c1c"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.buttoninfo}
          >
            <Text style={styles.text}>
              First name
              <View style={{ paddingLeft: 35 }}>
                <Text style={styles.text}>Renata</Text>
              </View>
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={["#000000", "#1c1c1c"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.buttoninfo}
          >
            <Text style={styles.text}>Last name
            <View style={{ paddingLeft: 35 }}>
                <Text style={styles.text}>Ryuk</Text>
              </View>
              </Text>
          </LinearGradient>
          <LinearGradient
            colors={["#000000", "#1c1c1c"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.buttoninfo}
          >
            <Text style={styles.text}>Email
            <View style={{ paddingLeft: 60 }}>
                <Text style={styles.text}>{email}</Text>
              </View>
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={["#000000", "#1c1c1c"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.buttoninfo}
          >
            <Text style={styles.text}>Password
            <View style={{ paddingLeft: 39 }}>
                <Text style={styles.text}>{password}</Text>
              </View>
            </Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2D3748",
    height: "100%",
    width: "100%",
  },
  header: {
    marginTop: 25,
    flexDirection: "row",
    marginLeft: 24,
    alignItems: "center",
    justifyContent:'center'
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: "#ffffff",
  },
  container: {
    marginTop: 32,
  },
  avatar: {
    alignSelf: "center",
    height: 85,
    width: 85,
    borderRadius: 50,
  },
  button: {
    marginTop: 15,
    alignSelf: "center",
  },
  textcolor: {
    color: "#FF5889",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
  },
  info: {
    marginTop: 30,
  },
  buttoninfo: {
    marginVertical: 4,
    height: 52,
    width: "100%",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
    lineHeight: 20,
    paddingLeft: 24,
  },
});

export default Send;
