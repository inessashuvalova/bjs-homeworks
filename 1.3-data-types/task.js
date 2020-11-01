"use sctrict";
function calculateTotalMortgage(percent, contribution, amount, date) {
  let credit = amount - contribution;
  let months = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
  let P = (percent / 100)/ 12;
  let payment = (credit*(P+P/(Math.pow((1+P),months)-1)));
  let totalAmount = (contribution + (payment * months));
  if (isNaN(percent)) {
    return 'Проценты введены неверно';  
  }
  if (isNaN(contribution)) {    
    return 'Параметр вклад введен неверно';
  }
  if (isNaN(amount)) {
    return 'Параметр amount введен неверно ';
   }
   totalAmount = totalAmount.toFixed(2);
   totalAmount = Number(totalAmount);
  return totalAmount;
}
  

function getGreeting(name) {
 let greeting = "Привет, мир! Меня зовут";
 greeting = (name === "null" || name === "undefined" || name === "" || name == false) ? greeting + ' Аноним' : greeting + ` ${name}`;
   return greeting;
}