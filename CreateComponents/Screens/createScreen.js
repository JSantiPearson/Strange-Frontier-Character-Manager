import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Create from '../create';

class CreateScreen extends Component {
  setStrength = (strengthValue) => {
  this.setState({ strength: strengthValue });
  console.log("Set the strength in CreateScreen.");
  this.props.strengthCallback(strengthValue);
}
  render() {
     return (
       <Create navigation={this.props.navigation} strengthCallback={this.setStrength} />
     )
   }
 }

 export default CreateScreen;

 const styles = StyleSheet.create({
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color: Colors.dark,
   },
 });
