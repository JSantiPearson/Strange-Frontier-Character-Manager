import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Create from '../create';

class CreateScreen extends Component {
  sendAttributes = (attr) => {
    this.props.attributeCallback(attr);
  }
  sendSpecies = (species) => {
    this.props.speciesCallback(species);
  }
  sendStats = (stats) => {
    console.log("stats made it to CreateScreen");
    this.props.statsCallback(stats);
  }
  sendSaves = (saves) => {
    this.props.savesCallback(saves);
  }
  render() {
     return (
       <Create
         navigation={this.props.navigation}
         attributeCallback={this.sendAttributes}
         speciesCallback={this.sendSpecies}
         statsCallback={this.sendStats}
         savesCallback={this.sendSaves}
       />
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
