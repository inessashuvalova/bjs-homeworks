"use sctrict";
function getResult(a,b,c) {
   let D =  b**b - 4*a*c;
   let x;
   let x3 = (-b) / (2*a);
   let x1 = (-b + Math.sqrt(D))/(2*a);
   let x2 = (-b - Math.sqrt(D))/(2*a);
   
    if (D > 0) {
       x = [x1, x2];
    } else if (D == 0) {
       x = [x3];
    } else {
      x = [];
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
  let now =  new Date();
  age = now.getFullYear() - dateOfBirthday.getFullYear();
  if (age > 18) {
    `Не желаете ли олд-фэшн, ${name}?`;}
  else if (age < 18) {
    `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
     return dateOfBirthday;
}
    
      