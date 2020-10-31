class String {
    constructor(name) { 
      this.name = name
    }
}
String.prototype.isPalindrome = function() {
    console.log(`Hello my name is $(this.name)`) 
}  
let abc = new String('qwerty');
abc.isPalindrome();



function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length === 0) {
      return averageMark;
   }
    else { 
    for (let i = 0; i < marks.length; i++) {
     averageMark = averageMark + marks[i];
    }
    averageMark = averageMark / marks.length;
    Math.round(averageMark) = roundedAverage;
     return roundedAverage;
  }
  }


function checkBirthday(birthday) {
    let now = new Date(24 * 3600 * 1000);
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    birthday = new Date(birthday);
    let diff = now - birthday;
    // let age = diff / ;
    if (age > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;}
    else if (age < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
    return age;
       }
          