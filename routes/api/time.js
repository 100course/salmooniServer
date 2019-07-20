const express = require('express');
const router = express.Router();
const People = require('../../models/people');
const Salmooni = require('../../models/salmooni');

router.post('/add', async (req, res) => {
    try {
        const data = req.body;
        const {start, end, date, done, taken, takenFrom, takenBy} = data;
        const time = new Time({
            start,
            end,
            date,
            done,
            taken,
            takenFrom,
            takenBy
        });
        const result = await time.save();
        res.send(result);
    } catch (err) {
        res.send(err.data);
    }
});


module.exports = router;
