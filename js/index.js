// Class definition
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  canVote() {
    return this.age >= 18;
  }
}

class Writer extends User {
  publishArticle(){
    console.log("Article published");
  }
}

// Class usage
const user = new User('Sam', 'Smith', 30);

const writer = new Writer('Tom', 'Roth', 20);
console.log(user.getFullName()); //Sam Smith
console.log(user.canVote())   //вернет true
console.log(writer.publishArticle());  // Article published