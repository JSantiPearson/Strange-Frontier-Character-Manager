import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Skill from './Skill';

class SkillCollection extends Component {
 state = {
   //each skill is an array since objects aren't allowed.
   //index 0 is training level, index 1 is skill score.
   //TODO: pretty sure I don't need index 0, but on removal everything bugs out. Optimize and debug this ASAP.
   athletics: [0, 0],
   acrobatics: [0, 0],
   bluff: [0, 0],
   chemistry: [0, 0],
   climb: [0, 0],
   computer: [0, 0],
   cooking: [0, 0],
   detection: [0, 0],
   endurance: [0, 0],
   knowledgeOne: [0, 0],
   knowledgeTwo: [0, 0],
   knowledgeThree: [0, 0],
   investigation: [0, 0],
   intimidation: [0, 0],
   navigation: [0, 0],
   persuasion: [0, 0],
   pilot: [0, 0],
   stealth: [0, 0],
   sabotage: [0, 0],
   survival: [0, 0]
 }
 /* Sets the relevant skill's score */
 setSkill = (name, trainLvl, score) =>{
   var skill = [trainLvl, score];
   this.setState({ [name]: skill });
 }
 render() {
    return (
      <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Skill
            name="Athletics"
            skill="athletics"
            attr={this.props.strength}
            score={this.state.athletics[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Acrobatics"
            skill="acrobatics"
            attr={this.props.dexterity}
            score={this.state.acrobatics[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Bluff"
            skill="bluff"
            attr={this.props.influence}
            score={this.state.bluff[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Chemistry"
            skill="chemistry"
            attr={this.props.intelligence}
            score={this.state.chemistry[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Climb"
            skill="climb"
            attr={this.props.strength}
            score={this.state.climb[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Computer"
            skill="computer"
            attr={this.props.intelligence}
            score={this.state.computer[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Cooking"
            skill="cooking"
            attr={this.props.wisdom}
            score={this.state.cooking[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Detection"
            skill="detection"
            attr={this.props.wisdom}
            score={this.state.detection[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Endurance"
            skill="endurance"
            attr={this.props.constitution}
            score={this.state.endurance[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Knowledge One"
            skill="knowledgeOne"
            attr={this.props.wisdom}
            score={this.state.knowledgeOne[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Knowledge Two"
            skill="knowledgeTwo"
            attr={this.props.wisdom}
            score={this.state.knowledgeTwo[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Knowledge Three"
            skill="knowledgeThree"
            attr={this.props.wisdom}
            score={this.state.knowledgeThree[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Investigation"
            skill="investigation"
            attr={this.props.intelligence}
            score={this.state.investigation[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Intimidation"
            skill="intimidation"
            attr={this.props.influence}
            score={this.state.intimidation[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Navigation"
            skill="navigation"
            attr={this.props.wisdom}
            score={this.state.navigation[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Persuasion"
            skill="persuasion"
            attr={this.props.influence}
            score={this.state.persuasion[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Pilot"
            skill="pilot"
            attr={this.props.dexterity}
            score={this.state.pilot[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Stealth"
            skill="stealth"
            attr={this.props.dexterity}
            score={this.state.stealth[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Sabotage"
            skill="sabotage"
            attr={this.props.intelligence}
            score={this.state.sabotage[1]}
            scoreCallback={this.setSkill}
          />
          <Skill
            name="Survival"
            skill="survival"
            attr={this.props.intelligence}
            score={this.state.survival[1]}
            scoreCallback={this.setSkill}
          />
        </ScrollView>
      </SafeAreaView>
    </>
    )
  }
}

export default SkillCollection;

const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 10,
     paddingVertical: 20
   },
   scrollView: {
     marginHorizontal: 5
   },
   row: {
     justifyContent: 'space-evenly',
     flexDirection: "row"
   },
   inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
   },
   input: {
      margin: 15,
      height: 40,
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
   },
   TextInputStyle: {
    textAlign: 'left',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10
  }
})
