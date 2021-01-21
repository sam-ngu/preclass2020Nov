function Person(){
    /// ..

    this.name = '';
    this.favFood = '';

    this.walk = function(){
        // ..
    }
}

Person.prototype.walk = function(){
    console.log('I believe I can walk faster than usain bolt');
}



const luca = new Person();
luca.walk();