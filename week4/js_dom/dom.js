// DOM manipulation


let main = document.querySelector("#main-element");
let mainById = document.getElementById("main-element");

let h1 = document.querySelector('main>h1');

h1.classList = 'aaa'
h1.classList.add('large-text')
h1.classList.remove('aaa');

h1.setAttribute('id', 'awesome-id');








console.log(main);
console.log(main.id);


let secondA = document.querySelector('main>a');
console.log(secondA.getAttribute('href'));




// setTimeout 
setTimeout(function(){
    console.log('hello');
}, 2000);

// setInterval
setInterval(function(){
    console.log('peek a boo');
    if (h1.getAttribute("style") === "background-color: red;"){
        h1.setAttribute("style", "background-color: blue;");
    }else{
        h1.setAttribute("style", "background-color: red;");

    }

}, 1000);

