import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import NumericInput from 'react-native-numeric-input'
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
  handleChange = (trainLvl) => {
     this.setState({ train: trainLvl });
     this.sendScore(trainLvl);
  }
  /* calculates the bonus from a attribute score */
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }
  /* Determines skill score based on relevant attribute and training */
  handleScore = (trainLvl) => {
    var score = 0; //score is always a multiple of 5
    var bonus = this.calculateBonus(this.props.attr);
    // training should never be below 0
    if (trainLvl < 0){
      console.warn(this.props.name + " is trained below 0!");
    }
    // if training is 0, score is calculated based on whether or not attribute bonus is negative
    else if (trainLvl == 0){
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
      score = (trainLvl+bonus)*10;
    }
    return score;
  }
  /* calculates the score then sends it up the hierarchy */
  sendScore = (trainLvl) => {
    var skill = this.props.skill;
    var score = this.handleScore(trainLvl);
    this.props.scoreCallback(skill, trainLvl, score);
  }
  render() {
     return (
       <View style={styles.row}>
         <View style={styles.item}>
           <Text>{this.props.name}</Text>
         </View>
         <View style={styles.item}>
           <NumericInput
             type='plus-minus'
             minValue={0}
             value={this.props.train}
             onChange={trainLvl => this.handleChange(trainLvl)}
           />
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
     justifyContent: 'space-evenly',
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
