import React, { useCallback } from "react";
import { Text, View, StyleSheet, FlatList, Dimensions, Pressable } from "react-native";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import RNFS from 'react-native-fs';

const Invite = () => {
  const Items = useSelector((state) => {
    return state.cart.CartList;
  });

  const priceItems = (total,i) => {
      const price = total + Items[i].price * Items[i].quantity
      return price
  }
  const totalcheck = () => {
      let totalPrice = 0;
      for(let i=0;i<Items.length;i++){
          if (Items[i].ischeck === true) {
              totalPrice = priceItems(totalPrice,i)
          }
      }
      return totalPrice.toFixed(2); 
  }


  return(
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Shopping Cart</Text>
          </View>
          <View style={styles.body}>
            <FlatList 
              data={Items}
              renderItem={({item}) => <CartProduct cartItem={item} />}
              showsVerticalScrollIndicator={false}
              />
          </View>
          <View style={styles.footer}>
            <Text style={styles.total}>Total : {totalcheck()}$</Text>
            <Pressable style={styles.checkout}>
              <Text style={styles.number}>Check Out </Text>
            </Pressable>
          </View>
        </View>
      </View>
  );

  }
  const styles = StyleSheet.create({
  root:{
    width: '100%',
    height: '100%',
  },
  container: {
      marginTop: 24,
  },
  header: {
    height: 50,
    backgroundColor: '#eb6134',
    alignItems: "center",
    justifyContent: 'center'
  },
  title: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 18,
      fontWeight: '700'
  },
  body: {
    height: height-124,
  },
  footer: {
    height: 50,
    shadowColor: '#000000',
    elevation: 4,
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  total:{
    width: width*0.7,
    color: '#eb6134',
    fontWeight:'500',
    textAlign: 'right',
    alignSelf: 'center',
    paddingRight: 20
  },
  checkout: {
    width: width*0.3,
    backgroundColor: '#eb6134',
    alignItems: 'center',
    justifyContent:'center'
  },
  number: {
    color: 'white',
    fontWeight:'500',
  }
  })

export default Invite;
