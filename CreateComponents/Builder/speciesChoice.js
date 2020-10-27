import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Stat(props){
  return(
    <View style={styles.row}>
      <TouchableOpacity onPress={() => props.changeStat(props.statName, false)}>
        <Icon name="minus-circle" style={{paddingRight: 15}} size={22} color='rgb(230, 59, 225)' />
      </TouchableOpacity>
      <Text style={styles.text}>{props.statValue}</Text>
      <TouchableOpacity onPress={() => props.changeStat(props.statName, true)}>
        <Icon name="plus-circle" style={{paddingLeft: 15}} size={22} color='rgb(230, 59, 225)' />
      </TouchableOpacity>
    </View>
  );
}

class SpeciesChoice extends Component {
  state = {
    stats: {
      speed: this.props.route.params.stats.speed,
      resilience: this.props.route.params.stats.resilience,
      awareness: this.props.route.params.stats.awareness,
    }
  }

  /**
  * When the component is mounted, add an option to the screen that will send species name and stats data back to builder Screen
  * when the user hits the header accept button
  **/
  componentDidMount(){
    this.props.navigation.setOptions({
      headerRight: props => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Character Builder', {
            navigation: this.props.navigation,
            attributesAvail: true,
            species: this.props.route.params.species,
            stats: this.state.stats
          })}
          title="Accept"
          color='rgb(230, 59, 225)'
        >
          <Text style={styles.headerButton}>Accept</Text>
        </TouchableOpacity>
      )
    })
  }

  /**
  * Increment or decrement a stat and change the state to reflext this change
  **/
  changeStat = (stat, increase) => {
    var statNum = this.state[stat];
    if (increase){
      statNum++;
      this.setState({[stat]: statNum});
    }
    else {
      statNum--;
      this.setState({[stat]: statNum});
    }
  }
  render() {
     return (
       <>
         <View style={styles.container}>
           <Text style={styles.title}>{this.props.route.params.species} Species Traits</Text>
           <View style={styles.column}>
             <View style={styles.row}>
               <Icon name="shield-account" style={{paddingLeft: 10}} size={20} color='rgb(230, 59, 225)' />
               <Text style={[styles.text, {paddingLeft: 20}]}>Base Combat Stats</Text>
             </View>
             <View style={styles.statRow}>
               <Text style={styles.text}>Speed: </Text>
               <Stat statName={"speed"} statValue={this.state.stats.speed} changeStat={this.changeStat} />
             </View>
             <View style={styles.statRow}>
               <Text style={styles.text}>Resilience: </Text>
               <Stat statName={"resilience"} statValue={this.state.stats.resilience} changeStat={this.changeStat} />
             </View>
             <View style={styles.statRow}>
               <Text style={styles.text}>Awareness: </Text>
               <Stat statName={"awareness"} statValue={this.state.stats.awareness} changeStat={this.changeStat} />
             </View>
           </View>
         </View>
       </>
     )
   }
 }

 export default SpeciesChoice;

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
   headerButton: {
     fontSize: 15,
     paddingHorizontal: 20,
     color: "white",
   },
   statRow: {
     flexDirection: "row",
     justifyContent: "space-between",
     paddingTop: 5,
     borderBottomColor: 'rgb(230, 59, 225)',
     borderBottomWidth: 1,
     marginLeft: 45,
     paddingLeft: 5,
   },
   stat: {
     flex: 1,
   },
   rowItem: {
     flex: 1,
   },
   item: {
     paddingVertical: 5,
   },
   title: {
     fontSize: 24,
     color: "white",
     paddingBottom: 10,
   },
   text: {
     fontSize: 16,
     marginBottom: 5,
     color: "white",
     textAlign: "left",
   },
   stats: {
     flex: 1,
     fontSize: 12,
     paddingTop: 5,
     color: "white",
     fontStyle: "italic",
   },
 });
