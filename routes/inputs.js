var express = require('express');
var router = express.Router();


/* GET inputs */
router.get('/', async (req, res, next) => {
    await mqtt.send({sampleParam: 'samplevalue'})
    res.send('Sent!');
});

module.exports = router;