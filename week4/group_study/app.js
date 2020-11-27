// DOM Manipulation

const link = document.createElement('a');



link.setAttribute('href', '#');
link.setAttribute('class', 'linkky');
// data attribute
link.setAttribute('data-read', 'linkky');

link.setAttribute("data-clawdadwass", "linkky");


// link.setAttribute("style", "font-size: 20px; font-weight: 200;");

link.style.fontSize = '20px';
link.style.fontWeight= '200';


console.log(link.dataset);


link.textContent = 'adadwadaw';



document.body.appendChild(link);


const car = {
    name: 'toyota'
}

const car1 = car;

car1.name = 'abc';

console.log(car);


// 'node' === 'element' in the dom
// document.body.appendChild

// const button = document.querySelector('button')
// const button2 = document.querySelectorAll('button')

// console.log(button);
// console.log(button2);

// const lorem = document.getElementById('lorem');
// console.log(lorem);

const buttonSection = document.querySelector('.buttons');
const container = document.querySelector('.container');
const submitButton = document.getElementById('btn-submit');
const form = document.getElementById('form');


form.addEventListener("submit", function (event) {
    event.preventDefault();
});
// submitButton.addEventListener('click', function(event){
//     event.preventDefault();
// });

container.addEventListener('click', function(event){
    console.log('received in container');
})

buttonSection.addEventListener('click', function(event){

    const buttonClicked = event.target;
    console.log('received in button');
    event.stopPropagation();


    // let copy = buttonClicked;
    // let copy = buttonClicked.cloneNode();


    // container.appendChild(copy);

    // buttonClicked.remove();


    // copy.setAttribute('style', 'background-color: red');

    // alert('You have won a ' + buttonClicked.dataset.reward);

    // if (buttonClicked.textContent === '1'){
    //     alert('You got an alien');
    // }

})



// event
document.addEventListener('mousemove', function(event){
    console.log('hey');
    // console.log(event);
})


window.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    console.log('right click');
    
})


// local storage
const car = {
    name: 'aaa',
    name1: {
        aaa: '123123',
        bbb: '123123',
    },
    name2: [
        '12132131'
    ],
    drive: function(){
        console.log('brummm');
    }
}

JSON.stringify(car);


// method vs function

// function add(x,y){
//     return x + y;
// }
// add();

// document.createElement()


