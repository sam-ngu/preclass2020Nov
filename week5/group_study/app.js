
// const heading1 = document.querySelector('section>article>h1')

// const $heading1 = $(heading1);


// // heading1.textContent = 'abc'
// // heading1.setAttribute('class', 'red')

// console.log(heading1);




// const heading2 = $("section>article>h1");

// const text = heading2.text();
// const class1 = heading2.attr('class' );
// console.log(class1);

// console.log(text);

// console.log(heading2);

// document.querySelector('h1')

// // text()  -- innerText
// // html()  -- innerHtml

// // append() -- appendChild
// // each -- for loop
// // attr -- setAttribure/getAttribute

// // $()  -- querySelector / convert data into jquery Obj


// // $("abc")
// $([123,2,3,])

// const fruits = ['apple', 'orange', 'kiwi'];

// for (let index = 0; index < fruits.length; index++) {
//     const fruit = fruits[index];
    
// }

// $(fruits).each(function(index, value){

// });


// scope and this
// what is a scope? -- defined by the {}
// why? isolate variable / prevent pollution


// let importantStuff = '1321newdwa';
// var abc = 123;

// var abc = 456;


// // let and const
// // 1. follow the rules of scope
// // scope (room)=== whatever happens inside the room stays inside
// // 2. if you try to get something before it is declared, you ll get an error
// // 3. when js sees a let or const variable, it will first look for a declaration in the
// // current scope
// // if it couldn't find it, then it will look for one in the parent scope and continue to
// // traverse up until global


// {
//     // console.log(importantStuff); // 1321newdwa // error // undefined // idk what u are talking abt

    
//     console.log(importantStuff); // error // undefined // 1321newdwa // 0
//     let importantStuff = 0;
// }

// console.log(importantStuff); // error // undefined // 1321newdwa // 0 


// // var importantStuff;
// // importantStuff = "1321newdwa";


// // {
// //     importantStuff = 0;
// // }

// // console.log(importantStuff);



// // if (true) {
// //     console.log(importantStuff); // 1321newdwa // error // undefined // idk what u are talking abt

// //     var importantStuff = 0;

// //     console.log(abc);
// // }

// function test(){

//      console.log(importantStuff); // 1321newdwa // error // undefined // 0 // idk what u are talking abt

//      let importantStuff = 0;
// }


// function test() {
//     var importantStuff;
//     console.log(importantStuff); // 1321newdwa // error // undefined // idk what u are talking abt

//     importantStuff = 0;
// }

// test();


// console.log(some); // error // undefined // thing // idk
// var some = 'thing';


// var some;
// console.log(some);
// some = 'thing'


// // declaration
// var name;
// // assignment
name = 'abc'



// for (let index = 0; index < array.length; index++) {


//     const element = array[index];
    
// }

// // use importantStuff to login 
// // .. 

// function name(params) {
    
// }

// while (condition) {

    
// }

// const object = {};





// this -- calling context

const car = {
    colour: 'blue',
    drive: function(){
        console.log(this); 

        function inner(){
            console.log(this);
        }

        inner();

    }
}

car.drive();

const drive = car.drive;

drive();


function hello(){
    console.log(this);
}

hello();


const helllooyyya = {
    heyy: function(){
        console.log(this);

        function lalal(){
            console.log(this);
        }

        lalal()

    }
}

helllooyyya.heyy()


const yoyoy = helllooyyya.heyy;

yoyoy()
