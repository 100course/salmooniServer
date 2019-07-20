const express = require('express');
const router = express.Router();
const Salmooni = require('../../models/salmooni');

router.post('/add', async (req, res) => {
    try {
        const {name, picture} = req.body;
        const salmooni = new Salmooni({
            name,
            picture
        });
        const result = await salmooni.save();
        return res.send("success");
    } catch (err) {
        return res.status(500).json({erros : [{msg: "server error!"}]});
    }
});


module.exports = router;
