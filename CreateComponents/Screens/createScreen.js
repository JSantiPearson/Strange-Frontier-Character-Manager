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

  componentDidMount(){
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
    });
    if (this.props.route.params.attributes !== undefined){
      let attributes = this.props.route.params.attributes;
      this.setState({ attributes });
    }
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
