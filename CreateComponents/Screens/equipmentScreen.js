import React, { Component } from 'react';
import { View, Alert, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

class EquipmentScreen extends Component {
  state = {
    rangedEquipment: [],
    meleeEquipment: [],
    armorEquipment: [],
    gearEquipment: [],
    miscEquipment: [],
    equipped: [],
    stats: {
      armor: 0,
      resilience: 0,
      speed: 0,
      awareness: 0,
      special: []
    }
  }

  /**
  * addItem takes an item object, determines its type,
  * then checks if an instance of it already exists in the user's inventory,
  * and then increases its amount or adds a new instance.
  */
  addItem = data => {
    let equipment = [...this.state.miscEquipment];
    switch(data.props.type){
      case "ranged":
        equipment = [...this.state.rangedEquipment];
        break;
      case "melee":
        equipment = [...this.state.meleeEquipment];
        break;
      case "armor":
        equipment = [...this.state.armorEquipment];
        break;
      case "gear":
        equipment = [...this.state.gearEquipment];
        break;
      case "misc":
        equipment = [...this.state.miscEquipment];
        break;
      default:
        try {
          throw new Error("Invalid item type " + data.props.type);
        }
        catch {
          Alert.alert("Invalid item type " + data.props.type);
        }
    }

    let item = {
      key: data.props.name,
      amount: 1,
      equipped: false,
      name: data.props.name,
      type: data.props.type,
      price: data.props.price,
      description: data.props.description,
      misc: data.props.misc,
      category: data.props.category,
      range: data.props.range,
      damage: data.props.damage,
      durability: data.props.durability,
      stats: data.props.stats,
      special: data.props.special
    }

    const exists = equipment.some(i => (i.name === item.name)); //check if instance of item is in inventory. "exists" is a boolean.

    if (!exists){ //if the item does not already exist, push the new item onto the array
      equipment.push(item);
    }
    else { //if the item DOES already exist, find the item in the array and increase its amount by 1.
      for (let i = 0; i < equipment.length; i++){ //TODO: This for loop seems unecessary/redundant with the earlier some() call. See if there's a way to simplify. (There were issues with return last time I tried)
        let currItem = equipment[i];
        if (currItem.name === item.name){//TODO: When creating the template for custom equipment, don't forget to disallow equipment with repeat names
          currItem.amount++;
          equipment[i] = currItem;
        }
      }
    }

    switch(data.props.type){
      case "ranged":
        let rangedEquipment = equipment;
        console.log("Adding " + item.name + " to ranged equipment");
        this.setState({ rangedEquipment });
        break;
      case "melee":
        let meleeEquipment = equipment;
        console.log("Adding " + item.name + " to melee equipment");
        this.setState({ meleeEquipment });
        break;
      case "armor":
        let armorEquipment = equipment;
        console.log("Adding " + item.name + " to armor equipment");
        console.log(item.name + " has a " + item.stats.armor + " in armor.");
        this.setState({ armorEquipment });
        break;
      case "gear":
        let gearEquipment = equipment;
        console.log("Adding " + item.name + " to gear equipment");
        this.setState({ gearEquipment });
        break;
      case "misc":
        let miscEquipment = equipment;
        console.log("Adding " + item.name + " to misc equipment");
        this.setState({ miscEquipment });
        break;
      default:
        try {
          console.log("Should throw an error here"); //TODO: Remove this
          throw new Error("Invalid item type " + data.props.type);
        }
        catch(error) {
          Alert.alert("Invalid item type " + data.props.type);
        }
    }
  }

  //TODO: Eventually replace the checkbox for a component that better
  // handles multiple of one item. Allow user to equip a specific amount of the same item.
  setToggleCheckbox = (item, equipValue) => {
    let equipped = [...this.state.equipped];
    let stats = this.state.stats;
    item.equipped = equipValue; //swap equip status based on checkbox

    if (equipValue){ //item is being equipped
      equipped.push(item);
      stats.armor += item.stats.armor;
      stats.resilience += item.stats.resilience;
      stats.speed += item.stats.speed;
      stats.awareness += item.stats.awareness;
      stats.special.push(item.special);
    }
    else { //item is being unequipped
      for (let i = 0; i < equipped.length; i++){ //TODO: This next section is extremely messy and can likely be optimized
        let currItem = equipped[i];
        if (currItem.name === item.name){
          equipped.splice(i, 1);
          stats.armor -= item.stats.armor;
          stats.resilience -= item.stats.resilience;
          stats.speed -= item.stats.speed;
          stats.awareness -= item.stats.awareness;
          if (currItem.special != null){
            let special = [...this.state.stats.special];
            for (let j = 0; j < special.length; j++){
              if (currItem.special === special[j]){
                special.splice(j, 1);
                stats.special = special;
              }
            }
          }
        }
      }
    }
    this.setState({ equipped });
    this.setState({ stats });
    this.props.statsCallback(stats);
  }

  /**
  * Displays every item that is equipped.
  */
  equippedDisplay = () => {
    let equipped = this.state.equipped;
    return equipped.map((item) => {
      return (
        <View style={styles.row}>
          <Text style={styles.rowItem}>
            <Text>{item.name}</Text>
            {item.amount > 1 &&
              <Text> (x{item.amount})</Text>
            }
          </Text>
        </View>
      )
    })
  }

  /**
  * Repeatedly returns text displays of every item and its amount in the array until none remain
  */
  equipmentList = (equipment) => {
    return equipment.map((item) => {
      return (
        <View style={styles.row}>
          <Text style={styles.rowItem}>
            <Text>{item.name}</Text>
            {item.amount > 1 &&
              <Text> (x{item.amount})</Text>
            }
          </Text>
          <View style={styles.rowItem}>
            <CheckBox
              disabled={false}
              value={item.equipped}
              onValueChange={(equipValue) => this.setToggleCheckbox(item, equipValue)}
            />
          </View>
        </View>
      )
    })
  }

  render() {
     return (
       <>
         <SafeAreaView>
           <ScrollView>
             <View style={styles.sectionDescription}>
               <Button
                 title={'Browse Catalogues'}
                 onPress={() => { this.props.navigation.navigate('Catalogues', { itemCallback: this.addItem })}}
               />
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Equipped:</Text>
               { this.equippedDisplay() }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Ranged Weaponry:</Text>
               { this.equipmentList(this.state.rangedEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Melee Weaponry:</Text>
               { this.equipmentList(this.state.meleeEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Armor and Wearables:</Text>
               { this.equipmentList(this.state.armorEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Gear and Utility:</Text>
               { this.equipmentList(this.state.gearEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Miscellaneous:</Text>
               { this.equipmentList(this.state.miscEquipment) }
             </View>
           </ScrollView>
         </SafeAreaView>
       </>
     )
   }
 }

 export default EquipmentScreen;

 const styles = StyleSheet.create({
   sectionDescription: {
     padding: 10,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color: Colors.dark,
   },
   sectionTitle: {
     fontWeight: "bold",
     paddingVertical: 5
   },
   row: {
     flexDirection: "row"
   },
   rowItem: {
    flex: 1,
    paddingHorizontal: 5,
  },
 });
