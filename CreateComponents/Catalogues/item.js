import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/MaterialIcons";
import Accordion from 'react-native-collapsible/Accordion';

const SECTION = [
  {
    title: "Item Name",
    content: "Description"
  }
];

class Item extends Component {
  state = {
    active: []
  }

  _renderHeader = () => {
    return (
      <View style={styles.row}>
        <Text style={[styles.title, styles.font]}>{this.props.name}</Text>
        <Text>${this.props.price}</Text>
      </View>
    )
  }

  addItem = () => {
    let item = this;
    this.props.itemCallback(item);
  }

  _renderContent = () => {
    return (
      <View style={styles.child}>
        <Text>{this.props.description}</Text>
        {this.props.misc != null &&
          <Text>{this.props.misc}</Text>
        }
        {this.props.category != null &&
          <Text>
            <Text style={{fontWeight: "bold"}}>Category: </Text>
            <Text>{this.props.category}</Text>
          </Text>
        }
        {this.props.range != null &&
          <Text>
            <Text style={{fontWeight: "bold"}}>Range: </Text>
            <Text>{this.props.range} sq.</Text>
          </Text>
        }
        {this.props.damage != null &&
          <Text>
            <Text style={{fontWeight: "bold"}}>Damage: </Text>
            <Text>{this.props.damage}</Text>
          </Text>
        }
        {this.props.durability != null &&
          <Text>
            <Text style={{fontWeight: "bold"}}>Durability: </Text>
            <Text>{this.props.durability}</Text>
          </Text>
        }
        {this.props.stats[0] != 0 &&
          <Text style={{fontWeight: "bold"}}>{this.props.stats[0]} Armor</Text>
        }
        {this.props.stats[1] != 0 &&
          <Text style={{fontWeight: "bold"}}>{this.props.stats[1]} Resilience</Text>
        }
        {this.props.stats[2] != 0 &&
          <Text style={{fontWeight: "bold"}}>{this.props.stats[2]} Speed</Text>
        }
        {this.props.stats[3] != 0 &&
          <Text style={{fontWeight: "bold"}}>{this.props.stats[3]} Awareness</Text>
        }
        <TouchableOpacity
          style={styles.purchaseButton}
          onPress={this.addItem}>
          <Icon name={"chevron-right"}  size={50} color="#01a699" />
        </TouchableOpacity>
      </View>
    );
  };

  _updateSections = active => {
    this.setState({ active });
  };

  render() {
    return (
      <Accordion
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
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    container:{
        flexDirection: 'column',
        flex: 1
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:40,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    child:{
        backgroundColor: Colors.LIGHTGRAY,
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
