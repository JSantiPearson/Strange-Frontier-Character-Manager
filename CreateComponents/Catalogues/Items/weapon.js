import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/MaterialIcons";
import Accordion from 'react-native-collapsible/Accordion';

const SECTION = [
  {
    title: "Weapon Name",
    content: "Description"
  }
];

class Weapon extends Component {
  state = {
    active: []
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

  _renderHeader = () => {
    return (
      <View style={styles.row}>
        <Text style={[styles.title, styles.font]}>{this.props.name}</Text>
        <Text>${this.props.price}</Text>
      </View>
    )
  }

  _renderContent = () => {
    return (
      <View style={styles.child}>
        <Text>Range: {this.props.range} sq.</Text>
        <Text>Damage: {this.props.damage}</Text>
        <Text>Durabililty: {this.props.durability}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  };

  _renderPurchaseButton = () => {
    return (
        <TouchableOpacity style={styles.purchaseButton}>
          <Icon name={"chevron-right"}  size={50} color="#01a699" />
        </TouchableOpacity>
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

export default Weapon;

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
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    child:{
        backgroundColor: Colors.LIGHTGRAY,
        padding:16,
    },
    purchaseButton:{
      borderWidth:5,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#fff',
      borderRadius:50,
      alignSelf: 'flex-end',
      bottom: -150,
      right: 15
    }
});
