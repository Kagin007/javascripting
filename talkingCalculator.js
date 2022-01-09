const talkingCalendar = function(date) {
  let dateArray = date.split("/")
  let dateObj = {
    "12": "December",
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April"
  }

  let month = dateObj[dateArray[1]]
  let day = dateArray[2]
  let year = dateArray[0]

  return `${month} ${day} ${year}`

};

console.log(talkingCalendar("2017/12/02"))
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987