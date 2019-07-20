const mongoose = require('mongoose');
const TimeSchema = new mongoose.Schema({
    start: {
        type: Number, //like this => 19.5 or 21.25 هفت و نیم و ن و رب
        required: true
    },
    end: {

        type: Number, //like this => 19.5 or 21.25 هفت و نیم و ن و رب
        required: true

    },
    date: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    taken: {
        type: Boolean,
        required: true
    },
    takenBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people'
    },
    takenFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'salmooni'
    }
});


module.exports = time = mongoose.model('time', TimeSchema);
