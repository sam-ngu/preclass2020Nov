// what is the purpose ?

// main script of our app

// 1, instantiate express
const express = require('express');

const app = express();

// configuration
const PORT = 3000;


// how to serve html?
app.get('/', (req, res) => {

    // console.log(req);

    // res.setHeader('blah', 'luca ate a frog today')

    res.json({
        name: 'sam'
    });

    console.log('heyyyyy');

});


app.post('/abc', () => {

})


// 2. start a listen
app.listen(PORT, () => {
    console.log('app is running at http://localhost:' + PORT);
});
