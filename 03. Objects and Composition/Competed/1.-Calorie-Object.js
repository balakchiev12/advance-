function solve(obj) {
  if (obj.dizziness == true) {
    obj.dizziness = false;
    obj.levelOfHydrated += 0.1 * (obj.weight * obj.experience);
  }
  console.log(obj);
}
solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true });
