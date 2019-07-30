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
function my_Clock() {
    this.cur_date = new Date();
    this.hours = this.cur_date.getHours();
    this.minutes = this.cur_date.getMinutes();
    this.seconds = this.cur_date.getSeconds();
}
my_Clock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
};
my_Clock.prototype.update = function () {
    this.updateTime(1);
    console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
    currentHour.innerHTML = this.hours;
    currentMinute.innerHTML = this.minutes;
    currentSecond.innerHTML = this.seconds;
};
my_Clock.prototype.updateTime = function (secs) {
    this.seconds += secs;
    if (this.seconds >= 60) {
        this.minutes++;
        this.seconds = 0;
    }
    if (this.minutes >= 60) {
        this.hours++;
        this.minutes = 0;
    }
    if (this.hours >= 24) {
        this.hours = 0;
    }
};
var clock = new my_Clock();
clock.run();


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

// 3. Display the current year
function displayCurrentYear() {
    currentYear = date.getFullYear();
    yearToday.innerHTML = currentYear;
}

// Calling the functions
displayCurrentDay();
displayCurrentMonth();
displayCurrentYear();