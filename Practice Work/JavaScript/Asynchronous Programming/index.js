// Synchronous V/s Asynchronous Code

// Synchronous --> Most of the code that we have seen till now is Synchronous in nature. Synchronous means each line of code is executed line by line in a given order that we have written in our code and each line of code waits for previous line to execute. For e.g below code is synchronous

// const image = document.getElementsByTagName('img')[0];
// console.log('Hey Riya')
// console.log(image)
// alert("This is an image of Naruto")
// image.style.border = "3px solid red"

// The above code is a synchronous code where exch line will execute one by one so line 5,6,7 finished executing and we reach line 8 where there is an alert() This alert() will block the execution of code which is after it because alert will be there till the user closes it manually. It means synchronous code will start giving us blocking problems once a heavy or time consuming task comes into picture. Theses heavy tasks can be xml http requests, fetch functions or alert in our case. 

// Asynchronous JavaScript 
//So we have to do something to avoid this blocking of code that's where Asynchronous JavaScript comes into play. So all these heavy will keep go on running in background and once the entire script is loaded then only they will execute so blocking won't happen. 

// const image = document.getElementsByTagName('img')[0];
// console.log('Hey Riya')
// console.log(image)
// setTimeout(() => {
//     console.log("hello")
// }, 5000)
// console.log('Hey Riya')
// image.style.border = "3px solid red"

// What will happen in this case that setTimeout () which is a web api which takes a callback function as an argument will helps to get the asynchronous behaviour. So code will execute line by line 16,17,18, the moment we reach line 19 which has this setTimeout () it will executes but it will go to the backgound where a timer will attch to it which has 5000 ms and line 22, 23 will executes without blocking of code and now callstack will become empty and the moment we 5000 ms gets over it will show that alert pop up.

// Note : Not all callbacks give us Asynchronous behaviour for example incase of higher order functions like map, filter & reduce we have callbacks but they are synchrounous in nature.


//We can checkout below code to analyse how callbacks helps in asynchronously
// setTimeout(() => {
//     console.log('Hello Mayur Bhai')
// }, 10000)

// function x(y) {
//     console.log('x')
//     y();
// }
// x(function y() {
//     console.log('y')
// })

// The output of this code will be
//x
//y
//'Hello Mayur Bhai' --> this line will come after 10 secs. We can see this in devs tools if we place a debugger on line 40 firse and then on line 32 then we see that for a moment callstack becomes empty and once the timer finishes the execution context of setTimeout comes back in call stack.

const image = document.getElementsByTagName('img')[0];
console.log('Hello JS')
image.src = "https://play-lh.googleusercontent.com/hON-e-5E1GoEww23ErRfRdlf3ZD-BvjIDonaU8k14HYH6UG9MAjRjg5SNHnYgsOyOhfREA";
image.addEventListener('load', () => {
    image.style.opacity = '1';

})
console.log('Hello JS')

// Here .src will give us the Asynchronous Behaviour and on this we are using load event
// Note that src is giving us the asynchronous behaviour not the event listener

// AJAX --> Asynchronous JavaScript And XML--> AJAX allows us to communicate with remote web servers asynchronously, with the help of AJAX we can receive data from web servers asynchronously. Request can be GET ot POST. GET is to receive data and POST is for sending data.
// xml is a data format which was used previously to send or receive data between client and server
// XML data format looks like this
/*
<CATALOG>
  <CD>
    <TITLE>Empire Burlesque</TITLE>
    <ARTIST>Bob Dylan</ARTIST>
    <COUNTRY>USA</COUNTRY>
    <COMPANY>Columbia</COMPANY>
    <PRICE>10.90</PRICE>
    <YEAR>1985</YEAR>
  </CD>
  </CATALOG>
*/
//XML data format is not used these days,  the most popular one is JSON format which is like a javaScript object enclosed in quotes i.e. a string

//But was so popular back then that's why we still use this term AJAX

//API ---> API stands for Application Programming Interface, API is a piece of software that can be used by other softwares so that applications can communicate with each others.
// There are many types of APIs for example DOM API, Geolocation API and Online API
//Online API or Generally called as API is a application runnning on server which can receive requests for data and can send data in response. We can build our own APIs using Backend Developemnt or there are literally free APIs for everything.