import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NumberInput from '../Utilities/numberInput';

class SpeciesChoice extends Component {
  state = {
    stats: {
      speed: this.props.route.params.stats.speed,
      resilience: this.props.route.params.stats.resilience,
      awareness: this.props.route.params.stats.awareness,
    }
  }

  goBack(){
    const { navigation, route } = this.props;
    navigation.pop(2);
    route.params.onSelect({ attributesAvail: true });
    route.params.onSelect({ species: this.props.route.params.species });
    route.params.onSelect({ speciesStats: this.state.stats });
  }

  /**
  * When the component is mounted, add an option to the screen that will send species name and stats data back to builder Screen
  * when the user hits the header accept button
  **/
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

  /**
  * Increment or decrement a stat and change the state to reflext this change
  **/
  changeStat = (stat, increase) => {
    var stats = this.state.stats;
    if (increase){
      stats[stat]++;
      this.setState({ stats });
    }
    else {
      stats[stat]--;
      this.setState({ stats });
    }
  }
  render() {
     return (
       <>
       <SafeAreaView>
         <ScrollView>
             <View style={styles.container}>
               <Text style={styles.title}>{this.props.route.params.species} Species Traits</Text>
               <View style={styles.column}>
                 <View style={styles.row}>
                   <MaterialCommunityIcons name="shield-account" style={{paddingLeft: 10}} size={20} color='rgb(250, 0, 115)' />
                   <Text style={[styles.text, {paddingLeft: 20}]}>Base Combat Stats</Text>
                 </View>
                 <View style={styles.statRow}>
                   <Text style={styles.text}>Speed: </Text>
                   <NumberInput
                     numberName={"speed"}
                     numberValue={this.state.stats.speed}
                     changeNumber={this.changeStat}
                     minValue={0}
                   />
                 </View>
                 <View style={styles.statRow}>
                   <Text style={styles.text}>Resilience: </Text>
                   <NumberInput
                     numberName={"resilience"}
                     numberValue={this.state.stats.resilience}
                     changeNumber={this.changeStat}
                     minValue={0}
                   />
                 </View>
                 <View style={[styles.statRow, {marginBottom: 10}]}>
                   <Text style={styles.text}>Awareness: </Text>
                   <NumberInput
                     numberName={"awareness"}
                     numberValue={this.state.stats.awareness}
                     changeNumber={this.changeStat}
                     minValue={0}
                   />
                 </View>
                 {this.props.route.params.traits.map((trait) => {
                   return (
                     <>
                       <Text style={styles.sectionTitle}>{trait.title}</Text>
                       <Text style={styles.text}>{trait.description}</Text>
                     </>
                   );
                 })}
               </View>
             </View>
           </ScrollView>
         </SafeAreaView>
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
   sectionTitle: {
     color: 'rgb(250, 0, 115)',
     fontSize: 19,
     fontFamily: 'CCWildWordsRoman',
     paddingTop: 5,
     paddingBottom: 5,
     marginVertical: 10,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: 1,
     lineHeight: 20,
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
     borderBottomColor: 'rgba(250, 0, 115, 0.5)',
     borderBottomWidth: 1,
     marginLeft: 45,
     paddingLeft: 5,
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
 });
