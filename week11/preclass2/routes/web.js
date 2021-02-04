const express = require('express');

const router = express.Router();


router.get('/fromrouter', (req, res)  => {

    res.json({
        data: 'hello'
    })

})

module.exports = router;