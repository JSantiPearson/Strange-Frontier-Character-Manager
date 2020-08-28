import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import NumericInput from 'react-native-numeric-input'

class CreateMove extends Component {
  state = {
    name: "",
    description: "",
    id: "",
    cost: 1
  }

  componentDidMount() {
    this.handleName(this.props.route.params.move.name);
    this.handleDescription(this.props.route.params.move.description);
    this.handleID();
    this.handleCost(this.props.route.params.move.cost);
  }

  componentDidUpdate() {
    let move = {
      name: this.state.name,
      description: this.state.description,
      id: this.state.id,
      cost: this.state.cost
    }
    this.props.route.params.moveCallback(move);
  }

  handleID = () => {
    this.setState({ id: this.props.route.params.move.id});
  }

  handleName = input => {
    this.setState({name: input})
  }

  handleDescription = input => {
    this.setState({description: input})
  }

  handleCost = cost => {
    console.log("Cost: " + cost);
    this.setState({ cost });
  }

  _renderName = () => {
    if (this.props.route.params.move.name != "EMPTY"){
      return(
        <TextInput style = {styles.nameInput}
           underlineColorAndroid = "transparent"
           placeholder = {this.props.route.params.move.name}
           defaultValue = {this.props.route.params.move.name}
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           maxLength = {40}
           onChangeText = {this.handleName}
        />
      )
    }
    else {
      return(
        <TextInput style = {styles.nameInput}
           underlineColorAndroid = "transparent"
           placeholder = "Move Name"
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           maxLength = {40}
           onChangeText = {this.handleName}
        />
      )
    }
  }

  _renderCost = () => {
    if (this.props.route.params.move.cost != 0){
      return(
        <NumericInput
          type='plus-minus'
          minValue={1}
          value={this.props.route.params.move.cost}
          onChange={cost => this.handleCost(cost)}
        />
      )
    }
    else {
      return(
        <NumericInput
          type='plus-minus'
          minValue={1}
          value={1}
          onChange={cost => this.handleCost(cost)}
        />
      )
    }
  }

  _renderDescription = () => {
    if (this.props.route.params.move.description != ""){
      return(
        <TextInput style = {styles.descriptionInput}
           underlineColorAndroid = "transparent"
           multiline = {true}
           textAlignVertical = 'top'
           placeholder = {this.props.route.params.move.description}
           defaultValue = {this.props.route.params.move.description}
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           onChangeText = {this.handleDescription}
        />
      )
    }
    else {
      return(
        <TextInput style = {styles.descriptionInput}
           underlineColorAndroid = "transparent"
           multiline = {true}
           textAlignVertical = 'top'
           placeholder = "Move Description"
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           onChangeText = {this.handleDescription}
        />
      )
    }
  }

  render() {
     return (
       <>
        {this._renderName()}
        {this._renderDescription()}
        {this._renderCost()}
       </>
     )
   }
}

export default CreateMove;

const styles = StyleSheet.create({
   nameInput: {
      margin: 15,
      height: 40,
      backgroundColor: 'white',
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   descriptionInput: {
      margin: 15,
      height: 80,
      backgroundColor: 'white',
      borderColor: '#7a42f4',
      borderWidth: 1
   },
})
