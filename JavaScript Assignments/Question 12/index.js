//12. Create a human readable time format using the Date time object
//- YYYY-MM-DD HH:mm
//- DD-MM-YYYY HH:mm
//- DD/MM/YYYY HH:mm

const date = new Date();

const year = date.getFullYear();

let month = date.getMonth() + 1;
month = month < 10 ? "0" + month : month;

let dateToday = date.getDate();
dateToday = dateToday < 10 ? "0" + dateToday : dateToday;

let hours = date.getHours();
hours = hours < 10 ? "0" + hours : hours;

let mins = date.getMinutes();
mins = mins < 10 ? "0" + mins : mins;

//- YYYY-MM-DD HH:mm
const dateFormat1 = `${year}-${month}-${dateToday} ${hours}:${mins}`;
//- DD-MM-YYYY HH:mm
const dateFormat2 = `${dateToday}-${month}-${year} ${hours}:${mins}`;
//- DD/MM/YYYY HH:mm
const dateFormat3 = `${dateToday}/${month}/${year} ${hours}:${mins}`;

//output
console.log(`Date Format 1 ${dateFormat1}
Date Format 2 ${dateFormat2}
Date Format 3 ${dateFormat3}`)

