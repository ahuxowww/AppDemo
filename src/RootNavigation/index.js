import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/HomeScreen";
import SignupScreen from "../screen/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";
import Invite from "../screen/Invite";
import Send from "../screen/Sendmail";
import Welcomevideo from "../screen/Welcomevideo";
import Rewards from "../screen/Rewards";
import Help from "../screen/Help";
import Disclaimer from "../screen/Disclaimer";
import Settings from "../screen/Settings";
import { SlicerBar } from "../components/SliceBar";
import { Feather, AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import TodoListScreen from "../screen/TodoListScreen/index";
import ItemScreen from "../screen/ItemScreen/index";
import Tutorial from "../screen/Tutorial";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LoginMatch = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const Screens = ({ navigation }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(progress.value, [0, 1], [1, 25], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{ scale }],
      borderRadius,
    };
  });
  const [open, setopen] = useState(false);
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ marginBottom: 25, left: 80, position: "relative" }}>
        {open === true ? (
          <Pressable
            style={{
              marginTop: 30,
              marginLeft: 20,
              position: "absolute",
            }}
            onPress={() => {
              navigation.closeDrawer();
              setopen(!open);
            }}
          >
            <AntDesign name="close" size={28} color="#ffffff" />
          </Pressable>
        ) : null}
      </View>

      <Animated.View
        style={[
          {
            flex: 1,
            overflow: "hidden",
            alignItems: "stretch",
            shadowColor: "#000000",
            shadowOffset: {
              height: 20,
              width: -20,
            },
            shadowOpacity: 0.6,
            shadowRadius: 0,
            elevation: 20,
          },
          animatedStyle,
        ]}
      >
        <Stack.Navigator
          screenOptions={{
            style: {
              borderTopLeftRadius: 23,
              borderTopRightRadius: 23,
              height: 70,
              alignItems: "center",
            },
            headerTransparent: true,
            title: "",
            headerLeft: () => (
              <Pressable
                transparent
                onPress={() => {
                  open == true
                    ? navigation.openDrawer()
                    : navigation.openDrawer(setopen(!open));
                }}
              >
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal: 10 }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Pressable
                transparent
                onPress={() => {
                  open == true
                    ? navigation.openDrawer()
                    : navigation.openDrawer(setopen(!open));
                }}
              >
                <Feather
                  name="menu"
                  size={24}
                  color="white"
                  style={{ paddingHorizontal: 10 }}
                />
              </Pressable>
            ),
          }}
        >
          <Stack.Screen name="Home" component={TodoListScreen} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="Invite your friends" component={Invite} />
          <Stack.Screen name="Send a testimonial" component={Send} />
          <Stack.Screen name="Welcome video" component={Welcomevideo} />
          <Stack.Screen name="Rewards" component={Rewards} />
          <Stack.Screen name="Help & Support" component={Help} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Disclaimer" component={Disclaimer} />
        </Stack.Navigator>
      </Animated.View>
    </View>
  );
};

const HomeMatch = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2D3748",
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
          headerTransparent: "true",
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
          overlayColor: "transparent",
          drawerStyle: {
            backgroundColor: "#2D3748",
            flex: 1,
            width: "62%",
          },
        }}
        drawerContent={(props) => {
          return <SlicerBar {...props} />;
        }}
      >
        <Drawer.Screen name="Screens" options={{}}>
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const RootNavigator = () => {
  const checker = useSelector((state) => {
    return state.Login.auth;
  });
  return (
    <NavigationContainer>
      {checker === false ? <LoginMatch /> : <HomeMatch />}
    </NavigationContainer>
  );
};

export default RootNavigator;
