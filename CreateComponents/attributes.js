import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from "react-native-material-dropdown"
import NumericInput from 'react-native-numeric-input'

class DetermineAttributes extends Component {
  sendStrength = (value) => {
    this.props.strCallback(value)
  }
  sendDexterity = (value) => {
    this.props.dexCallback(value)
  }
  sendConstitution = (value) => {
    this.props.conCallback(value)
  }
  sendWisdom = (value) => {
    this.props.wisCallback(value)
  }
  sendIntelligence = (value) => {
    this.props.intCallback(value)
  }
  sendInfluence = (value) => {
    var bonus = this.calculateBonus(value);
    this.props.infCallback(value);
  }
  /* calculates the bonus from a attribute score */
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }
  render() {
     return (
       <>
         <View style={styles.row}>
           <View style={styles.inputWrap}>
             <Text>Strength</Text>
             <NumericInput type='plus-minus' value={this.props.strength} onChange={value => {this.sendStrength(value)}} />
           </View>
           <View style={styles.inputWrap}>
             <Text>Dexterity</Text>
             <NumericInput type='plus-minus' value={this.props.dexterity}  onChange={value => {this.sendDexterity(value)}} />
           </View>
           <View style={styles.inputWrap}>
             <Text>Constitution</Text>
             <NumericInput type='plus-minus' value={this.props.constitution} onChange={value => {this.sendConstitution(value)}} />
           </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text>Wisdom</Text>
            <NumericInput type='plus-minus' value={this.props.wisdom} onChange={value => {this.sendWisdom(value)}} />
          </View>
          <View style={styles.inputWrap}>
            <Text>Intelligence</Text>
            <NumericInput type='plus-minus' value={this.props.intelligence} onChange={value => {this.sendIntelligence(value)}} />
          </View>
          <View style={styles.inputWrap}>
            <Text>Influence</Text>
            <NumericInput type='plus-minus' value={this.props.influence} onChange={value => {this.sendInfluence(value)}} />
          </View>
        </View>
     </>
    )
  }
}

export default DetermineAttributes;

const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 10
   },
   row: {
   justifyContent: 'space-evenly',
   flexDirection: "row"
   },
   inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   TextInputStyle: {
    textAlign: 'left',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10
  }
})
