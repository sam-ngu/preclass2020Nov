// load time into the dom


setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

}, 1000);


// set up table
// shouldn't create the timetable via raw html

const times = ["9am", '10am', '11am'];
// for loop 
for (let index = 0; index < times.length; index++) {
    const time = times[index];
    // in each loop we create a time row

    // each row would have the time
    // textarea
    // button

    // attacj event listner
    const button;

    $(button).on('click', function(event){
        event.preventDeault();

        // identify which row

        $(event.target).parent()


        // row
        const row;
        // const time = row.firstChild().text()

        // i want to get the value of textarea
        // data = row.secondChild().firstChild().val()
        // TODO: 

        // FIXME: 
        localStorage.setItem('data-row-' + time, data)

    });


    // create a data attr on the row
    // data-row-time 
    // so we can identify each row
    // and create a unique key in local storage



}
