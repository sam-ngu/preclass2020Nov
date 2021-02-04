const express = require('express');
const router = require('./routes/web');
const app = express();


const PORT = 3005;


// middleware
app.use((req, res, next) => {
    console.log('heyyyy');
    next();

});


app.use((req, res, next) => {
    console.log("heyyyy22");

    next();
});

app.use(router);



// router + controller
app.get('/abc', (req, res) => {
    console.log('123');
    res.send('hi there')
});





app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
})



