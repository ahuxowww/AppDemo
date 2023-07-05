import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import i18n from "../../../I18n/i18n";

import InputText from "../../components/InputText";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/thunks/thunk";
import { signupRequestedAC } from "../../redux/actions/action";
import Header from "../../components/Header";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const schema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "First must be at least 3 characters")
    .required("Firstname is required"),
  lastname: Yup.string()
    .min(3, "LastName must be at least 3 characters")
    .required("Lastname is required"),
  username: Yup.string()
    .matches(EMAIL_REGEX, "Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const SignupScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const goLogin = useCallback(() => {
    navigation.navigate("LoginScreen");
  }, []);

  const signUpHandler = useCallback((data) => {
    dispatch(
      signup(data.username, data.password),
      signupRequestedAC(data.username, data.password),
      navigation.navigate("LoginScreen")
    );
  }, []);

  useSelector((state) => {
    i18n.locale = state.Change.language;
  });

  const [isCheck, setCheck] = useState(false);
  return (
    <ScrollView style={styles.root}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t("register")}</Text>
        <View style={styles.info}>
          <View style={styles.textinput}>
            <InputText
              control={control}
              name="firstname"
              placeholder={i18n.t("firstname")}
            />
            <MaterialCommunityIcons
              style={styles.icon}
              name="account"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <Text>{errors.firstname?.message}</Text>
          <View style={styles.textinput}>
            <InputText
              control={control}
              name="lastname"
              placeholder={i18n.t("lastname")}
            />
            <MaterialCommunityIcons
              style={styles.icon}
              name="account"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <Text>{errors.lastname?.message}</Text>
          <View>
            <InputText placeholder="Email" control={control} name="username" />
            <MaterialIcons
              style={styles.icon}
              name="email"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <Text>{errors.username?.message}</Text>

          <View>
            <InputText
              placeholder={i18n.t("password")}
              control={control}
              name="password"
              secureTextEntry
            />
            <FontAwesome
              style={styles.icon}
              name="lock"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <Text>{errors.password?.message}</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
        >
          <Pressable
            onPress={() => {
              setCheck(!isCheck);
            }}
          >
            {isCheck === false ? (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={24}
                color="#A4BCC1"
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-marked-outline"
                size={24}
                color="#A4BCC1"
              />
            )}
          </Pressable>

          <View style={{ position: "absolute", marginLeft: 68 - 33 }}>
            <Text style={styles.text}>
              {i18n.t("byclick")}
              {`\n`}
              <Text style={styles.textcolor}>{i18n.t("term")}</Text>
              {i18n.t("and")}
              <Text style={styles.textcolor}>{i18n.t("Privacy")}</Text>
            </Text>
          </View>
        </View>

        <Pressable
          onPress={handleSubmit(signUpHandler)}
          style={styles.buttonregis}
        >
          <LinearGradient
            colors={["#FF5789", "#FF9B9C"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.button}
          >
            <Text style={styles.textbold}>{i18n.t("register")}</Text>
          </LinearGradient>
        </Pressable>

        <View style={styles.textlogin}>
          <Text style={styles.text}>{i18n.t("haveac")}</Text>
          <Pressable onPress={goLogin}>
            <Text style={[styles.textcolor, { fontWeight: "700" }]}>
              {i18n.t("login")}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#2d3748",
    opacity: 0.8,
    height: "100%",
    width: "100%",
  },
  container: {
    marginLeft: 32,
    marginRight: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 22,
    color: "#ffffff",
    marginLeft: 8,
    marginTop: 36,
  },
  textinput: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    left: 22,
    marginTop: 17,
  },
  info: {
    marginTop: 28 - 5,
  },
  checkboxicon: {
    borderWidth: 0.5,
    borderColor: "#A4BCC1",
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    color: "#ffffff",
  },
  textcolor: {
    color: "#FF5889",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
  },
  textlogin: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
  },
  textbold: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "800",
    color: "#ffffff",
  },
  buttonregis: {
    marginTop: 50,
  },
});

export default SignupScreen;
