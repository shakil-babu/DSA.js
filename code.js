class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.count = 0;
    this.scores = [];
  }

  fullName() {
    return `Full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.count += 1;
    if (this.count <= 3) {
      return "Hey you're expired!";
    }
    return `Hey you late ${this.count} times!`;
  }

  addScore(item) {
    this.scores.push(item);
    return this.scores;
  }

  calculateTotalMark() {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum;
  }
}

let shakil = new Student("Shakil", "Babu", "2021");
let shakilFullName = shakil.fullName();
shakil.markLate();
shakil.markLate();
console.log(shakil.markLate());
// add score
shakil.addScore(10);
shakil.addScore(20);
shakil.addScore(100);

// call calculateTotalMark
console.log(shakil.calculateTotalMark());
