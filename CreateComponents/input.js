import React, { Component } from 'react'
import { View, Button, Dimensions, Image, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetermineAttributes from './attributes'
import LifePoints from './health'
import SavingThrows from './savingthrows'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <View style={styles.sectionContainer}>
      <Button
        title={'${screenName}'}
        onPress={() => navigation.navigate(screenName)}
      />
    </View>
  );
}

function AttributePicker(props) {
  //TODO: Find a way to hide the picker caret.
  return(
    <View style={{paddingLeft: 5}}>
      <Picker
        selectedValue={props.score}
        dropdownIconColor='white'
        style={{color: 'white', height: 30, width: 85}}
        onValueChange={(itemValue, itemIndex) =>
          props.setAttributes(props.attribute, itemValue)
        }
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="7" value={7} />
        <Picker.Item label="8" value={8} />
        <Picker.Item label="9" value={9} />
        <Picker.Item label="10" value={10} />
        <Picker.Item label="11" value={11} />
        <Picker.Item label="12" value={12} />
        <Picker.Item label="13" value={13} />
        <Picker.Item label="14" value={14} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="16" value={16} />
        <Picker.Item label="17" value={17} />
        <Picker.Item label="18" value={18} />
        <Picker.Item label="19" value={19} />
        <Picker.Item label="20" value={20} />
        <Picker.Item label="21" value={21} />
        <Picker.Item label="22" value={22} />
        <Picker.Item label="23" value={23} />
        <Picker.Item label="24" value={24} />
        <Picker.Item label="25" value={25} />
        <Picker.Item label="26" value={26} />
        <Picker.Item label="27" value={27} />
        <Picker.Item label="28" value={28} />
        <Picker.Item label="29" value={29} />
        <Picker.Item label="30" value={30} />
      </Picker>
    </View>
  )
}

class ProfileInputs extends Component {
   state = {
      name: '',
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
      health: 1,
      resourcePath: {},
   }

   componentDidMount() {
     let attributes = this.props.attributes;
     let species = this.props.species;
     this.setState({ species });
     this.setState({ attributes });
   }

   onSelect = (data) => {
     if (data.species !== undefined){
       this.props.speciesCallback(data.species);
     }
     else if (data.speciesStats !== undefined){
       this.props.speciesStatsCallback(data.speciesStats);
     }
     this.setState(data);
   }

   selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

