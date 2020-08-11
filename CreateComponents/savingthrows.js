import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class SavingThrows extends Component {
  /* Takes the bonuses of the two relevant attributes and averages them, returning the save value */
  calculateSave = (attr1, attr2) => {
    var save = 0;
    var firstBonus = Math.floor((attr1-10)/2)*10;
    var secondBonus = Math.floor((attr2-10)/2)*10;
    save = Math.floor((firstBonus + secondBonus)/2)+10;
    return save;
  }
  render() {
     return (
       <>
       <View style={styles.row}>
         <View style={styles.inputWrap}>
           <Text style={styles.text}>Fortitude: ({this.calculateSave(this.props.strength, this.props.constitution)})</Text>
         </View>
         <View style={styles.inputWrap}>
           <Text style={styles.text}>Willpower: ({this.calculateSave(this.props.wisdom, this.props.influence)})</Text>
         </View>
         <View style={styles.inputWrap}>
           <Text style={styles.text}>Reflex: ({this.calculateSave(this.props.dexterity, this.props.intelligence)})</Text>
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
