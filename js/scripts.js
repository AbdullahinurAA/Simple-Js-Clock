// 1. Declare New date Variable
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


// Display day (mon e.t.c)
function displayDay() {
    day = date.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    dayToday.innerHTML = days[day]
}

// Calling the function
displayDay();