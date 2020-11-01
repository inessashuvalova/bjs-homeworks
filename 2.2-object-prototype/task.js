String.prototype.isPalindrome = function() {
  let str = this.toUpperCase();
  return str;
}



function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length === 0) {
      return averageMark;
   }
    else { 
    for (let i = 0; i < marks.length; i++) {
      summaryMarks = averageMark + marks[i];
    }
    averageMark = summaryMarks / marks.length;
    Math.round(averageMark) = roundedAverage;
     return roundedAverage;
  }
  }


function checkBirthday(birthday) {
    let now = new Date(24 * 3600 * 1000);
    birthday = new Date(birthday);
    const parsedBirthday = new Date(birthday).getTime();
    let diff = now - birthday;
    let age = diff / 365.25 * 24 * 60 * 60 * 1000;
    if (age > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;}
    else if (age < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
    return age >= 18;
       }
          