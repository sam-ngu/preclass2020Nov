// OOP

// 1. procedural programming
const hey = 123;
if(hey===123){
    hey = hey + 3
}

const width = 15

const area =  width * width;

const total = area * 5;

// 2. OOP -- store the magic insides object
console.log()

const square = {
    width: 15,
    getArea: function(){
        return this.width * this.width
    }
}
const area = square.getArea()
const total = 5 * area;


const apple  = {
    name: 'apple',
    taste: 'sour',
    colour: 'red',
    eat: function(){
        console.log('hmmm');
    }
}

const orange = {
    name: 'orange',
    taste: 'sweet',
    colour: 'black',
    eat: function(){
        console.log('hmmm');
    }
}

class Fruit {
    name = '';
    taste = '';
    colour = '';

    constructor(name, taste, colour){
        console.log('loadijngnng');
        this.name = name;
        this.taste = taste;
        this.colour = colour;
    }

    eat = function(){
        console.log('yessss');
    }
}

// instantiate an obj out of a class
const durian = new Fruit('durian', 'nice', 'green');
const grape = new Fruit('grape', 'nice', 'green');
console.log(durian);









// 3. Functional -- all abt func

const fruits = ['apple', 'orange', 'kiwi', 'grape', 'durian'];

const results = [];

for (let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];
    
    if(fruit.length < 5){
        continue;
    }

    results.push(fruit.toUpperCase());
}
console.log(results);

const result2 = fruits.filter((fruit) => fruit.length >  4 )
                    .map((fruit) => fruit.toUpperCase() )
console.log(result2);


