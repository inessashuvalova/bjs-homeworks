"use sctrict";
function getResult(a,b,c){
   let D =  b**b - 4*a*c;

   if ( D > 0 ) {
   let x1 = (-b + Math.pow(D))/(2*a),
    x2 = (-b - Math.pow(D))/(2*a);
    console.log('x1 = '+x1+'   x2 = '+x2);
   
  } else if ( D == 0 ) {
    x1 = (-b)/(2*a);
    console.log('x = '+x1);
    
  } else if ( D < 0 ) {
   console.log('Решений нет, так как дискриминант меньше нуля.');
  }
    return x;
}

function getAverageMark(marks) {
  let mark = [5, 4, 4, 4, 5];
 
  if (mark.length == 0 ) {
    return 0;
  }
  else if (mark.length > 5) {
    mark.splice(mark[i]);
    console.log("Количество оценок больше 5!")
 }
 
  let sum = 0;
  for (let i = 0; i < mark.length; i++) {
	  sum = sum + mark[i];
  }
  let averageMark = sum / mark.length
    return averageMark;   
}

function askDrink(name, dateOfBirthday) {
  let name;
  const year = newDate().getFullYear();
  if (year >= 2002) {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  } else {
    console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }
     return year;
}