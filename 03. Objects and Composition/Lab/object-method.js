// whit funcion mehod
let car = {
  model: "BMW",
  year: 2009,
  facelift: true,
  hong: function () {
    console.log("bee bee");
  },
  honk2: () => {
    //whith arrow funcion
    console.log("BEEEE");
  },
  kong3() {
    // object mrthod notacion ;
    console.log("BEEE BBEEE");
  },
};

// object as funcion libary
let calc = {
  sum: function (a, b) {
    return a - b;
  },
  multi: (a, b) => a * b,
};
