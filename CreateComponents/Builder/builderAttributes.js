import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import Slider from '@react-native-community/slider'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NumberInput from '../Utilities/numberInput';

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

  goBack(){
    const { navigation, route } = this.props;
    navigation.goBack();
    route.params.onSelect({ skillsAvail: true });
    route.params.onSelect({ attributes: this.state.attributes});
  }

  componentDidMount(){
    this.props.navigation.setOptions({
      headerRight: props => (
        <TouchableOpacity
          onPress={() => this.goBack()}
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
      let navigation = this.props.route.params.navigation;
      this.props.navigation.setOptions({
        headerRight: props => (
          <TouchableOpacity
            onPress={() => this.goBack()}
            title="Accept"
            color='rgb(250, 0, 115)'
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
              <MaterialCommunityIcons name="shield-account" style={{paddingLeft: 10}} size={20} color='rgb(250, 0, 115)' />
              <Text style={[styles.text, {paddingLeft: 20, }]}>Determine Attribute Scores</Text>
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Strength", this.state.attributes.strength)}
              <NumberInput
                numberName={"strength"}
                numberValue={this.state.attributes.strength.score}
                changeNumber={this.changeAttribute}
                minValue={1}
              />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Dexterity", this.state.attributes.dexterity)}
              <NumberInput
                numberName={"dexterity"}
                numberValue={this.state.attributes.dexterity.score}
                changeNumber={this.changeAttribute}
                minValue={1}
              />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Constitution", this.state.attributes.constitution)}
              <NumberInput
                numberName={"constitution"}
                numberValue={this.state.attributes.constitution.score}
                changeNumber={this.changeAttribute}
                minValue={1}
              />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Wisdom", this.state.attributes.wisdom)}
              <NumberInput
                numberName={"wisdom"}
                numberValue={this.state.attributes.wisdom.score}
                changeNumber={this.changeAttribute}
                minValue={1}
              />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Intelligence", this.state.attributes.intelligence)}
              <NumberInput
                numberName={"intelligence"}
                numberValue={this.state.attributes.intelligence.score}
                changeNumber={this.changeAttribute}
                minValue={1}
              />
            </View>
            <View style={styles.attrRow}>
              {this._renderMod("Influence", this.state.attributes.influence)}
              <NumberInput
                numberName={"influence"}
                numberValue={this.state.attributes.influence.score}
                changeNumber={this.changeAttribute}
                minValue={1}
              />
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
    borderBottomColor: 'rgba(250, 0, 115, 0.5)',
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
