inputOne = document.getElementById("one").addEventListener("keyup", getUserInputOne);
inputTwo = document.getElementById("two").addEventListener("keyup", getUserInputTwo);
x = " ";
y = " ";

function getUserInputOne() {
x = document.getElementById("one").textContent;
 x = document.getElementById("value_one").innerHTML;
  console.log("x", x[1]);
}

function getUserInputTwo() {
  userInputTwo = document.getElementById("two").textContent;
  y = document.getElementById("value_two").innerHTML;
  console.log("y", y);
} 

function calculate(x,y,total) {

button = document.getElementsByTagName("button");

multiplyEl = document.getElementById("multiply").addEventListener("click", function( event ) {
   
    var x = 33;
    var y = 44;
    total = x * y;

    multiply = (function multiply(x, y) {
       return total;
    })();
    console.log("multiply", multiply);
  
  // event.target.innerHTML = "click count: " + event.detail;

}, false);

addEl = document.getElementById("add").addEventListener("click", function( event ) {
  var x = 20;
  var y = 30;
  total = x + y; 

  add = (function add(x, y) {
    return total;
  })();
  console.log("add", add);
  
  // event.target.innerHTML = "click count: " + event.detail;

}, false);

subEl = document.getElementById("subtract").addEventListener("click", function( event ) {
  
var x = 200;
var y = 100;
total = x - y;
 
subtract = (function subtract(x, y) {
  return total;
 })();
 console.log("subtract", subtract);

// event.target.innerHTML = "click count: " + event.detail;

}, false);

divide = document.getElementById("divide").addEventListener("click", function( event ) {
  
var x = 400;
var y = 2;
total = x / y;
 
divide = (function divide(x, y) {
  return total;
 })();
console.log("divide", divide);

// event.target.innerHTML = "click count: " + event.detail;

}, false);

modulus = document.getElementById("modulus").addEventListener("click", function( event ) {
  
var x = 30
var y = 300
var total = x%y;

modulus = (function modulus(x, y) {
  return total;
 })();
 console.log("modulus", modulus);

// event.target.innerHTML = "click count: " + event.detail;

}, false);

document.getElementById("result").innerHTML = "Total: ";

}


// var output = total.
