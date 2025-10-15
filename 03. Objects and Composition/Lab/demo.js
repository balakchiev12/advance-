function solv(name, age, poll) {
  //short way
  let obj = {
    name,
    age,
    poll,
  };
  console.log(obj.name);

  // // adding in objec

  // let regord = {};
  // regord.name = "Peshtera";
  // regord.age = 24;
  // return regord;

  //br

  // clone obj
  let { ...cloneObj } = obj;
  console.log(cloneObj);
  console.log("--- clone obj --- ");

  // objrvt refernce
  let otherObj = obj;
  otherObj.name = "Peshera";
  console.log(otherObj.name);
  console.log(obj.name);
  console.log("-----objrvt refernce---");
}
solv("Ivan", 23, "male");
