import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class SavingThrows extends Component {
  render() {
     return (
       <>
       <View style={styles.row}>
         <View style={styles.inputWrap}>
           <Text style={styles.text}>Fortitude: ({this.props.saves.fortitude})</Text>
         </View>
         <View style={styles.inputWrap}>
           <Text style={styles.text}>Willpower: ({this.props.saves.willpower})</Text>
         </View>
         <View style={styles.inputWrap}>
           <Text style={styles.text}>Reflex: ({this.props.saves.reflex})</Text>
         </View>
        </View>
       </>
     )
   }
}
export default SavingThrows;

const styles = StyleSheet.create({
   row: {
   justifyContent: 'space-evenly',
   flexDirection: "row",
   marginBottom: 10,
   marginTop: 15,
   fontSize: 40
   },
   inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
 })
