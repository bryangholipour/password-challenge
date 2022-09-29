// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//encompassing all possible characters into a variable set creates one pool of possibilities to draw from
//could not figure out how to add double quotes into specialC group without causing an error
var allChar ={
  specialC: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  numbers: "9876543210",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
}


function finalProd() {
  var okGo = "";

  //assign length value to what the user inputs
  //prompt function for text input box 
  let length = prompt("Welcome to the password generator. How many characters would you like your password to contain? (type a number between 8-128 and click OK)");
  if(length < 8 || length > 128){
  //This deploys an additional message (alert variety) when value entered is outside of the required range. Have not figured out how to get out of the loop when this happens
    alert("You must choose a value between 8-128! Please Refresh the page to start over")
   } 
  //confirm function for "OK or Cancel" options (no text input box)
  let numbers = confirm("Would you like numbers in your password? Click OK for yes and Cancel for no");
  if(numbers === true) {
    okGo = (okGo + allChar.numbers);
  };
  
  let upperCase = confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no");
  if(upperCase === true) {
    okGo = (okGo + allChar.upperCase);
  };
 // each true return is adding that set of characters to the available pool to for the generator to draw from
 let specialC = confirm("Would you like special characters in your password? Click OK for yes and Cancel for no");
  if(specialC === true) {
    okGo = (okGo + allChar.specialC);
  };
  let lowerCase = confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no");
  if(lowerCase === true) {
    okGo = (okGo + allChar.lowerCase);
  };




  let password = "";
  for (let i = 0; i < length; i++) {
    //Use Math.floor/ Math.random function to generate random elements from arrays chosen by user
    password = (password + okGo[Math.floor(Math.random() * okGo.length)])
  }
  return password;
}
console.log(finalProd());
alert("Please open console to view your new password!")




//THE 5 PROMPTS NEEDED TO CREATE PASSWORD PARAMETERS//
// let length = prompt("Welcome to the password generator. How many characters would you like your password to contain? (type a number between 8-128 and click OK)");

// let specialC = confirm("Would you like special characters in your password? Click OK for yes and Cancel for no")

// let upperCase = confirm("Would you like uppercase letters in your password? Click OK for yes and Cancel for no")

// let lowerCase = confirm("Would you like lowercase letters in your password? Click OK for yes and Cancel for no")

// let numbers = confirm("Would you like numbers in your password? Click OK for yes and Cancel for no")



// const random = Math.floor(Math.random() * upperCase.length);
// console.log(random, upperCase[random]);

// console.log((charCount) * (numbers.length))
// if (okgo2 === "yes"){
  // console.log(specialC)
// }
// if (okgo3 === "yes"){
  // console.log(upperCase)
// }
// if (okgo4 === "yes"){
  // console.log(lowerCase)
// }
// if (okgo5 === "yes"){
  // console.log(numbers)
//