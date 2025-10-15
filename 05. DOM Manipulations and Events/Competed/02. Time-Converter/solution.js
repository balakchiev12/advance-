function attachEventsListeners() {
  let daysElement = document.getElementById("days");
  let hoursElement = document.getElementById("hours");
  let minutesElement = document.getElementById("minutes");
  let secondsElemet = document.getElementById("seconds");

  let radios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  document.getElementById("daysBtn").addEventListener("click", onConvert);
  document.getElementById("hoursBtn").addEventListener("click", onConvert);
  document.getElementById("minutesBtn").addEventListener("click", onConvert);
  document.getElementById("secondsBtn").addEventListener("click", onConvert);
  function convert(value, unit) {
    let days = value / radios[unit];
    debugger;

    return {
      days: days,
      hours: days * radios.hours,
      minutes: days * radios.minutes,
      seconds: days * radios.seconds,
    };
  }
  function onConvert(event) {
    let input = event.target.parentElement.querySelector('input[type="text"]');

    let time = convert(Number(input.value), input.id);
    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
  }
}
