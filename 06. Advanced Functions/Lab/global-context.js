/*function random() {
  console.log(this); // in browser is windol

  return Math.random();
}
random(); // globall invocation

let math = {
  random: random,
};
math.random();

// ----------------------

// Object context
/*/
let obj = {
  name: "Peter",
  lastName: "Parker",
  introduce() {
    const fullName = () => {
      return this.name + " " + this.lastName;
    };
    console.log(`Hello , my name is ${fullName()}`);
  },
};

obj.introduce();
/*
obj.greed(); // method invocation

let greed = obj.greed; // copy func by reference

greed(); // global invocation

// DOM elements - must exeute in brows

/*document.addEventListener("click", function () {
  console.log(this);
});
/*/

function a() {
  let name2 = "aafsda";
  function b() {
    let name3 = "aafsda";
    function c() {
      let name4 = "aafsda";
      function d() {
        let name5 = "aafsda";
      }
      d();
    }
    c();
  }
  b();
}

a();
