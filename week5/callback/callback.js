
function add(x,y){
    return x + y;
}

function shopping(budget, todoAfterShoppingCb ){
    console.log('hey lets go shopping');
    budget = budget - 100;
    budget = todoAfterShoppingCb(budget);
    return budget;
}
const balance = shopping(1000, function(budget){
    budget = budget - 1000
    return budget;   
});

console.log(balance);

function watchMovie(budget){
    console.log('watching movie');

    if(budget < 10){
        console.log('go home');
    }
}

