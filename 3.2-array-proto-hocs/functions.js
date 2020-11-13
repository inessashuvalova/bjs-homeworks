// Задача 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   return weapons.map(weapon => weapon.name);
   }

function getCountReliableWeapons(demandDurability) {
    return weapons.filter(weapon => weapon.durability > demandDurability);
}

function hasReliableWeapons(demandDurability) {
    return weapons.some(weapon => weapon.durability > demandDurability);
}

function getReliableWeaponsNames(demandDurability) { 
    return (weapons.filter(weapon => weapon.durability > demandDurability).map(weapon => weapon.name));
}

function getTotalDamage () {
    return weapons.reduce((totalDamage, weapon) => totalDamage + weapon.attack, 0);
}
      
   