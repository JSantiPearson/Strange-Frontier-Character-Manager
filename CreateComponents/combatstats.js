import React, { PureComponent } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

class CombatStats extends PureComponent {
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
    resilience: 0,
  }

  componentDidMount() {
    this.handleStats();
  }

  isEquipmentDifferent = (oldStats, newStats) => {
    return (oldStats.armor !== newStats.armor ||
      oldStats.speed !== newStats.speed ||
      oldStats.awareness !== newStats.awareness ||
      oldStats.resilience !== newStats.resilience ||
      oldStats.special.length !== newStats.special.length); /* TODO: This may cause a bug in some edge cases where a new special case is added and a seperate one removed. Fix this later. */
  }

  //if props change, update corresponding stats.
  componentDidUpdate(prevProps) {
    if(prevProps.attributes !== this.props.attributes || prevProps.species !== this.props.species || this.isEquipmentDifferent(prevProps.equipmentStats, this.props.equipmentStats)) //TODO: Seems like a gross solution to the infinite loop solution with statsCallback. Think about simplifying this.
    {
      this.handleStats();
    }
  }

  /* calculates the bonus from a attribute score */
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }

  handleSpeciesStats = (stats, speciesStats) => {
    var dexBonus = this.props.attributes.dexterity.mod;
    var conBonus = this.props.attributes.constitution.mod;
    var wisBonus = this.props.attributes.wisdom.mod;

    stats.speed += speciesStats.speed + dexBonus;
    stats.awareness += speciesStats.awareness + wisBonus;
    stats.resilience += speciesStats.resilience + conBonus;
    return stats;
  }

  handleStats = () => {
    let speciesStats = {
      speed: 5,
      awareness: 5,
      resilience: 5
    }
    if (this.props.speciesStats !== undefined){
      speciesStats = this.props.speciesStats;
    }
    let stats = this.props.equipmentStats;

    console.log("equipment speed: " + stats.speed);

    stats = this.handleSpeciesStats(stats, speciesStats);

    stats = this.handleSpecial(stats); //stats state is set with handleSpecial

    this.setState({ armor: stats.armor });
    this.setState({ speed: stats.speed });
    this.setState({ resilience: stats.resilience });
    this.setState({ awareness: stats.awareness });

    this.handleAttack(stats.speed, stats.awareness); //attack state set with handleAttack
    this.handleDefense(stats.armor, stats.resilience); //defense state set with handleDefense
  }

  handleSpecial = (stats) => {
    let special = stats.special;
    for (let i = 0; i < special.length; i++){
      switch(special[i]) { //switch statement for special cases, such as armor doubling equipment.
        case "double armor":
          stats.armor *= 2;
          break;
        case "double speed":
          stats.speed *= 2;
          break;
        case "speed 150%":
          stats.speed *= 1.5;
          stats.speed = Math.floor(speed);
          break;
        case "pine goggles":
          if (this.props.species == "modhuman"){
            stats.awareness += 4;
          }
          break;
        default:
          break;
      }
    }
    stats = {
      armor: stats.armor,
      resilience: stats.resilience,
      speed: stats.speed,
      awareness: stats.awareness,
      special: stats.special
    }
    return stats;
  }

  handleAttack = (speed, awareness) => {
    var baseAttack = speed + awareness;

    var melee = this.props.saves.fortitude + baseAttack;
    var ranged = this.props.saves.reflex + baseAttack;
    var psionic = this.props.saves.willpower + baseAttack;

    this.setState({ baseAttack });
    this.setState({ melee });
    this.setState({ ranged });
    this.setState({ psionic });
  }

  handleDefense = (armor, resilience) => {
    var baseDefense = armor + resilience;

    var block = this.props.saves.fortitude + baseDefense;
    var dodge = this.props.saves.reflex + baseDefense;
    var will = this.props.saves.willpower + baseDefense;

    this.setState({ baseDefense });
    this.setState({ block });
    this.setState({ dodge });
    this.setState({ will });
  }

  render() {
     return (
       <>
         <SafeAreaView style={styles.container}>
           <ScrollView style={styles.scrollView}>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text style={styles.text}>Speed: {this.state.speed}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.text}>Armor: {this.state.armor}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text style={styles.text}>Awareness: {this.state.awareness}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.text}>Resilience: {this.state.resilience}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text style={styles.text}>Base Attack: {this.state.baseAttack}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.text}>Base Defense: {this.state.baseDefense}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text style={styles.text}>Melee Attack: {this.state.melee}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.text}>Block: {this.state.block}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text style={styles.text}>Ranged Attack: {this.state.ranged}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.text}>Dodge: {this.state.dodge}</Text>
               </View>
             </View>
             <View style={styles.row}>
               <View style={styles.item}>
                 <Text style={styles.text}>Psionic Attack: {this.state.psionic}</Text>
               </View>
               <View style={styles.item}>
                 <Text style={styles.text}>Will Defense: {this.state.will}</Text>
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
      paddingVertical: 20,
    },
    scrollView: {
      marginHorizontal: 5
    },
    row: {
      justifyContent: 'space-evenly',
      flexDirection: "row"
    },
    text: {
      color: "white"
    },
    item: {
     flex: 1,
     borderColor: 'rgb(250, 0, 115)',
     borderBottomWidth: StyleSheet.hairlineWidth,
     marginBottom: 10,
     paddingHorizontal: 10
   },
    score: {
     flex: 1,
     marginBottom: 10,
     paddingHorizontal: 40
    }
 })
