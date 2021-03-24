
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

// Array of Options
var special_Characters = ["+", "*", "?",
  "[", "^", "]", "$", "(",")", "{", "}", "=", "!","<", ">", "|", ":", "-"];
var numeric_Characters= ["0","1","2","3","4","5","6","7","8","9"];
var  upper_Case = ["A","B","C","D","E","F","G","H","I","J","K",
  "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower_Case = ["a","b","c","d","e","f","g","h","j","k",
  "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Empty array to store array
var userChoiceArray = [];


var generatePassword = function(){
  //Ask user number integer
  var userChoice = window.prompt("How many characters would you like your password to contain?");
  //Convert to a number
  userChoice = parseInt(userChoice); 
  //Check to accept user input in correct range and format
  if(userChoice >= 8 && userChoice <= 128 && !isNaN(userChoice)) {
    
      var specialChar = window.confirm("Click OK to confirm including a special characters.");
      if (specialChar == true){
        userChoiceArray = userChoiceArray.concat(special_Characters);
        
      }
      var numericChar = window.confirm("Click OK to confirm including a numeric characters.");
      if (numericChar == true){
        userChoiceArray = userChoiceArray.concat(numeric_Characters);
        
      }
      var upperCase = window.confirm("Click OK to confirm including a UpperCase.");
      if (upperCase == true){
        userChoiceArray = userChoiceArray.concat(upper_Case);
        
      }
      var lowerCase = window.confirm("Click OK to confirm including a LowerCase.");
      if (lowerCase == true){
        userChoiceArray = userChoiceArray.concat(lower_Case);
        
      }
      //An empty string to store the password
      var finishedPassword = ''
      //Iterating
      for (let i = 0; i < userChoice; i++) {
        var randomIndex = Math.floor(Math.random()*userChoiceArray.length)
        finishedPassword+=userChoiceArray[randomIndex];
    
      } return finishedPassword
  }else{
    window.alert("Password length must be at least 8 characters");
  } 
}

