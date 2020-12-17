// API

const form = document.getElementById('question-form');
const input = document.getElementById('question-input');
const headingThink = document.getElementById('heading-think');
const imgWtf = document.getElementById('img-wtf');
const headingAnswer = document.getElementById('heading-ans');


// get - download / read
// post -- creating
// patch -- update 
// delete -- delele

function askWtf(){
    return $.ajax({
        url: 'https://yesno.wtf/api',
        method: 'GET'
    })
}


// as I type in a qs and hit enter
// event listener
form.addEventListener('submit', function(event){
    event.preventDefault();

    imgWtf.setAttribute('src', "");
    headingAnswer.textContent = "";

    headingThink.classList.remove('hide');
    input.classList.add('hide');

    // call the api
    askWtf()
    .then(function (response) {
        // show the input box
        input.classList.remove('hide');

        // hide the think heading
        headingThink.classList.add('hide');
        console.log(response);

        imgWtf.setAttribute('src', response.image);

        headingAnswer.textContent = response.answer;

    });


    // I should expect the computer to ans with a 'yes' or 'no'
    // use ajax to call yesno.wtf api


});

