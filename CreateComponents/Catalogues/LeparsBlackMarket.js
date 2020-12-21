import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Item from './item'

class LeparsBlackMarket extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }

  render() {
    return (
      <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>The Nightlife on Leanlo</Text>
            <Item
						{...this.props}
            itemCallback={this.addItem}
            name={"Equalist Splinter Pistol"}
            type={"Ranged"}
            price={1000}
            range={"10/20/30/40"}
            damage={"2d8"}
            durability={16}
            stats={{
              armor: 0,
              resilience: 0,
              speed: 0,
              awareness: 0
            }}
            misc={"Strips 1d8 of armor from a target. Only works once per piece of gear. Effect lasts until repaired."}
            />
            <Item
						{...this.props}
            itemCallback={this.addItem}
            name={"Equalist Splinter Rifle"}
            type={"Ranged"}
            price={2000}
            range={"10/25/45/70"}
            damage={"2d10"}
            durability={20}
            stats={{
              armor: 0,
              resilience: 0,
              speed: 0,
              awareness: 0
            }}
            misc={"Strips 1d10 of armor from a target. Only works once per piece of gear, effect lasts until repaired."}
            />
            <Item
						{...this.props}
              name={"Equalist Blazer"}
              type={"Armor"}
              itemCallback={this.addItem}
              price={5000}
              description={"A highgrade fabric of unknown origin is woven into a denim jacket."}
              misc={"Halves all grenade damage, and make the user imune to class C or lower gel grenades."}
              category={"Light/Torso"}
              stats={{
                armor: 10,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
						{...this.props}
              name={"Lobster Shell"}
              type={"Armor"}
              itemCallback={this.addItem}
              price={6000}
              description={"A highgrade armor of unknown origin."}
              misc={"Makes the user immune to class c or lower grenades."}
              category={"Light/Torso"}
              stats={{
                armor: 20,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
          <Text style={styles.text}>Chance and Happenstance</Text>
              <Item
						{...this.props}
              itemCallback={this.addItem}
              name={"Casino Chip"}
              description={"A large yo-yo with serated edges."}
              type={"Melee"}
              price={5000}
              range={"10"}
              damage={"5d8"}
              durability={45}
              stats={{
                armor: 0,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
              />
              <Item
						{...this.props}
              itemCallback={this.addItem}
              name={"Black Jack"}
              description={"A decent melee weapon that features a discrete EMP used to high-jack vehicals."}
              misc={"+20 to vehicle hijacking rolls."}
              type={"Melee"}
              price={4000}
              range={"10"}
              damage={"2d8"}
              durability={20}
              stats={{
                armor: 0,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
              />
              <Item
						{...this.props}
              itemCallback={this.addItem}
              name={"Roulette"}
              description={"An LMG that fires shotgun pellets using magnetic acceleration."}
              type={"range"}
              price={6500}
              range={"10"}
              damage={"4d8+ammo"}
              durability={40}
              stats={{
                armor: 0,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
              />
              <Item
						{...this.props}
                name={"Casino Suit"}
                type={"Armor"}
                itemCallback={this.addItem}
                description={"A beautifully sharp suit for the upper class."}
                misc={"+15 to Influence rolls (+20 with shoes)"}
                category={"Light/Torso"}
                price={10000}
                stats={{
                  armor: 0,
                  resilience: 0,
                  speed: 0,
                  awareness: 0
                }}
              />
              <Item
						{...this.props}
                name={"Casino Shoes"}
                type={"Armor"}
                itemCallback={this.addItem}
                description={"A beautifully sharp pair of shoes for the upper class."}
                misc={"+5 to Influence rolls (+10 with suit)"}
                category={"Light/Legs"}
                price={7000}
                stats={{
                  armor: 0,
                  resilience: 0,
                  speed: 0,
                  awareness: 0
                }}
              />
              <Item
						{...this.props}
                name={"High Roller Suit"}
                type={"Armor"}
                itemCallback={this.addItem}
                description={"Dangerously elegant - a challenge to fate itself."}
                misc={"Roll a d100 every time you use a move. 90-100 will double its effect bonuses. (80-100 with shoes)"}
                category={"Light/Torso"}
                price={10000}
                stats={{
                  armor: 0,
                  resilience: 0,
                  speed: 0,
                  awareness: 0
                }}
              />
              <Item
						{...this.props}
                name={"High Roller Shoes"}
                type={"Armor"}
                itemCallback={this.addItem}
                description={"Crush fate underfoot with these stylish velvet shoes."}
                misc={"Roll a d100 every time you use a move. 90-100 will restore the cost of your move instead of spending it. (80-100 with suit)"}
                category={"Light/Legs"}
                price={7000}
                stats={{
                  armor: 0,
                  resilience: 0,
                  speed: 0,
                  awareness: 0
                }}
              />
            <Text style={styles.text}>Walk in the Woods</Text>
            <Item
						{...this.props}
              itemCallback={this.addItem}
              name={"Pine Goggles"}
              type={"Armor"}
              price={1300}
              misc={"+4 awareness for Mod-Humans."}
              special={"pine goggles"}
              stats={{
                armor: 8,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
              description={"A pair of hardened mod-goggles that smell of pine."}
            />
            <Item
						{...this.props}
            itemCallback={this.addItem}
            name={"Rough Rope"}
            description={"A densely wrapped natural rope."}
            type={"Melee"}
            price={1000}
            range={"15"}
            damage={"5d6 Burn"}
            durability={40}
            stats={{
              armor: 0,
              resilience: 0,
              speed: 0,
              awareness: 0
            }}
            />
            <Item
						{...this.props}
            itemCallback={this.addItem}
            name={"Bow of the Path"}
            description={"An abandoned piece of early compass gear."}
            type={"Ranged"}
            price={1100}
            range={"10/30/70/110"}
            damage={"5d8"}
            durability={60}
            stats={{
              armor: 0,
              resilience: 0,
              speed: 0,
              awareness: 0
            }}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default LeparsBlackMarket;

const styles = StyleSheet.create({
   container: {
     paddingVertical: 20,
     backgroundColor: "black",
   },
   text: {
     color: "white",
     fontSize: 20,
   },
   scrollView: {
     marginHorizontal: 5
   }
 }
);
