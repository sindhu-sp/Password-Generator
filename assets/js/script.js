// Assignment code here
// Inputs
var userPrompt;
var numericChar;
var uppercaseChar;
var lowercaseChar;
var specialChar;

// number array
var number = [1,2,3,4,5,6,7,8,9,0];

// lowercase array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
            "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase array
var alphaUpper = alphabet.map(name => name.toUpperCase());

// special character array
var special = ["~", "@", "$", "%", "^", "&", "*", "(", ")", "_"];
             

// Other user choices
var userChoice;
// password function
function generatePassword(){
    userPrompt = prompt("How many characters would you like for the password? Choose between 8 and 128");
    
// User validation
// while (Number.isInteger(userPrompt)== true) {
    while (userPrompt < 8 || userPrompt > 128){
    userPrompt = prompt("Choose a number between 8 and 128");
}
// }
// else if (!userPrompt){
//     alert("Need to enter a number between 8 and 128");
// }

    numericChar = confirm("Is this going to have numbers");
    uppercaseChar = confirm("Is this going to have uppercase");
    lowercaseChar = confirm("Is this going to have lowercase");
    specialChar= confirm("Is this going to have special character");
// Condition when the user choises of different options for the password
if (!numericChar && !uppercaseChar && !lowercaseChar && !specialChar){
    userChoice = alert("Something should be chosen");
}

// Selection of random variables
var pass= [];
var array = [];
if (specialChar === true){
    array.push(special);
}
if (uppercaseChar === true){
    array.push(alphaUpper);
}
if (lowercaseChar === true){
    array.push(alphabet);
}
if (numericChar === true){
    array.push(number);
    
}
console.log(array);
for (var i = 0; i < userPrompt; i ++) {
    // if(pass.length === userPrompt) {
    //     break;
    // }
     var randomArray = array[Math.floor(Math.random() * array.length)];
     var randomChar = randomArray[Math.floor(Math.random() * (randomArray.length))];
     pass.push(randomChar);
     console.log(randomChar);
 }
var password = pass.join("");
userInput(password);
return password;

function userInput(password) {
    document.getElementById("password").textContent = password;
}

}
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
  } 
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  