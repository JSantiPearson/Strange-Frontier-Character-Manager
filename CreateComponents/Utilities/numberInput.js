import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class NumberInput extends Component {
  render(){
    return (
      <View style={styles.row}>
        {this.props.numberValue > 0 &&
          <TouchableOpacity onPress={() => this.props.changeNumber(this.props.numberName, false)}>
            <Icon name="minus-circle" size={22} color='rgb(250, 0, 115)' />
          </TouchableOpacity>
        }
        {this.props.numberValue <= 0 &&
          <Icon name="minus-circle" size={22} color='rgba(250, 0, 115, 0.5)' />
        }
        <Text style={[styles.text, {textAlign: "center", width: 40}]}>{this.props.numberValue}</Text>
        <TouchableOpacity onPress={() => this.props.changeNumber(this.props.numberName, true)}>
          <Icon name="plus-circle" size={22} color='rgb(250, 0, 115)' />
        </TouchableOpacity>
      </View>
    )
  }
}

export default NumberInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    textAlign: "left",
  },
  row: {
    flexDirection: "row",
  },
})
