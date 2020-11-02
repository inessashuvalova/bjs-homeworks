// Задача 1

class PrintEditionItem {
    constructor(name,releaseDate,pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

     fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set newState(state) {
        if (state < 0) {
            this.state = 0;
        }
        else if (state > 100) {
            this.state = 100;
        }
    }  
    get newState() {
            return this.state
        }
    }

    class Magazine extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount, state) {
            super(name, releaseDate, pagesCount, state)
            this.type = "magazine";
        }
    }
    class Book extends PrintEditionItem {
        constructor(name, releaseDate, pagesCount, state) {
            super(name, releaseDate, pagesCount, state)
            this.author = author;
            this.type = "book";
        }
    }

    class NovelBook extends Book {
        constructor(name, releaseDate, pagesCount, state) {
            super(name, releaseDate, pagesCount, state)
            this.type = "novel";
    }
}
    class FantasticBook extends Book {
        constructor(name, releaseDate, pagesCount, state) {
            super(name, releaseDate, pagesCount, state)
            this.type = "fantastic";
    }
}
    class DetectiveBook extends Book {
        constructor(name, releaseDate, pagesCount, state) {
            super(name, releaseDate, pagesCount, state)
            this.type = "detective";
    }
    };

    // Задача 2
    class Library {
        constructor(name,books) {
            this.name = name;
            this.books = [];
        }

    addBook(book) {
            if (book.state > 30) {
                this.books.push(book);
            }
        }

//     findBookBy(type, value) 
    

// giveBookByName(bookName) 
}


// Задача 3

let diary = {};
class StudentLog {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (diary[subject] === undefined) {
            diary[subject] = [];
        }
        if (grade >= 1 && grade <= 5) {
            diary[subject].push(grade);
        }
        else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
        }
        return diary[subject].length;
    }
    getAverageBySubject(subject) {
        let averageGrade = 0;
        if (diary[subject].length === 0) {
            return averageGrade;
        }
        else {
            for (let i = 0; i < diary[subject].length; i++) {
                averageGradeSum = averageGrade + diary[subject][i];
            }
            return averageGrade = averageGradeSum / diary[subject].length;
        }
    }
}
