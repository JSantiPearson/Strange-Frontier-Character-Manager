import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Item from './item'

class NarmatoArms extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }

  render() {
    return (
      <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Armor and Wearables</Text>
            <Item
              name={"Leather Jacket"}
              type={"armor"}
              itemCallback={this.addItem}
              price={60}
              description={"A basic leather jacket with the Narmato arms logo on the shoulder. It comes in a variety of colors."}
              category={"Light/Torso"}
              stats={{
                armor: 3,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
              name={"Wheel-Heeled Boots"}
              type={"armor"}
              itemCallback={this.addItem}
              price={25}
              description={"A pair of standard boots with wheels in the heels for faster tansportation."}
              category={"Light/Legs"}
              stats={{
                armor: 2,
                resilience: 0,
                speed: 2,
                awareness: 0
              }}
            />
            <Item
              name={"Jungle Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={165}
              description={"A suit of padded Kevlar that resembles foliage."}
              misc={"Gives a +10 to stealth in forested areas."}
              category={"Medium/Torso"}
              stats={{
                armor: 6,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
              name={"Padded Armor"}
              type={"armor"}
              itemCallback={this.addItem}
              price={200}
              description={"A suit of padded kevlar and advanced ceramic plating that stops just about anything that hits it. It's an old style of armor from a Tech LV 8 civilization that evokes a classic vibe."}
              category={"Medium/Torso"}
              stats={{
                armor: 10,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
          {/*TODO: Add a antigrav special case, that doubles this items armor in zero G*/}
            <Item
              name={"Vac Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={250}
              description={"A pressure sealed suit that protects the wearer from the elements and the cold of space."}
              category={"Medium/Torso"}
              special={"antigrav"}
              stats={{
                armor: 5,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
              name={"Captain's Vac Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={655}
              description={"A more advanced Vac Suit that comes with every new starship purchase. Typically reserved for the captain of the vessel."}
              category={"Medium/Torso"}
              special={"antigrav"}
              stats={{
                armor: 10,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
          {/*TODO: At some point I should standardize the naming convention for special cases*/}
            <Item
              name={"Combat Skates"}
              type={"armor"}
              itemCallback={this.addItem}
              price={90}
              description={"A set of braced and padded skates that can pressure seal with a vac suit."}
              misc={"Increases the wearer's speed by 50%."}
              special={"speed 150%"}
              category={"Medium/Legs"}
              stats={{
                armor: 4,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
          {/*TODO: Look into making special cases that affect the player's skills.*/}
            <Item
              name={"Reflector Goggles"}
              type={"gear"}
              itemCallback={this.addItem}
              price={20}
              description={"A pair of goggles from the Sombrero galaxy. Often used by Mod Humans to protect their eyes. On a normal person they are very hard to see through, so are sometimes used as blindfolds."}
              misc={"Non Mod Humans take a -5 penalty to perception when equipped."}
              category={"Light/Head"}
              stats={{
                armor: 3,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
          {/*TODO: How will players keep track of this? Look into making it clear where every piece of armor comes from, and what effects they each have. This will be displayed in the play mode UI.*/}
            <Item
              name={"Gel Armor"}
              type={"armor"}
              itemCallback={this.addItem}
              price={300}
              description={"A suit of armor that is comprised of contact gel, which hardens the second a projectile makes contact against it. It is very succeptible to laser fire, however."}
              misc={"Kinetic and melee damage is halved. Armor is halved against laser damage."}
              category={"Medium/Torso"}
              stats={{
                armor: 10,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
              name={"Reflector Armor"}
              type={"armor"}
              itemCallback={this.addItem}
              price={300}
              description={"A suit of armor built from advanced deflector lenses that renders laser weapons worthless."}
              misc={"Laser damage is halved. Armor is halved against kinetic damage."}
              category={"Medium/Torso"}
              stats={{
                armor: 10,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
              name={"Air Jets"}
              type={"gear"}
              itemCallback={this.addItem}
              price={130}
              description={"An armor upgrade that allows for normal movement in Zero G but at half the wearer's speed."}
              category={"Light/Torso"}
              stats={{
                armor: 1,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
            <Item
              name={"Rebreather"}
              type={"gear"}
              itemCallback={this.addItem}
              price={200}
              description={"A device that filters air and allows it to be breathed again. The wearer can breath safely for 2 hours."}
              category={"Light/Head"}
              stats={{
                armor: 0,
                resilience: 0,
                speed: 0,
                awareness: 0
              }}
            />
          <Text>Equipment</Text>
            <Item
              name={"Frag Grenade"}
              type={"gear"}
              itemCallback={this.addItem}
              price={210}
              description={"An explosive with a pin that controls its detonation. Effective at clearing out grouped up targets, or flushing targets out of hiding."}
              damage={"4d10"}
              range={"REF Save DC 50. 15ft Diameter."}
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

export default NarmatoArms;

const styles = StyleSheet.create({
   container: {
     paddingHorizontal: 10,
     paddingVertical: 20
   },
   scrollView: {
     marginHorizontal: 5
   }
 }
);
