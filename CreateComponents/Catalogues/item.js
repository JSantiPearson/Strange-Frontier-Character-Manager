import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Accordion from 'react-native-collapsible/Accordion';
import NumberInput from '../Utilities/numberInput';
import { showMessage, hideMessage }from 'react-native-flash-message';

const SECTION = [
  {
    title: "Item Name",
    content: "Description"
  }
];

class Item extends Component {
  state = {
    active: [],
    item: {
      amount: this.props.amount,
      key: this.props.name,
      equipped: false,
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
    },
    cart: 0,
  }

  componentDidMount(){
    let amount = 0;
    if (this.props.type == "Ranged"){
      amount = this.getEquipmentAmount("ranged");
    }
    else if (this.props.type == "Melee"){
      amount = this.getEquipmentAmount("melee");
    }
    else if (this.props.type == "Armor"){
      amount = this.getEquipmentAmount("armor");
    }
    else if (this.props.type == "Gear"){
      amount = this.getEquipmentAmount("gear");
    }
    else if (this.props.type == "Misc"){
      amount = this.getEquipmentAmount("misc");
    }
    let item = this.state.item;
    item.amount = amount;
    this.setState({ item });
  }

  _renderHeader = () => {
    return (
      <View style={styles.row}>
        <Text style={[styles.title, styles.font]}>{this.props.name}</Text>
        <Text style={styles.text}>${this.props.price}</Text>
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

  addItem = () => {
    let item = this.state.item;
    let active = [];
    var buyMessage = "Purchased " + this.state.cart + " " + item.name + ".";
    item.amount += this.state.cart;
    this.setState({ item });
    this.setState({ active });
    this.setState({ cart: 0});
    showMessage({
      message: buyMessage,
      floating: true,
      style: {backgroundColor: 'rgba(250, 0, 115, 0.9)', color: "white"}
    });

    this.props.itemCallback(item);
  }

  changeAmount = (amount, increase) => {
    let cart = this.state.cart;
    if (increase){
      cart++;
    }
    else{
      cart--;
    }
    this.setState({ cart });
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
          {this.state.item.amount != undefined && this.state.item.amount != 0 &&
            <Text style={styles.contentText}>Amount owned: {this.state.item.amount}</Text>
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
        <View style={styles.row}>
          <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={[styles.text, {paddingTop: 2, marginBottom: 4}]}>Amount to add:</Text>
            <NumberInput
              numberName={"cart"}
              numberValue={this.state.cart}
              changeNumber={this.changeAmount}
            />
          </View>
          <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center"}}>
            <TouchableOpacity
              style={styles.catalogueButton}
              onPress={this.addItem}
            >
            <Text style={[styles.text, {textAlign: "center"}]}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  _updateSections = active => {
    this.setState({ active });
  };

  render() {
    return (
      <Accordion
        key={this.props.name}
        sections={SECTION}
        activeSections={this.state.active}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        underlayColor={Colors.LIGHTGRAY}
      />
    )
  }
}

export default Item;

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
    container:{
      flexDirection: 'column',
      flex: 1
    },
    row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingVertical: 10,
    },
    catalogueButton: {
      width: 50,
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
    purchaseButton:{
      borderWidth:5,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:80,
      height:80,
      backgroundColor:'#fff',
      borderRadius:50,
      alignSelf: 'flex-end',
    }
});
