export function dayMaker(date) {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[date.getDay()];
  return day;
  }

  export function validDate() {
    // if (date === "Invalid Date") {
    //   return "Please enter a valid date."
    // }
    // else {
    //   return dayMaker(date)
    // }
  }