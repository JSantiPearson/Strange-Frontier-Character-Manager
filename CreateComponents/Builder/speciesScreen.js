import React, { Component } from 'react';
import { View, Dimensions, Button, Modal, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
* Option is a component that renders a button that will redirect the user to a page
* that goes into detail about the species they have selected, and provides them an option
* to choose that species as their character's.
**/
function Option(props){
  return(
    <TouchableOpacity style={styles.option} onLongPress={() => props.setDetailsVisible(props.species)} onPress={() => props.navigation.navigate('Species Choice', {
        route: props.route,
        navigation: props.navigation,
        species: props.species,
        stats: props.stats
      })}>
      <View style={styles.column}>
        <Text style={styles.species}>{props.name}</Text>
        <Text style={styles.stats}>Speed: {props.stats.speed}     Resilience: {props.stats.resilience}      Awareness: {props.stats.awareness}</Text>
      </View>
    </TouchableOpacity>
  );
}

/**
* Component that takes props like a name and description to display species information
**/
function SpeciesModal(props){ //TODO: Fix the scrolling within the modal
  return(
    <Modal
       animationType="slide"
       transparent={true}
       visible={props.visible}
     >
           <View style={styles.centeredView}>
             <View style={styles.modalView}>
               <SafeAreaView>
                 <ScrollView>
                   <TouchableOpacity onPress={() => props.setDetailsVisible(props.species)}>
                     <Icon name="close-circle" style={{paddingBottom: 20}} size={25} color='rgb(250, 0, 115)' />
                   </TouchableOpacity>
                   <Text style={styles.speciesTitle}>{props.name}</Text>
                   <Text style={styles.text}>{props.lore}</Text>
                   {props.traits.map((trait) => {
                     return (
                       <>
                         <Text style={styles.sectionTitle}>{trait.title}</Text>
                         <Text style={styles.text}>{trait.description}</Text>
                       </>
                     );
                   })}
                 </ScrollView>
               </SafeAreaView>
             </View>
           </View>
     </Modal>
  )
}

// constant variables containing objects that describe each species' stats.
const humanStats = {speed: 5, resilience: 5, awareness: 5};
const grubtubStats = {speed: 6, resilience: 4, awareness: 5};
const giantStats = {speed: 3, resilience: 7, awareness: 5};
const vermileStats = {speed: 6, resilience: 5, awareness: 4};
const capraStats = {speed: 5, resilience: 6, awareness: 4};
const ogoloidStats = {speed: 3, resilience: 5, awareness: 7};
const arachnetStats = {speed: 6, resilience: 3, awareness: 6};
const wheepeStats = {speed: 4, resilience: 6, awareness: 5};
const constructStats = {speed: 4, resilience: 6, awareness: 5};
const modhumanStats = {speed: 6, resilience: 6, awareness: 3};
const energybeingStats = {speed: 8, resilience: 3, awareness: 4};
const simianStats = {speed: 5, resilience: 5, awareness: 5};
const orbidenStats = {speed: 6, resilience: 2, awareness: 7};
const customStats = {speed: 5, resilience: 5, awareness: 5};

const humanLore = "Humans are smart and very creative. They aren't the strongest, fastest or most versatile race, but their intellect and exceptional stamina allows them to carry their weight. Humans know what they're capable of and use what advantages they do have to the fullest.";
const grubtubLore = "Grub Tubs have a deceptively cute name; however, this species is not to be trifled with. This race of mushrooms has always been the apex predator on their planet. This is why they never felt the need to head out into the stars. Grub Tubs like to fight with their hands and use those predatory instincts to their advantage. They are a fast, though not terribly sturdy species, and have speedy cell regeneration.";
const giantLore = "Giants are humans that were taken from Earth to another planet in the Stone Age. They are part of a warrior race that has a culture based on military dogmatism. Ruthlessly efficient and powerful, they are fearsome on the battlefield. Giants are more resilient than their earthling counterparts and develop muscle mass a lot easier. However their bigger size makes them slower and less flexible.";
const vermileLore = "The vermile went down two rather different evolutionary paths. The vermile in the upper city have grown into a culture of peaceful, clean, and friendly mouse people. The vermile in the lower city evolved to be a garbage focused culture of scavengers and scumbags. They are a species that isn't fast or strong but is very clever. Vermile are born negotiators and wickedly intelligent, often knowing when and when not to fight, assuring their own survival.";
const capraLore = "The capra are a race of goat-like people who have a vibrant culture, and along with the Giants, a multi system spanning empire. The Capra have exceptionally flexible limbs making them great at acrobatics and aerial combat. Capra are fast and durable if not on the dumber side, but what they lack in technical knowledge, they make up for in wisdom.";
const ogoloidLore = "The ogoloids are a nomadic bipedal slug race, with a culture that values justice. The ogoloids are, in some ways, the only force of law in the wild crazy fringe that is the Sombrero Galaxy. Ogoloids are stoic and tend to be very orderly, and will go out of their way to create order where none exists. Ogoloids are strong and durable, but not very fast. They have pretty average intellect overall.";
const arachnetLore = "The arachnet are a species of spider-like humanoids with four arms. Much like spiders, they can fire webs from their hands and thoracic cavity. Arachnet tend to be polite and are rather open minded about other cultures, but their society's priority is to unflinchingly serve their own monarchs. Arachnet communicate telepathically, and as a result can automatically translate conversations with other species without the use of a galactic translator.";
const wheepeLore = "Wheepes are a species of sentient plants. They have a thin layer of plant fiber covering their hard outer shell. These fibers closely resemble wheat. The wheepes are a gentle farming race that doesn't tend to fight. Wheepes aren't particularly strong or fast, but they're durable and wise.";
const constructLore = "Construct is the blanket intergalactic term for robots that have been given, or have achieved sentience. Because they are robots, they don't need to eat, sleep, or show mercy. They can be a walking kitchen or an unstoppable weapon of conquest and war - it all depends on who is inside of that sometimes remorseless robot heart. Constructs have physical characteristics that range based on their model, but generally they’re intelligent and durable.";
const modhumanLore = "Long ago, in humanity's hay day, they sold genetic samples of their species to aliens in exchange for technology. These aliens retreated back to their homes in the Sombrero Galaxy where they bred special humans designed to be the perfect slave miners. These humans are called mod-humans. Mod-Humans have since spread all over the Sombrero Galaxy, having no particular place to call home. Mod-Humans are durable, strong and fast.";
const energybeingLore = "Energy Beings are by far the most bizarre species in the whole supercluster. At the heart of an energy being is a battery. Not like a double A, but rather a conduit of abstract energy flowing throughout the universe. These batteries gain charge from sources of their conduit, such as emotions or philosophies. The energy absorbed forms a living consciousness, and as it ages, a tangible body of light will grow.";
const simianLore = "The simians are a race of monkey-like people who inhabit the sombrero galaxy. They have opposable thumbs on their feet and hands, and have hair covering most of their body.  Simians pride themselves on having a wide variety of skills. They aren't abnormally quick or strong, but sharp wit makes them great at adapting on the fly.";
const orbidenLore = "A race of squid like cephalopods hailing from the Twin Spiral galaxy. These aquatic lifeforms are equipped with gear that allows them to traverse land, but deep oceans are where they are most at home. Orbidens are not particularly durable, but are agile and elusive."

const humanTraits = [
  {
    title: "Human Spirit",
    description: "A human will not lose a check when reduced to 0 hp, and they will remain conscious for the rest of the round. Humans can activate the Last Stand if they are about to die without needing to be the only remaining member of their team. This maneuver will cost 25 stardust, and will only last 3 rounds. It can be done once a long rest."
  },
  {
    title: "Social Creature",
    description: "This species is well adapted to social environments and conditions. This gives humans the Social Butterfly 1 feat."
  },
  {
    title: "Survival Instinct",
    description: "Humans can analyze a decision or action they or their ally is making to determine how likely it is to result in catastrophy or in triumph. Make a WIS check to figure out the likelihood the human or their ally will be able to perform an action. On a failure, they will have a check inflicted on them. Humans start the game with training in the Survival skill."
  },
  {
    title: "Human Nature",
    description: "Humans get the Fighter 1 and Focus 1 feats."
  },
  {
    title: "Armor Proficiency",
    description: "Humans can equip medium armor and below."
  }
];

const grubtubTraits = [
  {
    title: "Apex Predator",
    description: "Grub Tubs gain +20 in the Survival and Investigation skill automatically. This will increase to +40 at level 25 and then +60 at level 50."
  },
  {
    title: "Mangle",
    description: "The Grub Tub charges at their foe and savagely beats them for 3d6 + 1d6 times DEX Bonus. This attack has a 40% chance to induce the currently stored poison (see Fungal Life Form). This attack is a contested DEX check that counts as a grapple, and consumes a full turn. The target must be within the grub tub’s movement range. If this attack fails, the grub tub is considered flat-footed until their next resolution phase."
  },
  {
    title: "Fungal Recuperation",
    description: "Grub Tubs can spend a standard action to automatically recover from one persistent injury, no matter the level, once every long rest."
  },
  {
    title: "Fungal Life Form",
    description: "Grub Tubs can absorb toxins into their bloodstream (up to Type A) and use them for their own use later on. If the grub tub’s CON stat is dropped below 10 by whatever means, foreign toxins will affect them normally until cured or restored to normal. Grants Type A immunity. If no toxin is absorbed, the base level of toxin is considered Class E."
  },
  {
    title: "Fungal Kinship",
    description: "Grub Tubs gain access to Bio moves with the Plant Whisperer feat. They can't access mundane moves without the Everyman feat."
  },
  {
    title: "Armor Proficiency",
    description: "Grub Tubs can only equip light armor."
  }
];

const giantTraits = [
  {
    title: "Thick Skin",
    description: "Giants are born with thicker skin than most and as a result have more resilience than other races. +8 to base resilience."
  },
  {
    title: "Power Through",
    description: "Giants can resist losing their last point of threshold once per long rest. Excess damage bleeds into HP."
  },
  {
    title: "Warrior Race",
    description: "Giants are dogmatic worshipers of combat. This can range from the desire to scuffle every now and then, to a homicidal urge to kill anything that gets in their way. Giants get the Killer Instinct feat. They do not get to choose a free knowledge, and will automatically start with Knowledge: Military."
  },
  {
    title: "Armor Proficiency",
    description: "Giants can equip heavy armor and below."
  }
];

const vermileTraits = [
  {
    title: "Questionable Diet (Under City)",
    description: "Vermile of the under city have a garbage diet - literally. A vermile character of the Under City variant can treat any rotten food item as if it was normal with no penalty, and actually gain sustenance (2 TH) from it."
  },
  {
    title: "Thieves Reputation (Under City)",
    description: "Vermile of the under city are raised in a culture of free criminality. Gain training in either the Bluff skill or the Stealth skill."
  },
  {
    title: "Blissful Ignorance (Upper City)",
    description: "Vermile of the upper city take advantage of their culture's psychological conditioning. They gain a +15 to their Will save."
  },
  {
    title: "Ruthless Support (Upper City)",
    description: "The merciless culture of the fascist upper city leaves its mark on the vermile. Upper City vermile gain the Killer Instinct feat."
  },
  {
    title: "Scavenger's Nose",
    description: "Vermile take advantage of their evolutionary survival tool, their nose, in all sorts of ways. You may gain a +10 in the Investigation skill, a +10 in the Navigation skill, or the Alert feat."
  },
  {
    title: "Armor Proficiency",
    description: "Vermile can only equip light armor."
  }
];

const capraTraits = [
  {
    title: "Tolerant Liver",
    description: "Capra can process chemicals and rotten food with a greatly reduced penalty. Gives partial Type C immunity (rotten food only)."
  },
  {
    title: "Light Fur",
    description: "A capra's fur provides them with protection in colder climates and as such they can resist Cold 3 or lower. On the other hand, they take a -5 x (level of heat) penalty in warmer climates."
  },
  {
    title: "Rubber Limbs",
    description: "Capra limbs have a higher percentage of cartilage, this allows them greater flexibility. They gain training in the Acrobatics skill."
  },
  {
    title: "Superior Balance",
    description: "Capra will not be knocked prone when falling or if hit in mid-air. Capra also gain advantage against any attempt to knock them prone, except when under the effect of a flash."
  },
  {
    title: "Armor Proficiency",
    description: "Capra can equip medium armor and below."
  }
];

const ogoloidTraits = [
  {
    title: "Slippery Skin",
    description: "Ogoloids can produce oil from their skin that makes it more slippery and resistant to temperature. Ogoloids inflict a -10 penalty on physical grappling checks used against them. They can also use this to gain climate resistance 1 for up to an hour."
  },
  {
    title: "Slow Metabolism",
    description: "Ogoloids are nomadic by nature and evolved to make what they eat last longer. Ogoloids only have to eat once per week. All toxins that enter an Ogoloid's body take twice as long to start affecting the Ogoloid, and twice as long to kill them. Poisons with instant effect will be delayed by an hour. Type S Poison will not be affected by this, and they are not immune to any poisons."
  },
  {
    title: "Newtonian Rebel",
    description: "Ogoloids are immune to fall damage from a drop less than 40 ft high, and take only half damage from anything below 80 ft."
  },
  {
    title: "Nomad's Cargo",
    description: "Ogoloids are a nomadic people and carried all of their belongings with them wherever they went. Because of this, Ogoloids have evolved to handle large amounts of weight over long periods of time with no problem. Ogoloids gain the Armor Proficiency 1 feat."
  },
  {
    title: "Armor Proficiency",
    description: "Ogoloids can equip heavy armor and below."
  }
];

const arachnetTraits = [
  {
    title: "Webbing",
    description: "Arachnet have the ability to form web from their thoracic cavity and the palms of their hands. The webbing has a durability of 5 and is too weak to hold creature of size 2 or greater. When moving on webbing, the arachnet's speed is doubled, for other races it’s halved (round down). Webbing applies to energy beings as well, since the arachnet's psionic abilities flow through the web."
  },
  {
    title: "Sticky Fingers",
    description: "Arachnet can climb most walls with no difficulty, allowing them to reach high places and unique vantage points for combat. Arachnet start with training in the Climb skill."
  },
  {
    title: "Fast Fists",
    description: "Arachnet can choose to make four attacks with their four arms. The damage is 1d4 + STR per punch. Every attack after the first takes a stacking -5 to hit. This maneuver inflicts partial suppression, and while in use, the arachnet is considered flat footed to attacks from any square but the one they're facing. The Martial Arts feat still increases the die count. Using this more than once per round inflicts exhaustion."
  },
  {
    title: "Advanced Thinking",
    description: "Arachnet gain access to the Higher Mind feat. Since arachnet speak with psionics, their words automatically translate to any species they talk to, but without a translator, it does not work in reverse. Arachnet may roll any basic weapon projectile attack with Psionic instead of Ranged."
  },
  {
    title: "Unified Mind",
    description: "Arachnet are excellent at coordination. They gain the Team Player 1 feat."
  },
  {
    title: "Armor Proficiency",
    description: "Arachnet can equip medium armor and below."
  }
];

const wheepeTraits = [
  {
    title: "Agricultural Champion",
    description: "Wheepes are a species of humble farmers at heart. As a result, wheepes get a +20 to using Bio moves while in a forest, jungle, or other plant based biome. They can negate the material cost for Bio moves. Wheepes also gain training in Knowledge (Plant Biology)."
  },
  {
    title: "Plant Kinship",
    description: "Wheepes gain access to Bio moves with the Plant Whisperer feat. They can't access mundane moves without the Everyman feat."
  },
  {
    title: "Regrow",
    description: "Wheepes can solidify and lock up their joints, allowing them to integrate with soil near them and significantly regenerate their HP, and remove Checks inflicted on them. Every hour spent in this state regenerates 3d10 + 60 HP and removes one check. It takes 20 minutes to enter and exit this state, and when in this state the wheepe's Defense Stat is 50, but they can’t attack or move."
  },
  {
    title: "Mindful Combatant",
    description: "Wheepes are a traditionally gentle species, with a distaste for violence. Wheepes gain the Gentle Fighter feat."
  },
  {
    title: "Hardy Crops",
    description: "Wheepes gain a +2 to their Constitution Score."
  },
  {
    title: "Armor Proficiency",
    description: "Wheepes can equip heavy armor and below."
  }
];

const constructTraits = [
  {
    title: "Machine Mind",
    description: "As an unnatural intelligence, constructs have the unique ability to see themselves in a purely objective way. This lends not to a presence of bravery, but a certain lack of fear. Constructs gain a +30 to Will saves and the Mechanical Mind feat."
  },
  {
    title: "Reprogramming",
    description: "A construct can choose to swap a two star or lower move out when in combat, but has a 25% x the Move's Star Cost chance of creating a bug in their code."
  },
  {
    title: "Machinations of War",
    description: "Constructs gain access to Tech moves with the Grease Monkey feat. They can't access mundane moves without the Everyman feat."
  },
  {
    title: "Metal Head",
    description: "Constructs treat threshold (TH) as a second pool of HP titled Outer Plating, or OP for short. Constructs also have 10 points of natural armor. Since they do not have a threshold, the effects applied from gaining or losing it do not apply."
  },
  {
    title: "Armor Proficiency",
    description: "Constructs can equip heavy armor and below."
  }
];

const modhumanTraits = [
  {
    title: "Miner Vision",
    description: "Mod-Humans were engineered to see better in the dark caves of mining planets. This gives mod-humans the ability to see in low light conditions as if they were clear as day, suffering absolutely no penalty to vision. When in dark areas, mod-humans add 5 to their Awareness stat. In normal light conditions, mod-humans must wear protective eyewear due to the hypersensitivity of their eyes. They must make a Fortitude Save each minute against a DC 75, or go blind on a failure. Their Fortitude Stat worth in minutes is the max time they can resist before blindness is guaranteed."
  },
  {
    title: "Mod-Lung",
    description: "To better protect them against the thin air in mines, mod-human lungs are more resilient to toxins and can hold their breath safely for much longer than their earthling contemporaries. Mod-Humans gain the Iron Lung 1 feat."
  },
  {
    title: "Amped Adrenals",
    description: "Mod-Humans were given amped adrenal glands (to the detriment of their overlords). When mod-humans lose all their threshold, they can choose to make a control check against a DC 50 using their Will Save. The mod-human will enter a rage state that amps their STR, DEX, and CON bonus by 3 for one round. On a success, the mod-human can choose between a dramatic fight or flight response. Fight will give them an extra die of damage and double their defense for the rest of the round. Flight will double their speed and add 50% to their defense for the rest of that round, however they can not attack. On a failure, they will instead engage in a dramatic fright reaction and have a panic attack. This will apply the shock status effect to the mod-human."
  },
  {
    title: "Armor Proficiency",
    description: "Mod-Humans can equip medium armor and below."
  }
];

const energybeingTraits = [
  {
    title: "Battery",
    description: "An energy being's battery is where the consciousness is stored. It is essentially the nucleus of the energy being. The battery is tuned to a specific emotion or philosophical outlook. Interaction with sources of this charge will strengthen the energy being overtime and allow them to reach new pinnacles of their power. Energy beings gain the Zeitgeist Conduit feat."
  },
  {
    title: "Cycle Outsider",
    description: "Energy Beings in their base state can not interact with matter and as such must rely on other races for help, or learn to develop some form of tangibility on their own. However, because they are not a part of the cycle of matter, they are completely immune to all biological status effects or bonuses (immunity to Cold, Heat, and Poison Damage). -20 to all STR based abilities/skills, but not to the actual stat bonus. Weak to (takes double damage from) Piercing and Bludgeoning Damage."
  },
  {
    title: "Cosmic Emission",
    description: "Energy Beings can fire projectiles composed of their own body, this projectile counts as a basic melee for all other effects and has a range of 6+ their WIS bonus in squares. This attack uses the energy being's psionic attack bonus."
  },
  {
    title: "Light Weight Object",
    description: "Energy beings can increase or decrease their vertical position up to 3 squares, minus the planet’s gravity. (For example: Earth-Like Gravity is Gravity 1, so they can move 2 squares up or down freely, and hover above the ground.)"
  },
  {
    title: "Armor Proficiency",
    description: "Energy Beings can only equip light armor."
  }
];

const simianTraits = [
  {
    title: "Monkey Tree",
    description: "Simians have opposable digits on their feet. They gain +30 in the Climb skill, and they can make 2 two-handed grapple checks from any unobstructed position."
  },
  {
    title: "Free Form Fighter",
    description: "Simians are a race that is notably more adaptive in combat than most other sentient races. This is a product of their culture which prides a simian on how multifaceted their skill set is. As such, simians gain the Improv Fighter feat and an extra free knowledge of their choice."
  },
  {
    title: "Monkey Mouth",
    description: "Many simians love to run their mouth, and have a habit of getting themselves into trouble as a result. Simians gain the Taunt 1 feat."
  },
  {
    title: "Light Fur",
    description: "Simian fur provides them with protection in colder climates and as such they can resist Cold 3 or lower. On the other hand, they take a -5 x (level of heat) penalty in warmer climates."
  },
  {
    title: "Armor Proficiency",
    description: "Simians can equip medium armor and below."
  }
];

const orbidenTraits = [
  {
    title: "Temperature Sensitive",
    description: "Orbiden are incredibly sensitive to extreme temperatures, and as a result, all temperature based effects are doubly effective against Orbiden."
  },
  {
    title: "Aquatic Breather",
    description: "This is an item every Orbiden character may have in their inventory on creation. It allows the water breathing Orbiden to travel on land indefinitely, as long as it is equipped. It has a durability of 10 and provides 2 armor."
  },
  {
    title: "Pressure Sensitive",
    description: "Orbiden lived deep underwater in high pressure environments and evolved to move between high and low pressure easily. As a result, Orbiden can survive in a vacuum without a spacesuit so long as they have water and some form of temperature protection. This also allows them to detect changes in pressures around them, granting Orbiden a free Weapon Proficiency 1 of their choice."
  },
  {
    title: "Suction",
    description: "Orbiden gain a +30 on grapple and disarm checks, and a +20 against getting disarmed."
  },
  {
    title: "Aquatic Lifeform",
    description: "Orbiden can breathe freely in water and their Reflex save and Dex bonus doubles while underwater. The doubled Dex bonus does not affect the doubled Reflex."
  },
  {
    title: "Inkstinct",
    description: "Orbiden can fire a spray of sticky green fluid that induces rashes and gums up motors. Range 2 squares, conical AOE 3 squares wide at the longest point. Halves target's Speed for 1 round, and inflicts 1d4 of TH damage. While underwater, the effects are 4 times stronger. If used underwater, it allows the orbiden a burst of speed (4x base). If the orbiden collides with anyone while in this burst of speed they will inflict their maximum basic melee plus the number of squares traveled. This burst of speed must be in a straight line."
  },
  {
    title: "Armor Proficiency",
    description: "Orbiden can only equip light armor."
  }
];

class Species extends Component {
  state = {
    humanVisible: false,
    grubtubVisible: false,
  }

  setDetailsVisible = (species) => {
    var speciesVisible = [species]+"Visible";
    var visible = !this.state[speciesVisible];
    console.log(species + "Visible: " + visible);
    this.setState({ [speciesVisible]: visible });
  }

  render() { //TODO: Find an efficient way to incorporate species feats here.
     return (
       <>
       <SafeAreaView>
         <ScrollView style={styles.scrollView}>
           <View style={styles.container}>
             <Text style={styles.title}>Choose a Species</Text>
              <View style={styles.column}>
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="human"
                 name="Human"
                 stats={humanStats}
               />
               {this.state.humanVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="human"
                   name="Human"
                   visible={this.state.humanVisible}
                   traits={humanTraits}
                   stats={humanStats}
                   lore={humanLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="grubtub"
                 name="Grub Tub"
                 stats={grubtubStats}
               />
               {this.state.grubtubVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="grubtub"
                   name="Grub Tub"
                   visible={this.state.grubtubVisible}
                   traits={grubtubTraits}
                   stats={grubtubStats}
                   lore={grubtubLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="giant"
                 name="Giant"
                 stats={giantStats}
               />
             {this.state.giantVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="giant"
                   name="Giant"
                   visible={this.state.giantVisible}
                   traits={giantTraits}
                   stats={giantStats}
                   lore={giantLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="vermile"
                 name="Vermile"
                 stats={vermileStats}
               />
               {this.state.vermileVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="vermile"
                   name="Vermile"
                   visible={this.state.vermileVisible}
                   traits={vermileTraits}
                   stats={vermileStats}
                   lore={vermileLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="capra"
                 name="Capra"
                 stats={capraStats}
               />
               {this.state.capraVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="capra"
                   name="Capra"
                   visible={this.state.capraVisible}
                   traits={capraTraits}
                   stats={capraStats}
                   lore={capraLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="ogoloid"
                 name="Ogoloid"
                 stats={ogoloidStats}
               />
               {this.state.ogoloidVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="ogoloid"
                   name="Ogoloid"
                   visible={this.state.ogoloidVisible}
                   traits={ogoloidTraits}
                   stats={ogoloidStats}
                   lore={ogoloidLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="arachnet"
                 name="Arachnet"
                 stats={arachnetStats}
               />
               {this.state.arachnetVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="arachnet"
                   name="Arachnet"
                   visible={this.state.arachnetVisible}
                   traits={arachnetTraits}
                   stats={arachnetStats}
                   lore={arachnetLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="wheepe"
                 name="Wheepe"
                 stats={wheepeStats}
               />
               {this.state.wheepeVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="wheepe"
                   name="Wheepe"
                   visible={this.state.wheepeVisible}
                   traits={wheepeTraits}
                   stats={wheepeStats}
                   lore={wheepeLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 avigation={this.props.navigation}
                 species="construct"
                 name="Construct"
                 stats={constructStats}
               />
               {this.state.constructVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="construct"
                   name="Construct"
                   visible={this.state.constructVisible}
                   traits={constructTraits}
                   stats={constructStats}
                   lore={constructLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="modhuman"
                 name="Mod-Human"
                 stats={modhumanStats}
               />
               {this.state.modhumanVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="modhuman"
                   name="Mod-Human"
                   visible={this.state.modhumanVisible}
                   traits={modhumanTraits}
                   stats={modhumanStats}
                   lore={modhumanLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="energybeing"
                 name="Energy Being"
                 stats={energybeingStats}
               />
               {this.state.energybeingVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="energybeing"
                   name="Energy Being"
                   visible={this.state.energybeingVisible}
                   traits={energybeingTraits}
                   stats={energybeingStats}
                   lore={energybeingLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="simian"
                 name="Simian"
                 stats={simianStats}
               />
               {this.state.simianVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="simian"
                   name="Simian"
                   visible={this.state.simianVisible}
                   traits={simianTraits}
                   stats={simianStats}
                   lore={simianLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="orbiden"
                 name="Orbiden"
                 stats={orbidenStats}
               />
               {this.state.orbidenVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="orbiden"
                   name="Orbiden"
                   visible={this.state.orbidenVisible}
                   traits={orbidenTraits}
                   stats={orbidenStats}
                   lore={orbidenLore}
                 />
               }
               <Option
                 setDetailsVisible={this.setDetailsVisible}
                 route={this.props.route}
                 navigation={this.props.navigation}
                 species="custom"
                 name="Custom"
                 stats={customStats}
               />
               {this.state.customVisible &&
                 <SpeciesModal
                   setDetailsVisible={this.setDetailsVisible}
                   species="custom"
                   name="Custom"
                   visible={this.state.customVisible}
                   traits={[]}
                   stats={customStats}
                   lore={""}
                 />
               }
             </View>
           </View>
         </ScrollView>
       </SafeAreaView>
       </>
     )
   }
 }

 export default Species;

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 5,
     paddingTop: 10,
     backgroundColor: "black",
   },
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0
  },
  modalView: {
    height: Dimensions.get('window').height-35,
    width: Dimensions.get('window').width-15,
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 25,
    alignContent: "flex-start",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5
  },
  speciesTitle: {
    color: 'rgb(250, 0, 115)',
    fontSize: 30,
    fontFamily: 'CCWildWordsRoman',
    paddingVertical: 10,
  },
  sectionTitle: {
    color: 'rgb(250, 0, 115)',
    fontSize: 22,
    fontFamily: 'CCWildWordsRoman',
    paddingTop: 10,
    paddingBottom: 5,
    marginVertical: 10,
    borderBottomColor: 'rgb(250, 0, 115)',
    borderBottomWidth: 1,
  },
  text: {
    color: "white",
  },
   column: {
     flex: 1,
     justifyContent: "space-evenly",
   },
   option: {
     paddingHorizontal: 10,
     paddingVertical: 5,
     marginBottom: 2,
     borderBottomColor: 'rgb(250, 0, 115)',
     borderBottomWidth: 1,
   },
   title: {
     fontSize: 24,
     color: "white",
   },
   species: {
     flex: 1,
     fontSize: 16,
     paddingTop: 5,
     color: "white",
   },
   stats: {
     flex: 1,
     fontSize: 14,
     paddingTop: 5,
     color: "white",
     fontStyle: "italic",
   },
 });
