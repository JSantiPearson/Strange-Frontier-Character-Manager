import React, { PureComponent, Component } from 'react';
import { View, Dimensions, Button, Modal, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feat from './feat';
import equal from 'fast-deep-equal';

class Feats extends PureComponent {
  state = {
    feats: {
      actionSurge: {
        name: "Action Surge",
        description: "You can boost your response time for a limited period.",
        tierOne: "Once per long rest, you can trade one of your movement actions for an extra, non-starpower standard action.",
        tierTwo: "You can trade one of your movement actions for a standard action, including starpower uses. For every time after the first use, per long rest, you are inflicted with a level of exhaustion.",
      	tier: 0,
			},

      aerialCombat: {
        name: "Aerial Combat",
        description: "You have developed the ability to fight in midair. You are no longer flat-footed while airborne and can make attack rolls in free fall.",
      	tier: 0,
			},

      //TODO: Reword this feat. Very confusing.
      aerobatics: {
        name: "Aerobatics",
        description: "You can make Acrobatics checks to maneuver in midair or zero gravity.",
        tierOne: "All skills checks can be made, but no Dex bonuses are added.",
        tierTwo: "Skill checks get full bonuses. You can freely move through the air as if you can fly, but must always be moving with gravity. Landing won’t inflict collision.",
      	tier: 0,
			},

      aggressiveInitiative: {
        name: "Aggressive Initiative",
        description: "You can use your Strength modifier for initiative instead of your Dexterity modifier.",
      	tier: 0,
			},

      aggressiveObservation: {
        name: "Aggressive Observation",
        description: "You can make a hard Wisdom or Intelligence check to evaluate the defenses of your target. Attacks against a potential weakness increase the crit range to 95, and attacks against absolute weaknesses increase the crit range to 90. Once a weakness is used, it can not be used again.",
        tierOne: "If you roll an 85 or higher, you notice a potentially exploitable weakness.",
        tierTwo: "If you roll 75 or higher you notice one potential weakness, and you notice two if you roll above 90.",
        tierThree: "65 or higher for one potential weakness, 85 or higher for two potential weaknesses, 95 or higher for an absolute undeniable flaw in your opponent's defense.",
      	tier: 0,
			},

      akimboFighting: {
        name: "Akimbo Fighting",
        description: "Your dexterity and hand-eye coordination allow you to use two weapons at the same time. After this feat is used during a round of combat, you resolve defense checks flat-footed due to your increased focus on offense. Both tiers of this feat will allow you to make one attack per wielded weapon in a single standard action. This feat still applies to creatures with multiple limbs who can equip more than two weapons, but for every weapon used above the second, a level of exhaustion is applied.",
        tierOne: "You can attack with weapons of the same type.",
        tierTwo: "You can attack with different types of weapons.",
      	tier: 0,
			},

      alert: {
        name: "Alert",
        description: "You have a healthy sense of paranoia that protects you from being caught by surprise. You cannot be caught flat-footed. If you are knocked prone or rendered flat-footed by another effect, this will not protect you.",
      	tier: 0,
			},

      ambulatoryExpert: {
        name: "Ambulatory Expert",
        tierOnePre: [["dexterity", 13]], //prerequisites are an array of arrays that contain a string of the prereq's name and its required minimum score.
        tierTwoPre: [["dexterity", 15]],
        tierOne: "You are able to run on walls for half your speed. If you end your turn on a wall, you cannot move further in this way until you once again stand on solid ground.",
        tierTwo: "You may treat other creatures as walls for this effect. The creature gains an attack of opportunity against you, and then must succeed a DC 70 Strength check or be knocked prone.",
      	tier: 0,
			},

      ampleAttack: {
        name: "Ample Attack",
        pre: [["level", 10]], //TODO: Make sure to implement regular prerequisites and tiered prerequisites.
        description: "Whenever you get a non-starpower attack of opportunity or counter attack against an enemy, you can roll a second attack for free.",
      	tier: 0,
			},

      armorProficiency: {
        name: "Armor Proficiency",
        description: "You can equip armor of greater quality due to your experience with it.",
        tierOne: "Increase your armor proficiency by one level (eg. light armor proficiency becomes medium armor proficiency). If you are already proficient in heavy armor, increase your maximum armor stat by +5.",
        tierTwo: "Increase your armor proficiency by another level. If you are already proficient in heavy armor, increase your maximum armor stat by +5.",
      	tier: 0,
			},

      bastion: {
        name: "Bastion",
        pre: [["level", 10], ["influence", 14]],
        description: "You can make an Influence check of DC 50 + 10 per number of stunned allies to remove your own stun as a reflexive action.",
      	tier: 0,
			},

      battleRush: {
        name: "Battle Rush",
        description: "You can increase your Attack stat by adding your total Speed to your Attack stat",
        tierOne: "You can add speed to damage for one declared attack.",
        tierTwo: "You can add speed to damage for consecutive successful attacks. A successful attack inflicts full suppression for the rest of the round.",
      	tier: 0,
			},

      blindSpot: {
        name: "Blind Spot",
        description: "Once per encounter, you can reflexively attack any creature less aware than you.",
      	tier: 0,
			},

      bornSurvivor: {
        name: "Born Survivor",
        description: "If an attack against you would reduce you to 0 HP (the attack's dice average is equal to or greater than your total remaining HP), you may add Survival to your defense roll. This does not work against attacks made with murderous intent.",
      	tier: 0,
			},

      bulk: {
        name: "Bulk",
        description: "You have built up your mass and broadened your shoulders. You are considered Size 3 for all effects, except for determining weight and carrying capacity. Your base melee is increased by one grade (eg. d6 to d8, d10 to d12, etc).",
      	tier: 0,
			},

      //TODO: Go back through all feats and determine splits between description and tier 1. Implement a flavor text style description to the feat component.
      blitz: {
        name: "Blitz",
        description: "You can increase your mobility for a short period. Once per long rest you can use a free additional movement action, however it cannot be converted into other types of actions.",
      	tier: 0,
			},

      brace: {
        name: "Brace",
        pre: [["level", 10]],
        description: "You can forgo a defense against an attack in order to take the damage, and negate all other effects that attack would generate. This includes status infliction and starpower ability stacks/activations. The latter is only canceled if the stack/activation requires the hit. Abilities that may be used optionally after landing and haven’t been openly declared don’t get cancelled.",
      	tier: 0,
			},

      comboKing: {
        name: "Combo King",
        pre: [["feat", "teamPlayer", 1], ["level", 35]],
        description: "You can combine your own moves together.",
        tierOne: "You can combine moves at star cost 3 and below.",
        tierTwo: "You can combine moves at star cost 5 and below.",
      	tier: 0,
			},

      collisionExpert: {
        name: "Collision Expert",
        description: "When you throw another creature, you inflict the target's armor stat as damage. This will stack if the thrown target hits another creature. During space combat, halve all damage to yourself when your ship is rammed by another capital vessel.",
      	tier: 0,
			},

      companion: {
        name: "Companion",
        pre: [["level", 25]],
        description: "You have formed an unbreakable bond with an ally.",
        tierOne: "You and your ally gain a +10 to attacks made in the same initiative as the other. The two creatures gain advantage on untrained skills that their companion has training in.",
        tierTwo: "You and your ally combine your Will Saves against Demotivation, no matter how far away you are, or if your companion has died. All Tier 1 effects remain if one dies, so long as both have Tier 2 in this feat.",
      	tier: 0,
			},

      confidentFighter: {
        name: "Confident Fighter",
        description: "You can substitute the bonus for any saving throw with your Influence bonus once per long rest.",
      	tier: 0,
			},

      cosmonaut: {
        name: "Cosmonaut",
        tierOnePre: [["level", 10]],
        tierTwoPre: [["level", 20]],
        description: "You can use your experience navigating zero gravity to reduce damage taken.",
        tierOne: "You can make a DC 50 Acrobatics roll with half of your Intelligence bonus. On a success, all damage is reduced by 25% this round.",
        tierTwo: "You can make a DC 100 Acrobatics roll with your Intelligence bonus. On a success, all damage is reduced by 50% this round. On a failure, if the DC 50 from Tier 1 is a success, the Tier 1 effects take effect.",
      	tier: 0,
			},

      counterWeight: {
        name: "Counter Weight",
        description: "All grapple attempts made against you provoke an Attack of Opportunity.",
      	tier: 0,
			},

      crushingCounter: { //TODO: Finish this feat once Tristan gets back to you on it
        name: "Crushing Counter",
        pre: ["feat", "martialArts", 2],
        description: "You can choose to instantly win a counter attack roll once per short rest.",
      	tier: 0,
			},

      culturalChameleon: {
        name: "Cultural Chameleon",
        description: "You can adapt to alien cultures without the usual -15 penalty to Influence. You can roll Influence for stealth checks in civilian crowds.",
      	tier: 0,
			},

      deduction: {
        name: "Deduction",
        description: "You can use your Investigation bonus in place of Detection, but only ever as having a single level of training. (Eg. if you have a 40 to Investigation but no training in Detection, then you may only receive perks of 1 level of training in Detection.)",
      	tier: 0,
			},

      defang: {
        name: "Defang",
        description: "Once per encounter, you can roll an Attack of Opportunity against any creature attempting a Mangle. A successful hit will interrupt the target and leave them stunned with no save.",
      	tier: 0,
			},

      defensiveRush: {
        name: "Defensive Rush",
        pre: [["level", 10]],
        description: "You can enter a highly mobile defensive stance while sprinting. You can add your Speed to your defense stats for this round, and then subtract incoming damage with that total.",
      	tier: 0,
			},

      deflect: {
        name: "Deflect",
        description: "You can convert all block actions to ‘deflect’ actions for this round. Deflect actions use your Fortitude save as a block action would. If the Deflect is successful, you can change the attack's target into any creature except your attacker. You take half damage when successfully deflecting. Doesn’t work on AoE, Sneak Attacks, or attacks with Advantage.",
      	tier: 0,
			},

      delicateFighter: {
        name: "Delicate Fighter",
        description: "Once per round, you can reduce the damage of one attack you make against an enemy to a mere 5 damage. This will double your bonuses on your next roll (unless it’s an attack on the same target).",
      	tier: 0,
			},

      dexterousDisarm: {
        name: "Dexterous Disarm",
        description: "You can substitute your Strength bonus for your Dexterity bonus to attempt a disarm, without needing to make a grapple check. You and your target roll contested Dexterity for Disarm checks made this way. If you have this feat, you become immune to this feat.",
      	tier: 0,
			},

      dodgeCounter: {
        name: "Dodge Counter",
        pre: [["level", 10]],
        description: "If you successfully dodge a melee attack, you can make a counter attack against your attacker. This can be done a number of times equal to your tier of play every long rest. Subsequent uses of this feat inflict levels of exhaustion until you take a long rest.",
      	tier: 0,
			},

      disguisedStrike: {
        name: "Disguised Strike",
        pre: [["level", 25]],
        description: "You can roll a stealth check to hide one standard action. You will still have to openly declare your action, but no creatures are allowed to reflexively react to it. Attacks of Opportunity and Counter Attacks can’t be made in response to it.",
        tierOne: "You can make a DC 50 Stealth check once per set to hide a standard action. +15 is added to the DC for every enemy in the initiative after the first.",
        tierTwo: "You can make a DC 50 Stealth check twice per set to hide a standard action. +10 is added to the DC for every enemy in the initiative after the first.",
        tierThree: "You can make a DC 50 Stealth check once per round to hide a standard action. +5 is added to the DC for every enemy in the initiative after the first.",
      	tier: 0,
			},

      environmentalAdaptation: {
        name: "Environmental Adaptation",
        description: "You can handle the sudden change of environment with varying degrees of ease.",
        tierOne: "You gain a +10 bonus when resisting Burn and Frostbite.",
        tierTwo: "You gain a +20 bonus when resisting Burn and Frostbite.",
        tierThree: "You gain a +40 bonus when resisting Burn and Frostbite.",
      	tier: 0,
			},

      equilibrium: {
        name: "Equilibrium",
        description: "You always land on your feet after falling or being thrown. You don’t go prone from standard maneuvers.",
      	tier: 0,
			},

      escapeArtist: {
        name: "Escape Artist",
        description: "You can find a weakness in any prison.",
        tierOne: "You gain a +10 bonus to all checks made to escape a physical constraint.",
        tierTwo: "You gain a +20 bonus to all checks made to escape a physical constraint.",
      	tier: 0,
			},

      exoticWeaponUser: {
        name: "Exotic Weapon User",
        description: "You can use a complex and wild weapon.",
        tierOne: "You can barely use this weapon. Subtract 20 from your base attack when using this weapon.",
        tierTwo: "You can understand the fundamentals of this weapon. Subtract 10 from your base attack when using this weapon.",
        tierThree: "You can use this weapon competently. Use your base attack when using this weapon.",
        tierFour: "You can use this weapon effectively. Add 15 to your base attack when using this weapon.",
        tierFive: "You have mastered this weapon. Add 25 to your base attack when using this weapon.",
      	tier: 0,
			},

      everyman: {
        name: "Everyman",
        description: "You can use moves in the Mundane genre.",
      	tier: 0,
			},

      expertInitiative: {
        name: "Expert Initiative",
        description: "You gain advantage on all initiative rolls.",
      	tier: 0,
			},

      fakeOut: {
        name: "Fake Out",
        description: "You can make a fake attack against an enemy's defenses. On a success, you can make an attack against another target within range. They must roll their defense flat-footed. This feat can be used once per encounter.",
      	tier: 0,
			},

      fastResponse: {
        name: "Fast Response",
        description: "Once per encounter, you can reflexively counter attack any creature slower than you.",
      	tier: 0,
			},

      fighter: {
        name: "Fighter",
        description: "You are an avid combatant, and can enter all fights without being stunned. You don't have to reroll initiative after taking a breather or at the end of a set.",
      	tier: 0,
			},

      //TODO: This feat will likely get some changes to it.
      flak: {
        name: "Flak",
        description: "You can treat grenades as precision attacks against yourself. Non-AoE capital weapons aren’t considered AoE against you.",
      	tier: 0,
			},

      flinch: {
        name: "Flinch",
        description: "You gain an Attack of Opportunity on any visible creature that is stunned within your range. Stacks with similar feats.",
      	tier: 0,
			},

      fullFortitude: {
        name: "Full Fortitude",
        pre: [["level", 10]],
        description: "You can forgo your Dodge Defense to double your Block Defense for the rest of an encounter. You can still only use your Block Defense to defend against one attack in a round.",
      	tier: 0,
			},

      focus: {
        name: "Focus",
        description: "You can hone your mind to concentrate on one thing. Distractions are half as effective. You can spend consecutive standard actions to add +10 per standard action to a single attack on a single target. This feat can stack until the end of the current set, but when the set ends, all bonuses disappear. Additionally, Focus prevents exhaustion from straining an action once per long rest.",
      	tier: 0,
			},

      guardCounter: {
        name: "Guard Counter",
        pre: [["level", 10]],
        description: "If you successfully block a melee attack, you can make a counter attack against your attacker. This can be done a number of times equal to your tier of play every long rest. Subsequent uses of this feat inflict levels of exhaustion until you take a long rest.",
      	tier: 0,
			},

      gentleFighter: {
        name: "Gentle Fighter",
        description: "You can remove Murderous Intent from any attack you make.",
      	tier: 0,
			},

      greaseMonkey: {
        name: "Grease Monkey",
        description: "You can use moves in the Tech genre.",
      	tier: 0,
			},

      grenadier: {
        name: "Grenadier",
        tierOne: "You can double the range of thrown grenades.",
        tierTwo: "You can treat grenades as unblockable non-AOE precision attacks against all creatures in the range of the explosion.",
      	tier: 0,
			},

      guerilla: {
        name: "Guerilla",
        pre: [["level", 25]],
        description: "You can attack from stealth without breaking Stealth or re-rolling it.",
      	tier: 0,
			},

      headstrong: {
        name: "Headstrong",
        pre: [["level", 25], ["block", 25]],
        description: "You double your Armor when blocking attacks from the front or above you. This feat only works if you haven't moved this round, and doesn’t work against AoE.",
      	tier: 0,
			},

      hearty: {
        name: "Hearty",
        pre: [["constitution", 14]],
        description: "You have terrific health and a sturdy immune system. It takes twice as long for poison to inflict a check, and all poison damage is halved.",
      	tier: 0,
			},

      higherMind: {
        name: "Higher Mind",
        description: "You can use moves in the Psychic genre.",
      	tier: 0,
			},

      //TODO: Figure out how to implement multi choice feats like this.
      homeFieldAdvantage: {
        name: "Home-Field Advantage",
        description: "Haven't worked out how to implement this one yet.",
      	tier: 0,
			},

      hook: {
        name: "Hook",
        pre: [["level", 10]],
        definition: "You can use Climb to throw enemies without needing to roll to grapple them first. For all other effects, this still counts as a grapple.",
      	tier: 0,
			},

      hopTo: {
        name: "Hop To",
        pre: [["level", 10], ["dexterity", 12]],
        definition: "You can return to your feet from a prone position as a reflexive action.",
      	tier: 0,
			},

      improvFighter: {
        name: "Improv Fighter",
        description: "You can treat any object you can carry as a weapon with which you have proficiency. This can only be done once a long rest. This does not apply to actual weapons (does work on a 2x4, doesn’t work on a baseball bat).",
      	tier: 0,
			},

      intuition: {
        name: "Intuition",
        description: "You can use your Detection bonus in place of Investigation, but only ever as having a single level of training. (Eg. if you have a 40 to Detection but no training in Investigation, then you may only receive perks of 1 level of training in Investigation.",
      	tier: 0,
			},

      ironLung: {
        name: "Iron Lung",
        description: "You have the ability to control your breath while asphyxiating. This feat does not take effect against strangulation.",
        tierOne: "You gain additional minute of air before you must make a Fortitude Save.",
        tierTwo: "You gain two additional minutes of air before you must make a Fortitude Save.",
        tierThree: "You gain three additional minutes of air before you must make a Fortitude Save.",
      	tier: 0,
			},

      jitter: {
        name: "Jitter",
        description: "You treat friendly AoE as partial cover.",
      	tier: 0,
			},

      killerInstinct: {
        name: "Killer Instinct",
        description: "You can add Murderous Intent to any attack you make.",
      	tier: 0,
			},

      leadArm: {
        name: "Lead Arm",
        pre: [["level", 10]],
        description: "You can wield size 2 weapons one-handed.",
      	tier: 0,
			},

      liftKick: {
        name: "Lift Kick",
        description: "You can make a basic melee attack while prone. If it lands, you will stand to your feet and knock your target prone. On a failure, your target may attack you for free. If you make a basic melee attack after jumping, your damage is doubled and you travel another 2 squares into the air.",
      	tier: 0,
			},

      loopHole: {
        name: "Loop Hole",
        description: "Your attack bonuses (not damage) double against targets using Akimbo Fighter, if they have two or more weapons equipped.",
      	tier: 0,
			},

      lowCounter: {
        name: "Low Counter",
        description: "You perform a low kick on any adjacent creature. That creature may choose to forego any attacks declared against you. If they do not, they must make a Reflex Save against a DC equal to your melee stat (without base attack) +10 per level of martial arts. If your target fails, they are knocked prone. At level 25, you may instantly trip all adjacent creatures once per encounter.",
      	tier: 0,
			},

      masochist: {
        name: "Masochist",
        pre: [["not species", "construct"]], /* TODO: Implement "not species" prerequisite */
        description: "You convert your TH into HP for a base armor bonus of +10.",
      	tier: 0,
			},

      martialArts: {
        name: "Martial Arts",
        description: "You have trained in a dangerous fighting style.",
        tierOne: "You are a novice. Add an additional die of damage to successful melee attacks.",
        tierTwo: "You are proficient. Add two additional dice of damage to successful melee attacks.",
        tierThree: "You are a master. Add three additional dice of damage to successful melee attacks.",
      	tier: 0,
			},

      multiLimb: {
        name: "Multi-Limb",
        pre: [["level", 20], ["species", "construct", "energybeing"]],
        tierOne: "You have built or formed an additional limb, and can use it to equip or hold items.",
        tierTwo: "Your size increases by 1, and you gain another limb.",
      	tier: 0,
			},

      naturalLeader: {
        name: "Natural Leader",
        description: "You can motivate and inspire your allies by giving a rousing speech. Using this feat more than once per encounter inflicts exhaustion.",
        tierOne: "All adjacent allies with a lower Influence score than you recovers 6d6 TH.",
        tierTwo: "All adjacent allies with a lower Influence score than you recovers 12d6 TH.",
      	tier: 0,
			},

      nemesis: {
        name: "Nemesis",
        pre: [["level", 20]],
        definition: "You have a sworn enemy. If you take this feat, your enemy will obtain it as well. If you convert your nemesis to your side, or vice versa, this feat is replaced with the Companion feat at the same level. You can only ever declare one nemesis at a time.",
        tierOne: "You and your foe gain a +10 to all combat rolls while in the same initiative. You gain advantage on skills you have training in when nearby your enemy, unless your enemy is also trained in that skill.",
        tierTwo: "Neither you nor your foe can inflict stun on the other, and the +10 bonus doubles to +20 but now applies to your allies and all of the allies of your foe as well.]",
      	tier: 0,
			},

      noDice: {
        name: "No-Dice",
        pre: [["level", 10]],
        tierOne: "If you are the target of an Attack of Opportunity and you successfully defend against it, you can hit your opponent with a counter attack if they are within range. This counterattack cannot chain or be reversed.",
        tierTwo: "You can roll an additional attack on any other target within range.",
      	tier: 0,
			},

      orientationMetro: {
        name: "Orientation (Metro)",
        description: "You have a natural intuition when navigating urban developments.",
        tierOne: "You gain a +15 bonus to Navigation, Stealth, and Investigation checks in urban environments.",
        tierTwo: "You gain a +25 bonus to Navigation, Stealth, and Investigation checks in urban environments.",
      	tier: 0,
			},

      orientationWild: {
        name: "Orientation (Wild)",
        description: "You have a natural intuition when navigating rural developments.",
        tierOne: "You gain a +15 bonus to Navigation, Stealth, and Investigation checks in rural environments.",
        tierTwo: "You gain a +25 bonus to Navigation, Stealth, and Investigation checks in rural environments.",
      	tier: 0,
			},

      paranoia: {
        name: "Paranoia",
        description: "You inflict a -20 to Persuasion and Bluff checks made against you. Only works once per person every long rest.",
        pre: [["feat", "alert", 1]],      	tier: 0,
			},

      parry: {
        name: "Parry",
        pre: [["level", 25], ["baseAttack", 25]],
        description: "If your base attack drops during combat this feat will no longer function. You can make an attack roll against an incoming attack to derail it. A success damages your attacker for their own damage. A failure doubles the incoming damage.",
      	tier: 0,
			},

      pathfinding: {
        name: "Pathfinding",
        tierTwoPre: [["level", 25]],
        tierOne: "You can treat travel between scenes in the story as a short rest. You can also pass over objects that create partial cover or high ledges without any loss in movement.",
        tierTwo: "You can cut through squares diagonally and treat it as only one movement point instead of two. You can also ignore any terrain or field effects if you end your movement action outside of it.",
      	tier: 0,
			},

      pendelum: {
        name: "Pendulum",
        description: "You can make an Attack of Opportunity on any creature that hits you with knockback or throws you. This attack gets a +5 bonus for every square traveled but starts at a -20 penalty.",
      	tier: 0,
			},

      pursuit: {
        name: "Pursuit",
        pre: [["feat", "martialArts", 2]],
        description: "You can make an Attack of Opportunity on any creature that attempts to move away from a square adjacent to you. If you use this feat more than once in a single round, you are inflicted with a level of exhaustion for each use.",
      	tier: 0,
			},

      plantWhisperer: {
        name: "Plant Whisperer",
        description: "You can use moves in the Bio genre.",
      	tier: 0,
			},

      pose: {
        name: "Pose",
        description: "You can choose to spend a signature action and make a signature pose. You will receive 3 stars for this, and your next move will cost 3 less stars to use (excluding flashes).",
        tierOne: "You can use use the Pose action 3 times every short rest.",
        tierTwo: "You can use the Pose action 6 times every short rest.",
      	tier: 0,
			},

      overpose: {
        name: "Overpose",
        pre: [["feat", "pose", 1], ["level", 25]], /* TODO: Distinguish between OR and AND cases when it comes to feat prerequistes */
        description: "You can choose to spend a signature action and make an advanced and incredibly flamboyant signature pose.",
        tierOne: "You regain 5 stars, and your next move will cost 5 less stars to use (excluding flashes).",
        tierTwo: "You regain 10 stars, and your next move will cost 10 less stars to use (excluding flashes).",
        tierThreePre: [["level", 60]],
        tierThree: "You regain 15 stars, and your next move will cost 15 less stars to use (excluding flashes).",
      	tier: 0,
			},

      heroic: {
        name: "Heroic",
        pre: [["feat", "pose", 2], ["feat", "overpose", 1], ["level", 45]], /* TODO: Another OR case */
        description: "You can spend 2 standard actions holding a powerful pose that will restore 50% of an ally’s max stars.",
      	tier: 0,
			},

      villainousPose: {
        name: "Villainous Pose",
        pre: [["feat", "overpose", 2], ["level", 45]], /* TODO: Another OR case */
        description: "You can spend 2 standard actions holding a powerful pose that will restore 50% of your max stars. This can only be used once per long rest, and provokes Attacks of Opportunity against you from any enemies in range.",
      	tier: 0,
			},

      hyperArmorProficiency: {
        name: "Hyper Armor Proficiency",
        pre: [["level", 25], ["armorProficiency", "heavy"]], /* TODO: Prerequisite special case, armor proficiency */
        description: "You can equip the most durable armors ever created. Gain +5 to your max armor stat.",
      	tier: 0,
			},

      promise: {
        name: "Promise",
        pre: [["level", 10]],
        description: "You have made a solemn vow, to yourself, your loved ones, or the world. You may double your Will Save vs Demotivation, unless all of your teammates have been defeated.",
      	tier: 0,
			},

      /* TODO: Add psychological analysis once it gets changed. */

      quickDraw: {
        name: "Quick Draw",
        description: "You can ready a weapon or switch weapons as a reflexive action.", /* TODO: Check for changes */
      	tier: 0,
			},

      rawReflex: {
        name: "Raw Reflex",
        pre: [["level", 10]],
        description: "You can forgo your Block Defense to double your Dodge Defense for the rest of an encounter. You may still only use your Dodge Defense to defend against one attack in a round.",
      	tier: 0,
			},

      savageStars: {
        name: "Savage Stars",
        description: "Any time you are inflicted with a check, you can make an Attack of Opportunity on whatever inflicted you with the check, so long as you are still conscious and alive.",
      	tier: 0,
			},

      savoirFaire: {
        name: "Savoir Faire",
        description: "You can use your Influence bonus for initiative instead of your Dexterity bonus.",
      	tier: 0,
			},

      /* TODO: Add stunlock feat once dynamic feats are figured out. */

      gigaShift: {
        name: "Giga Shift",
        pre: [["level", 20]],
        description: "You undergo an intense transformation to empower yourself farther than before. Taking this feat will allow you to increase your shift's power to the GM's discretion.",
      	tier: 0,
			},

      hyperShift: {
        name: "Giga Shift",
        pre: [["level", 35]],
        description: "You undergo an incredible transformation to empower yourself to the absolute of your ability. Taking this feat will allow you to greatly increase your shift's power to the GM's discretion.",
      	tier: 0,
			},

      shiftBurst: {
        name: "Shift Burst",
        description: "You can activate your shift as a reflexive action.",
      	tier: 0,
			},

      sneakAttack: { /* TODO: This feat is dynamic, so wording may change */
        name: "Sneak Attack",
        description: "You can take advantage of a flat-footed enemy for bonus damage on an attack.",
        tierOne: "Add 2d6 damage to your attack.",
        tierTwo: "Add 3d6 damage to your attack.",
        tierThree: "Add 4d6 damage to your attack.",
      	tier: 0,
			},

      socialButterfly: {
        name: "Social Butterfly",
        tierOne: "You gain a +25 bonus to all influence checks when 10 or more people are nearby.",
        tierTwo: "You can choose to have every Influence check made attract more people.",
      	tier: 0,
			},

      suppressiveFire: {
        name: "Suppressive Fire",
        description: "You use projectiles to keep attackers at bay. You can create suppression on a single target, with non AOE projectile attacks.",
      	tier: 0,
			},

      takedown: {
        name: "Takedown",
        description: "You can choose one target within melee range. They must make a Reflex Save against a DC of double your Strength bonus +15. This attack does not deal damage. If successful, the target is knocked prone.",
      	tier: 0,
			},

      taunt: {
        name: "Taunt",
        tierOne: "You can choose one target and force them to make a Will Save at a DC of 20 + your Influence bonus. If the target fails, you can re-declare one of the target's standard actions for that round.",
        tierTwo: "You can choose one target and force them to make a Will Save at a DC of 35 + your Influence bonus. If the target fails, you can re-declare two of the target's standard actions for that round or their movement action.",
      	tier: 0,
			},

      teamPlayer: {
        name: "Team Player",
        description: "You are excellent at working in a group. You have the ability to combine your moves with teammates, or aid them in skill checks.",
        tierOne: "You can attempt to assist in skill checks you have equal or greater skill in, and you can do combined moves with up to 1 other character who has Team Player.",
        tierTwo: "You can attempt to assist with skill checks regardless of your skill in them, and you can do combo moves with any other character.",
      	tier: 0,
			},

      triage: {
        name: "Triage",
        pre: [["level", 10], ["skill", "knowledgeAnatomy"]], /* TODO: Prerequisite special case: knowledge skill */
        description: "Your understanding of medical equipment allows you to use healing items twice, and doubles their effectiveness.",
      	tier: 0,
			},

      triangulate: {
        name: "Triangulate",
        pre: [["level", 25]],
        description: "You instantly detect stealthed creatures your allies are aware of, or that attack you or your allies. You can ignore partial cover if an ally can also see the target.",
      	tier: 0,
			},

      triggerFinger: {
        name: "Trigger Finger",
        description: "Your relevant stat bonus to initiative rolls (usually Dexterity) is doubled. You can attack twice during a surprise round, or attack once when being surprised.",
      	tier: 0,
			},

      trueGrit: {
        name: "True Grit",
        description: "You use your pain to drive your spirit, and remind you why you fight. You can add 3 dice to the damage of an attack that just hit you, and you gain stars equivalent to the total dice of damage including the dice added by this feat. Additional damage from weapon material or proficiency isn’t included.",
      	tier: 0,
			},

      /* TODO: United feat needs rewrites */

      undaunted: {
        name: "Undaunted",
        description: "You are adept at enduring extremely painful situations. You do not enter shock if stunned by a check.",
        tierOne: "No penalty occurs if one check is inflicted.",
        tierTwo: "No penalty occurs if two checks are inflicted.",
      	tier: 0,
			},

      veteran: {
        name: "Veteran",
        description: "You can stay cool under fire. This feat drops non-Flash Suppression by one grade (full to partial, partial to none).",
      	tier: 0,
			},

      warHero: {
        name: "War Hero",
        pre: [["level", 20], ["feat", "veteran"]],
        description: "You can stay calm and focused under fire. You are immune to suppression, except from flashes.",
      	tier: 0,
			},

      /* TODO: Weapon Proficiency is currently dynamic, may undergo changes. */

      zeitgeistConduit: {
        name: "Zeitgeist Conduit",
        description: "You can use moves in the Energy genre, and can generate power based on emotional or philosophical charge.",
        tier: 0,
      }
    }
  }

  componentDidUpdate(prevState){
    if (!equal(prevState, this.state)){
      console.log("Component updated, tier " + this.state.feats.actionSurge.tier);
    }
  }

  componentDidMount(){
    console.log("Mounted feats screen");
    let feats = this.props.route.params.feats;
    if (feats != undefined){
      this.setState({ feats }, () =>
      this.props.navigation.setOptions({
         headerRight: props => (
           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Build', {
               navigation: this.props.navigation,
               equipmentAvail: true,
               feats: this.state.feats,
             })}
             title="Accept"
             color='rgb(250, 0, 115)'
           >
             <Text style={styles.headerButton}>Accept</Text>
           </TouchableOpacity>
         )
       })
      );
    }
    else {
      this.props.navigation.setOptions({
         headerRight: props => (
           <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Build', {
               navigation: this.props.navigation,
               equipmentAvail: true,
               feats: this.state.feats,
             })}
             title="Accept"
             color='rgb(250, 0, 115)'
           >
             <Text style={styles.headerButton}>Accept</Text>
           </TouchableOpacity>
         )
      })
    }
   }

  addFeat = feat => {
    let feats = this.state.feats;
    console.log("Add feat with tier " + feat.tier);
    feats[feat.id].tier = feat.tier;
    this.setState({ feats });
  }

  render() {
    const props = this.props;
     return (
       <>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
             <Text style={styles.title}>Choose Feats</Text>
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.actionSurge} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.aerialCombat} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.aerobatics} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.aggressiveInitiative} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.aggressiveObservation} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.akimboFighting} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.alert} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.ambulatoryExpert} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.ampleAttack} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.armorProficiency} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.bastion} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.battleRush} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.blindSpot} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.bornSurvivor} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.bulk} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.blitz} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.brace} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.comboKing} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.collisionExpert} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.companion} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.confidentFighter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.cosmonaut} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.counterWeight} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.crushingCounter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.culturalChameleon} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.deduction} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.defang} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.defensiveRush} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.deflect} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.delicateFighter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.dexterousDisarm} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.dodgeCounter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.disguisedStrike} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.environmentalAdaptation} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.equilibrium} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.escapeArtist} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.exoticWeaponUser} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.everyman} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.expertInitiative} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.fakeOut} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.fastResponse} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.fighter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.flak} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.flinch} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.fullFortitude} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.focus} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.guardCounter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.gentleFighter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.greaseMonkey} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.grenadier} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.guerilla} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.headstrong} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.hearty} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.higherMind} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.homeFieldAdvantage} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.hook} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.hopTo} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.improvFighter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.intuition} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.ironLung} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.jitter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.killerInstinct} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.leadArm} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.liftKick} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.loopHole} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.lowCounter} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.masochist} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.martialArts} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.multiLimb} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.naturalLeader} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.nemesis} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.noDice} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.orientationMetro} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.orientationWild} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.paranoia} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.parry} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.pathfinding} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.pendelum} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.pursuit} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.plantWhisperer} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.pose} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.overpose} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.heroic} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.villainousPose} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.hyperArmorProficiency} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.promise} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.quickDraw} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.rawReflex} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.savageStars} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.savoirFaire} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.gigaShift} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.hyperShift} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.shiftBurst} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.sneakAttack} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.socialButterfly} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.suppressiveFire} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.takedown} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.taunt} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.teamPlayer} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.triage} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.triangulate} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.triggerFinger} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.trueGrit} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.undaunted} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.veteran} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.warHero} />
             <Feat {...props} addFeat={this.addFeat} feat={this.state.feats.zeitgeistConduit} />
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
   headerButton: {
     fontSize: 15,
     paddingHorizontal: 20,
     color: "white",
   },
 });
