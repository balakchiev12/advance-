const person = {
  firstName: "Pesho",
  lastName: "Geeorgiev",
  introduce() {
    const fullName = () => {
      return this.firstName + " " + this.lastName;
    };
    console.log(`Hello , my name is ${fullName()}`);
  },
};

person.introduce();
