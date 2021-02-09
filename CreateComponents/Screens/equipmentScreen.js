import React, { Component } from 'react';
import { View, Alert, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import Purchased from '../Catalogues/purchased';
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
            break;
          }
        }
      }
      //Update the state of the specified category of item.
      switch(data.type){
        case "Ranged":
          let rangedEquipment = equipment;
          this.setState({ rangedEquipment });
          break;
        case "Melee":
          let meleeEquipment = equipment;
          this.setState({ meleeEquipment });
          break;
        case "Armor":
          let armorEquipment = equipment;
          this.setState({ armorEquipment });
          break;
        case "Gear":
          let gearEquipment = equipment;
          this.setState({ gearEquipment });
          break;
        case "misc":
          let miscEquipment = equipment;
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

    /**
    * handleEquip takes the data sent by the Purchased component and either runs equip or unequip depending on the item's state.
    **/
    handleEquip = (data, amount) => {
      let equipment = [...this.state.miscEquipment];
      let equipType = "miscEquipment";
      switch(data.type){
        case "Ranged":
          equipment = [...this.state.rangedEquipment];
          equipType = "rangedEquipment";
          break;
        case "Melee":
          equipment = [...this.state.meleeEquipment];
          equipType = "meleeEquipment";
          break;
        case "Armor":
          equipment = [...this.state.armorEquipment];
          equipType = "armorEquipment";
          break;
        case "Gear":
          equipment = [...this.state.gearEquipment];
          equipType = "gearEquipment";
          break;
        case "misc":
          equipment = [...this.state.miscEquipment];
          equipType = "miscEquipment";
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
          amount: data.amount,
          equipped: data.equipped,
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
        let equipped = [...this.state.equipped];
        if (item.equipped){
          this.unequipItem(item, equipType, equipped, equipment);
        }
        else {
          this.equipItem(item, amount, equipType, equipped, equipment);
        }
    }

    /**
    * unequipItem takes the item to be unequipped, the type of equipment, the equipped items array, and the equipment array the item is stored in.
    * An instance of the item is removed from the equipped array, and if an instance of the item is found in unequipped equipment array its amount is incremented by 1.
    * If no instance is found, a new one is added to the inventory equipment array.
    **/
    unequipItem = (item, equipType, equipped, equipment) => { //TODO: Implement item keys to use here instead of names.
      for (let i = 0; i < equipped.length; i++){
        let currItem = equipped[i];
        if (item.name === currItem.name){
          equipped.splice(i, 1); //if an instance of the item is found, remove it from the equipped array.
          break;
        }
      }
      for (let i = 0; i < equipment.length; i++){
        let currItem = equipment[i];
        if (item.name === currItem.name){ //if an instance of the item is found then increment its amount by one, set the state, and return.
          ++currItem.amount;
          equipment.splice(i, 1, currItem);
          this.setState({[equipType]: equipment});
          this.setState({ equipped });
          return;
        }
      }
      item.amount = 1;
      equipment.push(item); //no instance of the item was found, so we add a new one with amount 1.
      this.setState({[equipType]: equipment});
      this.setState({ equipped });
    }

    /**
    * equipItem adds the desired amount of items to the equipped array and reduces the amount owned (but not equipped) by the amount equipped.
    **/
    equipItem = (item, amount, equipType, equipped, equipment) => {
      //Add amount of items desired to equipped array
      for (let i = 0; i < amount; i++){
        equipped.push(item);
      }
      for (let i = 0; i < equipment.length; i++){
        let currItem = equipment[i];
        if (currItem.name === item.name){   //TODO: Implement unique keys for each item added. Using names could get messy with custom items.
          currItem.amount -= amount;
          if (currItem.amount === 0){
            equipment.splice(i, 1);
            break;
          }
          else {
            equipment.splice(i, 1, currItem);
            break;
          }
        }
      }
      this.setState({[equipType]: equipment});
      this.setState({ equipped });
    }

    /**
    * Displays every item that is equipped.
    */
    equippedDisplay = () => {
      let equipped = this.state.equipped;
      return equipped.map((item) => {
        return (
          <View style={{marginBottom: 5}}>
            <Purchased
              itemCallback={this.handleEquip}
              amount={item.amount}
              equipped={true}
              name={item.name}
              type={item.type}
              price={item.price}
              description={item.description}
              misc={item.misc}
              category={item.category}
              range={item.range}
              damage={item.damage}
              durability={item.durability}
              stats={item.stats}
              special={item.special}
            />
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
          <View style={{marginVertical: 10}}>
            <Purchased
              itemCallback={this.handleEquip}
              amount={item.amount}
              equipped={false}
              name={item.name}
              type={item.type}
              price={item.price}
              description={item.description}
              misc={item.misc}
              category={item.category}
              range={item.range}
              damage={item.damage}
              durability={item.durability}
              stats={item.stats}
              special={item.special}
            />
          </View>
        )
      })
    }

  render() {
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
               <Text style={styles.sectionTitle}>Ranged Weaponry</Text>
               { this.equipmentList(this.state.rangedEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Melee Weaponry</Text>
               { this.equipmentList(this.state.meleeEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Armor and Wearables</Text>
               { this.equipmentList(this.state.armorEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Gear and Utility</Text>
               { this.equipmentList(this.state.gearEquipment) }
             </View>
             <View style={styles.sectionDescription}>
               <Text style={styles.sectionTitle}>Miscellaneous</Text>
               { this.equipmentList(this.state.miscEquipment) }
             </View>
             <View style={{alignItems: 'center', marginTop: 40}}>
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
     marginBottom: 10,
     color: 'white',
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: StyleSheet.hairlineWidth,
   },
   row: {
     flexDirection: "row"
   },
   rowItem: {
    flex: 1,
    paddingHorizontal: 5,
  },
 });
