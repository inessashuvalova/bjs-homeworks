// Задача 1
console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
   return weapons.map(weapon => weapon.name);
   }

function getCountReliableWeapons(demandDurability) {
   weapons.filter(weapon => (weapon.durability > askedDurability)).length;
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
      
// Задача 2

  function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
  }
  function sum(...args) {
    sleep(100); // delay 100ms
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays(arr1, arr2) {
    if (arr1 && arr2 && (arr1.length == arr2.length) && arr1.every((value, index) => value === arr2[index])) { 
      return (arr1 && arr2 && arr1.every((value, index) => value === arr2[index])); 
    }
  }

  function memorize(fn, limit) {
    const memory = [];
    memory.length = 0;
    return function memorizeReturn (...theArgs) {

      let searchArgs = memory.find(item => compareArrays(theArgs, item.args));
      if (searchArgs) {
        return searchArgs.result;
      }
  
      let resultFn = fn(...theArgs);
      if (memory.unshift({args: theArgs, result: resultFn}) > limit) {
        memory.length = limit;
      };
      return resultFn;
    }
  }