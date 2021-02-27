import React, { PureComponent } from 'react';
import { View, Alert, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, SectionList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import Purchased from '../Catalogues/purchased';
import Accordion from 'react-native-collapsible/Accordion';

class Equipment extends PureComponent {
  state = {
    inventory: [
      { //index 0
        key: "Active Equipment",
        title: "Active Equipment",
        data: []
      },
      { //index 1
        key: "Ranged Weaponry",
        title: "Ranged Weaponry",
        data: []
      },
      { //index 2
        key: "Melee Weaponry",
        title: "Melee Weaponry",
        data: []
      },
      { //index 3
        key: "Armor & Equipment",
        title: "Armor & Equipment",
        data: []
      },
      { //index 4
        key: "Gear & Utility",
        title: "Gear & Tools",
        data: []
      },
      { //index 5
        key: "Miscellaneous",
        title: "Miscellaneous",
        data: []
      },
    ],
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
    let equipment = [...this.state.inventory[5].data];
    let equipIndex = 1;
    switch(data.type){
      case "Ranged":
        equipment = [...this.state.inventory[1].data];
        break;
      case "Melee":
        equipIndex = 2;
        equipment = [...this.state.inventory[2].data];
        break;
      case "Armor":
        equipIndex = 3;
        equipment = [...this.state.inventory[3].data];
        break;
      case "Gear":
        equipIndex = 4;
        equipment = [...this.state.inventory[4].data];
        break;
      case "Misc":
        equipIndex = 5;
        equipment = [...this.state.inventory[5].data];
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
      let inventory = [...this.state.inventory];
      //Update the state of the specified category of item.
      inventory[equipIndex].data = equipment;
      this.setState({ inventory });
    }

    /**
    * handleEquip takes the data sent by the Purchased component and either runs equip or unequip depending on the item's state.
    **/
    handleEquip = (data, amount) => {
      let equipment = [...this.state.inventory[5].data];
      let equipIndex = 1;
      switch(data.type){
        case "Ranged":
          equipment = [...this.state.inventory[1].data];
          break;
        case "Melee":
          equipIndex = 2;
          equipment = [...this.state.inventory[2].data];
          break;
        case "Armor":
          equipIndex = 3;
          equipment = [...this.state.inventory[3].data];
          break;
        case "Gear":
          equipIndex = 4;
          equipment = [...this.state.inventory[4].data];
          break;
        case "Misc":
          equipIndex = 5;
          equipment = [...this.state.inventory[5].data];
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
        let equipped = [...this.state.inventory[0].data];
        if (item.equipped){
          this.unequipItem(item, equipIndex, equipped, equipment);
        }
        else {
          this.equipItem(item, amount, equipIndex, equipped, equipment);
        }
    }

    /**
    * unequipItem takes the item to be unequipped, the type of equipment, the equipped items array, and the equipment array the item is stored in.
    * An instance of the item is removed from the equipped array, and if an instance of the item is found in unequipped equipment array its amount is incremented by 1.
    * If no instance is found, a new one is added to the inventory equipment array.
    **/
    unequipItem = (item, equipIndex, equipped, equipment) => { //TODO: Implement item keys to use here instead of names.
      let inventory = [...this.state.inventory];
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
          currItem.amount++;
          currItem.equipped = false;
          equipment.splice(i, 1, currItem);
          inventory[equipIndex].data = equipment;
          inventory[0].data = equipped;
          this.setState({inventory});
          return;
        }
      }
      item.amount = 1;
      item.equipped = false;
      equipment.push(item); //no instance of the item was found, so we add a new one with amount 1.
      inventory[equipIndex].data = equipment;
      inventory[0].data = equipped;
      this.setState({ equipped });
    }

    /**
    * equipItem adds the desired amount of items to the equipped array and reduces the amount owned (but not equipped) by the amount equipped.
    **/
    equipItem = (item, amount, equipIndex, equipped, equipment) => {
      //Add amount of items desired to equipped array
      item.equipped = true;
      for (let i = 0; i < amount; i++){
        equipped.push(item);
      }
      for (let i = 0; i < equipment.length; i++){
        let currItem = equipment[i];
        if (currItem.name === item.name){
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
      let inventory = [...this.state.inventory];
      inventory[equipIndex].data = equipment;
      inventory[0].data = equipped;
      this.setState({ equipped });
    }

    renderItem = ( item ) => {
      return(
        <View style={styles.section}>
          <Purchased
            itemCallback={this.handleEquip}
            amount={item.amount}
            name={item.name}
            equipped={item.equipped}
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
    }

    renderEquipment = () => {
      return(
        <SectionList
          sections={this.state.inventory}
          removeClippedSubviews={false}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.title}>{title}</Text>
          )}
        />
      )
    }

  render() {
     return (
       <>
        <View style={styles.container}>
         <SafeAreaView>
           {this.renderEquipment()}
           <View style={{alignItems: 'center', marginTop: 40}}>
             <TouchableOpacity
               style={styles.catalogueButton}
               onPress={() => { this.props.navigation.navigate('Catalogues', {
                 itemCallback: this.addItem,
                 ranged: this.state.inventory[1].data,
                 melee: this.state.inventory[2].data,
                 armor: this.state.inventory[3].data,
                 gear: this.state.inventory[4].data,
                 misc: this.state.inventory[5].data,
               })}}
             >
              <Text style={styles.buttonText}>BROWSE CATALOGUES</Text>
             </TouchableOpacity>
           </View>
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
     paddingVertical: 17,
   },
   text: {
     color: "white"
   },
   buttonText: {
     color: 'white',
     textAlign: 'center',
     fontWeight: 'bold',
   },
   title: {
     color: "white",
     fontSize: 22,
     marginLeft: 5,
     paddingRight: 10,
     paddingVertical: 7,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: 1,
   },
   section: {
     marginLeft: 20,
     marginRight: 15,
     paddingVertical: 5,
   },
   sectionDescription: {
     paddingVertical: 10,
     fontSize: 18,
     fontWeight: '400',
     textAlign: 'center',
     color:'white',
   },
   sectionTitle: {
     fontSize: 16,
     fontWeight: "bold",
     paddingVertical: 5,
     marginBottom: 10,
     marginRight: 5,
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
