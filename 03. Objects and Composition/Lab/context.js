let car = {
  model: "BMW",
  year: 2009,
  facelift: true,
  hong: function () {
    console.log(`${this.model} bee bee`);
  },
};
car.hong();
car.model = "AUDI";
car.hong();
