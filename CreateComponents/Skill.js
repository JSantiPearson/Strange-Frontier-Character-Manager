import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import equal from 'fast-deep-equal';
import NumberInput from './Utilities/numberInput';

class Skill extends Component {
  state = {
    trainLevel: 0 //amount of training in a skill determines score, along with attributes
  }
  /* on mount calculate score based on starter attributes */
  componentDidMount() {
    this.sendScore(this.state.trainLevel);
  }
  /* whenever attributes change recalculate the skill score */
  componentDidUpdate(prevProps) {
    if(!equal(this.props.attr, prevProps.attr))
    {
      this.sendScore(this.state.trainLevel);
    }
  }

  /* umbrella function for training value change */
  handleChange = (skill, increment) => {
    var trainLevel = this.state.trainLevel;
    if (increment){
      trainLevel++;
    }
    else{
      trainLevel--;
    }
    this.setState({ trainLevel });
    this.sendScore(trainLevel);
  }
  /* calculates the bonus from a attribute score */
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }
  /* Determines skill score based on relevant attribute and training */
  handleScore = (trainLevel) => {
    var score = 0; //score is always a multiple of 5
    var bonus = this.calculateBonus(this.props.attr);
    // training should never be below 0
    if (trainLevel < 0){
      console.warn(this.props.name + " is trained below 0!");
    }
    // if training is 0, score is calculated based on whether or not attribute bonus is negative
    else if (trainLevel == 0){
      // if bonus is less <= 0, score penalty is doubled
      if (bonus <= 0){
        score = (bonus * 2)*10;
      }
      // if bonus is > 0, score penalty is halved
      else {
        score = (bonus / 2)*10;
      }
    }
    // if character is trained in a skill, add training to bonus
    else {
      score = (trainLevel + bonus)*10;
    }
    return score;
  }
  /* calculates the score then sends it up the hierarchy */
  sendScore = (trainLevel) => {
    var skill = this.props.skill;
    var score = this.handleScore(trainLevel);
    this.props.scoreCallback(skill, trainLevel, score);
  }

  render() {
     return (
       <View style={styles.skillRow}>
         <View style={styles.item}>
           <Text style={styles.text}>{this.props.name}:   {this.handleScore(this.state.trainLevel)}</Text>
         </View>
         <NumberInput
           numberName={this.props.skill}
           numberValue={this.state.trainLevel}
           changeNumber={this.handleChange}
         />
       </View>
     )
   }
}
export default Skill;

const styles = StyleSheet.create({
   skillRow: {
     paddingTop: 10,
     justifyContent: 'space-between',
     flexDirection: "row",
     borderBottomWidth: 1,
     borderBottomColor: 'rgba(250, 0, 115, 0.5)',
   },
   row: {
     justifyContent: 'space-between',
     flexDirection: "row"
   },
   text: {
     fontSize: 16,
     color: "white",
   }
})
