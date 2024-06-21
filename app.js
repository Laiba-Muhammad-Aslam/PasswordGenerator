var lengthBox = document.getElementById("lengthbox");
var lengthBar = document.getElementById("lengthbar");
var passwordContainer = document.getElementById("passwordContainer");
// console.log(lengthBox.innerText)
console.log(lengthBar.value);
lengthBox.innerText = lengthBar.value;

var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
console.log(numbers);
console.log(symbols);


var numbers = "0123456789";
var symbols = "@.%#!";

function generateRandomPassword(length){
    var randomPassword = Math.floor(Math.random() * 10);
    passwordContainer.innerText = randomPassword;
}

generateRandomPassword(lengthBar.value)
