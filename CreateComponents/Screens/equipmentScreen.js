import React, { Component } from 'react';
import { View, Alert, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import Accordion from 'react-native-collapsible/Accordion';

class Equipment extends Component {
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
    switch(data.type){
      case "Ranged":
        equipment = [...this.state.rangedEquipment];
        break;
      case "Melee":
        equipment = [...this.state.meleeEquipment];
        break;
      case "Armor":
        equipment = [...this.state.armorEquipment];
        break;
      case "Gear":
        equipment = [...this.state.gearEquipment];
        break;
      case "misc":
        equipment = [...this.state.miscEquipment];
        break;
      default:
        try {
          throw new Error("Invalid item type " + data.type);
        }
        catch {
          Alert.alert("Invalid item type " + data.type);
        }
    }

    let item = {
      key: data.name,
      amount: data.amount,
      equipped: false,
      name: data.name,
      type: data.type,
      price: data.price,
      description: data.description,
      misc: data.misc,
      category: data.category,
      range: data.range,
      damage: data.damage,
      durability: data.durability,
      stats: data.stats,
      special: data.special
    }

    const exists = equipment.some(i => (i.name === item.name)); //check if instance of item is in inventory. "exists" is a boolean.

    if (!exists){ //if the item does not already exist, push the new item onto the array
      equipment.push(item);
    }
    else { //if the item DOES already exist, find the item in the array and replace its old amount with the new amount.
      for (let i = 0; i < equipment.length; i++){ //TODO: This for loop seems unecessary/redundant with the earlier some() call. See if there's a way to simplify. (There were issues with return last time I tried)
        let currItem = equipment[i];
        if (currItem.name === item.name){//TODO: When creating the template for custom equipment, don't forget to disallow equipment with repeat names
          currItem.amount = item.amount;
          equipment[i] = currItem;
        }
      }
    }

    switch(data.type){
      case "Ranged":
        let rangedEquipment = equipment;
        console.log("Adding " + item.name + " (x" + item.amount + ") to ranged equipment");
        this.setState({ rangedEquipment });
        break;
      case "Melee":
        let meleeEquipment = equipment;
        console.log("Adding " + item.name + " to melee equipment");
        this.setState({ meleeEquipment });
        break;
      case "Armor":
        let armorEquipment = equipment;
        console.log("Adding " + item.name + " to armor equipment");
        console.log(item.name + " has a " + item.stats.armor + " in armor.");
        this.setState({ armorEquipment });
        break;
      case "Gear":
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
          throw new Error("Invalid item type " + data.type);
        }
        catch(error) {
          Alert.alert("Invalid item type " + data.type);
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
            <Text style={styles.text}>{item.name}</Text>
            {item.amount > 1 &&
              <Text style={styles.text}> (x{item.amount})</Text>
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
            <Text style={styles.text}>{item.name}</Text>
            {item.amount > 1 &&
              <Text style={styles.text}> (x{item.amount})</Text>
            }
          </Text>
          <View style={[styles.rowItem, {color: "white"}]}>
            <CheckBox
              disabled={false}
              tintColors={{false: 'white', true: 'rgb(250, 0, 115)'}}
              value={item.equipped}
              onValueChange={(equipValue) => this.setToggleCheckbox(item, equipValue)}
            />
          </View>
        </View>
      )
    })
  }

  render() {
    console.log("Ranged equipment array length: " + this.state.rangedEquipment.length);
     return (
       <>
        <View style={styles.container}>
         <SafeAreaView>
           <ScrollView>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Active Equipment</Text>
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
             <View style={{alignItems: 'center'}}>
               <TouchableOpacity
                 style={styles.catalogueButton}
                 onPress={() => { this.props.navigation.navigate('Catalogues', {
                   itemCallback: this.addItem,
                   ranged: this.state.rangedEquipment,
                   melee: this.state.meleeEquipment,
                   armor: this.state.armorEquipment,
                   gear: this.state.gearEquipment,
                   misc: this.state.miscEquipment,
                 })}}
               >
                <Text style={styles.buttonText}>BROWSE CATALOGUES</Text>
               </TouchableOpacity>
             </View>
           </ScrollView>
         </SafeAreaView>
        </View>
       </>
     )
   }
 }

 export default Equipment;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: 'black',
   },
   headerButton: {
     fontSize: 15,
     paddingHorizontal: 20,
     color: "white",
   },
   catalogueButton: {
     flex: 1,
     width: 170,
     justifyContent: 'center',
     backgroundColor: 'rgb(250, 0, 115)',
     marginTop: 5,
     paddingVertical: 5,
   },
   text: {
     color: "white"
   },
   buttonText: {
     color: 'white',
     textAlign: 'center',
     fontWeight: 'bold',
   },
   sectionDescription: {
     padding: 10,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color:'white',
   },
   sectionTitle: {
     fontWeight: "bold",
     paddingVertical: 5,
     color: 'white',
   },
   row: {
     flexDirection: "row"
   },
   rowItem: {
    flex: 1,
    paddingHorizontal: 5,
  },
 });
