document.write("calendar");
const date=document.getElementById("date");
const day=document.getElementById("day");
const month=document.getElementById("month");
const year=document.getElementById("year");

const today = new Date();


console.log(today);
const weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths=["January","February","March","April","May","June","July","August","September","Octomber","November","December"];
date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();