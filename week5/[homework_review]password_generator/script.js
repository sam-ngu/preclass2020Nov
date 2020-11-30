// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // 
  // define charset
  const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberCharset = '1234567890';
  const symbolCharset = '!@#$%^&()';


  // find a way to get random char from charset
  function getRandomChar(charset){
      // we need to use the math thing
      const randomIndex = Math.floor(Math.random() * charset.length);
      return charset[randomIndex];
  }


  // we will get the num of char from the user
  const characterLength = prompt('How many characters do you want (8 - 128 characters');
  
  const userEnterNothing = characterLength.length === 0;

  const userEnterS__t = isNaN(Number(characterLength));

  console.log({userEnterNothing});
  console.log({userEnterS__t});


  if( (userEnterNothing || userEnterS__t) ){
    alert('please enter a valid number bro');
    return;
  }
  
  const userWantsLowercase = confirm("U want lowerase bro?");
  const userWantsUppercase = confirm("UWat about upper?");
  const userWantsNumber = confirm("Number?");
  const userWantsSymbol = confirm("U want symbol bro?");


  let charset = "";

  if(userWantsLowercase){
      charset = charset + lowercaseCharset;
  }

  if(userWantsUppercase){
      charset = charset + uppercaseCharset;
  }

  if (userWantsNumber) {
      charset = charset + numberCharset;
  }

  if (userWantsSymbol) {
      charset = charset + symbolCharset;
  }

  // loop for that number of times
  const loopTimes = Number(characterLength);

  let password = "";

  for (let index = 0; index < loopTimes; index++) {
      // for each iteration we need to grab a random char from
      // charset
      const randomChar = getRandomChar(charset);

      // this random char will be a part of our final pass
    password = password + randomChar;
  }
    
  console.log(password);
 
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