   /* Takes the bonuses of the two relevant attributes and averages them, returning the save value */
   calculateSave = (attr1, attr2) => {
     var save = 0;
     var firstBonus = attr1.mod*10;
     var secondBonus = attr2.mod*10;
     save = Math.floor((firstBonus + secondBonus)/2)+10;
     return save;
   }
   handleMod = (attr) => {
     var mod = Math.floor((attr-10)/2);
     return mod;
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
   handleName = (event) => {
    this.setState({ name: event.nativeEvent.text });
    this.props.nameCallback(event.nativeEvent.text);
   }
   handleHealth = (event) => {
     let health = parseInt(event.nativeEvent.health);
     this.setState({ health });
   }
   setAttributes = (attribute, score) => {
     let attributes = this.state.attributes;
     let mod = this.handleMod(score);
     if (attribute === 'strength'){
       attributes.strength.score = score;
       attributes.strength.mod = mod;
     }
     else if (attribute === 'dexterity'){
       attributes.dexterity.score = score;
       attributes.dexterity.mod = mod;
     }
     else if (attribute === 'constitution'){
       attributes.constitution.score = score;
       attributes.constitution.mod = mod;
     }
     else if (attribute === 'wisdom'){
       attributes.wisdom.score = score;
       attributes.wisdom.mod = mod;
     }
     else if (attribute === 'intelligence'){
       attributes.intelligence.score = score;
       attributes.intelligence.mod = mod;
     }
     else if (attribute === 'influence'){
       attributes.influence.score = score;
       attributes.influence.mod = mod;
     }
     else {
       console.log("Invalid attribute type.");
     }
     this.setState({attributes});
     this.handleSavingThrows(attributes);
   }
   handleSkills = (skillsList) => {
     this.setState({ skills: skillsList})
   }
   handleFeats = (featsList) => {
     this.setState({ feats: featsList})
   }

   _renderProfileSection = () => {
     return(
       <>
       <Text style={styles.title}>Profile</Text>
         <View style={[styles.section, {alignItems: 'center'}]}>
           <TouchableOpacity onPress={this.selectFile}>
             {this.state.resourcePath.uri === undefined &&
               <Image
                 source={require('../assets/img/profile.png')}
                 style={{ width: 150, height: 150,  }}
               />
             }
             {this.state.resourcePath.uri !== undefined &&
               <Image
                 source={{ uri: this.state.resourcePath.uri }}
                 style={{ width: 150, height: 150,  }}
               />
             }
           </TouchableOpacity>
         </View>
         <View style={styles.section}>
           <Text style={styles.inputTitle}>Name</Text>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              autoCapitalize = "none"
              onSubmitEditing = {this.handleName}
              multiline = {false}
           />
         </View>
       </>
     )
   }
   //TODO: Fix navigation here... it currently takes the user back to the builder screen even though they selected 'skip'
   _renderSpeciesSection = () => {
     if (this.state.species === undefined){
       return(
         <>
           <Text style={styles.title}>Species</Text>
           <View style={[styles.section, {paddingVertical: 10}]}>
             <TouchableOpacity
               title="Species"
               activeOpacity={0.5}
               onPress={() => this.props.navigation.navigate("Species", {onSelect: this.onSelect})}
             >
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <MaterialCommunityIcons
                     name={"plus-circle"}
                     size={20}
                     color='rgb(250, 0, 115)'
                     style={{
                       paddingLeft: 10
                     }}
                   />
                     <Text style={styles.text}>Choose a Species</Text>
                 </View>
                 <View style={{paddingRight: 10}}>
                   <MaterialCommunityIcons
                     name={"chevron-right"}
                     size={25}
                     color='rgb(250, 0, 115)'
                     style={{
                       justifyContent: 'flex-end'
                     }}
                   />
                 </View>
               </View>
             </TouchableOpacity>
           </View>
         </>
       )
     }
     else {
       return(
         <>
           <Text style={styles.title}>Species</Text>
           <View style={[styles.section, {paddingVertical: 10}]}>
             <TouchableOpacity
               title="Species"
               activeOpacity={0.5}
               onPress={() => this.props.navigation.navigate("Species", {onSelect: this.onSelect})}
             >
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <MaterialCommunityIcons
                     name={"minus-circle"}
                     size={20}
                     color='rgb(250, 0, 115)'
                     style={{
                       paddingLeft: 10
                     }}
                   />
                 <Text style={styles.text}>{this.state.species}</Text>
                 </View>
                 <View style={{paddingRight: 10}}>
                   <MaterialCommunityIcons
                     name={"chevron-right"}
                     size={25}
                     color='rgb(250, 0, 115)'
                     style={{
                       justifyContent: 'flex-end'
                     }}
                   />
                 </View>
               </View>
             </TouchableOpacity>
           </View>
         </>
       )
     }
   }
   _renderAttributes = () => {
     return(
       <>
         <Text style={styles.title}>Attributes</Text>
         <View style={styles.section}>
          <View style={styles.attributeRow}>
            <View style={styles.firstAttribute}>
              <Text style={styles.inputTitle}>Strength</Text>
              <AttributePicker
                score={this.state.attributes.strength.score}
                attribute={"strength"}
                setAttributes={this.setAttributes}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Constitution</Text>
              <AttributePicker
                score={this.state.attributes.constitution.score}
                attribute={"constitution"}
                setAttributes={this.setAttributes}
              />
            </View>
          </View>
          <View style={styles.attributeRow}>
            <View style={styles.firstAttribute}>
              <Text style={styles.inputTitle}>Dexterity</Text>
              <AttributePicker
                score={this.state.attributes.dexterity.score}
                attribute={"dexterity"}
                setAttributes={this.setAttributes}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Intelligence</Text>
              <AttributePicker
                score={this.state.attributes.intelligence.score}
                attribute={"intelligence"}
                setAttributes={this.setAttributes}
              />
            </View>
          </View>
          <View style={{flexDirection: "row"}}>
            <View style={styles.firstAttribute}>
              <Text style={styles.inputTitle}>Wisdom</Text>
              <AttributePicker
                score={this.state.attributes.wisdom.score}
                attribute={"wisdom"}
                setAttributes={this.setAttributes}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Influence</Text>
              <AttributePicker
                score={this.state.attributes.influence.score}
                attribute={"influence"}
                setAttributes={this.setAttributes}
              />
            </View>
          </View>
        </View>
       </>
     )
   }
   _renderHealth = () => {
     return(
       <>
        <Text style={styles.title}>Life Points</Text>
            <View style={styles.section}>
                <Text style={styles.inputTitle}>Max Health Points</Text>
                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   defaultValue = {"1"}
                   autoCapitalize = "none"
                   keyboardType="numeric"
                   maxLength={5}
                   onSubmitEditing = {this.handleHealth}
                   multiline = {false}
                />
          </View>
       </>
     )
   }
   //TODO: Add display and interaction for feats.
   _renderFeats = () => {
     return(
       <>
         <Text style={styles.title}>Feats</Text>
         <View style={[styles.section, {paddingVertical: 10}]}>
           <TouchableOpacity
             title="Feats"
             activeOpacity={0.5}
             onPress={() => this.props.navigation.navigate("Feats")}
           >
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <MaterialCommunityIcons
                   name={"plus-circle"}
                   size={20}
                   color='rgb(250, 0, 115)'
                   style={{
                     paddingLeft: 10
                   }}
                 />
               <Text style={styles.text}>Choose Feats</Text>
               </View>
               <View style={{paddingRight: 10}}>
                 <MaterialCommunityIcons
                   name={"chevron-right"}
                   size={25}
                   color='rgb(250, 0, 115)'
                   style={{
                     justifyContent: 'flex-end'
                   }}
                 />
               </View>
             </View>
           </TouchableOpacity>
         </View>
       </>
     )
   }
   render() {
      return (
        <>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.container}>
                {this._renderProfileSection()}
                {this._renderSpeciesSection()}
                {this._renderAttributes()}
                {this._renderHealth()}
                {this._renderFeats()}
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
       );
    }
 }

