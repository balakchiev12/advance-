function solve(speed, road) {
  let maxSpeed = 0;
  if (road === "motorway") {
    if (speed <= 130) {
      console.log(`Driving ${speed} km/h in a 130 zone`);
    } else {
      maxSpeed = speed - 130;
      if (maxSpeed <= 20) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 130 - speeding`
        );
      } else if (maxSpeed > 20 && maxSpeed <= 40) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 130 - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 130 - reckless driving`
        );
      }
    }
  } else if (road === "interstate") {
    if (speed <= 90) {
      console.log(`Driving ${speed} km/h in a  90  zone`);
    } else {
      maxSpeed = speed - 90;
      if (maxSpeed <= 20) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 90 - speeding`
        );
      } else if (maxSpeed > 20 && maxSpeed <= 40) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 90 - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of  90 - reckless driving`
        );
      }
    }
  }
  if (road === "city") {
    if (speed <= 50) {
      console.log(`Driving ${speed} km/h in a 50 zone`);
    } else {
      maxSpeed = speed - 50;
      if (maxSpeed <= 20) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 50 - speeding`
        );
      } else if (maxSpeed > 20 && maxSpeed <= 40) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 50 - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 50 -reckless driving`
        );
      }
    }
  } else if (road === "residential") {
    if (speed <= 20) {
      console.log(`Driving ${speed} km/h in a 20 zone`);
    } else {
      maxSpeed = speed - 20;
      if (maxSpeed <= 20) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 20 - speeding`
        );
      } else if (maxSpeed > 20 && maxSpeed <= 40) {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 20 - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${maxSpeed} km/h faster than the allowed speed of 20 -reckless driving`
        );
      }
    }
  }
}
solve(40, "city");
solve(21, "residential");
solve(120, "interstate");
solve(200, "motorway");
