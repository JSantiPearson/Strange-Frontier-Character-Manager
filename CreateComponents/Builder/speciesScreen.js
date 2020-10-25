import React, { Component } from 'react';
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/**
* Option is a component that renders a button that will redirect the user to a page
* that goes into detail about the species they have selected, and provides them an option
* to choose that species as their character's.
**/
function Option(props){
  return(
    <TouchableOpacity style={styles.option} onPress={() => props.navigation.navigate('Species Choice', {
        route: props.route,
        navigation: props.navigation,
        species: props.species,
        stats: props.stats
      })}>
      <View style={styles.column}>
        <Text style={styles.species}>{props.species}</Text>
        <Text style={styles.stats}>Speed: {props.stats.speed}     Resilience: {props.stats.resilience}      Awareness: {props.stats.awareness}</Text>
      </View>
    </TouchableOpacity>
  );
}

// constant variables containing objects that describe each species' stats.
const humanStats = {speed: 5, resilience: 5, awareness: 5};
const grubtubStats = {speed: 6, resilience: 4, awareness: 5};
const giantStats = {speed: 3, resilience: 7, awareness: 5};
const vermileStats = {speed: 6, resilience: 5, awareness: 4};
const capraStats = {speed: 5, resilience: 6, awareness: 4};
const ogoloidStats = {speed: 3, resilience: 5, awareness: 7};
const arachnetStats = {speed: 6, resilience: 3, awareness: 6};
const wheepeStats = {speed: 4, resilience: 6, awareness: 5};
const constructStats = {speed: 4, resilience: 6, awareness: 5};
const modhumanStats = {speed: 6, resilience: 6, awareness: 3};
const energybeingStats = {speed: 8, resilience: 3, awareness: 4};
const simianStats = {speed: 5, resilience: 5, awareness: 5};
const orbidenStats = {speed: 6, resilience: 2, awareness: 7};
const customStats = {speed: 5, resilience: 5, awareness: 5};


class Species extends Component {
  render() { //TODO: Find an efficient way to incorporate species feats here.
     return (
       <>
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
           <View style={styles.container}>
             <Text style={styles.title}>Choose a Species</Text>
              <View style={styles.column}>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Human" stats={humanStats} />
               <Option route={this.props.route}  navigation={this.props.navigation} species="Grub Tub" stats={grubtubStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Giant" stats={giantStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Vermile" stats={vermileStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Capra" stats={capraStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Ogoloid" stats={ogoloidStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Arachnet" stats={arachnetStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Wheepe" stats={wheepeStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Construct" stats={constructStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Mod Human" stats={modhumanStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Energy Being" stats={energybeingStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Simian" stats={simianStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Orbiden" stats={orbidenStats}/>
               <Option route={this.props.route}  navigation={this.props.navigation} species="Custom" stats={customStats}/>
             </View>
           </View>
         </ScrollView>
       </SafeAreaView>
       </>
     )
   }
 }

 export default Species;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: "black",
   },
   column: {
     flex: 1,
     justifyContent: "space-evenly",
   },
   option: {
     paddingHorizontal: 10,
     paddingVertical: 5,
     marginBottom: 2,
     borderBottomColor: 'rgb(230, 59, 225)',
     borderBottomWidth: 1,
   },
   title: {
     fontSize: 24,
     color: "white",
   },
   species: {
     flex: 1,
     fontSize: 16,
     paddingTop: 5,
     color: "white",
   },
   stats: {
     flex: 1,
     fontSize: 12,
     paddingTop: 5,
     color: "white",
     fontStyle: "italic",
   },
 });
