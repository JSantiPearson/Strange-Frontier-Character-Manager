import React, { Component, PureComponent } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, LayoutAnimation, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Accordion from 'react-native-collapsible/Accordion';

const SECTION = [
  {
    title: "Feat Name",
    content: "Description"
  }
];

const glowColor = "rgb(250, 0, 115)";

function TierIndicators(props){
  return(
    <>
      {props.feat.tierOne == undefined &&
        props.tiers < 1 &&
          <View style={styles.rowItem}>
            <Icon name="circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierOne == undefined &&
        props.tiers > 0 &&
        <View style={styles.rowItem}>
          <Icon name="circle-slice-8" size={20} color={glowColor} />
        </View>
      }
      {props.feat.tierOne != undefined &&
        props.tiers < 1 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-1-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierOne != undefined &&
        props.tiers >= 1 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-1-circle" size={20} color={glowColor} />
        </View>
      }
      {props.feat.tierTwo != undefined &&
        props.tiers < 2 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-2-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierTwo != undefined &&
        props.tiers >= 2 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-2-circle" size={20} color={glowColor} />
        </View>
      }
      {props.feat.tierThree != undefined &&
        props.tiers < 3 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-3-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierThree != undefined &&
        props.tiers >= 3 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-3-circle" size={20} color={glowColor} />
        </View>
      }
      {props.feat.tierFour != undefined &&
        props.tiers < 4 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-4-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierFour != undefined &&
        props.tiers >= 4 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-4-circle" size={20} color={glowColor} />
        </View>
      }
      {props.feat.tierFive != undefined &&
        props.tiers < 5 &&
          <View style={styles.rowItem}>
            <Icon name="numeric-5-circle-outline" size={20} color="white" />
          </View>
      }
      {props.feat.tierFive != undefined &&
        props.tiers >= 5 &&
        <View style={styles.rowItem}>
          <Icon name="numeric-5-circle" size={20} color={glowColor} />
        </View>
      }
    </>
  );
}

function FeatTier(props){
  return (
    <>
      <View style={styles.tierRow}>
        {props.tier == props.maxPurchased+1 && /* if this tier is exactly one above the highest tier purchased, then it is purchasable */
          <TouchableOpacity activeOpacity={0.6} style={styles.rowItem} onPress={() => props.changeFeatTiers(true)}>
            <View style={styles.tierCircle}>
              <Icon name="circle-outline" size={18} color="white" />
            </View>
          </TouchableOpacity>
        }
        {props.tier < props.maxPurchased && /* If this tier has other higher tiers equipped on top of it, then it cannot be unequipped until the tiers above it have also been unequipped */
          <View style={[styles.tierCircle, {paddingHorizontal: 6}]}>
            <Icon name="circle-slice-8" size={18} color="white" />
          </View>
        }
        {props.tier == props.maxPurchased && /* If this tier is the highest purchased tier, it can be unequipped. */
          <TouchableOpacity activeOpacity={0.6} style={styles.rowItem} onPress={() => props.changeFeatTiers(false)}>
            <View style={styles.tierCircle}>
              <Icon name="circle-slice-8" size={18} color="white" />
            </View>
          </TouchableOpacity>
        }
        {props.tier > props.maxPurchased+1 && /* If this tier is higher than the current purchasable tier, then it is locked from purchase */
          <View style={[styles.tierCircle, {paddingLeft: 7}]}>
            <Icon name="lock" size={18} color="white" />
          </View>
        }
        <Text style={styles.tier}>Tier {props.tier}</Text>
      </View>
      <Text style={[styles.text, {paddingBottom: 5}]}>{props.content}</Text>
    </>
  );
}

class Feat extends PureComponent {
  state = {
    active: [],
    tiers: 0,
  }

  _renderHeader = () => {
    if (this.state.active[0] == 0){
      return (
        <>
          <View style={styles.row}>
            <TierIndicators feat={this.props.feat} tiers={this.state.tiers} />
            <Text style={styles.title}>{this.props.feat.name}</Text>
          </View>
          <Text style={[styles.text, {fontSize: 14}]}></Text>
        </>
      );
    }
    else {
      return (
        <>
          <View style={styles.row}>
            <TierIndicators feat={this.props.feat} tiers={this.state.tiers} />
            <Text style={styles.title}>{this.props.feat.name}</Text>
          </View>
        </>
      );
    }
  }

  changeFeatTiers = increase => {
    let tiers = this.state.tiers;
    if (increase){
      tiers++;
    }
    else{
      tiers--;
    }
    this.props.feat.tier = tiers;
    this.setState({ tiers });
    this.props.addFeat(this.props.feat);
  }

  _renderContent = () => { //TODO: Currently, feats with a tier one and a description are not rendering the description. Create a case for this situation.
    return (
      <View style={styles.content}>
        {this.props.feat.tierOne == undefined &&
          <FeatTier
            tier={1}
            maxPurchased={this.state.tiers}
            content={this.props.feat.description}
            changeFeatTiers={this.changeFeatTiers}
          />
        }
        {this.props.feat.tierOne != undefined &&
          <FeatTier
            tier={1}
            maxPurchased={this.state.tiers}
            content={this.props.feat.tierOne}
            changeFeatTiers={this.changeFeatTiers}
          />
        }
        {this.props.feat.tierTwo != undefined &&
          <FeatTier
            tier={2}
            maxPurchased={this.state.tiers}
            content={this.props.feat.tierTwo}
            changeFeatTiers={this.changeFeatTiers}
          />
        }
        {this.props.feat.tierThree != undefined &&
          <FeatTier
            tier={3}
            maxPurchased={this.state.tiers}
            content={this.props.feat.tierThree}
            changeFeatTiers={this.changeFeatTiers}
          />
        }
        {this.props.feat.tierFour != undefined &&
          <FeatTier
            tier={4}
            maxPurchased={this.state.tiers}
            content={this.props.feat.tierFour}
            changeFeatTiers={this.changeFeatTiers}
          />
        }
        {this.props.feat.tierFive != undefined &&
          <FeatTier
            tier={5}
            maxPurchased={this.state.tiers}
            content={this.props.feat.tierFive}
            changeFeatTiers={this.changeFeatTiers}
          />
        }
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

export default Feat;

const styles = StyleSheet.create({
    row: {
      flexDirection: "row",
      paddingBottom: 7,
      marginBottom: 7,
      borderBottomColor: 'rgb(250, 0, 115)',
      borderBottomWidth: 1
    },
    tierRow: {
      flexDirection: "row",
      paddingBottom: 3,
      paddingLeft: 3
    },
    rowItem: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 1,
    },
    content: {
      marginBottom: 5,
      paddingBottom: 3,
      borderBottomColor: 'rgb(250, 0, 115)',
      borderBottomWidth: 1
    },
    title:{
      color: "white",
      fontSize: 20,
      textAlign: "center",
      paddingLeft: 5,
    },
    text: {
      color: "white"
    },
    tier: {
      color: "white",
      fontSize: 18
    },
    tierCircle: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 5,
    }
});
