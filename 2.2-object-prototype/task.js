String.prototype.isPalindrome = function() {
  const source = this.toLowerCase().split("");
  return source.join("") === source.reverse().join("");
}



function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length === 0) {
      return averageMark;
   }
    else { 
    for (let i = 0; i < marks.length; i++) {
      averageMark = averageMark + marks[i];
    }
    averageMark = averageMark/ marks.length;
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
    return age >= 18;
       }
          