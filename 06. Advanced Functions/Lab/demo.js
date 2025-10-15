// global
function random() {
  console.log(this); // in browser window

  return Math.random();
}
random();

// obj cont
let obj = {
  name: "Peter",
  greed() {
    console.log(`Hello ! My name is ${this.name}`);
  },
};
obj.greed(); //method invocation
let greed = obj.greed(); // copy fun be referent
greed(); // global invo

// dom element
// document.addEVentListener('click',fun(){
//})
