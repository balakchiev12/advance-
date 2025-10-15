// function solve(year, month, day) {
//   let date = new Date(year, month, day);
//   let newDayDemo = new Date(date.getTime() - 24 * 60 * 60 * 1000);
//   let newDay = newDayDemo.getDate();
//   let dateInput = `${year}-${month}-${newDay}`;
//   console.log(dateInput);
// }
function solve(year, month, day) {
  // month е 1–12 -> правим го 0–11 за Date
  const date = new Date(year, month - 1, day);
  // предишен ден (избягва DST проблеми)
  date.setDate(date.getDate() - 1);

  const y = date.getFullYear();
  const m = date.getMonth() + 1; // връща 0–11
  const d = date.getDate();

  // ако джъджът иска водещи нули, използвай pad:
  // const pad = n => String(n).padStart(2, '0');
  // console.log(`${y}-${pad(m)}-${pad(d)}`);

  console.log(`${y}-${m}-${d}`);
}

solve(2016, 9, 30);
