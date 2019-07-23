const mongoose = require('mongoose');
const SalmooniUsersSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    picture : {
        type: String,
    },
    mobile: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
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


module.exports = SalmooniUsers = mongoose.model('SalmooniUsers', SalmooniUsersSchema);
