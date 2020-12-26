import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Create from '../create';

class CreateScreen extends Component {

  componentDidMount(){
    this.props.navigation.setOptions({
      headerTitle: "New Character",
      headerLeft: props => (
          /* TODO: Add a confirmation alert since progress will be lost if the user presses this button. */
          <Icon {...props} name={"chevron-left"} onPress={() => this.props.navigation.navigate("Home")} size={40} color="white" />
      ),
      headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
      headerTitleStyle: {color: "white"}
    })
  }

  render() {
     return (
       <Create
         navigation={this.props.navigation}
         attributes={this.props.route.params.attributes}
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
