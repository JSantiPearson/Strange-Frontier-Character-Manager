import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"

function getOptionStyle(option, available, complete){
  if (complete.includes(option)){
    return {
      borderLeftColor: 'rgba(250, 0, 115, 0.5)',
      borderLeftWidth: 5,
      marginVertical: 10,
      paddingLeft: 10,
      paddingVertical: 10
    }
  }
  else if (available.includes(option)){
    return {
      borderLeftColor: 'rgb(250, 0, 115)',
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

function navigateDebug(props){
  console.log(props.id);
  props.navigation.navigate(props.id, {
    attributes: props.route.params.attributes,
    feats: props.route.params.feats,
    navigation: props.navigation,
    route: props.route
  });
}

function Option(props){
  return(
    <TouchableOpacity
      style={getOptionStyle(props.id, props.available, props.complete)}
      onPress={props.available.includes(props.id) ? () => navigateDebug(props) : undefined}
    >
      <Text style={styles.optionText}>{props.text}</Text>
      {props.id == "Species" && props.route.params.species != '' &&
        <Text style={[styles.optionText, { fontSize: 14, fontStyle: "italic"} ]}>{props.route.params.species}</Text>
      }
      {props.id == "Attributes" && props.route.params.attributes != undefined &&
        <Text style={[styles.optionText, { fontSize: 14, fontStyle: "italic"} ]}>
          Str: {props.route.params.attributes.strength.score},
          Dex: {props.route.params.attributes.dexterity.score},
          Con: {props.route.params.attributes.constitution.score},
          Wis: {props.route.params.attributes.wisdom.score},
          Int: {props.route.params.attributes.intelligence.score},
          Inf: {props.route.params.attributes.influence.score}
        </Text>
      }
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
  * TODO: Could do some optimizing here, maybe pushing onto a stack. Either way, this logic is spaghetti code, on top of being pretty ugly.
  **/
  handleAvailability = () => {
    if (this.props.route.params.attributesAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Attributes");
      complete.push("Species");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.props.route.params.skillsAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Skills");
      complete.push("Attributes");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.props.route.params.featsAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Feats");
      complete.push("Skills");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.props.route.params.equipmentAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Equipment");
      complete.push("Feats");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.props.route.params.movesAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Moves");
      complete.push("Equipment");
      this.setState({ available });
      this.setState({ complete });
    }
  }

  componentDidMount() {
    this.handleAvailability();
    this.props.navigation.setOptions({
      headerTitle: "",
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
          onPress={() => this.props.navigation.navigate('Create', { navigation: this.props.navigation, attributes: this.props.route.params.attributes })}
          title="Skip"
          color='rgb(250, 0, 115)'
        >
          <Text style={styles.headerButton}>Skip</Text>
        </TouchableOpacity>
      ),
      headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.route.params != this.props.route.params){
      this.handleAvailability();
    }
  }

  render() {
     return (
       <>
         <View style={styles.container}>
           <SafeAreaView>
             <ScrollView style={styles.scrollView}>
               <View>
                 <Option text="Choose a Species" id="Species" navigation={this.props.navigation} route={this.props.route} available={this.state.available} complete={this.state.complete} />
                 <Option text="Determine Attributes" id="Attributes" navigation={this.props.navigation} route={this.props.route} available={this.state.available} complete={this.state.complete} />
                 <Option text="Choose Skills" id="Skills" navigation={this.props.navigation} route={this.props.route} available={this.state.available} complete={this.state.complete} />
                 <Option text="Choose Feats" id="Feats" navigation={this.props.navigation} route={this.props.route} available={this.state.available} complete={this.state.complete} />
                 <Option text="Choose Equipment" id="Equipment" navigation={this.props.navigation} route={this.props.route} available={this.state.available} complete={this.state.complete} />
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
   },
   headerButton: {
     fontSize: 15,
     paddingHorizontal: 20,
     color: "white",
   },
})
