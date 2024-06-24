var passwordContainer = document.getElementById("passwordContainer");
var randomBtn = document.getElementById("randombtn");
var refreshBtn = document.getElementById("refreshbtn");
var copyBtn = document.getElementById("copybtn");
var lengthBar = document.getElementById("lengthbar");
var lengthBox = document.getElementById("lengthbox");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var password = "";

copyBtn.addEventListener("click", copy);
randomBtn.addEventListener("click", generateRandomPassword);
refreshBtn.addEventListener("click", generateRandomPassword);
lengthBar.addEventListener("input", updateLength);

//Functions

function copy(){
    navigator.clipboard.writeText(passwordContainer.value);
    alert("Password copied to clipboard!");
}

function updateLength(){
    lengthBox.textContent = lengthBar.value;
}
updateLength();

function generateRandomPassword(){
    var length = parseInt(lengthBar.value);
    var includeNumbers = numbers.checked;
    var includeSymbols = symbols.checked;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(includeNumbers){
        charset+= "0123456789";
    }
    if(includeSymbols){
        charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    password = "";
    for(var i = 0; i < length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordContainer.value = password;

}

