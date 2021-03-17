import React, { Component } from 'react';
import { Alert, View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

function Attribute(props){
  return(
    <View style={[styles.circle, {marginTop: 100, marginLeft: 20}]}>
      <View style={styles.bonusCircle}>
      </View>
      <Text style={{textAlign: "center"}}>14</Text>
    </View>
  )
}

class StatDisplay extends Component {
  render() {
     return (
       <View style={styles.container}>
        <Attribute />
       </View>
     )
   }
 }

 export default StatDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 0, 115)',
  },
  circle: {
   width: 40,
   height: 40,
   borderRadius: 40/2,
   justifyContent: 'center',
   shadowColor: 'black',
   shadowOpacity: 0.26,
   shadowOffset: { width: 0, height: 2},
   shadowRadius: 10,
   elevation: 3,
   backgroundColor: 'white'
  },
  bonusCircle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: "white",
    justifyContent: 'center',
    position: "absolute",
    top: -5,
    left: 25,
  }
});
