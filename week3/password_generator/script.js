// Assignment Code
var generateBtn = document.querySelector("#generate");


function add(x, y)
{
  var result = x + y;
  return result;
}

var sum = add(5 , 6);
var sum = add(15 , 16);
var sum = add(1 , 6);

 var chars = ['r', 'p', 's' ,'a'];
 var 

//  chars[2] = 'k';

//  console.log(chars);
  var chars2 = 'rps';
  console.log(chars2[1]);   // 'p'

  // chars2[2] = 'z';

  console.log(chars2[2]);

  chars[1] // 'p'

// Write password to the #password input
function writePassword() {

  // 
  var password = '';
  // define charset

  // find a way to get random char from charset

  // we need to use the math thing

  // we will get the num of char from the user

  // loop for that number of times

  // for each iteration we need to grab a random char from
  // charset

  // this random char will be a part of our final pass

  // 
  
 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
