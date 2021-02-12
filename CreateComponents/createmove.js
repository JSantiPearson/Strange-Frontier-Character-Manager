import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import NumberInput from './Utilities/numberInput'

class CreateMove extends Component {
  state = {
    name: "",
    description: "",
    id: "",
    cost: 1
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: "Create Move",
      headerLeft: props => (
        <TouchableOpacity
          title="Cancel"
          color='rgb(250, 0, 115)'
          onPress={() => this.props.navigation.goBack(null)}
        >
          <Text style={styles.headerButton}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack(null)}
          title="Accept"
          color='rgb(250, 0, 115)'
        >
          <Text style={styles.headerButton}>Accept</Text>
        </TouchableOpacity>
      ),
      headerTitleAlign: "center",
      headerTitleStyle: {color: "white"},
      headerStyle: {backgroundColor: 'rgb(250, 0, 115)'}
    })
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

  handleCost = (move, increase) => {
    let cost = this.state.cost;
    if (increase){
      cost++;
    }
    else {
      cost--;
    }
    this.setState({ cost });
  }

  _renderName = () => {
    if (this.props.route.params.move.name != "EMPTY"){
      return(
        <View style={styles.section}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput style = {styles.nameInput}
             underlineColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholder = {this.props.route.params.move.name}
             defaultValue = {this.props.route.params.move.name}
             placeholderTextColor = 'rgb(250, 0, 115)'
             onChangeText = {this.handleName}
             maxLength = {40}
             multiline = {false}
          />
        </View>
      )
    }
    else {
      return(
        <View style={styles.section}>
          <Text style={styles.inputTitle}>Name</Text>
          <TextInput style = {styles.nameInput}
             underlineColorAndroid = "transparent"
             autoCapitalize = "none"
             onChangeText = {this.handleName}
             maxLength = {40}
             multiline = {false}
          />
        </View>
      )
    }
  }

  _renderCost = () => { //TODO: Set state on mount if move has already been created, implement default value prop for number input
    return(
      <NumberInput
        minValue={1}
        maxValue={10}
        numberName={this.state.name}
        numberValue={this.state.cost}
        changeNumber={this.handleCost}
      />
    )
  }

  _renderDescription = () => {
    if (this.props.route.params.move.description != ""){
      return(
        <View style={styles.section}>
          <Text style={styles.inputTitle}>Description</Text>
          <TextInput style = {styles.descInput}
             underlineColorAndroid = "transparent"
             autoCapitalize = "none"
             textAlignVertical = 'top'
             placeholder = {this.props.route.params.move.description}
             defaultValue = {this.props.route.params.move.description}
             placeholderTextColor = 'rgb(250, 0, 115)'
             onChangeText = {this.handleDescription}
             maxLength = {300}
             multiline = {true}
          />
        </View>
      )
    }
    else {
      return(
        <View style={styles.section}>
          <Text style={styles.inputTitle}>Description</Text>
          <TextInput style = {styles.descInput}
             underlineColorAndroid = "transparent"
             autoCapitalize = "none"
             textAlignVertical = 'top'
             placeholderTextColor = 'rgb(250, 0, 115)'
             onChangeText = {this.handleDescription}
             maxLength = {300}
             multiline = {true}
          />
        </View>
      )
    }
  }

  render() {
     return (
      <>
        <View style={styles.container}>
          {this._renderName()}
          {this._renderDescription()}
          {this._renderCost()}
        </View>
      </>
     )
   }
}

export default CreateMove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: "black",
  },
  inputTitle: {
    color: 'rgb(200, 200, 200)',
    fontSize: 11,
    paddingHorizontal: 10,
    paddingTop: 5,
    justifyContent: 'flex-start'
  },
  section: {
    backgroundColor: 'rgb(33, 33, 33)',
    borderColor: 'rgb(165, 165, 165)',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    justifyContent: 'center'
  },
  headerButton: {
    fontSize: 15,
    paddingHorizontal: 20,
    color: "white",
  },
  nameInput: {
    color: "white",
    textAlignVertical: 'top',
    paddingVertical: 0,
  },
  descInput: {
    color: "white",
    textAlignVertical: 'top',
    paddingVertical: 20,
  },
  descriptionInput: {
    margin: 15,
    height: 80,
    backgroundColor: 'white',
    borderColor: '#7a42f4',
    borderWidth: 1
  },
})
