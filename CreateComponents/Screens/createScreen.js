import React, { PureComponent } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Create from '../create';

class CreateScreen extends PureComponent {
  state={
    attributes: {
       strength: {
         score: 10,
         mod: 0
       },
       dexterity: {
         score: 10,
         mod: 0
       },
       constitution: {
         score: 10,
         mod: 0
       },
       wisdom: {
         score: 10,
         mod: 0
       },
       intelligence: {
         score: 10,
         mod: 0
       },
       influence: {
         score: 10,
         mod: 0
       }
    },
  }
  render() {
     return (
       <Create
         {...this.props}
         attributes={this.state.attributes}
         species={this.props.route.params.species}
         saves={this.props.route.params.saves}
       />
     )
   }
 }

 export default CreateScreen;

 const styles = StyleSheet.create({
 });
