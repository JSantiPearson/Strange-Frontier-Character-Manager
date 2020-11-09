import React, { Component } from 'react';
import { View, Dimensions, Button, Modal, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feat from './feat'

const actionSurge = {
  name: "Action Surge",
  description: "You can boost your response time for a limited period.",
  tierOne: "Once per long rest, you can trade one of your movement actions for an extra, non-starpower standard action.",
  tierTwo: "You can trade one of your movement actions for a standard action, including starpower uses. For every time after the first use, per long rest, you are inflicted with a level of exhaustion."
}

const aerialCombat = {
  name: "Aerial Combat",
  description: "You have developed the ability to fight in midair. You are no longer flat-footed while airborne and can make attack rolls in free fall."
}

//TODO: Reword this feat. Very confusing.
const aerobatics = {
  name: "Aerobatics",
  description: "You can make Acrobatics checks to maneuver in midair or zero gravity.",
  tierOne: "All skills checks can be made, but no Dex bonuses are added.",
  tierTwo: "Skill checks get full bonuses. You can freely move through the air as if you can fly, but must always be moving with gravity. Landing won’t inflict collision."
}

const aggressiveInitiate = {
  name: "Aggressive Initiative",
  description: "You can use your Strength modifier for initiative instead of your Dexterity modifier."
}

const aggressiveObservation = {
  name: "Aggressive Observation",
  description: "You can make a hard Wisdom or Intelligence check to evaluate the defenses of your target. Attacks against a potential weakness increase the crit range to 95, and attacks against absolute weaknesses increase the crit range to 90. Once a weakness is used, it can not be used again.",
  tierOne: "If you roll an 85 or higher, you notice a potentially exploitable weakness.",
  tierTwo: "If you roll 75 or higher you notice one potential weakness, and you notice two if you roll above 90.",
  tierThree: "65 or higher for one potential weakness, 85 or higher for two potential weaknesses, 95 or higher for an absolute undeniable flaw in your opponent's defense."
}

const akimboFighting = {
  name: "Akimbo Fighting",
  description: "Your dexterity and hand-eye coordination allow you to use two weapons at the same time. After this feat is used during a round of combat, you resolve defense checks flat-footed due to your increased focus on offense. Both tiers of this feat will allow you to make one attack per wielded weapon in a single standard action. This feat still applies to creatures with multiple limbs who can equip more than two weapons, but for every weapon used above the second, a level of exhaustion is applied.",
  tierOne: "You can attack with weapons of the same type.",
  tierTwo: "You can attack with different types of weapons."
}

const alert = {
  name: "Alert",
  description: "You have a healthy sense of paranoia that protects you from being caught by surprise. You cannot be caught flat-footed. If you are knocked prone or rendered flat-footed by another effect, this will not protect you."
}

const ambulatoryExpert = {
  name: "Ambulatory Expert",
  tierOnePre: [["dexterity", 13]], //prerequisites are an array of arrays that contain a string of the prereq's name and its required minimum score.
  tierTwoPre: [["dexterity", 15]],
  tierOne: "You are able to run on walls for half your speed. If you end your turn on a wall, you cannot move further in this way until you once again stand on solid ground.",
  tierTwo: "You may treat other creatures as walls for this effect. The creature gains an attack of opportunity against you, and then must succeed a DC 70 Strength check or be knocked prone."
}

const ampleAttack = {
  name: "Ample Attack",
  pre: [["level", 10]], //TODO: Make sure to implement regular prerequisites and tiered prerequisites.
  description: "Whenever you get a non-starpower attack of opportunity or counter attack against an enemy, you can roll a second attack for free."
}

const armorProficiency = {
  name: "Armor Proficiency",
  description: "You can equip armor of greater quality due to your experience with it.",
  tierOne: "Increase your armor proficiency by one level (eg. light armor proficiency becomes medium armor proficiency). If you are already proficient in heavy armor, increase your maximum armor stat by +5.",
  tierTwo: "Increase your armor proficiency by another level. If you are already proficient in heavy armor, increase your maximum armor stat by +5."
}

const bastion = {
  name: "Bastion",
  pre: [["level", 10], ["influence", 14]],
  description: "You can make an Influence check of DC 50 + 10 per number of stunned allies to remove your own stun as a reflexive action."
}

const battleRush = {
  name: "Battle Rush",
  description: "You can increase your Attack stat by adding your total Speed to your Attack stat",
  tierOne: "You can add speed to damage for one declared attack.",
  tierTwo: "You can add speed to damage for consecutive successful attacks. A successful attack inflicts full suppression for the rest of the round."
}

const blindSpot = {
  name: "Blind Spot",
  description: "Once per encounter, you can reflexively attack any creature less aware than you."
}

const bornSurvivor = {
  name: "Born Survivor",
  description: "If an attack against you would reduce you to 0 HP (the attack's dice average is equal to or greater than your total remaining HP), you may add Survival to your defense roll. This does not work against attacks made with murderous intent."
}

const bulk = {
  name: "Bulk",
  description: "You have built up your mass and broadened your shoulders. You are considered Size 3 for all effects, except for determining weight and carrying capacity. Your base melee is increased by one grade (eg. d6 to d8, d10 to d12, etc)."
}

class Feats extends Component {
  state = {

  }

  render() { //Implement multiple levels of one feat
     return (
       <>
          <View style={styles.container}>
             <Text style={styles.title}>Choose Feats</Text>
             <Feat
               feat={actionSurge}
             />
             <Feat
               feat={aerialCombat}
             />
             <Feat
               feat={aerobatics}
             />
             <Feat
               feat={aggressiveInitiate}
             />
          </View>
       </>
     )
   }
 }

 export default Feats;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: "black",
   },
  text: {
    color: "white",
  },
   title: {
     fontSize: 26,
     color: "white",
     paddingBottom: 10,
   },
 });
