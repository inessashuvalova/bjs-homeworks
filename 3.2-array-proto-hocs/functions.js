const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   weapons.map(weapon); 
   return weapon.name;
   }

function getCountReliableWeapons(demandDurability) {
    weapons.filter(weapon);
    return weapon.durability > demandDurability;
}

function hasReliableWeapons(demandDurability) {
    weapons.some(weapon);
    return weapon.durability > demandDurability
}

function getReliableWeaponsNames(demandDurability) { 
    weapons.filter(weapon);
    return weapon.durability > demandDurability
}

function getTotalDamage () {
     weapons.reduce(totalDamage, weapon);
      return totalDamage + weapon.attack;
}
      
   