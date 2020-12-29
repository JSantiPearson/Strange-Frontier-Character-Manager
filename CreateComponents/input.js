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
     console.log(this.props.route.params.route.params.attributes.strength.score);
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
              <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                  <View style={styles.section}>
                    <Text style={styles.text}>Name</Text>
                    <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       autoCapitalize = "none"
                       onChangeText = {this.handleName}
                    />
                  </View>
                  <Text style={styles.title}>Species</Text>
                  <View style={styles.section}>
                    <TouchableOpacity
                      title="Species"
                      onPress={() => this.props.navigation.navigate("Species")}
                    >
                      <Text style={styles.text}>Choose a Species</Text>
                    </TouchableOpacity>
                  </View>
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
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: "black",
  },
 input: {
    margin: 15,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 section: {
   backgroundColor: 'rgb(66, 66, 66)',
   borderColor: 'rgb(165, 165, 165)',
   borderWidth: 1,
 },
 title: {
   fontSize: 16,
   color: "white",
 },
 text: {
   color: "white"
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
