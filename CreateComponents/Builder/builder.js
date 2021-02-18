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

function Option(props){
  return(
    <TouchableOpacity
      style={getOptionStyle(props.id, props.state.available, props.state.complete)}
      onPress={props.state.available.includes(props.id) ? () => props.navigation.navigate(props.id, {
        attributes: props.state.attributes,
        species: props.state.species,
        saves: props.state.saves,
        feats: props.state.feats,
        navigation: props.navigation,
        route: props.route,
        onSelect: props.onSelect
      }) : undefined}
    >
      <Text style={styles.optionText}>{props.text}</Text>
      {props.id == "Species" && props.state.species != undefined &&
        <Text style={[styles.optionText, { fontSize: 14, fontStyle: "italic"} ]}>{props.state.species}</Text>
      }
      {props.id == "Attributes" && props.state.available.includes("Attributes") == true && props.state.available.includes("Skills") &&
        <Text style={[styles.optionText, { fontSize: 14, fontStyle: "italic"} ]}>
          Str: {props.state.attributes.strength.score},
          Dex: {props.state.attributes.dexterity.score},
          Con: {props.state.attributes.constitution.score},
          Wis: {props.state.attributes.wisdom.score},
          Int: {props.state.attributes.intelligence.score},
          Inf: {props.state.attributes.influence.score}
        </Text>
      }
    </TouchableOpacity>
  )
}

class Builder extends Component {
  state = {
    available: ["Species"], //we will add options to this list once certain steps have been completed.
    complete: [], //options that have been completed will appear here. This takes priority over the available array.
    attributes: {
      strength: {
        score: 10,
        mod: 0
      },
      dexterity: {
        score: 10,
        mod: 0
      },
      constitution: {
        score: 10,
        mod: 0
      },
      wisdom: {
        score: 10,
        mod: 0
      },
      intelligence: {
        score: 10,
        mod: 0
      },
      influence: {
        score: 10,
        mod: 0
      }
    },
    saves: {
      fortitude: 0,
      reflex: 0,
      willpower: 0
    },
  }

  onSelect = (data) => {
    this.setState(data, () => {
      this.handleAvailability();
    });
  }

  calculateSave = (attr1, attr2) => {
    var save = 0;
    var firstBonus = attr1.mod*10;
    var secondBonus = attr2.mod*10;
    save = Math.floor((firstBonus + secondBonus)/2)+10;
    return save;
  }

  handleSavingThrows = (attributes) => {
    let fortitude = this.calculateSave(attributes.strength, attributes.constitution);
    let reflex = this.calculateSave(attributes.dexterity, attributes.intelligence);
    let willpower = this.calculateSave(attributes.wisdom, attributes.influence);

    let saves = {
      fortitude: fortitude,
      reflex: reflex,
      willpower: willpower
    }
    this.setState({ saves });
  }

  /**
  * If availability for a character builder section has opened, change state to reflect this.
  * TODO: Could do some optimizing here, maybe pushing onto a stack. Either way, this logic is spaghetti code, on top of being pretty ugly.
  **/
  handleAvailability = () => {
    if (this.state.attributesAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Attributes");
      complete.push("Species");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.state.skillsAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      let attributes = this.state.attributes;
      available.push("Skills");
      complete.push("Attributes");
      this.handleSavingThrows(attributes);
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.state.featsAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Feats");
      complete.push("Skills");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.state.equipmentAvail){
      let available = [...this.state.available];
      let complete = [...this.state.complete];
      available.push("Equipment");
      complete.push("Feats");
      this.setState({ available });
      this.setState({ complete });
    }
    if (this.state.movesAvail){
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
          onPress={() => this.props.navigation.navigate('Create', {
            navigation: this.props.navigation,
            attributes: this.state.attributes,
            species: this.state.species,
            saves: this.state.saves,
            feats: this.state.feats
          })}
          title="Skip"
          color='rgb(250, 0, 115)'
        >
          <Text style={styles.headerButton}>Skip</Text>
        </TouchableOpacity>
      ),
      headerStyle: {backgroundColor: 'rgb(250, 0, 115)'},
    })
  }

  render() {
     return (
       <>
         <View style={styles.container}>
           <SafeAreaView>
             <ScrollView style={styles.scrollView}>
               <View>
                <Option
									text="Choose a Species"
									id="Species"
                  onSelect={this.onSelect}
									navigation={this.props.navigation}
									route={this.props.route}
									state={this.state}
                />
                <Option
									text="Determine Attributes"
									id="Attributes"
                  onSelect={this.onSelect}
									navigation={this.props.navigation}
									route={this.props.route}
									state={this.state}
                />
                <Option
									text="Choose Skills"
									id="Skills"
                  onSelect={this.onSelect}
									navigation={this.props.navigation}
									route={this.props.route}
									state={this.state}
                />
                <Option
									text="Choose Feats"
									id="Feats"
                  onSelect={this.onSelect}
									navigation={this.props.navigation}
									route={this.props.route}
									state={this.state}
                />
                <Option
									text="Choose Equipment"
									id="Equipment"
                  onSelect={this.onSelect}
									navigation={this.props.navigation}
									route={this.props.route}
									state={this.state}
                />
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
