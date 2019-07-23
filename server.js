const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    res.header("Access-Allow-Control-Methods","GET,PUT,POST,DELETE");
    next();
});


app.get('/', (req, res) => res.send("hello"));

app.use('/salmooni', require('./routes/api/salmooni'));
app.use('/people', require('./routes/api/people'));
app.use('/time', require('./routes/api/time'));
app.use('/auth', require('./routes/api/auth'));



PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));



