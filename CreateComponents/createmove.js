import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

class CreateMove extends Component {
  state = {
    name: "",
    id: "",
    cost: 0
  }

  componentDidMount() {
    this.handleID();
  }

  handleID = () => {
    this.setState({ id: this.props.route.params.move.id});
    console.log("move id is: " + this.props.route.params.move.id);
  }

  handleName = input => {
    this.setState({name: input})
    let move = {
      name: input,
      id: this.state.id,
      cost: this.state.cost
    }
    this.props.route.params.moveCallback(move);
    console.log("Sent " + move.name);
  }

  render() {
     return (
       <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Move Name"
          placeholderTextColor = "#9a73ef"
          autoCapitalize = "none"
          onChangeText = {this.handleName}
       />
     )
   }
}

export default CreateMove;

const styles = StyleSheet.create({
   input: {
      margin: 15,
      height: 40,
      backgroundColor: 'white',
      borderColor: '#7a42f4',
      borderWidth: 1
   },
})
