import React, { PureComponent } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

class CombatStats extends PureComponent {
  state = {
    species: "human",
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
    equipmentStats: {
      armor: 0,
      resilience: 0,
      speed: 0,
      awareness: 0,
      special: []
    },
  }

  componentDidMount() {
    if (this.props.species !== undefined){
      let species = this.props.species;
      this.setState({ species });
    }
    this.handleStats();
  }
  //if props change, update corresponding stats.
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.attributes !== this.props.attributes || prevProps.equipmentStats !== this.props.equipmentStats || prevProps.saves !== this.props.saves) //TODO: Seems like a gross solution to the infinite loop solution with statsCallback. Think about simplifying this.
    {
      console.log("Combat stats component updated! Current Equipment armor is " + this.props.equipmentStats.armor);
      this.handleStats();
    }
  }

  /* calculates the bonus from a attribute score */
  calculateBonus = (attr) => {
    var bonus = Math.floor((attr-10)/2);
    return bonus;
  }

  handleEquipmentStats = () => {
    let equipmentStats = this.props.equipmentStats;
    this.setState({ equipmentStats })
    return equipmentStats;
  }

  handleStats = () => {
    let stats = this.props.equipmentStats;
    var armor = stats.armor;
    var resilience = this.handleResilience() + stats.resilience;
    var speed = this.handleSpeed() + stats.speed;
    var awareness = this.handleAwareness() + stats.awareness;

    stats = this.handleSpecial(armor, resilience, speed, awareness); //stats state is set with handleSpecial

    armor = stats.armor;
    resilience = stats.resilience;
    speed = stats.speed;
    awareness = stats.awareness;

    this.handleAttack(speed, awareness); //attack state set with handleAttack
    this.handleDefense(armor, resilience); //defense state set with handleDefense
  }

  handleSpecial = (armor, resilience, speed, awareness) => {
    let special = this.props.equipmentStats.special;
    for (let i = 0; i < special.length; i++){
      switch(special[i]) { //switch statement for special cases, such as armor doubling equipment.
        case "double armor":
          armor *= 2;
          break;
        case "double speed":
          speed *= 2;
          break;
        case "speed 150%":
          speed *= 1.5;
          speed = Math.floor(speed);
          break;
        case "pine goggles":
          if (this.state.species == "modhuman"){
            awareness += 4;
          }
          break;
        default:
          break;
      }
    }
    console.log("Set state of armor to: " + armor);
    this.setState({ armor });
    this.setState({ resilience });
    this.setState({ speed });
    this.setState({ awareness });

    let stats = {
      armor: armor,
      resilience: resilience,
      speed: speed,
      awareness: awareness
    }

    return stats;
  }

  /* Takes species, equipment and move buffs/debuffs into account to determine character speed */
  handleSpeed = () => {
    var species = this.state.species;
    var dexBonus = this.props.attributes.dexterity.mod*10;
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
    return speed;
  }

  handleResilience = () => {
    var species = this.state.species;
    var conBonus = this.props.attributes.constitution.mod*10;
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
    return resilience;
  }

  handleAwareness = () => {
    var species = this.state.species;
    var wisBonus = this.props.attributes.wisdom.mod*10;
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
    return awareness;
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

  render(prevProps) {
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
                 <Text>Psionic Attack: {this.state.psionic}</Text>
               </View>
               <View style={styles.item}>
                 <Text>Will Defense: {this.state.will}</Text>
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
