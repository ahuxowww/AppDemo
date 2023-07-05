import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { Calendar } from "react-native-calendars";

const width = Dimensions.get("window").width;
const arrow = require("../../image/arrow.png");
const Welcomevideo = () => {
  const [lastMonth, setLastMonth] = useState("");
  const [nextMonth, setNextMonth] = useState("");
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>My streaks</Text>
      </View>

      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0.75 }}
          end={{ x: 1, y: 0.25 }}
          colors={["#1e2424", "#2D3748"]}
          style={{
            flexDirection: "row",
            borderRadius: 20,
            backgroundColor: "black",
            height: 70,
            marginLeft: 20,
            marginRight: 20,
            alignItems: "center",
            marginBottom: 36,
          }}
        >
          <Image source={arrow} style={{ margin: 18 }} />
          <View style={{ margin: 18 }}>
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "500",
                fontSize: 15,
                lineHeight: 20,
              }}
            >
              Current streak:{" "}
            </Text>
            <Text
              style={{
                color: "#828187",
                fontWeight: "300",
                fontSize: 13,
                lineHeight: 20,
              }}
            >
              Longest streak:{" "}
            </Text>
          </View>
        </LinearGradient>

        <Calendar
          style={{
            height: 360,
          }}
          hideExtraDays={true}
          theme={{
            backgroundColor: "#2D3748",
            calendarBackground: "#2D3748",
            textDayFontSize: 17,
            textDayFontWeight: "300",
            dayTextColor: "#ffffff",
            textDisabledColor: "#ACAEB4",
            textDayHeaderFontSize: 15,
            textDayHeaderFontWeight: "700",
          }}
          renderHeader={(date) => {
            const monthNames = [
              "Last Year",
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
              "Next Year",
            ];
            setLastMonth(monthNames[date.getMonth()]);
            setNextMonth(monthNames[date.getMonth() + 2]);
            return (
              <View
                style={[
                  styles.monthAlight,
                  {
                    width: width / 3 + 20,
                    borderBottomColor: "#FF5789",
                    borderBottomWidth: 2,
                    marginLeft: -18,
                    marginRight: -18,
                  },
                ]}
              >
                <Text style={[styles.month, { color: "#ffffff" }]}>
                  {monthNames[date.getMonth() + 1]}
                </Text>
              </View>
            );
          }}
          renderArrow={(direction) =>
            direction === "left" ? (
              <View
                style={[
                  styles.monthAlight,
                  { borderBottomColor: "#0d0d0d", borderBottomWidth: 2 },
                ]}
              >
                <Text style={styles.month}>{lastMonth}</Text>
              </View>
            ) : (
              <View
                style={[
                  styles.monthAlight,
                  { borderBottomColor: "#0d0d0d", borderBottomWidth: 2 },
                ]}
              >
                <Text style={styles.month}>{nextMonth}</Text>
              </View>
            )
          }
          
          markingType={"period"}
          markedDates={{
            "2022-08-21": {startingDay: true, color: '#FF5889'},
            "2022-08-22": {selected: true, color: '#100f24'},
            "2022-08-23": {selected: true, color: '#100f24'},
            "2022-08-24": {endingDay: true, color: '#FF5889'},
          }}
        />
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
    marginTop: 50,
    flexDirection: "row",
    marginLeft: 24,
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#ffffff",
  },
  container: {
    marginTop: 28,
  },
  month: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    color: "#828187",
    paddingBottom: 20,
  },
  monthAlight: {
    width: width / 4,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "white",
    height: 40,
  },
});

export default Welcomevideo;
