export function dayMaker(date) {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[date.getDay()];
  return day;
  };

  export function monthChecker(userMonth) {
    if (userMonth === "January" || userMonth === "February" || userMonth === "March" || userMonth === "April" || userMonth === "May" || userMonth === "June" || userMonth === "July" || userMonth === "August" || userMonth === "September" || userMonth === "October" || userMonth === "November" || userMonth === "December") {
      return userMonth;
    }
    else {
      return "Please enter a valid month.";
    }
  };