/////////////////////////////////
// Declare New date Variable //
var date = new Date();

// variable that holds the target output
// Day
var dayToday = document.querySelector('#day');
// Date
var dateToday = document.querySelector('#date');
var monthToday = document.querySelector('#month');
var yearToday = document.querySelector('#year');
// Time
var currentHour = document.querySelector('#hour');
var currentMinute = document.querySelector('#minutes');
var currentSecond = document.querySelector('#seconds');
var amOrPm = document.querySelector('#amPm');

////////////////////////////
// Display day (mon e.t.c) //
function displayDay() {
    day = date.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    dayToday.innerHTML = days[day]
}

// Calling the function
displayDay();

//////////////////////////////
// Display time (HH:MM:SS) //

// 1. Display current hour
function dipslayCurrentHour() {
    hour = date.getHours();
    currentHour.innerHTML = hour;
}

// 2. Display the current minutes
function displayCurrentMinute() {
    minute = date.getMinutes();
    currentMinute.innerHTML = minute;
}

// 3. Display the current seconds
function displayCurrentSecond() {
    seconds = date.getSeconds();
    currentSecond.innerHTML = seconds;
}

// 4. Display Am or Pm depending on the time of day
function displayAmOrPm() {
    amPm = date.getHours();
    if (amPm >= 12) {
        amOrPm.innerHTML = 'pm'
    } else {
        amOrPm.innerHTML = 'am';
    }
}

// Calling the function
dipslayCurrentHour()
displayCurrentMinute();
displayCurrentSecond();
displayAmOrPm();

/////////////////////////////
// Display date (DD/MM/YY) //

// 1. Display the current date
function displayCurrentDay() {
    currentDay = date.getDate();
    dateToday.innerHTML = currentDay;
}

// 2. Display the current month
function displayCurrentMonth() {
    currentMonth = date.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthToday.innerHTML = months[currentMonth];
}