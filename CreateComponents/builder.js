import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"

function Option(props){
  return(
    <TouchableOpacity
      style={props.available.includes(props.id) ? styles.availableOption : styles.unavailableOption}
      onPress={props.available.includes(props.id) ? () => props.navigation.navigate(props.id) : undefined}
    >
      <Text style={styles.optionText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

class Builder extends Component {
  state = {
    available: ["Species"], //we will add options to this list once certain steps have been completed.
  }
   render() {
      return (
        <>
          <View style={styles.container}>
            <SafeAreaView>
              <ScrollView style={styles.scrollView}>
                <View>
                  <Option navigation={this.props.navigation} text="Choose a Species" id="Species" available={this.state.available} />
                  <Option navigation={this.props.navigation} text="Choose Skills" id="Skills" available={this.state.available} />
                  <Option navigation={this.props.navigation} text="Choose Feats" id="Feats" available={this.state.available} />
                  <Option navigation={this.props.navigation} text="Choose Equipment" id="Catalogue" available={this.state.available} />
                </View>
              </ScrollView>
            </SafeAreaView>
          </View>
        </>
       );
    }
 }

export default Builder;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: "black",
   },
   availableOption: {
     backgroundColor: 'rgb(230, 59, 225)',
     paddingLeft: 10,
     paddingVertical: 10,
     marginBottom: 5,
   },
   unavailableOption: {
     paddingLeft: 10,
     paddingVertical: 10,
     marginBottom: 5,
   },
   optionText: {
     fontSize: 16,
     color: "white",
   }
})
