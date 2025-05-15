const monthName =document.getElementById("month-name");
const dayName =document.getElementById("day-name");
const dayNumber =document.getElementById("day-number");
const Year =document.getElementById("year");
const date =new Date();
const month =date.getMonth();
monthName.innerHTML =date.toLocaleString("en",{
    month:"long"
})
dayName.innerHTML=date.toLocaleString("en",{
    weekday:"long"
})
dayNumber.innerHTML=date.getDate();
Year.innerHTML=date.getFullYear();




