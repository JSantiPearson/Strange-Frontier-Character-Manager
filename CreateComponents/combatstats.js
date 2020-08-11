import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import equal from 'fast-deep-equal'

class CombatStats extends Component {
  state = {
    baseAttack: 0,
    melee: 0,
    ranged: 0,
    psionic: 0,
    baseDefense: 0,
    dodge: 0,
    block: 0,
    will: 0,
    speed: 0,
    armor: 0,
    awareness: 0,
    resilience: 0
  }

  componentDidMount() {
    this.handleSpeed();
    this.handleResilience();
    this.handleAwareness();
  }
  //if species changes, update corresponding stats.
  //TODO: later on make sure to include changes to equipment or move buffs/debuffs
  componentDidUpdate(prevProps) {
    if(!equal(this.props.species, prevProps.species))
    {
      this.handleSpeed();
      this.handleResilience();
      this.handleAwareness();
    }
  }
  /* Takes species, equipment and move buffs/debuffs into account to determine character speed */
  handleSpeed = () => {
    var species = this.props.species;
    if (species == 'giant' || species == 'ogoloid'){
      this.setState({ speed: 3 }); //TODO: hard coding a value right now... once equipment affects this stat, this will need to change
    }
    else if (species == 'wheepe' || species == 'construct'){
      this.setState({ speed: 4 });
    }
    else if (species == 'human' || species == 'simian' || species == 'gloom' || species == 'capra'){
      this.setState({ speed: 5 });
    }
    else if (species == 'grubtub' || species == 'vermile' || species == 'arachnet' || species == 'modhuman' || species == 'orbiden'){
      this.setState({ speed: 6 });
    }
    else if (species == 'energybeing'){
      this.setState({ speed: 8 });
    }
    else {
      this.setState({ speed: 5 });
    }
  }

  handleResilience = () => {
    var species = this.props.species;
    if (species == 'orbiden'){
      this.setState({ resilience: 2 }); //TODO: hard coding a value right now... once equipment affects this stat, this will need to change
    }
    else if (species == 'energybeing' || species == 'arachnet'){
      this.setState({ resilience: 3 });
    }
    else if (species == 'grubtub'){
      this.setState({ resilience: 4 });
    }
    else if (species == 'human' || species == 'simian' || species == 'gloom' || species == 'vermile' || species == 'ogoloid'){
      this.setState({ resilience: 5 });
    }
    else if (species == 'capra' || species == 'wheepe' || species == 'construct' || species == 'modhuman'){
      this.setState({ resilience: 6 });
    }
    else if (species == 'giant'){
      this.setState({ resilience: 7 });
    }
    else {
      this.setState({ resilience: 5 });
    }
  }

  handleAwareness = () => {
    var species = this.props.species;
    if (species == 'modhuman'){
      this.setState({ awareness: 3 }); //TODO: hard coding a value right now... once equipment affects this stat, this will need to change
    }
    else if (species == 'energybeing' || species == 'vermile' || species == 'capra'){
      this.setState({ awareness: 4 });
    }
    else if (species == 'human' || species == 'simian' || species == 'gloom' || species == 'grubtub' || species == 'giant' || species == 'wheepe' || species == 'construct'){
      this.setState({ awareness: 5 });
    }
    else if (species == 'arachnet'){
      this.setState({ awareness: 6 });
    }
    else if (species == 'ogoloid' || species == 'orbiden'){
      this.setState({ awareness: 7 });
    }
    else {
      this.setState({ awareness: 5 });
    }
  }

  render() {
    console.log(this.props.species);
     return (
       <>
         <SafeAreaView style={styles.container}>
           <ScrollView style={styles.scrollView}>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text>Speed: {this.state.speed}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Armor: {this.state.armor}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text>Awareness: {this.state.awareness}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Resilience: {this.state.resilience}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text>Base Attack: {this.state.baseAttack}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Base Defense: {this.state.baseDefense}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text>Melee Attack: {this.state.melee}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Block: {this.state.block}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text>Ranged Attack: {this.state.ranged}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Dodge: {this.state.dodge}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text>Will Defense: {this.state.will}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Psionic Attack: {this.state.psionic}</Text>
               </View>
             </View>
           </ScrollView>
         </SafeAreaView>
       </>
     )
   }
 }

 export default CombatStats;

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
