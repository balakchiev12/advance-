function dayOfWeek(day) {
  for (let i = 1; i <= 7; i++) {
    if (day === "Monday") {
      console.log(1);
      break;
    }
    if (day === "Tuesday") {
      console.log(2);
      break;
    }
    if (day === "Wednesday") {
      console.log(3);
      break;
    }
    if (day === "Thursday") {
      console.log(4);
      break;
    }
    if (day === "Friday") {
      console.log(5);
      break;
    }
    if (day === "Saturday") {
      console.log(6);
      break;
    }
    if (day === "Sunday") {
      console.log(7);
      break;
    } else {
      console.log("error");
      break;
    }
  }
}
dayOfWeek("Monday");
dayOfWeek("Friday");
dayOfWeek("InvalidDay");
