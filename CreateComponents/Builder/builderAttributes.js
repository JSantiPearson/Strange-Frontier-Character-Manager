import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//TODO: Button position changes between single and double digits. Make the buttons and number between remain in a fixed position.
function Attribute(props){
  return(
    <View style={styles.row}>
      <TouchableOpacity onPress={() => props.changeAttribute(props.attributeName, false)}>
        <Icon name="minus-circle" style={{paddingRight: 15}} size={22} color='rgb(250, 50, 220)' />
      </TouchableOpacity>
      <Text style={styles.text}>{props.attributeValue}</Text>
      <TouchableOpacity onPress={() => props.changeAttribute(props.attributeName, true)}>
        <Icon name="plus-circle" style={{paddingLeft: 15}} size={22} color='rgb(250, 50, 220)' />
      </TouchableOpacity>
    </View>
  );
}

class BuilderAttributes extends Component {
  state = {
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
    }
  }

  componentDidMount(){
    this.props.navigation.setOptions({
      headerRight: props => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Character Builder', {
            navigation: this.props.navigation,
            skillsAvail: true,
            attributes: this.state.attributes,
          })}
          title="Accept"
          color='rgb(250, 50, 220)'
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
              skillsAvail: true,
              attributes: this.state.attributes,
            })}
            title="Accept"
            color='rgb(250, 50, 220)'
          >
            <Text style={styles.headerButton}>Accept</Text>
          </TouchableOpacity>
        )
      })
    }
  }

  /**
  * Increment or decrement an attribute and change the state to reflext this change
  **/
  changeAttribute = (attr, increase) => {
    var attributes = this.state.attributes;
    if (increase){
      attributes[attr].score++;
    }
    else {
      attributes[attr].score--;
    }
    var mod = this.calculateBonus(attributes[attr].score);
    attributes[attr].mod = mod;
    this.setState({ attributes });
  }

  /**
  * Calculates the bonus from a attribute score.
  * TODO: Add visual for attribute bonus
  **/
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }

  _renderMod = (name, attr) => {
    const mod = attr.mod;
    return(
      <Text style={styles.text}>
        <Text>{name}: </Text>
        {mod > 0 &&
          <Text>(+</Text>
        }
        {mod <= 0 &&
          <Text>(</Text>
        }
        <Text>{mod})</Text>
      </Text>
    )
  }

  render() {
     return (
       <>
       <View style={styles.container}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Icon name="shield-account" style={{paddingLeft: 10}} size={20} color='rgb(250, 50, 220)' />
              <Text style={[styles.text, {paddingLeft: 20, }]}>Determine Attribute Scores</Text>
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Strength", this.state.attributes.strength)}
              <Attribute attributeName={"strength"} attributeValue={this.state.attributes.strength.score} changeAttribute={this.changeAttribute} />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Dexterity", this.state.attributes.dexterity)}
              <Attribute attributeName={"dexterity"} attributeValue={this.state.attributes.dexterity.score} changeAttribute={this.changeAttribute} />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Constitution", this.state.attributes.constitution)}
              <Attribute attributeName={"constitution"} attributeValue={this.state.attributes.constitution.score} changeAttribute={this.changeAttribute} />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Wisdom", this.state.attributes.wisdom)}
              <Attribute attributeName={"wisdom"} attributeValue={this.state.attributes.wisdom.score} changeAttribute={this.changeAttribute} />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Intelligence", this.state.attributes.intelligence)}
              <Attribute attributeName={"intelligence"} attributeValue={this.state.attributes.intelligence.score} changeAttribute={this.changeAttribute} />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Influence", this.state.attributes.influence)}
              <Attribute attributeName={"influence"} attributeValue={this.state.attributes.influence.score} changeAttribute={this.changeAttribute} />
            </View>
          </View>
        </View>
       </>
    )
  }
}

export default BuilderAttributes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    backgroundColor: "black",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  attrRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    borderBottomColor: 'rgba(250, 50, 220, 0.5)',
    borderBottomWidth: 1,
    marginLeft: 45,
    paddingLeft: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: "white",
    textAlign: "left",
  },
  headerButton: {
    fontSize: 15,
    paddingHorizontal: 20,
    color: "white",
  },
})
