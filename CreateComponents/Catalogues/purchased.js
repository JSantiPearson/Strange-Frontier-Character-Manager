import React, { Component } from 'react';
import { View, Button, Dimensions, Modal, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Accordion from 'react-native-collapsible/Accordion';
import NumberInput from '../Utilities/numberInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SECTION = [
  {
    title: "Item Name",
    content: "Description"
  }
];

class Purchased extends Component {
  state = {
    active: [],
    equip: 1,
    delete: 0,
    modalVisible: false,
    modalItem: {
      amount: this.props.amount,
      equipped: this.props.equipped,
      name: this.props.name,
      type: this.props.type,
      price: this.props.price,
      description: this.props.description,
      misc: this.props.misc,
      category: this.props.category,
      range: this.props.range,
      damage: this.props.damage,
      durability: this.props.durability,
      stats: this.props.stats,
      special: this.props.special
    }
  }

  deleteItem = (amount) => {
    this.handleDelete();
    this.setState({ delete: 0 }); //reset amount to be deleted to 0 now that deletion has been confirmed
    this.props.deleteCallback(this.state.modalItem, amount);
  }

  _renderModal = () => {
    let visible;
    if (this.state.modalItem.amount == 1 || this.state.modalItem.equipped){
      return (
        <Modal
           animationType="fade"
           transparent={true}
           visible={this.state.modalVisible}
         >
           <View style={styles.centeredView}>
             <View style={styles.modalView}>
               <Text style={[styles.title, {textAlign: "center", fontSize: 20}]}>Delete</Text>
               <Text style={[styles.title, {textAlign: "center", fontSize: 20, paddingBottom: 15}]}>{this.state.modalItem.name}?</Text>
               <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                 <TouchableOpacity
                   style={styles.confirmButton}
                   onPress={() => this.deleteItem(1)}
                 >
                 <Text style={[styles.text, {textAlign: "center"}]}>Yes</Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                   style={styles.confirmButton}
                   onPress={this.handleDelete}
                 >
                 <Text style={[styles.text, {textAlign: "center"}]}>No</Text>
                 </TouchableOpacity>
               </View>
             </View>
           </View>
         </Modal>
      );
    }
    else {
      return (
        <Modal
           animationType="fade"
           transparent={true}
           visible={this.state.modalVisible}
         >
           <View style={styles.centeredView}>
             <View style={styles.modalView}>
               <Text style={[styles.title, {textAlign: "center", fontSize: 20}]}>Delete</Text>
               <Text style={[styles.title, {textAlign: "center", fontSize: 20, paddingBottom: 15}]}>{this.state.modalItem.name}?</Text>
               <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                 <NumberInput
                   numberName={"delete"}
                   numberValue={this.state.delete}
                   maxValue={this.props.amount}
                   minValue={0}
                   changeNumber={this.changeDelete}
                 />
                 <TouchableOpacity
                   style={[styles.confirmButton, {width: 50}]}
                   onPress={() => this.deleteItem(this.state.delete)}
                 >
                 <Text style={[styles.text, {textAlign: "center"}]}>Delete</Text>
                 </TouchableOpacity>
               </View>
             </View>
           </View>
         </Modal>
      );
    }
  }

  handleDelete = () => {
    var visible = !this.state.modalVisible;
    let item = {
      amount: this.props.amount,
      equipped: this.props.equipped,
      name: this.props.name,
      type: this.props.type,
      price: this.props.price,
      description: this.props.description,
      misc: this.props.misc,
      category: this.props.category,
      range: this.props.range,
      damage: this.props.damage,
      durability: this.props.durability,
      stats: this.props.stats,
      special: this.props.special
    };
    this.setState({ modalItem: item });
    this.setState({ modalVisible: visible });
  }

  _renderHeader = () => {
    return (
      <View style={{flexDirection: "row"}}>
        <View style={{flexDirection: "column", marginRight: 10}}>
          <Text style={[styles.title, styles.font]}>{this.props.name}</Text>
          <Text style={[styles.optionText, { fontSize: 11, fontStyle: "italic", color: "lightgray"} ]}>{this.props.type}, {this.props.category}</Text>
        </View>
        <Text style={[styles.text, {marginRight: 10}]}>x{this.props.amount}</Text>
        <TouchableOpacity
          onPress= {() => this.handleDelete(this.props.name)}
        >
          <Icon name="delete" size={18} color="white" />
        </TouchableOpacity>
    </View>
    )
  }

  getEquipmentAmount = type => {
    let amount = 0;
    let equipment = this.props.route.params[type];
    for (let i = 0; i < equipment.length; i++){ //TODO: This next section is extremely messy and can likely be optimized
      let currItem = equipment[i];
      if (currItem.name === this.props.name){
        amount = currItem.amount;
      }
    }
    return amount;
  }

  handleEquip = () => {
    let active = [];
    this.setState({ active });
    let item = {
      amount: this.props.amount,
      equipped: this.props.equipped,
      name: this.props.name,
      type: this.props.type,
      price: this.props.price,
      description: this.props.description,
      misc: this.props.misc,
      category: this.props.category,
      range: this.props.range,
      damage: this.props.damage,
      durability: this.props.durability,
      stats: this.props.stats,
      special: this.props.special
    };
    let equip = this.state.equip;
    this.props.itemCallback(item, equip);
    this.setState({ item });
    this.setState({ equip: 0});
  }

  changeAmount = (amount, increase) => {
    let equip = this.state.equip;
    if (increase){
      equip++;
    }
    else{
      equip--;
    }
    this.setState({ equip });
  }

  changeDelete = (amount, increase) => {
    let deleteAmount = this.state.delete;
    if (increase){
      deleteAmount++;
      console.log("Change delete amount from " + (deleteAmount-1) + " to " + deleteAmount);
    }
    else{
      deleteAmount--;
      console.log("Change delete amount from " + (deleteAmount+1) + " to " + deleteAmount);
    }
    this.setState({ delete: deleteAmount });
  }

