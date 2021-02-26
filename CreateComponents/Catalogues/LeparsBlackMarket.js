import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView, SectionList} from 'react-native'
import Catalogue from './Catalogue'

const DATA = [
  {
    key: "The Nightlife on Leanlo",
    title: "The Nightlife on Leanlo",
    data: [
      {
        name: "Equalist Splinter Pistol",
        type: "Ranged",
        price: 1000,
        range: "10/20/30/40",
        damage: "2d8",
        durability: 16,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
        misc: "Strips 1d8 of armor from a target. Only works once per piece of gear. Effect lasts until repaired.",
      },
      {
        name: "Equalist Splinter Rifle",
        type: "Ranged",
        price: 2000,
        range: "10/25/45/70",
        damage: "2d10",
        durability: 20,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
        misc: "Strips 1d10 of armor from a target. Only works once per piece of gear, effect lasts until repaired.",
      },
      {
        name: "Equalist Blazer",
        type: "Armor",
        price: 5000,
        description: "A highgrade fabric of unknown origin is woven into a denim jacket.",
        misc: "Halves all grenade damage, and make the user imune to class C or lower gel grenades.",
        category: "Light/Torso",
        stats: {
          armor: 10,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "Lobster Shell",
        type: "Armor",
        price: 6000,
        description: "A highgrade armor of unknown origin.",
        misc: "Makes the user immune to class c or lower grenades.",
        category: "Light/Torso",
        stats: {
          armor: 20,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
    ]
  },
  {
    key: "Chance and Happenstance",
    title: "Chance and Happenstance",
    data: [
      {
        name: "Casino Chip",
        description: "A large yo-yo with serated edges.",
        type: "Melee",
        price: 5000,
        range: "10",
        damage: "5d8",
        durability: 45,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "Black Jack",
        description: "A decent melee weapon that features a discrete EMP used to high-jack vehicals.",
        misc: "+20 to vehicle hijacking rolls.",
        type: "Melee",
        price: 4000,
        range: "10",
        damage: "2d8",
        durability: 20,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "Roulette",
        description: "An LMG that fires shotgun pellets using magnetic acceleration.",
        type: "range",
        price: 6500,
        range: "10",
        damage: "4d8+ammo",
        durability: 40,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "Casino Suit",
        type: "Armor",
        description: "A beautifully sharp suit for the upper class.",
        misc: "+15 to Influence rolls (+20 with shoes)",
        category: "Light/Torso",
        price: 10000,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "Casino Shoes",
        type: "Armor",
        description: "A beautifully sharp pair of shoes for the upper class.",
        misc: "+5 to Influence rolls (+10 with suit)",
        category: "Light/Legs",
        price: 7000,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "High Roller Suit",
        type: "Armor",
        description: "Dangerously elegant - a challenge to fate itself.",
        misc: "Roll a d100 every time you use a move. 90-100 will double its effect bonuses. (80-100 with shoes)",
        category: "Light/Torso",
        price: 10000,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "High Roller Shoes",
        type: "Armor",
        description: "Crush fate underfoot with these stylish velvet shoes.",
        misc: "Roll a d100 every time you use a move. 90-100 will restore the cost of your move instead of spending it. (80-100 with suit)",
        category: "Light/Legs",
        price: 7000,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
    ]
  },
  {
    key: "Walk in the Woods",
    title: "Walk in the Woods",
    data: [
      {
        name: "Pine Goggles",
        type: "Armor",
        price: 1300,
        misc: "+4 awareness for Mod-Humans.",
        special: "pine goggles",
        stats: {
          armor: 8,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
        description: "A pair of hardened mod-goggles that smell of pine.",
      },
      {
        name: "Rough Rope",
        description: "A densely wrapped natural rope.",
        type: "Melee",
        price: 1000,
        range: "15",
        damage: "5d6 Burn",
        durability: 40,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      },
      {
        name: "Bow of the Path",
        description: "An abandoned piece of early compass gear.",
        type: "Ranged",
        price: 1100,
        range: "10/30/70/110",
        damage: "5d8",
        durability: 60,
        stats: {
          armor: 0,
          resilience: 0,
          speed: 0,
          awareness: 0
        },
      }
    ]
  },
];

class LeparsBlackMarket extends Component {
  render() {
    return (
      <Catalogue {...this.props} DATA={DATA}/>
    )
  }
}

export default LeparsBlackMarket;

const styles = StyleSheet.create({
   container: {
     paddingVertical: 20,
     backgroundColor: "black",
   },
   title: {
     color: "white",
     fontSize: 22,
     marginLeft: 5,
     paddingRight: 10,
     paddingBottom: 5,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: 1,
   },
   section: {
     marginLeft: 20,
     marginRight: 15,
   }
 }
);
