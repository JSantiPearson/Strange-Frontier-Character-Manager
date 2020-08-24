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
    this.handleAttack();
    this.handleDefense();
  }
  //if species changes, update corresponding stats.
  //TODO: later on make sure to include changes to equipment or move buffs/debuffs
  componentDidUpdate(prevProps) {
    if(!equal(this.props, prevProps))
    {
      this.handleSpeed();
      this.handleResilience();
      this.handleAwareness();
      this.handleAttack();
      this.handleDefense();
    }
  }
  /* calculates the bonus from a attribute score */
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }
  /* Takes species, equipment and move buffs/debuffs into account to determine character speed */
  handleSpeed = () => {
    var species = this.props.species;
    var dexBonus = this.calculateBonus(this.props.dexterity);
    var speed = 0;
    if (species == 'giant' || species == 'ogoloid'){
      speed = 3;
    }
    else if (species == 'wheepe' || species == 'construct'){
      speed = 4;
    }
    else if (species == 'human' || species == 'simian' || species == 'gloom' || species == 'capra'){
      speed = 5;
    }
    else if (species == 'grubtub' || species == 'vermile' || species == 'arachnet' || species == 'modhuman' || species == 'orbiden'){
      speed = 6;
    }
    else if (species == 'energybeing'){
      speed = 8;
    }
    else {
      speed = 5;
    }
    speed += dexBonus;
    this.setState({ speed });
  }

  handleResilience = () => {
    var species = this.props.species;
    var conBonus = this.calculateBonus(this.props.constitution);
    var resilience = 0;
    if (species == 'orbiden'){
      resilience = 2;
    }
    else if (species == 'energybeing' || species == 'arachnet'){
      resilience = 3;
    }
    else if (species == 'grubtub'){
      resilience = 4;
    }
    else if (species == 'human' || species == 'simian' || species == 'gloom' || species == 'vermile' || species == 'ogoloid'){
      resilience = 5;
    }
    else if (species == 'capra' || species == 'wheepe' || species == 'construct' || species == 'modhuman'){
      resilience = 6;
    }
    else if (species == 'giant'){
      resilience = 7;
    }
    else {
      resilience = 5;
    }
    resilience += conBonus;
    this.setState({ resilience });
  }

  handleAwareness = () => {
    var species = this.props.species;
    var wisBonus = this.calculateBonus(this.props.wisdom);
    var awareness = 0;
    if (species == 'modhuman'){
      awareness = 3;
    }
    else if (species == 'energybeing' || species == 'vermile' || species == 'capra'){
      awareness = 4;
    }
    else if (species == 'human' || species == 'simian' || species == 'gloom' || species == 'grubtub' || species == 'giant' || species == 'wheepe' || species == 'construct'){
      awareness = 5;
    }
    else if (species == 'arachnet'){
      awareness = 6;
    }
    else if (species == 'ogoloid' || species == 'orbiden'){
      awareness = 7;
    }
    else {
      awareness = 5;
    }
    awareness += wisBonus;
    this.setState({ awareness });
  }

  handleAttack = () => {
    var baseAttack = this.state.speed + this.state.awareness;

    var strBonus = this.calculateBonus(this.props.strength);
    var dexBonus = this.calculateBonus(this.props.dexterity);
    var conBonus = this.calculateBonus(this.props.constitution);
    var wisBonus = this.calculateBonus(this.props.wisdom);
    var intBonus = this.calculateBonus(this.props.intelligence);
    var infBonus = this.calculateBonus(this.props.influence);

    var melee = ((strBonus + conBonus)/2)*10 + baseAttack;
    var ranged = ((dexBonus + intBonus)/2)*10 + baseAttack;
    var psionic = ((wisBonus + infBonus)/2)*10 + baseAttack;

    this.setState({ baseAttack });
    this.setState({ melee });
    this.setState({ ranged });
    this.setState({ psionic });
  }

  handleDefense = () => {
    var baseDefense = this.state.armor + this.state.resilience;

    var strBonus = this.calculateBonus(this.props.strength);
    var dexBonus = this.calculateBonus(this.props.dexterity);
    var conBonus = this.calculateBonus(this.props.constitution);
    var wisBonus = this.calculateBonus(this.props.wisdom);
    var intBonus = this.calculateBonus(this.props.intelligence);
    var infBonus = this.calculateBonus(this.props.influence);

    var block = ((strBonus + conBonus)/2)*10 + baseDefense;
    var dodge = ((dexBonus + intBonus)/2)*10 + baseDefense;
    var will = ((wisBonus + infBonus)/2)*10 + baseDefense;

    this.setState({ baseDefense });
    this.setState({ block });
    this.setState({ dodge });
    this.setState({ will });
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
