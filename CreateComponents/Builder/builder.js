import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"

function getOptionStyle(option, available, complete){
  if (complete.includes(option)){
    return {
      borderLeftColor: 'rgba(230, 59, 225, 0.5)',
      borderLeftWidth: 5,
      marginVertical: 10,
      paddingLeft: 10,
      paddingVertical: 10
    }
  }
  else if (available.includes(option)){
    return {
      borderLeftColor: 'rgb(230, 59, 225)',
      borderLeftWidth: 5,
      marginVertical: 10,
      paddingLeft: 10,
      paddingVertical: 10
    }
  }
  else {
    return {
      paddingLeft: 10,
      paddingVertical: 10,
      marginVertical: 10
    }
  }
}

function Option(props){
  return(
    <TouchableOpacity
      style={getOptionStyle(props.id, props.available, props.complete)}
      onPress={props.available.includes(props.id) ? () => props.navigation.navigate(props.id) : undefined}
    >
      <Text style={styles.optionText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

class Builder extends Component {
  state = {
    available: ["Species"], //we will add options to this list once certain steps have been completed.
    complete: [], //options that have been completed will appear here. This takes priority over the available array.
  }

  /**
  * If availability for a character builder section has opened, change state to reflect this.
  **/
  handleAvailability = () => {
    if (this.props.route.params.skillsAvail){
      console.log("skillsAvail condition called");
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Skills");
      complete.push("Species");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.props.route.params.featsAvail){
      let available = [...this.state.available];
      available.push("Feats");
      this.setState({ available });
    }
    if (this.props.route.params.equipmentAvail){
      let available = [...this.state.available];
      available.push("Equipment");
      this.setState({ available });
    }
  }

  componentDidMount() {
    this.handleAvailability();
  }

  componentDidUpdate(prevProps){
    if (prevProps.route.params != this.props.route.params){
      this.handleAvailability();
    }
  }

  render() {
    console.log(this.state.available);
     return (
       <>
         <View style={styles.container}>
           <SafeAreaView>
             <ScrollView style={styles.scrollView}>
               <View>
                 <Option navigation={this.props.navigation} text="Choose a Species" id="Species" available={this.state.available} complete={this.state.complete} />
                 <Option navigation={this.props.navigation} text="Choose Skills" id="Skills" available={this.state.available} complete={this.state.complete} />
                 <Option navigation={this.props.navigation} text="Choose Feats" id="Feats" available={this.state.available} complete={this.state.complete} />
                 <Option navigation={this.props.navigation} text="Choose Equipment" id="Catalogue" available={this.state.available} complete={this.state.complete} />
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
   optionText: {
     fontSize: 16,
     color: "white",
   }
})
