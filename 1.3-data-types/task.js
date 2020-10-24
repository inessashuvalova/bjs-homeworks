"use sctrict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let credit = Number.isNaN(amount - contribution);
  let months = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
  let P = Number.isNaN((percent / 100)/ 12);
  let payment = Number.isNaN((credit*(P+P/(Math.pow((1+P),months)-1))));
  let totalAmount = Number.isNaN(contribution + (payment * months));
  totalAmount = totalAmount.toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
 let greeting;
if (name === 'null' || name === '' || name === 'undefined') {
  greeting = "Привет, мир! Меня зовут Аноним";
}
else {
  greeting = `Привет, мир! Меня зовут ${name}`
}
   return greeting;
}