export default ProfileInputs;

const styles = StyleSheet.create({
  attributeInput: {
    color: "white",
    textAlignVertical: 'top',
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  attributeRow: {
    flexDirection: 'row',
    borderBottomColor: 'rgb(165, 165, 165)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
   width: 250,
   height: 60,
   backgroundColor: '#3740ff',
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 4,
   marginBottom:12
  },
  buttonText: {
   textAlign: 'center',
   fontSize: 15,
   color: '#fff'
 },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "black",
  },
 input: {
   color: "white",
   textAlignVertical: 'top',
   paddingVertical: 0,
   paddingHorizontal: 10,
 },
 inputTitle: {
   color: 'rgb(200, 200, 200)',
   fontSize: 11,
   paddingHorizontal: 10,
   paddingTop: 5,
   justifyContent: 'flex-start'
 },
 firstAttribute: {
   width: Dimensions.get('window').width/2-30
 },
 section: {
   backgroundColor: 'rgb(33, 33, 33)',
   borderColor: 'rgb(165, 165, 165)',
   borderWidth: StyleSheet.hairlineWidth,
   marginBottom: 10,
   justifyContent: 'center'
 },
 title: {
   fontSize: 18,
   color: "white",
   paddingHorizontal: 10,
   paddingBottom: 3,
 },
 text: {
   color: "white",
   paddingHorizontal: 10
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
