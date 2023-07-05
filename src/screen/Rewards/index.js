import React, { useCallback } from "react";
import { Text, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const medal = require('../../image/Group.png');
const picture2 = require('../../image/Group2.png');
const check = require('../../image/check.png')
const Rewards = () => {

  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end',marginTop: 40}}>
          <LinearGradient
              colors={["#FF5789", "#FF9B9C"]}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={{flexDirection: 'row', height:36, width: 94, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 25}}>
            <Image source={medal}   />
            <Text style={{paddingLeft: 5,color: '#ffffff', fontSize: 14, fontWeight: '700'}}>9 Points</Text>
          </LinearGradient>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={picture2} style={{resizeMode: 'contain'}} />
          <Text style={{color: '#ffffff', fontSize: 24, fontWeight: '900', marginBottom: 14}}>Rewards</Text>
          <Text style={styles.text}>Collect points and get savings for the next month</Text>
        </View>
        <View style={{marginTop: 28}}>

          <View style={{height: 71, backgroundColor: '#100f24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 15,paddingLeft: 15, borderRadius: 15, marginVertical: 4}}>
            <View>
              <Text style={[styles.text,{fontWeight: '500'}]}>Listen-1day</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textline}>Achieved</Text>
                <Image source={check} style={styles.check} />
              </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Image source={medal} style={styles.medal} />
              <Text style={styles.number} >1</Text>
            </View>
          </View >

          <View style={{height: 71, backgroundColor: '#100f24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 15,paddingLeft: 15, borderRadius: 15, marginVertical: 4}}>
            <View>
              <Text style={[styles.text,{fontWeight: '500'}]}>Listen for the first 7 consecutive days</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textline}>Achieved</Text>
                <Image source={check} style={styles.check} />
              </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Image source={medal} style={styles.medal} />
              <Text style={styles.number} >7</Text>
            </View>
          </View>

          <View style={{height: 71, backgroundColor: '#100f24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 15,paddingLeft: 15, borderRadius: 15, marginVertical: 4}}>
            <View>
              <Text style={[styles.text,{fontWeight: '500'}]}>Listen for the first 28 consecutive days</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.textline}>Achieved</Text>
                <Image source={check} style={styles.check} />
              </View>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Image source={medal} style={styles.medal} />
              <Text style={styles.number} >28</Text>
            </View>
          </View>
          <View style={{height: 71, backgroundColor: '#100f24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 15,paddingLeft: 15, borderRadius: 15, marginVertical: 4}}>
            <View>
              <Text style={[styles.text,{fontWeight: '500'}]}>Write one review</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Image source={medal} style={styles.medal} />
              <Text style={styles.number}>50</Text>
            </View>
          </View>
          <View style={{height: 71, backgroundColor: '#100f24', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 15,paddingLeft: 15, borderRadius: 15, marginVertical: 4}}>
            <View>
              <Text style={[styles.text,{fontWeight: '500'}]}>Refer a friend or accept a referral</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
              <Image source={medal} style={styles.medal} />
              <Text style={styles.number} >10</Text>
            </View>
          </View>
          
        </View>
        <LinearGradient
        colors={["#FF5789", "#FF9B9C"]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        style={{marginTop: 46, marginBottom: 20, height: 58, borderRadius: 25, alignItems:'center', justifyContent: 'center'}}
        >
          <Pressable>
            <Text style={styles.textbutton}>100 points - 5% off | 150 points -10% off</Text>
          </Pressable>
        </LinearGradient>
        
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
  container: {
    marginTop: 30,
    marginLeft: 18,
    marginRight: 18
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#ffffff'
  },
  check: {
    marginTop: 6,
    marginLeft: 5
  },
  medal: {
    marginRight: 10
  },
  number: {
    color: '#FF5889',
    fontSize: 15,
    fontWeight: '500'
  },
  textline: {
    color: '#959EA7',
    fontSize: 13,
    fontWeight: '300'
  },
  textbutton: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: "700"
  }
  

});

export default Rewards;
