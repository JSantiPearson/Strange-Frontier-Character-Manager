import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import NumericInput from 'react-native-numeric-input'

class BuilderAttributes extends Component {
  /**
  * Calculates the bonus from a attribute score.
  * TODO: Add visual for attribute bonus
  **/
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }
  render() {
     return (
       <>
         <View style={styles.row}>
           <View style={styles.inputWrap}>
             <Text>Strength</Text>
             <NumericInput type='plus-minus' value={10} />
           </View>
           <View style={styles.inputWrap}>
             <Text>Dexterity</Text>
             <NumericInput type='plus-minus' value={10}  />
           </View>
           <View style={styles.inputWrap}>
             <Text>Constitution</Text>
             <NumericInput type='plus-minus' value={10} />
           </View>
        </View>
        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <Text>Wisdom</Text>
            <NumericInput type='plus-minus' value={10} />
          </View>
          <View style={styles.inputWrap}>
            <Text>Intelligence</Text>
            <NumericInput type='plus-minus' value={10} />
          </View>
          <View style={styles.inputWrap}>
            <Text>Influence</Text>
            <NumericInput type='plus-minus' value={10} />
          </View>
        </View>
     </>
    )
  }
}

export default BuilderAttributes;

const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 10
   },
   row: {
   justifyContent: 'space-evenly',
   flexDirection: "row"
   },
   inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   TextInputStyle: {
    textAlign: 'left',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10
  }
})
