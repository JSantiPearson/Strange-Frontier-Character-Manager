import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from "react-native-material-dropdown"
import NumericInput from 'react-native-numeric-input'

class DetermineAttributes extends Component {
  sendAttribute = (attr, value) => {
    let attributes = this.props.attributes;
    switch (attr){
      case "strength":
        attributes.strength = value;
        break;
      case "dexterity":
        attributes.dexterity = value;
        break;
      case "constitution":
        attributes.constitution = value;
        break;
      case "wisdom":
        attributes.wisdom = value;
        break;
      case "intelligence":
        attributes.intelligence = value;
        break;
      case "influence":
        attributes.influence = value;
        break;
    }
    this.props.attributeCallback(attributes);
  }
  /* calculates the bonus from a attribute score. TODO: Add visual for attribute bonus */
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
             <NumericInput type='plus-minus' value={this.props.attributes.strength} onChange={value => {this.sendAttribute("strength", value)}} />
           </View>
           <View style={styles.inputWrap}>
             <Text>Dexterity</Text>
             <NumericInput type='plus-minus' value={this.props.attributes.dexterity}  onChange={value => {this.sendAttribute("dexterity", value)}} />
           </View>
           <View style={styles.inputWrap}>
             <Text>Constitution</Text>
             <NumericInput type='plus-minus' value={this.props.attributes.constitution} onChange={value => {this.sendAttribute("constitution", value)}} />
           </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text>Wisdom</Text>
            <NumericInput type='plus-minus' value={this.props.attributes.wisdom} onChange={value => {this.sendAttribute("wisdom", value)}} />
          </View>
          <View style={styles.inputWrap}>
            <Text>Intelligence</Text>
            <NumericInput type='plus-minus' value={this.props.attributes.intelligence} onChange={value => {this.sendAttribute("intelligence", value)}} />
          </View>
          <View style={styles.inputWrap}>
            <Text>Influence</Text>
            <NumericInput type='plus-minus' value={this.props.attributes.influence} onChange={value => {this.sendAttribute("influence", value)}} />
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
