const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send("hello"));

app.use('/salmooni', require('./routes/api/salmooni'));
app.use('/people', require('./routes/api/people'));
app.use('/time', require('./routes/api/time'));



PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));



