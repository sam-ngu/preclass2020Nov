// variable -- placeholder for data
let money = 10;
money = 11;
console.log(money);
// const money2 = 11;
// money2 = 12


//  pocket money
// buy lunch
let lunch = 5;
let afterLunch = money - lunch;

// buy candy
let candy = 1;
let afterCandy = afterLunch - candy;

// data type
// string  --- text
let string1 = 'abc';
let string2 = "abc";
let string3 = `abc`;

// number -- integer(number without decimals) / float (number with decimals)
let num1 = 1123; // number
let num2 = 1123.1231231;  // float


// boolean -- true / false
let bool1 = true;  
let bool2 = false;


// array -- a collection of data / group of data
let fruit1 = 'apple';
let fruit2 = 'orange';
let fruit3 = 'kiwi';

// array index === id of element
// starts from 0
let fruits = [ 'apple', 'orange', 'kiwi', 'pineapple' ];

// we can access a particular element by passing the index after the array
console.log(fruits[2]);
console.log(fruits[3]);


// object -- a collection of key and value pair
// key a.k.a property
let car = {
    // 5: 'hello',  // dont do this, never use number as key
    'color': 'blue',
    'brand': 'toyota',
}
// first way -- to use square bracket
console.log(car['color']);
// second way -- dot notation
console.log(car.color);

let family = {
    abaaba: 'awae'
}


let abc1;
console.log(abc1); // undefined

// null  -- means nothing
let empty = '';  // i
console.log(null);

// "" --- string
// null is a data 
let apple = null;

console.log(apple === '');




// undefined -- something that hasnt been assigned a value
let abc = undefined;

// NaN -- not a number 
console.log('a' + 1);
console.log('a' * 5);
// console.log(typeof NaN)


// if else

let username = 'sam';
let role = 'admin';
let password = '123';  // actual pass 1234

// check if cred is ok OR role is admin
// if ( username === 'sam' && password === '1234' ){
//     console.log('you are in');
// }else if( role === 'admin'){
//     console.log("you are admin so you are ok");
// }
// else{
//     console.log('try again');
// }

// && -- and
// ||  -- or
// if either (username is sam and password is 1234) or role is admin
let credentialIsOk = username === 'sam' && password === '1234';
let roleIsAdmin = role === 'admin';

if( credentialIsOk || roleIsAdmin  ){
    console.log('you are in');
}else {
    console.log('try again');
}

if (5 === 4){
    console.log('heyyy');
}else {
    console.log('youuu');
}


// function -- mini program 
// like a a factory 
// takes in an input -- arguments / parameter
// then we process 
// then we may or may not return the result

function add(num1, num2){
    let result = num1 + num2;
    return result;
}



console.log(add(4, 2));
console.log(add(41, 2));
console.log(add(42, 2));
console.log(add(431, 2));
console.log(add(423, 2));


// loop

function sendEmail(email){
    // send email logic
}

let fruits1 = ['apple', 'orange', 'kiwi'];
let emails = ["apple@gmail.com", "orange@gmail.com", "kiwi@gmail.com"];


// 1. initiliaze (first component)
// 2. check if condition pass (2nd component)
// 3. if pass, we will run the logic 
// 4. then run 3rd component
// 5. repeat step 2;
// ii ++  --> ii = ii + 1
for (let ii = 0; ii < fruits1.length; ii++){
    // logic
    console.log('hey');
    console.log(fruits1[ii].toUpperCase());
}


// event listener

// document (DOM)

console.log();
