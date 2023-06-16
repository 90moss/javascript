let date = new Date()
document.getElementById ("date").innerText = date
let year = date.getFullYear()
document.getElementById ("year").innerText = year
let month = date.getMonth()
document.getElementById ("month").innerText = month
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let m = months[month]
document.getElementById ("monthName").innerText = m
let day = date.getDate()
document.getElementById ("day").innerText = day
let d = date.getDay()
let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
document.getElementById("dayName").innerText = dayName[d]
let hours = date.getHours()
document.getElementById ("hours").innerText = hours
let minutes = date.getMinutes()
document.getElementById ("minutes").innerText = minutes
let seconds = date.getSeconds()
document.getElementById ("seconds").innerText = seconds
let msecs = date.getMilliseconds()
document.getElementById ("msecs").innerText = msecs