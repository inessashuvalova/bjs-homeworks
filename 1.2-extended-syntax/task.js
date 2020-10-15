"use sctrict";
function getResult(a,b,c) {
   let D =  b**b - 4*a*c;
   let x = [];
   let x3;
   let x1;
   let x2;
   
    if (D > 0) {
       x1 = (-b + Math.sqrt(D))/(2*a);
       x2 = (-b - Math.sqrt(D))/(2*a);
      return x = [x1, x2];
    } else if (D == 0) {
       x3 = (-b) / (2*a);
      return x = [x3];
    } 
    return x;
}

function getAverageMark(marks) {
 
  if (marks.length === 0) {
    return 0;
  }
  else if (marks.length > 5) {
    marks = marks.slice(0, 5);
 }
 
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
	  sum = sum + marks[i];
  }
  return sum / marks.length;
    
}

function askDrink(name, dateOfBirthday) {
  dateOfBirthday = new Date(dateOfBirthday);
  let age = new Date().getFullYear() - dateOfBirthday.getFullYear()
  if (age > 18) {
  return `Не желаете ли олд-фэшн, ${name}?`;}
  else if (age < 18) {
  return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
     return age;
}
    
      