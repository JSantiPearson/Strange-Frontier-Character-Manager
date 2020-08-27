import React, { Component } from 'react'
import { View, Button, Text, Picker, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Item from './item'

class DodanaArmsEmporium extends Component {

  addItem = (item) => {
    this.props.route.params.itemCallback(item);
  }

  render() {
    console.log("Loaded Dodana");
    return (
      <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Ranged Weaponry</Text>
            <Item
            itemCallback={this.addItem}
            name={"Augmented Laser Rifle"}
            type={"ranged"}
            price={750}
            range={"5/20/35/60"}
            damage={"6d8 at close range, 80% chance to stun. 4d8 for all other ranges"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"This class C model year laser rifle has a specialised scope and barrel lens, allowing it to make more precise shots at a closer minimum range."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Heated Ballistic Rifle"}
            type={"ranged"}
            price={655}
            range={"5/15/30/45"}
            damage={"3d8 + 2d6 burn"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"A class C variant of a conventional kinetic rifle that super heats the bullet to add an extra punch to the damage. Comes with 42 class D standard rounds."}
            />
            <Item
            itemCallback={this.addItem}
            name={"High Caliber 3 Shooter"}
            type={"ranged"}
            price={865}
            range={"5/15/25/35"}
            damage={"3d10. 1d4+1 squares of knockback"}
            durability={35}
            stats={[0, 0, 0, 0]}
            description={"A large revolver with a three round chamber."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Sharp Tongue"}
            type={"ranged"}
            price={900}
            range={"5/10/20/40"}
            damage={"4d10 + half suppresion"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"A semi automatic laser pistol that fires in three round bursts."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Deck Sweeper"}
            type={"ranged"}
            price={3000}
            range={"5/10/20/40"}
            damage={"9/6/5/4d6 conical AOE, 7 squares wide at far range and 3 squares at short range"}
            durability={60}
            stats={[0, 0, 0, 0]}
            description={"A wide range shotgun with a duck billed barrel."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Sparkler Pistol"}
            type={"ranged"}
            price={500}
            range={"5/10/15/20"}
            damage={"6d4, short and medium range homing, full suppression"}
            durability={30}
            stats={[0, 0, 0, 0]}
            description={"A sparkler rifle main chamber modified to fit a smaller frame."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Contiguous Beam Rifle"}
            type={"ranged"}
            price={725}
            range={"5/10/20/40"}
            damage={"3d8+1d8 each round. Max=8d8"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"A weapon that fires an increasingly damaging beam the longer you hold the trigger."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Contiguous Cooling Rifle"}
            type={"ranged"}
            price={800}
            range={"5/10/20/40"}
            damage={"3d8 damage +2d10 TH damage per round of fire. Max Th Damage 6d10. -1 to targets speed stat each round"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"A weapon that fires an increasingly damaging Icebeam the longer you hold the trigger."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Ionizer Rifle"}
            type={"ranged"}
            price={600}
            range={"5/10/15/20"}
            damage={"8d4 with a range scaling DC to inflict Stun 75%/65%/55%/45%"}
            durability={35}
            stats={[0, 0, 0, 0]}
            description={"A suped up Sparkler Rifle, that can compete in more conventional combat."}
            />
            <Item
            itemCallback={this.addItem}
            name={"High Speed Projecter Cannon"}
            type={"ranged"}
            price={1400}
            range={"20/40/60/80"}
            damage={"10/8/6/4d10"}
            durability={100}
            stats={[0, 0, 0, 0]}
            description={"A heavy single burst Ray gun that is fired from the shoulder."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Chemical Thrower"}
            type={"ranged"}
            price={1500}
            range={"5/10/20/30"}
            damage={"12d4 burn damage"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"A massive two handed weapon that douses anything and everything in toxic extremely flamable chemicals that combust after mere seconds of oxygen exposure."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Rivet Rocket"}
            type={"ranged"}
            price={2000}
            range={"15/25/35/45"}
            damage={"5d8 damage and a +10 to mechanics checks"}
            durability={40}
            stats={[0, 0, 0, 0]}
            description={"An external Hull welder that can launch the fusion forks with imence amounts of pnumatic force."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Razor Fang"}
            type={"ranged"}
            price={2750}
            range={"10/25/40/70"}
            damage={"3d8 melee damage, 4d8 ranged. inflicts minor laceration."}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"A seated foldable cross bow."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Hydro Cutter Rifle"}
            type={"ranged"}
            price={1375}
            range={"0/5/10/15"}
            damage={"6d10 TH damage"}
            durability={60}
            stats={[0, 0, 0, 0]}
            description={"A pressure hose that can shred through soft tissue easily."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Atom 9000"}
            type={"ranged"}
            price={1750}
            range={"0/10/20/30"}
            damage={"6/5/4/4d8"}
            durability={50}
            stats={[0, 0, 0, 0]}
            description={"Though orginally a copyright infringing mock up of an atom weapon, its proliferation and demand through out the galaxy warrents its offical placement in this catalouge."}
            />
          <Text>Melee Weaponry</Text>
            <Item
            itemCallback={this.addItem}
            name={"Wave Saber"}
            type={"melee"}
            price={750}
            range={"5"}
            damage={"5d6"}
            durability={30}
            stats={[0, 0, 0, 0]}
            description={"A steel reinforced wave glass cutter that can be modified with elemental components to change its damage type."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Rattlesnake"}
            type={"melee"}
            price={1400}
            range={"5/15/25/35"}
            damage={"4d8, inflicts minor laceration on a hit and a major laceration on a crit"}
            durability={40}
            stats={[0, 0, 0, 0]}
            description={"A mesh fiber whip with a metal snake tail at the end."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Thief's Tail"}
            type={"melee"}
            price={1450}
            range={"5/10/20/30"}
            damage={"4d8. a dice roll of 80 or higher allows you to roll contested strength against the target, to disarm them"}
            durability={40}
            stats={[0, 0, 0, 0]}
            description={"A three tailed whip designed to disarm your opponents."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Compact Hammer"}
            type={"melee"}
            price={1450}
            range={"5"}
            damage={"6d8 bludgeoning damage. A dice roll of 80 or higher has 75% to stun."}
            durability={40}
            stats={[0, 0, 0, 0]}
            description={"a foldable hammer with a head made of strong wood reinforced by a metal inline."}
            />
            <Item
            itemCallback={this.addItem}
            name={"Ionizer Mace"}
            type={"melee"}
            price={650}
            range={"5"}
            damage={"4d8 electrical damage"}
            durability={40}
            stats={[0, 0, 0, 0]}
            description={"A light weight electric mace. It deals electrical damage ontop of it's standard metal impact."}
            />
          <Text>Armor and Wearables</Text>
            <Item
              name={"Pnuematic Skates"}
              type={"armor"}
              itemCallback={this.addItem}
              price={600}
              description={"A pair of knee high roller blades with an air compressor built in."}
              category={"Medium/Legs"}
              stats={[7, 0, 8, 0]}
            />
            <Item
              name={"Hearing Amp"}
              type={"armor"}
              itemCallback={this.addItem}
              price={600}
              description={"A set of ear bud like hearing aids that improve the range of frequencies one can hear."}
              category={"Light/Gear"}
              stats={[0, 0, 0, 3]}
            />
            <Item
              name={"Audio Regulator Muffs"}
              type={"armor"}
              itemCallback={this.addItem}
              price={1200}
              description={"A pair of large ear muffs that control and regulate audio information you recieve."}
              category={"Light/Head"}
              stats={[3, 0, 0, 6]}
            />
            <Item
              name={"Targeting Lens"}
              type={"armor"}
              itemCallback={this.addItem}
              price={1200}
              description={"A single lense similar to an eye patch that syncs up with the electronic scope of the users weapon and allows them to aim around corners and over ledges."}
              misc={"+10 to ranged weapons with proficiency."}
              category={"Light/Gear"}
              stats={[2, 0, 0, 2]}
            />
            <Item
              name={"Pneumatic Thruster Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={2000}
              description={"This tempered fiberglass plat armor, is equipped with a series of air powered rear thrusters. To say the wind is at your back, would be an understatement."}
              misc={"+10 to ranged weapons with proficiency."}
              category={"Heavy/Torso"}
              stats={[20, 0, 10, 0]}
            />
            <Item
              name={"Light Weight Thruster Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={4000}
              description={"A modified Pneumatic Thruster Suit that halves its armor to prioritize handling, at double the cost."}
              category={"Light/Torso"}
              stats={[10, 0, 8, 0]}
            />
            <Item
              name={"RayTracer Visual Suite"}
              type={"armor"}
              itemCallback={this.addItem}
              price={1900}
              description={"A high spec intel suite, that fits into a fashionable helmet."}
              category={"Medium/Head"}
              stats={[5, 0, 0, 9]}
            />
          {/*TODO: Maybe add a special case for the kevlar, since it's supposed to drop armor score by its size score...*/}
            <Item
              name={"Compact Kevlar"}
              type={"armor"}
              itemCallback={this.addItem}
              price={3000}
              description={"A thin jumpsuit, often worn underneath other types of armor. It adds a layer of highly kinetic resistant fabric to fill the gaps in better gear."}
              misc={"Halves all damage from standard rounds, class C and below."}
              category={"Light/Torso"}
              stats={[2, 0, 0, 0]}
            />
            <Item
              name={"High Density Vac Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={1900}
              description={"A thick jumpsuit with a gel layer that meshes into the interior of other gear. This midigates chafing, plate displacement, and impact drift for the outer armor. It also expands to fill gaps, without costing a manueverability."}
              misc={"Doubles armor rating of all other gear. Double incoming Burn/ Cold damage if the User's Con stat is lower than 12."}
              special={"double armor"}
              category={"Light/Torso"}
              stats={[5, 0, 0, 0]}
            />
          {/*TODO: Special case that adds a die to base melee*/}
            <Item
              name={"Manta-Blades"}
              type={"armor"}
              itemCallback={this.addItem}
              price={2000}
              description={"A pair of concealable gauntlets that pop large serated blades out of the end."}
              misc={"Increases base melee die by one, base melee inflicts minor lacerations."}
              category={"Light/Arms"}
              stats={[8, 0, 0, 0]}
            />
            <Item
              name={"Concussion Suit"}
              type={"armor"}
              itemCallback={this.addItem}
              price={1600}
              description={"A medium grade armor with blast repulsors in the plating. Reacts to high speed and concusion with an exchange of force."}
              misc={"Being hit with base melee pushes the enemy back one square, unless they are a larger size class than you."}
              category={"Medium/Torso"}
              stats={[15, 0, 0, 0]}
            />
            <Item
              name={"Razor Back"}
              type={"armor"}
              itemCallback={this.addItem}
              price={2300}
              description={"A slim curiass that pops large serated blades out of the back, like wings."}
              misc={"Enemies who grapple you are inflicted with a medium laceration."}
              category={"Light/Torso"}
              stats={[10, 0, 0, 0]}
            />
            <Item
              name={"Concussion Bracers"}
              type={"armor"}
              itemCallback={this.addItem}
              price={1200}
              description={"A vanbrace with blast repulsors that reacts to high speed and concussion with equal force."}
              misc={"Base melee attacks push the enemy back 1 square."}
              category={"Light/Arms"}
              stats={[7, 0, 0, 0]}
            />
          <Text>Equipment</Text>
            <Item
              itemCallback={this.addItem}
              name={"Blinding Grips"}
              type={"gear"}
              price={200}
              range={"40"}
              misc={"60% chance to inflict stun."}
              durability={25}
              stats={[0, 0, 0, 0]}
              description={"A pair of gloves that emits an extremly bright light in a rapid strobe. Often used by law enforcement."}
            />
            <Item
              itemCallback={this.addItem}
              name={"Ingnition Cable"}
              type={"gear"}
              price={1000}
              range={"40"}
              misc={"2d8 AOE to objects near explosion. Environmental objects connected to the cable take 1d10 capital damage."}
              durability={10}
              stats={[0, 0, 0, 0]}
              description={"A highly flamable grapple cable that can be ignighted via a spark pluck in the launcher. Like a fuze it burns away from the handle and into the hook, which detonates on contact. Good for breaches."}
            />
            <Item
              itemCallback={this.addItem}
              name={"Wocket Camera"}
              type={"gear"}
              price={3000}
              range={"1000"}
              misc={"Roll stealth +30 to sneak it around. you can count all targets it sees as \"within line of sight\"."}
              durability={5}
              stats={[0, 0, 0, 0]}
              description={"Small portable camera the size of a centipede, that crawls around via a remote app, installable on any PDA."}
            />
            <Item
              itemCallback={this.addItem}
              name={"Detector Ray"}
              type={"gear"}
              price={2300}
              range={"50"}
              misc={"Roll Stealth +20 to hide it. Produces light, sound or vibration to notify you that something has passed by the sensor."}
              durability={5}
              stats={[0, 0, 0, 0]}
              description={"Two laser sensors and an accompaning pocket alarm that can be set for Siren, light, or vibration."}
            />
            <Item
              itemCallback={this.addItem}
              name={"Proximity Sensor"}
              type={"gear"}
              price={2000}
              range={"Diameter: 25"}
              misc={"Roll Stealth +15 to hide it."}
              durability={5}
              stats={[0, 0, 0, 0]}
              description={"Small ball shaped sensor that sticks magnetically, or using velcro. Sends a signal to the user regarding the proximity of any creatures."}
            />
            <Item
              itemCallback={this.addItem}
              name={"Net Cable"}
              type={"gear"}
              price={800}
              durability={20}
              stats={[0, 0, 0, 0]}
              description={"Amunition for a Net Gun"}
            />
            <Item
              itemCallback={this.addItem}
              name={"Net Gun"}
              type={"gear"}
              range={"20/40/80/160"}
              price={800}
              durability={90}
              stats={[0, 0, 0, 0]}
              misc={"A successful hit grapples the target vs. a DC 100 STR check. On the next round the creature rolls vs a DC 80 to break free, or may attack the net."}
              description={"A large canon that fires cables at long ranges. Works with Grappling hooks, ropes and any non-capital cable"}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

export default DodanaArmsEmporium;

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
