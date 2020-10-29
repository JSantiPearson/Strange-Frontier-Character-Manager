import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import equal from 'fast-deep-equal'

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
  handleChange = (trainLevel, increment) => {
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
      score = (trainLevel+bonus)*10;
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
       <View style={styles.row}>
         <View style={styles.item}>
           <Text>{this.props.name}</Text>
         </View>
         <View style={styles.row}>
           <TouchableOpacity onPress={() => this.handleChange(this.state.trainLevel, false)}>
             <Icon name="minus-circle" style={{paddingRight: 15}} size={22} color='rgb(250, 50, 220)' />
           </TouchableOpacity>
           <Text style={styles.text}>{this.state.trainLevel}</Text>
           <TouchableOpacity onPress={() => this.handleChange(this.state.trainLevel, true)}>
             <Icon name="plus-circle" style={{paddingLeft: 15}} size={22} color='rgb(250, 50, 220)' />
           </TouchableOpacity>
         </View>
         <View style={styles.score}>
          <Text>Score: {this.props.score}</Text>
         </View>
       </View>
     )
   }
}
export default Skill;

const styles = StyleSheet.create({
   row: {
     justifyContent: 'space-between',
     flexDirection: "row"
   },
   item: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
   score: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 40
   }
})
