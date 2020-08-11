import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import NumericInput from 'react-native-numeric-input'

class LifePoints extends Component {
  state = {
    maxHealth: 0,
    maxThreshold: 0,
    maxShield: 10,
    health: 0,
    threshold: 0,
    shield: 10
  }
  handleHealth = (value) => {
    this.setState({ maxHealth: value });
    this.setState({ maxThreshold: Math.floor(value * 0.2) });
  }
  render() {
     return (
       <>
         <View style={styles.row}>
           <View style={styles.inputWrap}>
             <Text>HP:</Text>
             <NumericInput type='plus-minus' onChange={value => {this.handleHealth(value)}} />
           </View>
           <View style={styles.inputWrap}>
             <Text style={styles.healthText}>TH: ({ this.state.threshold })/({ this.state.maxThreshold })</Text>
           </View>
           <View style={styles.inputWrap}>
             <Text style={styles.healthText}>SH: ({ this.state.shield })/({ this.state.maxShield })</Text>
           </View>
          </View>
        </>
     )
   }
 }

export default LifePoints;

const styles = StyleSheet.create({
   row: {
   justifyContent: 'space-evenly',
   flexDirection: "row",
   marginBottom: 10,
   marginTop: 15,
   fontSize: 40
   },
   inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  healthText: {
    fontSize: 17,
  }
 })
