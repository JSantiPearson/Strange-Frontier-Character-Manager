import React, { Component } from 'react'
import { View, Button, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-material-dropdown"
import { Picker } from '@react-native-community/picker';
import DetermineAttributes from './attributes'
import LifePoints from './health'
import SavingThrows from './savingthrows'

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <View style={styles.sectionContainer}>
      <Button
        title={`${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      />
    </View>
  );
}

class ProfileInputs extends Component {
   state = {
      name: '',
      species: "human",

      attributes: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        wisdom: 10,
        intelligence: 10,
        influence: 10
      },

      saves: {
        fortitude: 0,
        reflex: 0,
        willpower: 0
      },

      threshold: 0,
      armor: 0,
      feats: ['']
   }

   componentDidMount() {
     this.props.speciesCallback(this.state.species);
   }

   /* Takes the bonuses of the two relevant attributes and averages them, returning the save value */
   calculateSave = (attr1, attr2) => {
     var save = 0;
     var firstBonus = Math.floor((attr1-10)/2)*10;
     var secondBonus = Math.floor((attr2-10)/2)*10;
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
     this.props.saveCallback(saves);
   }

   handleName = (text) => {
    this.setState({ name: text });
   }
   handleSpecies = (speciesValue) => {
    this.setState({ species: speciesValue });
    this.props.speciesCallback(speciesValue);
   }
   setAttributes = (attr) => {
     let attributes = {
       strength: attr.strength,
       dexterity: attr.dexterity,
       constitution: attr.constitution,
       wisdom: attr.wisdom,
       intelligence: attr.intelligence,
       influence: attr.influence
     }
     this.handleSavingThrows(attributes);
     this.setState({ attributes });
     this.props.attributeCallback(attributes);
   }
   handleSkills = (skillsList) => {
     this.setState({ skills: skillsList})
   }
   handleFeats = (featsList) => {
     this.setState({ feats: featsList})
   }
   render() {
      return (
        <>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View>
                  <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = "Name"
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                     onChangeText = {this.handleName}/>
                   <View style={styles.container}>
                    <Picker
                      selectedValue={this.state.species}
                      style={{ backgroundColor: 'white', height: 50, width: 300 }}
                      onValueChange={this.handleSpecies}
                    >
                      <Picker.Item label="Human" value="human" />
                      <Picker.Item label="Grub Tub" value="grubtub" />
                      <Picker.Item label="Giant" value="giant" />
                      <Picker.Item label="Vermile" value="vermile" />
                      <Picker.Item label="Capra" value="capra" />
                      <Picker.Item label="Ogoloid" value="ogoloid" />
                      <Picker.Item label="Arachnet" value="arachnet" />
                      <Picker.Item label="Wheepe" value="wheepe" />
                      <Picker.Item label="Construct" value="construct" />
                      <Picker.Item label="Mod-Human" value="modhuman" />
                      <Picker.Item label="Energy Being" value="energybeing" />
                      <Picker.Item label="Simian" value="simian" />
                      <Picker.Item label="Orbiden" value="orbiden" />
                      <Picker.Item label="Custom" value="custom" />
                    </Picker>
                  </View>

                  <LifePoints />

                  <DetermineAttributes
                    attributeCallback={this.setAttributes}
                    attributes={this.state.attributes}
                  />

                  <SavingThrows
                    saves={this.state.saves}
                  />

                   <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = "Feats"
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                     onChangeText = {this.handleFeats}
                   />
                  </View>
                </ScrollView>
              </SafeAreaView>
            </>
       );
    }
 }

export default ProfileInputs;

const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 5
   },
   input: {
      margin: 15,
      height: 40,
      backgroundColor: 'white',
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
   }
})
