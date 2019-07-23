const express = require('express');

const router = express.Router();

const SalmooniUsers = require('../../models/salmooniUsers');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');


router.get('/', auth, async (req, res) => {
    try {
        console.log("req, header : ", req.headers);
        const user = await SalmooniUsers.findOne({mobile:req.user.mobile});
        console.log("user found and is : ", user);
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



router.post('/register', async (req, res) => {
    try{
        const data = req.body;
        console.log(data);
        const {mobile, type, name} = data;
        let salmooniUser = await SalmooniUsers.findOne({mobile});
        if(salmooniUser){
            res.send('user exits')
        }

        salmooniUser = new SalmooniUsers({
            mobile,
            name,
            type
        });

        const result = await salmooniUser.save();
        const payload = {
            salmooniUser : {
                mobile: salmooniUser.mobile
            }
        };

        jwt.sign(payload,
            config.get('jwtToken'),
            {expiresIn: 360000},
            (err, token) => {
                if(err)
                    throw err;
                res.json({token, result});
            }
            );


    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const data = req.body;
        console.log(data);
        const {mobile} = data;
        let salmooniUser = await SalmooniUsers.findOne({mobile});
        if(!salmooniUser){
            res.send('user doesnt exits')
        }

        const payload = {
            salmooniUser : {
                mobile: salmooniUser.mobile
            }
        };

        jwt.sign(payload,
            config.get('jwtToken'),
            {expiresIn: 360000},
            (err, token) => {
                if(err)
                    throw err;
                res.json({token, salmooniUser});
            }
            );


    } catch (err) {
        console.log(err);
    }
});


module.exports = router;
