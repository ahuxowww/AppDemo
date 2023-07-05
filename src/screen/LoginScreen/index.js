import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useForm } from "react-hook-form";
import {
  MaterialIcons,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import i18n from '../../../I18n/i18n'
import { Picker } from "@react-native-picker/picker";

import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/thunks/thunklogin";
import { loginRequestedAC, changeLanguage} from "../../redux/actions/action";
import Header from "../../components/Header";


const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const schema = Yup.object().shape({
  username: Yup.string()
    .matches(EMAIL_REGEX, "Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectLG, setSelectLG] = useState("en");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignup = useCallback(() => {
    navigation.navigate("SignupScreen");
  }, []);

  const loginHandler = useCallback((data) => {
    dispatch(
      login(data.username, data.password),
      loginRequestedAC(data.username, data.password)
    );
  }, []);

  const errorText = useSelector((state) => {
    return state.Login.errorText;
  });

  const languageChange = useCallback((data) => {
    dispatch(
      changeLanguage(data)
    );
  }, []);

  useSelector((state) => {
    i18n.locale = state.Change.language
  });


  return (
    <ScrollView style={styles.root}>
      <Header />
      <View style={styles.container}>
        <Picker
          style={{color: "white"}}
          selectedValue={selectLG}
          onValueChange={(itemValue, itemIndex) => {
            setSelectLG(itemValue);
            languageChange(itemValue);
          }}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Tiếng Việt" value="vi" />
        </Picker>
        <Text style={styles.title}>{i18n.t("login")}</Text>
        <View>
          <View style={styles.email}>
            <InputText control={control} name="username" placeholder="Email" />
            <Text>{errors.username?.message}</Text>

            <MaterialIcons
              style={styles.icon}
              name="email"
              size={24}
              color="#A4BCC1"
            />
          </View>
          <View style={styles.email}>
            <InputText
              placeholder={i18n.t("password")}
              control={control}
              name="password"
              secureTextEntry
            />
            <Text>{errors.password?.message}</Text>

            <FontAwesome
              style={styles.icon}
              name="lock"
              size={24}
              color="#A4BCC1"
            />
          </View>
        </View>
        <Text style={styles.checkText}>{errorText}</Text>
        <View style={styles.forgetpw}>
          <Text style={styles.textlogin}>{i18n.t("fgPassword")}</Text>
        </View>
        <Pressable onPress={handleSubmit(loginHandler)}>
          <LinearGradient
            colors={["#FF5789", "#FF9B9C"]}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.buttonLogin}
          >
            <Text style={styles.textbold}>{i18n.t("login")}</Text>
          </LinearGradient>
        </Pressable>
        <View style={[styles.row, { marginTop: 20 }]}>
          <Text style={styles.textlogin}>{i18n.t("haveAccount")}</Text>
          <Pressable onPress={onSignup}>
            <Text style={styles.textcolor}>{i18n.t("signup")}</Text>
          </Pressable>
        </View>
        <View
          style={[styles.row, { marginLeft: 8, marginRight: 8, marginTop: 41 }]}
        >
          <View style={styles.line} />
          <Text style={styles.textlogin}>{i18n.t("anotherlogin")}</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 41 - 5,
          }}
        >
          <Button bgcolor="#3F60B2" text={i18n.t("facebook")} />
          <Entypo
            style={{ position: "absolute", marginLeft: 20 }}
            name="facebook-with-circle"
            size={24}
            color="#ffffff"
          />
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
        >
          <Button bgcolor="#131416" text={i18n.t("apple")} />
          <AntDesign
            style={{ position: "absolute", marginLeft: 20 }}
            name="apple1"
            size={24}
            color="#ffffff"
          />
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
    marginLeft: 24,
    marginRight: 24,
  },
  checkText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    marginTop: 36,
    marginLeft: 38 - 24,
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 24,
    marginBottom: 18,
  },
  email: {},
  icon: {
    position: "absolute",
    left: 22,
    marginTop: 17,
  },
  textlogin: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    color: "#ffffff",
  },
  textcolor: {
    color: "#FF5889",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
  },
  textbold: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "800",
    color: "#ffffff",
  },
  forgetpw: {
    marginRight: 38 - 24,
    alignItems: "flex-end",
    marginTop: -30,
    marginBottom: 32 - 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLogin: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 30,
  },
  line: {
    borderWidth: 1,
    borderColor: "#00000033",
    borderRadius: 90,
    width: 92,
  },
});

export default LoginScreen;
