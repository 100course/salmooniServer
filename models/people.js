const mongoose = require('mongoose');
const PeopleSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    mobile : {
        type: Number,
        required: true
    },
    times : [
        {
            start : {
                type: String,
                required: true
            },
            end: {
                type: String,
                required: true
            },
            state : [
                {
                    done: {
                        type: Boolean,
                        required: true
                    },
                    takenFrom: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'salmooni'
                    }
                }
            ]
        }
    ]
});


module.exports = people = mongoose.model('people', PeopleSchema);