  _renderContent = section => {
    return (
      <View>
        <View style={styles.divider}>
          <Text style={styles.contentText}>
            {this.props.type != undefined &&
              <Text style={[styles.text, {fontStyle: "italic"}]}>{this.props.type}</Text>
            }
            {this.props.type != undefined && this.props.category != undefined &&
              <Text style={[styles.text, {fontStyle: "italic"}]}>, </Text>
            }
            {this.props.category != undefined &&
              <Text style={[styles.text, {fontStyle: "italic"}]}>{this.props.category}</Text>
            }
          </Text>
          {this.props.amount != undefined && this.props.amount != 0 && !this.props.equipped &&
            <Text style={styles.contentText}>Amount in inventory: {this.props.amount}</Text>
          }
          {this.props.equipped &&
            <Text style={styles.contentText}>Equipped</Text>
          }
        </View>
        {this.props.description != undefined &&
          <View style={styles.divider}>
            <Text style={styles.contentText}>{this.props.description}</Text>
          </View>
        }
        {this.props.misc != null &&
          <Text style={styles.contentText}>{this.props.misc}</Text>
        }
        {this.props.category != null &&
          <Text style={styles.contentText}>
            <Text style={styles.statText}>Category: </Text>
            <Text>{this.props.category}</Text>
          </Text>
        }
        {this.props.range != null &&
          <Text style={styles.contentText}>
            <Text style={styles.statText}>Range: </Text>
            <Text style={styles.text}>{this.props.range} sq.</Text>
          </Text>
        }
        {this.props.damage != null &&
          <Text style={styles.contentText}>
            <Text style={styles.statText}>Damage: </Text>
            <Text style={styles.text}>{this.props.damage}</Text>
          </Text>
        }
        {this.props.durability != null &&
          <Text style={styles.contentText}>
            <Text style={styles.statText}>Durability: </Text>
            <Text style={styles.text}>{this.props.durability}</Text>
          </Text>
        }
        {this.props.stats.armor != 0 &&
          <Text style={styles.statText}>{this.props.stats.armor} Armor</Text>
        }
        {this.props.stats.resilience != 0 &&
          <Text style={styles.statText}>{this.props.stats.resilience} Resilience</Text>
        }
        {this.props.stats.speed != 0 &&
          <Text style={styles.statText}>{this.props.stats.speed} Speed</Text>
        }
        {this.props.stats.awareness != 0 &&
          <Text style={styles.statText}>{this.props.stats.awareness} Awareness</Text>
        }
        {this.props.amount <= 1 && this.props.equipped === false &&
          <View style={styles.row}>
            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
              <TouchableOpacity
                style={styles.catalogueButton}
                onPress={this.handleEquip}
              >
                <Text style={[styles.text, {textAlign: "center"}]}>Equip</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        {this.props.amount <= 1 && this.props.equipped === true &&
          <View style={styles.row}>
            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
              <TouchableOpacity
                style={styles.catalogueButton}
                onPress={this.handleEquip}
              >
                <Text style={[styles.text, {textAlign: "center"}]}>Unequip</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        {this.props.amount > 1 && this.props.equipped === false &&
          <View style={styles.row}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Text style={[styles.text, {paddingTop: 2, marginBottom: 4}]}>Amount to equip:</Text>
              <NumberInput
                numberName={"equip"}
                numberValue={this.state.equip}
                maxValue={this.props.amount}
                minValue={0}
                changeNumber={this.changeAmount}
              />
            </View>
            <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
              <TouchableOpacity
                style={styles.catalogueButton}
                onPress={this.handleEquip}
              >
              <Text style={[styles.text, {textAlign: "center"}]}>Equip</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    );
  };

  _updateSections = active => {
    this.setState({ active });
  };

  render() {
    return (
      <>
        <Accordion
          key={this.props.name}
          sections={SECTION}
          activeSections={this.state.active}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          underlayColor={Colors.LIGHTGRAY}
        />
        {this._renderModal()}
      </>
    )
  }
}

export default Purchased;

const styles = StyleSheet.create({
    title: {
      fontSize: 14,
      fontWeight:'bold',
      color: "white",
    },
    text: {
      color: "white",
    },
    statText: {
      fontWeight: "bold",
      color: "white",
      paddingHorizontal: 10,
    },
    divider: {
      borderBottomColor: 'rgba(250, 0, 115, 0.6)',
      borderBottomWidth: 1,
      paddingVertical: 4,
    },
    row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingVertical: 10,
    },
    catalogueButton: {
      paddingHorizontal: 10,
      borderRadius: 3,
      justifyContent: 'center',
      backgroundColor: 'rgb(250, 0, 115)',
      marginTop: 5,
      paddingVertical: 5,
    },
    confirmButton: {
      width: 40,
      borderRadius: 3,
      justifyContent: 'center',
      backgroundColor: 'rgb(250, 0, 115)',
      marginTop: 5,
      paddingVertical: 5,
    },
    contentText: {
      color: "white",
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    centeredView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     marginTop: 0
   },
   modalView: {
     height: Dimensions.get('window').height/3,
     width: Dimensions.get('window').width/1.5,
     margin: 20,
     borderColor: 'rgb(250, 0, 115)',
     borderWidth: 1,
     backgroundColor: 'rgba(0,0,0,0.95)',
     borderRadius: 20,
     padding: 25,
     alignContent: "flex-start",
     shadowColor: "#FFF",
     shadowOffset: {
       width: 2,
       height: 2
     },
     shadowOpacity: 1,
     shadowRadius: 3.84,
     elevation: 5
   },
});
