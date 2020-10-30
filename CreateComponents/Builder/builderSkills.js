import React, { Component } from 'react'
import { View, Button, Text, SafeAreaView, ScrollView, Picker, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Skill from '../Skill';

class BuilderSkills extends Component { //TODO: Introduce a way to tell the player how many available skill points they have at any given level.
 state = {
   //each skill is an array since objects aren't allowed.
   //index 0 is training level, index 1 is skill score.
   //TODO: pretty sure I don't need index 0, but on removal everything bugs out. Optimize and debug this ASAP.
   skills: {
     athletics: {
       score: 0,
       training: 0
     },
     acrobatics: {
       score: 0,
       training: 0
     },
     bluff: {
       score: 0,
       training: 0
     },
     chemistry: {
       score: 0,
       training: 0
     },
     climb: {
       score: 0,
       training: 0
     },
     computer: {
       score: 0,
       training: 0
     },
     cooking: {
       score: 0,
       training: 0
     },
     detection: {
       score: 0,
       training: 0
     },
     endurance: {
       score: 0,
       training: 0
     },
     knowledgeOne: {
       score: 0,
       training: 0
     },
     knowledgeTwo: {
       score: 0,
       training: 0
     },
     knowledgeThree: {
       score: 0,
       training: 0
     },
     investigation: {
       score: 0,
       training: 0
     },
     intimidation: {
       score: 0,
       training: 0
     },
     navigation: {
       score: 0,
       training: 0
     },
     persuasion: {
       score: 0,
       training: 0
     },
     pilot: {
       score: 0,
       training: 0
     },
     stealth: {
       score: 0,
      training: 0
     },
     sabotage: {
       score: 0,
       training: 0
     },
     survival: {
      score: 0,
      training: 0
    }
   }
 }

 /* Sets the relevant skill's score */
 setSkill = (name, trainLvl, score) =>{
   var skill = [trainLvl, score];
   this.setState({ [name]: skill });
 }

 componentDidMount(){
   this.props.navigation.setOptions({
      headerRight: props => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Character Builder', {
            navigation: this.props.navigation,
            featsAvail: true,
            skills: this.state,
          })}
          title="Accept"
          color='rgb(250, 0, 115)'
        >
          <Text style={styles.headerButton}>Accept</Text>
        </TouchableOpacity>
      )
    })
  }

 componentDidUpdate(prevState){
  if (prevState != this.state){
    this.props.navigation.setOptions({
      headerRight: props => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Character Builder', {
            navigation: this.props.navigation,
            featsAvail: true,
            skills: this.state,
          })}
          title="Accept"
          color='rgb(250, 0, 115)'
        >
          <Text style={styles.headerButton}>Accept</Text>
        </TouchableOpacity>
      )
    })
  }
}

 render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Skill
                name="Athletics"
                skill="athletics"
                attr={this.props.route.params.attributes.strength.score}
                score={this.state.skills.athletics.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Acrobatics"
                skill="acrobatics"
                attr={this.props.route.params.attributes.dexterity.score}
                score={this.state.skills.acrobatics.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Bluff"
                skill="bluff"
                attr={this.props.route.params.attributes.influence.score}
                score={this.state.skills.bluff.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Chemistry"
                skill="chemistry"
                attr={this.props.route.params.attributes.intelligence.score}
                score={this.state.skills.chemistry.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Climb"
                skill="climb"
                attr={this.props.route.params.attributes.strength.score}
                score={this.state.skills.climb.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Computer"
                skill="computer"
                attr={this.props.route.params.attributes.intelligence.score}
                score={this.state.skills.computer.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Cooking"
                skill="cooking"
                attr={this.props.route.params.attributes.wisdom.score}
                score={this.state.skills.cooking.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Detection"
                skill="detection"
                attr={this.props.route.params.attributes.wisdom.score}
                score={this.state.skills.detection.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Endurance"
                skill="endurance"
                attr={this.props.route.params.attributes.constitution.score}
                score={this.state.skills.endurance.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Knowledge One"
                skill="knowledgeOne"
                attr={this.props.route.params.attributes.wisdom.score}
                score={this.state.skills.knowledgeOne.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Knowledge Two"
                skill="knowledgeTwo"
                attr={this.props.route.params.attributes.wisdom.score}
                score={this.state.skills.knowledgeTwo.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Knowledge Three"
                skill="knowledgeThree"
                attr={this.props.route.params.attributes.wisdom.score}
                score={this.state.skills.knowledgeThree.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Investigation"
                skill="investigation"
                attr={this.props.route.params.attributes.intelligence.score}
                score={this.state.skills.investigation.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Intimidation"
                skill="intimidation"
                attr={this.props.route.params.attributes.influence.score}
                score={this.state.skills.intimidation.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Navigation"
                skill="navigation"
                attr={this.props.route.params.attributes.wisdom.score}
                score={this.state.skills.navigation.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Persuasion"
                skill="persuasion"
                attr={this.props.route.params.attributes.influence.score}
                score={this.state.skills.persuasion.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Pilot"
                skill="pilot"
                attr={this.props.route.params.attributes.dexterity.score}
                score={this.state.skills.pilot.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Stealth"
                skill="stealth"
                attr={this.props.route.params.attributes.dexterity.score}
                score={this.state.skills.stealth.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Sabotage"
                skill="sabotage"
                attr={this.props.route.params.attributes.intelligence.score}
                score={this.state.skills.sabotage.score}
                scoreCallback={this.setSkill}
              />
              <Skill
                name="Survival"
                skill="survival"
                attr={this.props.route.params.attributes.intelligence.score}
                score={this.state.skills.survival.score}
                scoreCallback={this.setSkill}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default BuilderSkills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: "black",
  },
  headerButton: {
  fontSize: 15,
  paddingHorizontal: 20,
  color: "white",
},
});
