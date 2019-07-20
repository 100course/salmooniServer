const mongoose = require('mongoose');
const SalmooniUsersSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    picture : {
        type: String,
    },
    type: {
        type:
    },
    times : [
        {
            time: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'time'
            }
        }
    ]
});


module.exports = salmooni = mongoose.model('salmooni', SalmooniSchema);
