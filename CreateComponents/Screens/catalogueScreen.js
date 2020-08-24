import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TrinitaireArms from '../Catalogues/TrinitaireArms'

class Catalogues extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }

  render() {
     return (
       <TrinitaireArms
         itemCallback={this.addItem}
       />
     )
   }
 }

 export default Catalogues;

 const styles = StyleSheet.create({
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color: Colors.dark,
   },
 });
