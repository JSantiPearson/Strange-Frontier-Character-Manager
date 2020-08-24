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
      strength: 10,
      dexterity: 10,
      constitution: 10,
      wisdom: 10,
      intelligence: 10,
      influence: 10,
      threshold: 0,
      armor: 0,
      feats: ['']
   }

   componentDidMount() {
     this.props.speciesCallback(this.state.species);
   }

   handleName = (text) => {
      this.setState({ name: text });
   }
   handleSpecies = (speciesValue) => {
    this.setState({ species: speciesValue });
    this.props.speciesCallback(speciesValue);
   }
   setStrength = (strengthValue) => {
     this.setState({ strength: strengthValue });
     this.props.strCallback(strengthValue);
   }
   setDexterity = (dexValue) => {
     this.setState({ dexterity: dexValue });
     this.props.dexCallback(dexValue);
   }
   setConstitution = (conValue) => {
     this.setState({ constitution: conValue });
     this.props.conCallback(conValue);
   }
   setWisdom = (wisValue) => {
     this.setState({ wisdom: wisValue });
     this.props.wisCallback(wisValue);
   }
   setIntelligence = (intValue) => {
     this.setState({ intelligence: intValue });
     this.props.intCallback(intValue);
   }
   setInfluence = (chaValue) => {
     this.setState({ influence: chaValue });
     this.props.infCallback(chaValue)
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
                    strCallback={this.setStrength}
                    dexCallback={this.setDexterity}
                    conCallback={this.setConstitution}
                    wisCallback={this.setWisdom}
                    intCallback={this.setIntelligence}
                    infCallback={this.setInfluence}
                    strength={this.state.strength}
                    dexterity={this.state.dexterity}
                    constitution={this.state.constitution}
                    intelligence={this.state.intelligence}
                    wisdom={this.state.wisdom}
                    influence={this.state.influence}
                  />

                <SavingThrows
                  strength={this.state.strength}
                  dexterity={this.state.dexterity}
                  constitution={this.state.constitution}
                  wisdom={this.state.wisdom}
                  intelligence={this.state.intelligence}
                  influence={this.state.influence}
                />

                   <TextInput style = {styles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = "Feats"
                     placeholderTextColor = "#9a73ef"
                     autoCapitalize = "none"
                     onChangeText = {this.handleFeats}/>
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
