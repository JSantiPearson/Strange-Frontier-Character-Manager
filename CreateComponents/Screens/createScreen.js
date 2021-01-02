import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Create from '../create';

class CreateScreen extends Component {

  componentDidMount(){
    console.log("Create Screen saves: " + this.props.route.params.saves);
    this.props.navigation.setOptions({
      headerTitle: "New Character",
      headerTitleAlign: "center",
      headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
      headerLeft: props => (
          /* TODO: Add a confirmation alert since progress will be lost if the user presses this button. */
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', {})}
            title="Cancel"
            color='rgb(250, 0, 115)'
          >
            <Text style={styles.headerButton}>Cancel</Text>
          </TouchableOpacity>
      ),
      headerTitleStyle: {color: "white"}
    })
  }

  render() {
     return (
       <Create
         {...this.props}
         attributes={this.props.route.params.attributes}
         species={this.props.route.params.species}
         saves={this.props.route.params.saves}
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
   headerButton: {
     fontSize: 15,
     paddingHorizontal: 20,
     color: "white",
   },
 });
