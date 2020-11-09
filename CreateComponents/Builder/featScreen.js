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

//TODO: Go back through all feats and determine splits between description and tier 1. Implement a flavor text style description to the feat component.
const blitz = {
  name: "Blitz",
  description: "You can increase your mobility for a short period. Once per long rest you can use a free additional movement action, however it cannot be converted into other types of actions."
}

const brace = {
  name: "Brace",
  pre: [["level", 10]],
  description: "You can forgo a defense against an attack in order to take the damage, and negate all other effects that attack would generate. This includes status infliction and starpower ability stacks/activations. The latter is only canceled if the stack/activation requires the hit. Abilities that may be used optionally after landing and haven’t been openly declared don’t get cancelled."
}

const comboKing = {
  name: "Combo King",
  pre: [["feat", "teamPlayer", 1], ["level", 35]],
  description: "You can combine your own moves together."
  tierOne: "You can combine moves at star cost 3 and below."
  tierTwo: "You can combine moves at star cost 5 and below."
}

const collisionExpert = {
  name: "Collision Expert",
  description: "When you throw another creature, you inflict the target's armor stat as damage. This will stack if the thrown target hits another creature. During space combat, halve all damage to yourself when your ship is rammed by another capital vessel."
}

const companion = {
  name: "Companion",
  pre: [["level", 25]],
  description: "You have formed an unbreakable bond with an ally.",
  tierOne: "You and your ally gain a +10 to attacks made in the same initiative as the other. The two creatures gain advantage on untrained skills that their companion has training in.",
  tierTwo: "You and your ally combine your Will Saves against Demotivation, no matter how far away you are, or if your companion has died. All Tier 1 effects remain if one dies, so long as both have Tier 2 in this feat."
}

const confidentFighter = {
  name: "Confident Fighter",
  description: "You can substitute the bonus for any saving throw with your Influence bonus once per long rest."
}

const cosmonaut = {
  name: "Cosmonaut",
  tierOnePre: [["level", 10]],
  tierTwoPre: [["level", 20]],
  description: "You can use your experience navigating zero gravity to reduce damage taken.",
  tierOne: "You can make a DC 50 Acrobatics roll with half of your Intelligence bonus. On a success, all damage is reduced by 25% this round.",
  tierTwo: "You can make a DC 100 Acrobatics roll with your Intelligence bonus. On a success, all damage is reduced by 50% this round. On a failure, if the DC 50 from Tier 1 is a success, the Tier 1 effects take effect."
}

const counterWeight = {
  name: "Counter Weight",
  description: "All grapple attempts made against you provoke an Attack of Opportunity."
}

const crushingCounter = { //TODO: Finish this feat once Tristan gets back to you on it
  name: "Crushing Counter",
  pre: ["feat", "martialArts", 2],
  description: "You can choose to instantly win a counter attack roll once per short rest.",
}

const culturalChameleon = {
  name: "Cultural Chameleon",
  description: "You can adapt to alien cultures without the usual -15 penalty to Influence. You can roll Influence for stealth checks in civilian crowds."
}

const deduction = {
  name: "Deduction",
  description: "You can use your Investigation bonus in place of Detection, but only ever as having a single level of training. (so if even if you have a 40 to Investigation but no training in Detection, then you may only receive perks of 1 level of training in Detection.)"
}

const defang = {
  name: "Defang",
  description: "Once per encounter, you can roll an Attack of Opportunity against any creature attempting a Mangle. A successful hit will interrupt the target and leave them stunned with no save."
}

const defensiveRush = {
  name: "Defensive Rush",
  pre: [["level", 10]],
  description: "You can enter a highly mobile defensive stance while sprinting. You can add your Speed to your defense stats for this round, and then subtract incoming damage with that total."
}

const deflect = {
  name: "Deflect",
  description: "You can convert all block actions to ‘deflect’ actions for this round. Deflect actions use your Fortitude save as a block action would. If the Deflect is successful, you can change the attack's target into any creature except your attacker. You take half damage when successfully deflecting. Doesn’t work on AoE, Sneak Attacks, or attacks with Advantage."
}

const delicateFighter = {
  name: "Delicate Fighter",
  description: "Once per round, you can reduce the damage of one attack you make against an enemy to a mere 5 damage. This will double your bonuses on your next roll (unless it’s an attack on the same target)."
}

const dexterousDisarm = {
  name: "Dexterous Disarm",
  description: "You can substitute your Strength bonus for your Dexterity bonus to attempt a disarm, without needing to make a grapple check. You and your target roll contested Dexterity for Disarm checks made this way. If you have this feat, you become immune to this feat."
}

class Feats extends Component {
  state = {

  }

  render() {
     return (
       <>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
             <Text style={styles.title}>Choose Feats</Text>
             <Feat feat={actionSurge} />
             <Feat feat={aerialCombat} />
             <Feat feat={aerobatics} />
             <Feat feat={aggressiveInitiate} />
             <Feat feat={aggressiveObservation} />
             <Feat feat={akimboFighting} />
             <Feat feat={alert} />
             <Feat feat={ambulatoryExpert} />
             <Feat feat={ampleAttack} />
             <Feat feat={armorProficiency} />
             <Feat feat={bastion} />
             <Feat feat={battleRush} />
             <Feat feat={blindSpot} />
             <Feat feat={bornSurvivor} />
             <Feat feat={bulk} />
            </View>
          </ScrollView>
        </SafeAreaView>
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
