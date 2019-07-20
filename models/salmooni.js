const mongoose = require('mongoose');
const SalmooniSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    picture : {
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


module.exports = salmooni = mongoose.model('salmooni', SalmooniSchema);
