/** Ejercicio 1
 * Write a function that receives a date and displays the corresponding day of the week.
 */

function dayOfWeek(date) {
  var days = ["sunday", "Monday", "Tuesday", "Wednesday", "thursday", "friday", "saturday"];
  let thisDay = new Date(date);
  return console.log("this day is " + days[thisDay.getDay()] + "\n");
}

dayOfWeek("2001/08/14");



/** Ejercicio 2
 * Write a function that displays the date in the following formats.
- The date will be passed as a parameter, otherwise the current date will be taken.
- The separator (- /) shall be passed as a parameter, otherwise one of them will be set by
default.
● mm-dd-yyyy
● dd-mm-yyyy
 */
function displayFormattedDate(inputDate, separator = '-') {

  const date = inputDate ? new Date(inputDate) : new Date();

  // Get day, month, and year
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  const output1 = `${month}${separator}${day}${separator}${year}`;
  const output2 = `${day}${separator}${month}${separator}${year}`;

  console.log(`Format 1: ${output1}`);
  console.log(`Format 2: ${output2}\n`);
}

displayFormattedDate();
displayFormattedDate('2023-10-18', '/');
displayFormattedDate('2023-10-18');




/**Ejercicio 3
 *  Call the previous function with tomorrow's date
 */


function displayFormattedDate2(inputDate, separator) {

  const date = inputDate ? new Date(inputDate) : new Date();

  const defaultSeparator = '-';
  separator = separator || defaultSeparator;

  // Get day, month, and year
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  const output1 = `${month}${separator}${day}${separator}${year}`;
  const output2 = `${day}${separator}${month}${separator}${year}`;

  console.log(`Format 1: ${output1}`);
  console.log(`Format 2: ${output2}\n`);
}

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

displayFormattedDate2(tomorrow);



/**Ejercicio 4
 *  Write a function that returns a string such as HH:MM:SS from any date. 
 */

function formatTimeFromDate(inputDate) {

  const date = inputDate || new Date();

  // Get hours, minutes, and seconds
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

// Example usage:
const currentTimeString = formatTimeFromDate();
console.log(currentTimeString);



/**Ejercicio 5
 *   Write a function to display the current day and time in the following format.
     Tuesday. Now: 10PM 30:38
 */

function displayCurrentDayAndTime() {
  const now = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[now.getDay()];

  const hours = now.getHours();
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const output = `${dayOfWeek}. Now: ${formattedTime}`;

  console.log(output);
}
displayCurrentDayAndTime();


/** Ejercicio 6
 *  How many days have passed since September 15?
 */
function daysPassedSinceSeptember15() {

  const september15 = new Date('2023-09-15');
  const currentDate = new Date();

  const timeDifference = currentDate - september15;

  // Convert the difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const daysPassed = daysPassedSinceSeptember15();
console.log(`\ndesde el 15 de septiembre han pasado: ${daysPassed} dias \n`);

/**ejercicio 7
 * Write a function that calculates the number of school days remaining until the end of the term,
without taking into account holidays.
 */

function daysOfSchool() {
  let currDate = new Date();
  let endOfTerm = new Date("2023-12-22");
  let days = 0;

  while (currDate.getTime() <= endOfTerm.getTime()) {
    if (currDate.getDay() !== 6 && currDate.getDay() !== 0) {
      days++;
    }
    currDate.setDate(currDate.getDate() + 1);
  }
}
console.log(daysOfSchool());

/** ejercicio 8
 * Write a function that indicates in which years from the current year through 2070 September
 * 15 will be Monday.
 */

/**ejercicio 12
 * 
 */

function clock() {
  let date = new Date();
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

setInterval(() => {

  console.log(clock());

  setTimeout(() => {

    console.clear();

  }, 1000);

}, 1000);




/** ejercicio 13
 * 
 */