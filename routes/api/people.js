const express = require('express');
const router = express.Router();
const People = require('../../models/people');

router.post('/add', async (req, res) => {
    try {
        const {name, mobile} = req.body;
        const people = new People({
            name,
            mobile
        });
        const result = await people.save();
        return res.send("success");
    } catch (err) {
        return res.status(500).json({erros : [{msg: "server error!"}]});
    }
});

router.post('/', async (req, res) => {
    try {

        const {mobile} = req.body;
        console.log(mobile);
        const people = await People.findOne({mobile});
        return res.json(people);
    } catch (err) {
        return res.status(500).json({erros : [{msg: "server error!"}]});
    }
});



module.exports = router;
