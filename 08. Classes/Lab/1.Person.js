class Person {
  constructor(firstname, lastname, age, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.email = email;
  }
  toString() {
    let personal = `${this.firstname} ${this.lastname} (age: ${this.age}, email: ${this.email})`;
    return personal;
  }
}

let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person.toString());

// НЕ изкарва lastname и firstname
