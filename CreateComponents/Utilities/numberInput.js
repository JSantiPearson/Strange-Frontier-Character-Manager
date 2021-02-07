import React, { PureComponent } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class NumberInput extends PureComponent {
  state = {
    value: 0,
  }

  componentDidMount(){
    let value = this.props.numberValue;
    this.setState({ value });
  }

  componentDidUpdate(prevProps){
    if (prevProps != this.props){
      let value = this.props.numberValue;
      this.setState({ value });
    }
  }

  render(){
    console.log(this.state.value < this.props.maxValue);
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
        <Text style={[styles.text, {textAlign: "center", width: 40}]}>{this.state.value}</Text>
        {(this.state.value < this.props.maxValue || this.props.maxValue === undefined) &&
          <TouchableOpacity onPress={() => this.props.changeNumber(this.props.numberName, true)}>
            <Icon name="plus-circle" size={22} color='rgb(250, 0, 115)' />
          </TouchableOpacity>
        }
        {this.state.value >= this.props.maxValue &&
          <Icon name="plus-circle" size={22} color='rgba(250, 0, 115, 0.5)' />
        }
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
