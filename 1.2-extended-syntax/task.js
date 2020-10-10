"use sctrict";
function getResult(a,b,c){
   let D =  b**b - 4*a*c;

   if ( D > 0 ) {
   let x1 = (-b + Math.sqrt(D))/(2*a),
    x2 = (-b - Math.sqrt(D))/(2*a);
    console.log('x1 = '+x1+'   x2 = '+x2);
   
  } else if ( D == 0 ) {
    x1 = (-b)/(2*a);
    console.log('x = '+x1);
    
  } else if ( D < 0 ) {
   console.log('Решений нет, так как дискриминант меньше нуля.');
  }
    return [x1, x2];
}

function getAverageMark(marks) {
 
  if (marks.length === 0 ) {
    return 0;
  }
  else if (marks.length > 5) {
    marks.splice(5, 1);
    console.log("Количество оценок больше 5!")
 }
 
  let sum = 0;
  for (let i = 0; i < mark.length; i++) {
	  sum = sum + marks[i];
  }
  return sum / marks.length;
    
}

function askDrink(name, dateOfBirthday) {
  dateOfBirthday = new Date(dateOfBirthday);
  let now =  new Date();
  age = now.getFullYear() - dateOfBirthday.getFullYear();
  if (age > 18) 
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  else (age < 18)
    console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  
     return;
}
    
      