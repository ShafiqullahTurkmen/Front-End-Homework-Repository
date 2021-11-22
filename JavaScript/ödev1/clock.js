const name = prompt("isminizi girermisiniz.");

const eDOM = document.querySelector("#myName");
eDOM.innerHTML = name;

const clockDOM = document.querySelector("#myClock");
clockDOM.addEventListener("onload", showTime());

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = dayOfWeek(today);
  (m = checkTime(m)),
    (s = checkTime(s)),
    (clockDOM.innerHTML = `${h}:${m}:${s} ${d}`);
  setTimeout(showTime, 1000);

  function dayOfWeek(today) {
    switch (today.getDay()) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";

      default:
        return 'Sunday'
    }
  }
}

function checkTime(i) {
  if (i < 10) {
    // add zero in front of numbers < 10
    i = "0" + 1;
  }
  return i;
}
