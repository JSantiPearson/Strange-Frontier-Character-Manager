import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Weapon from './Items/weapon'

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
              <Weapon
              name={"Galaggir's Auto Rifle"}
              price={1200}
              range={"10-30-50"}
              damage={"7d10"}
              durability={100}
              description={"Replica of the same rifle used in the breach of Fort Kirck in the giant capra war. This rifle model still sees service."}
              />
              <Weapon
              name={"Molk'so SMG"}
              price={1350}
              range={"5-10-15"}
              damage={"5d10+20 AOE"}
              durability={90}
              description={"A faithful copy of the dependable weapon Molk'so cobbled together himself while trapped behind lines of the arachnet hives."}
              />
              <Weapon
              name={"Admiral Brikk's DMR"}
              price={1475}
              range={"20-40-60"}
              damage={"3d10+30"}
              durability={90}
              description={"The same type of rifle used in A. Brikk's infamous long range ambushes."}
              />
              <Weapon
              name={"Falcomoor's Sidearm"}
              price={1100}
              range={"15-25-35"}
              damage={"7d8+10"}
              durability={85}
              description={"Whenever Falcomoor had to draw his sidearm, the fight was won, then and there."}
              />
              <Weapon
              name={"Dackman's Laser Rifle"}
              price={1250}
              range={"40"}
              damage={"5d12"}
              durability={85}
              description={"Behind enemy lines, weapons breaking left and right, Dackman made many of this rifle to supply his soldiers in the struggle."}
              />
              <Weapon
              name={"Jergo's Automatic Laser Rifle"}
              price={1200}
              range={"40"}
              damage={"5d10+10 AOE"}
              durability={90}
              description={"Modified by Jergo. She created this rifle variant to help soldiers whose eyesight was hindered, so they could stay in the fight."}
              />
              <Weapon
              name={"Scerkoe's Laser Sniper Rifle"}
              price={1500}
              range={"30-50-80"}
              damage={"(5d10, 6d10, 7d10)+20"}
              durability={95}
              description={"By Capra design, by Scerkoe's tinkering, a lineage remastered. This rifle takes less amunition to be more efficient."}
              />
              <Weapon
              name={"Mercy's Trench Rifle"}
              price={1400}
              range={"4-12-16"}
              damage={"7d10, 6d10, 5d10"}
              durability={100}
              description={"A shotgun modeled off the one used by the hero of Pryoes herself in the \"charge of 200\". Comissioned in memoriam, of those who died on Pryoes 56."}
              />
              <Weapon
              name={"Coco's Crossbow"}
              price={2000}
              range={"8-16-24"}
              damage={"4d10 + Ammunition Damage"}
              durability={100}
              description={"Coco was a famous terrestial beast from Fortisma. Coco could carry 500lbs. Now imagine the size of a crossbow that Coco could wield - although barely. Silent, hard to aim, and has enough torque to penetrate concrete."}
              />
              <Weapon
              name={"Icarus Anthem's Rocket Launcher"}
              price={2300}
              range={"30-50-70"}
              damage={"5d12 + Ammunition Damage (If N/A add + 20)"}
              durability={100}
              description={"A former EDI human, but a Trinitaire giant at heart. His mastery of guided missles made his name known in memorial as the Rocketeer, until the day he flew too high."}
              />
              <Weapon
              name={"Sparrow's Shrieking LMG"}
              price={2100}
              range={"15-25-35"}
              damage={"7d12, 6d12, 5d12"}
              durability={80}
              description={"Sparrow's motto: \"Why make a warcry when your weapon can do it for you?\" - And at 2000 rounds a minute."}
              />
              <Weapon
              name={"Stormbane's Minigun"}
              price={3000}
              range={"15-25-35"}
              damage={"6d12, 1d4 knockback"}
              durability={90}
              description={"The air cracked like thunder as Storm filled the battlefield with his minigun's laser fire. His custom model served him so well that it became a Trinitaire standard for heavy infantry."}
              />
            <Text>Telum Mass-Produced Weaponry</Text>
              <Weapon
              name={"Telum-I Laser Rifle"}
              price={1700}
              range={"20-40-60"}
              damage={"8d8"}
              durability={80}
              description={"A high grade laser rifle with a cutting edge visor link technology to compatable helmets giving bonus accuracy. Add 10 to your attack roll."}
              />
              <Weapon
              name={"Telum-II Machina Laser"}
              price={1750}
              range={"15-25-35"}
              damage={"5d12"}
              durability={85}
              description={"Built for team use, this rifle will put out more damage with more people using it at the same time. Add 1 die of damage for every user firing at the target if the shot lands."}
              />
              <Weapon
              name={"Telum-III Rail Rifle"}
              price={3500}
              range={"15-25-35"}
              damage={"7d10 + 50% AOE explosive damage on adjacent squares"}
              durability={90}
              description={"A DMR style weapon with explosive ammunition. Can hit enemies adjacent to your target at half damage."}
              />
              <Weapon
              name={"Telum-IV Breach Shot"}
              price={2300}
              range={"15-25-35"}
              damage={"4d8, 6d8 if target is armored"}
              durability={100}
              description={"A short to medium ranged kinetic rifle with armor piercing qualities. Add two additional dice of damage to armored targets."}
              />
              <Weapon
              name={"Telum-V CQB Gun"}
              price={2700}
              range={"10-15-20"}
              damage={"7d10, 6d10, 5d10"}
              durability={90}
              description={"A short ranged weapon designed to richochet its ammo in close quarters for a higher chance to hit. The weapon has a conical spread of 3x every range fall off. Enemies need to make a Reflex check of DC 60 if adjacent to an object/surface in its conical spread. Failure deals the weapon's damage again, per adjacent object."}
              />
            <Text>Melee Weaponry</Text>
              <Weapon
              name={"Drog's Might Hammer"}
              price={2000}
              range={"1"}
              damage={"4d10 + (3d10 if target is non-biological)"}
              durability={90}
              description={"A long handled war hammer made in faithful recreation to the one Drog used in his \"Protests\" as he put it, of enemy barricades and armor."}
              />
              <Weapon
              name={"Rimhelm's Staff"}
              price={1900}
              range={"5"}
              damage={"9d8"}
              durability={95}
              description={"Surpisisingly nimble for a giant, Rimhelm specialized in disabling his targets with his staff before finishing them with as little resistance as possible."}
              />
              <Weapon
              name={"Solomon's Last Stand"}
              price={2200}
              range={"1"}
              damage={"9d8 Slashing Damage"}
              durability={100}
              description={"Having spilt thousands' blood in their last defense to hold off the arachnet so that civilians could escape, this blade is now recreated in their memorial for his sacrifice."}
              />
              <Weapon
              name={"Grindwind's Saw"}
              price={1950}
              range={"1"}
              damage={"6d10, no penalty to attacks on limbs. (Still penalty for vitals)"}
              durability={95}
              description={"Grindwind was direct in his methods, his logic being if you take their hand how can they use their weapon?"}
              />
              <Weapon
              name={"Dallis Dawn's Morning Star"}
              price={2100}
              range={"2"}
              damage={"8d8 + 10"}
              durability={100}
              description={"Dallis took pride in how hard her mace was to use as a sign of strength - as well as a sign for how hard her weapon could hurt. -10 on attack rolls."}
              />
              <Weapon
              name={"Latt's Fury"}
              price={2000}
              range={"1"}
              damage={"6d10 Slashing Damage"}
              durability={80}
              description={"A simple sword wielded at tremendous speed. This came to Latt's rescue while he was trapped in the trenches of Poreon 77 as two Arachnet war beasts hunted him down."}
              />
              <Weapon
              name={"Naia's Shade Blades"}
              price={1900}
              range={"1"}
              damage={"5d8 for each blade"}
              durability={60}
              description={"An ebony steel dagger and a polished silver dagger meant to be wielded together. As Naia put it, \"there can be no shadow without light.\" +10 to Flat-Footed Defense if both daggers are used in one standard action. Uses Dex & Int instead of Str & Con."}
              />
            <Text>Explosives</Text>
              <Weapon
              name={"T3-21 Galleon Explosive"}
              price={3000}
              range={"N/A"}
              damage={"1d8 Capital Damage"}
              durability={10}
              description={"SIZE: LARGE\nFour cylindrical tubes connected into a mass explosive used to breach capital ships."}
              />
              <Weapon
              name={"T3-39 Bore Incidiary"}
              price={4500}
              range={"N/A"}
              damage={"1d6 Capital Damage every round"}
              durability={10}
              description={"SIZE: LARGE\nDetonated via remote or by ship board ordinance tube, explodes into a 15x15 area covering it in a caustic fiery substance for 12 rounds."}
              />
              <Weapon
              name={"T3-Tango Acid Charge"}
              price={4750}
              range={"N/A"}
              damage={"1d10 Capital Damage to armor and non-biological items"}
              durability={10}
              description={"SIZE: LARGE\nDetonated via remote or by ship ordinance tube, Explodes into a splash of acidic compound. Strips armor and other nonliving materials. CANNOT harm biological material or persons."}
              />
              <Weapon
              name={"T2-Mortar Shiphead"}
              price={2500}
              range={"N/A"}
              damage={"1d6 Capital Damage AOE 10 sq. radius"}
              durability={80}
              description={"SIZE: MEDIUM\nA 6\' explosive shiphead with metal tube to launch mortar shells at a distance."}
              />
              <Weapon
              name={"T2-Serpent Charge"}
              price={2100}
              range={"N/A"}
              damage={"8d8 AOE, 3 sq. radius"}
              durability={8}
              description={"A serpentine tossable explosive that will snake its way to the nearest enemy within 10 sq. once it lands on the ground."}
              />
              <Weapon
              name={"T2-Malachite Hand Grenade"}
              price={1900}
              range={"N/A"}
              damage={"6d10 AOE, 5 sq. radius"}
              durability={12}
              description={"A large copper headed explosive charge tossable by hand."}
              />
              <Weapon
              name={"T2-Spitfire Charge"}
              price={2100}
              range={"N/A"}
              damage={"7d10, No AOE"}
              durability={10}
              description={"On detonation this device begins to light into a plasma charge that sticks to targets. Takes one round to explode. 70 STR DC to remove."}
              />
              <Weapon
              name={"T1-X77 Firecracker"}
              price={5800}
              range={"N/A"}
              damage={"5d8 per round AOE, 3 sq. radius"}
              durability={12}
              description={"A string of explosives that detonate for 18 seconds continuosly."}
              />
              <Weapon
              name={"T1-E4 Hand Grenade"}
              price={700}
              range={"N/A"}
              damage={"4d8+10 AOE, 4 sq. radius"}
              durability={10}
              description={"Small, but mass producable and easy to toss. Can toss 2 per standard action."}
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
