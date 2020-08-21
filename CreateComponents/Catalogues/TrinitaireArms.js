import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Item from './Items/item'

class TrinitaireArms extends Component {
  state = {
    activeSections: []
  }
  render() {
    return (
      <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Ranged Weaponry</Text>
            <Item
            name={"Galaggir's Auto Rifle"}
            price={1200}
            range={"10-30-50"}
            damage={"7d10"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"Replica of the same rifle used in the breach of Fort Kirck in the giant capra war. This rifle model still sees service."}
            />
            <Item
            name={"Molk'so SMG"}
            price={1350}
            range={"5-10-15"}
            damage={"5d10+20 AOE"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"A faithful copy of the dependable weapon Molk'so cobbled together himself while trapped behind lines of the arachnet hives."}
            />
            <Item
            name={"Admiral Brikk's DMR"}
            price={1475}
            range={"20-40-60"}
            damage={"3d10+30"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"The same type of rifle used in A. Brikk's infamous long range ambushes."}
            />
            <Item
            name={"Falcomoor's Sidearm"}
            price={1100}
            range={"15-25-35"}
            damage={"7d8+10"}
            durability={85}
            stats={[0, 0, 0, 0]}
            description={"Whenever Falcomoor had to draw his sidearm, the fight was won, then and there."}
            />
            <Item
            name={"Dackman's Laser Rifle"}
            price={1250}
            range={"40"}
            damage={"5d12"}
            durability={85}
            stats={[0, 0, 0, 0]}
            description={"Behind enemy lines, weapons breaking left and right, Dackman made many of this rifle to supply his soldiers in the struggle."}
            />
            <Item
            name={"Jergo's Automatic Laser Rifle"}
            price={1200}
            range={"40"}
            damage={"5d10+10 AOE"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"Modified by Jergo. She created this rifle variant to help soldiers whose eyesight was hindered, so they could stay in the fight."}
            />
            <Item
            name={"Scerkoe's Laser Sniper Rifle"}
            price={1500}
            range={"30-50-80"}
            damage={"(5d10, 6d10, 7d10)+20"}
            durability={95}
            stats={[0, 0, 0, 0]}
            description={"By Capra design, by Scerkoe's tinkering, a lineage remastered. This rifle takes less amunition to be more efficient."}
            />
            <Item
            name={"Mercy's Trench Rifle"}
            price={1400}
            range={"4-12-16"}
            damage={"7d10, 6d10, 5d10"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"A shotgun modeled off the one used by the hero of Pryoes herself in the \"charge of 200\". Comissioned in memoriam, of those who died on Pryoes 56."}
            />
            <Item
            name={"Coco's Crossbow"}
            price={2000}
            range={"8-16-24"}
            damage={"4d10 + Ammunition Damage"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"Coco was a famous terrestial beast from Fortisma. Coco could carry 500lbs. Now imagine the size of a crossbow that Coco could wield - although barely. Silent, hard to aim, and has enough torque to penetrate concrete."}
            />
            <Item
            name={"Icarus Anthem's Rocket Launcher"}
            price={2300}
            range={"30-50-70"}
            damage={"5d12 + Ammunition Damage (If N/A add + 20)"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"A former EDI human, but a Trinitaire giant at heart. His mastery of guided missles made his name known in memorial as the Rocketeer, until the day he flew too high."}
            />
            <Item
            name={"Sparrow's Shrieking LMG"}
            price={2100}
            range={"15-25-35"}
            damage={"7d12, 6d12, 5d12"}
            durability={80}
            stats={[0, 0, 0, 0]}
            description={"Sparrow's motto: \"Why make a warcry when your weapon can do it for you?\" - And at 2000 rounds a minute."}
            />
            <Item
            name={"Stormbane's Minigun"}
            price={3000}
            range={"15-25-35"}
            damage={"6d12, 1d4 knockback"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"The air cracked like thunder as Storm filled the battlefield with his minigun's laser fire. His custom model served him so well that it became a Trinitaire standard for heavy infantry."}
            />
          <Text>Telum Mass-Produced Weaponry</Text>
            <Item
            name={"Telum-I Laser Rifle"}
            price={1700}
            range={"20-40-60"}
            damage={"8d8"}
            durability={80}
            stats={[0, 0, 0, 0]}
            description={"A high grade laser rifle with a cutting edge visor link technology to compatable helmets giving bonus accuracy. Add 10 to your attack roll."}
            />
            <Item
            name={"Telum-II Machina Laser"}
            price={1750}
            range={"15-25-35"}
            damage={"5d12"}
            durability={85}
            stats={[0, 0, 0, 0]}
            description={"Built for team use, this rifle will put out more damage with more people using it at the same time. Add 1 die of damage for every user firing at the target if the shot lands."}
            />
            <Item
            name={"Telum-III Rail Rifle"}
            price={3500}
            range={"15-25-35"}
            damage={"7d10 + 50% AOE explosive damage on adjacent squares"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"A DMR style weapon with explosive ammunition. Can hit enemies adjacent to your target at half damage."}
            />
            <Item
            name={"Telum-IV Breach Shot"}
            price={2300}
            range={"15-25-35"}
            damage={"4d8, 6d8 if target is armored"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"A short to medium ranged kinetic rifle with armor piercing qualities. Add two additional dice of damage to armored targets."}
            />
            <Item
            name={"Telum-V CQB Gun"}
            price={2700}
            range={"10-15-20"}
            damage={"7d10, 6d10, 5d10"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"A short ranged weapon designed to richochet its ammo in close quarters for a higher chance to hit. The weapon has a conical spread of 3x every range fall off. Enemies need to make a Reflex check of DC 60 if adjacent to an object/surface in its conical spread. Failure deals the weapon's damage again, per adjacent object."}
            />
          <Text>Melee Weaponry</Text>
            <Item
            name={"Drog's Might Hammer"}
            price={2000}
            range={"1"}
            damage={"4d10 + (3d10 if target is non-biological)"}
            durability={90}
            stats={[0, 0, 0, 0]}
            description={"A long handled war hammer made in faithful recreation to the one Drog used in his \"Protests\" as he put it, of enemy barricades and armor."}
            />
            <Item
            name={"Rimhelm's Staff"}
            price={1900}
            range={"5"}
            damage={"9d8"}
            durability={95}
            stats={[0, 0, 0, 0]}
            description={"Surpisisingly nimble for a giant, Rimhelm specialized in disabling his targets with his staff before finishing them with as little resistance as possible."}
            />
            <Item
            name={"Solomon's Last Stand"}
            price={2200}
            range={"1"}
            damage={"9d8 Slashing Damage"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"Having spilt thousands' blood in their last defense to hold off the arachnet so that civilians could escape, this blade is now recreated in their memorial for his sacrifice."}
            />
            <Item
            name={"Grindwind's Saw"}
            price={1950}
            range={"1"}
            damage={"6d10, no penalty to attacks on limbs. (Still penalty for vitals)"}
            durability={95}
            stats={[0, 0, 0, 0]}
            description={"Grindwind was direct in his methods, his logic being if you take their hand how can they use their weapon?"}
            />
            <Item
            name={"Dallis Dawn's Morning Star"}
            price={2100}
            range={"2"}
            damage={"8d8 + 10"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"Dallis took pride in how hard her mace was to use as a sign of strength - as well as a sign for how hard her weapon could hurt. -10 on attack rolls."}
            />
            <Item
            name={"Latt's Fury"}
            price={2000}
            range={"1"}
            damage={"6d10 Slashing Damage"}
            durability={80}
            stats={[0, 0, 0, 0]}
            description={"A simple sword wielded at tremendous speed. This came to Latt's rescue while he was trapped in the trenches of Poreon 77 as two Arachnet war beasts hunted him down."}
            />
            <Item
            name={"Naia's Shade Blades"}
            price={1900}
            range={"1"}
            damage={"5d8 for each blade"}
            durability={60}
            stats={[0, 0, 0, 0]}
            description={"An ebony steel dagger and a polished silver dagger meant to be wielded together. As Naia put it, \"there can be no shadow without light.\""}
            misc={"+10 to Flat-Footed Defense if both daggers are used in one standard action. Uses Dex & Int instead of Str & Con."}
            />
          <Text>Explosives</Text>
            <Item
            name={"T3-21 Galleon Explosive"}
            price={3000}
            damage={"1d8 Capital Damage"}
            durability={10}
            stats={[0, 0, 0, 0]}
            description={"SIZE: LARGE\nFour cylindrical tubes connected into a mass explosive used to breach capital ships."}
            />
            <Item
            name={"T3-39 Bore Incidiary"}
            price={4500}
            damage={"1d6 Capital Damage every round"}
            durability={10}
            stats={[0, 0, 0, 0]}
            description={"SIZE: LARGE\nDetonated via remote or by ship board ordinance tube, explodes into a 15x15 area covering it in a caustic fiery substance for 12 rounds."}
            />
            <Item
            name={"T3-Tango Acid Charge"}
            price={4750}
            damage={"1d10 Capital Damage to armor and non-biological items"}
            durability={10}
            stats={[0, 0, 0, 0]}
            description={"SIZE: LARGE\nDetonated via remote or by ship ordinance tube, Explodes into a splash of acidic compound. Strips armor and other nonliving materials. CANNOT harm biological material or persons."}
            />
            <Item
            name={"T2-Mortar Shiphead"}
            price={2500}
            damage={"1d6 Capital Damage AOE 10 sq. radius"}
            durability={80}
            stats={[0, 0, 0, 0]}
            description={"SIZE: MEDIUM\nA 6\' explosive shiphead with metal tube to launch mortar shells at a distance."}
            />
            <Item
            name={"T2-Serpent Charge"}
            price={2100}
            damage={"8d8 AOE, 3 sq. radius"}
            durability={8}
            stats={[0, 0, 0, 0]}
            description={"A serpentine tossable explosive that will snake its way to the nearest enemy within 10 sq. once it lands on the ground."}
            />
            <Item
            name={"T2-Malachite Hand Grenade"}
            price={1900}
            damage={"6d10 AOE, 5 sq. radius"}
            durability={12}
            stats={[0, 0, 0, 0]}
            description={"A large copper headed explosive charge tossable by hand."}
            />
            <Item
            name={"T2-Spitfire Charge"}
            price={2100}
            damage={"7d10, No AOE"}
            durability={10}
            stats={[0, 0, 0, 0]}
            description={"On detonation this device begins to light into a plasma charge that sticks to targets. Takes one round to explode. 70 STR DC to remove."}
            />
            <Item
            name={"T1-X77 Firecracker"}
            price={5800}
            damage={"5d8 per round AOE, 3 sq. radius"}
            durability={12}
            stats={[0, 0, 0, 0]}
            description={"A string of explosives that detonate for 18 seconds continuosly."}
            />
            <Item
            name={"T1-E4 Hand Grenade"}
            price={700}
            damage={"4d8+10 AOE, 4 sq. radius"}
            durability={10}
            stats={[0, 0, 0, 0]}
            description={"Small, but mass producable and easy to toss. Can toss 2 per standard action."}
            />
          <Text>Armor and Wearables</Text>
            <Item
              name={"Trinit Hard Suit"}
              price={800}
              description={"A sealed ballistic suit usable for EVA and combat. Standard for most infantry."}
              category={"Light/Gear"}
              stats={[4, 0, 0, 0]}
            />
            <Item
              name={"Trinit Helm"}
              price={500}
              description={"A durable helmet with a visor uplink  for compatable weapons."}
              category={"Light/Head"}
              stats={[2, 0, 0, 1]}
            />
            <Item
              name={"Trinit Chest and Coil"}
              price={400}
              description={"A ballistic and metal alloy hard plate with flexible waist protection."}
              category={"Light/Torso"}
              stats={[10, 0, 0, 0]}
            />
            <Item
              name={"Trinit Greeves"}
              price={200}
              description={"Armored gauntlets fit for rugged use."}
              category={"Light/Arms"}
              stats={[5, 0, 0, 0]}
            />
            <Item
              name={"Kelly's Helmet"}
              price={750}
              description={"Used by the famous gunner in her many strike missions against the Imperial Giants during the violent stage of their divergence."}
              category={"Medium/Head"}
              stats={[4, 0, 0, 0]}
              misc={"+20 to Heavy Weapon rolls"}
            />
            <Item
              name={"Shoal's Goggles"}
              price={2000}
              description={"Modified with various lens magnifications of Shoal's design, have been mass produced to help other Trinitaire snipers."}
              category={"Light/Gear"}
              stats={[0, 0, 0, 0]}
              misc={"Add 3 dice of damage to final range segment on equipped Sniper Rifle."}
            />
            <Item
              name={"Malik's Cage"}
              price={500}
              description={"Malik liked having protection on top of his protection, so he fashioned an armored cage to wield on top of his normal armor to give that extra layer between him and enemy fire."}
              category={"Heavy/Gear"}
              stats={[10, 0, -2, 0]}
              misc={"Can be worn over bulky armor. -2 speed while worn."}
            />
            <Item
              name={"Grindwind's Platemail"}
              price={600}
              description={"Grindwind loved melee combat as much as he hated being hit in melee combat. Thus he ordered a chest piece to help with such a problem."}
              category={"Medium/Torso"}
              stats={[7, 0, 0, 0]}
              misc={"Add an additional 13 armor against melee attacks."}
            />
            <Item
              name={"Olive's Jet Plate"}
              price={1400}
              description={"Do you like to go fast? Olive did, so she welded a strafe jet to her torso armor."}
              category={"Light/Torso"}
              stats={[5, 0, 2, 0]}
              misc={"Can travel in a straight line up to 20 squares, once a long rest."}
            />
            <Item
              name={"Admiral Brikk's Coil"}
              price={1000}
              description={"Used by Brikk himself to rapid reload and hold extra ammo for his trusty rifle. "}
              category={"Light/Gear"}
              stats={[3, 0, 2, 0]}
              misc={"Can reload weapons as a free action."}
            />
          <Text>Items</Text>
            <Item
              name={"Medical Syrum"}
              price={1200}
              description={"A syringe filled with rigorously tested pharmaceuticals."}
              misc={"Heals 1d10 HP and any effects class C or lower."}
              category={"Small"}
              stats={[0, 0, 0, 0]}
            />
            <Item
              name={"Medical Crate"}
              price={1000}
              description={"A stock of medical supplies large enough to supply a small clinic for a day. Can be used 15 times for basic medical checks and or cures 1 class B effect or lower with 5 uses."}
              misc={"Heals 1d20 HP & TH."}
              category={"Large"}
              stats={[0, 0, 0, 0]}
            />
            <Item
              name={"Medical Case"}
              price={2300}
              description={"A compact utility set of medical tools and supplies. Heals with no check."}
              misc={"Heals 4d10 + 10"}
              category={"Medium"}
              stats={[0, 0, 0, 0]}
            />
            <Item
              name={"Handheld Deepwave Scanner"}
              price={2000}
              description={"A high powered scanning device used to give tactical read outs and positions of allies or enemies."}
              misc={"Conical 50 sq radius to detect enemies. Makes foes in range roll vs a DC 70 stealth check to not be detected."}
              category={"Small"}
              stats={[0, 0, 0, 0]}
            />
            <Item
              name={"Insta Cover Box"}
              price={2400}
              description={"Fold out to create a 3 square wide wall of half cover if crouched and full cover if prone."}
              misc={"Wall has 1d4+60 health."}
              category={"Medium"}
              stats={[0, 0, 0, 0]}
            />
            <Item
              name={"Plasma Cutter/Sealer"}
              price={3000}
              description={"Seals or seperates various materials through plasma."}
              misc={"Can cut through grade B materials or lower. Requires 1 Power cell or battery per use."}
              category={"Small"}
              stats={[0, 0, 0, 0]}
            />
            <Item
              name={"Trinit Data Pad"}
              price={1700}
              description={"A compact and hard to break data pad with moderate upgrades compared to the standard."}
              misc={"Add +10 to rolls when using the data pad in its appropriate circumstances."}
              category={"Small"}
              stats={[0, 0, 0, 0]}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default TrinitaireArms;

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
