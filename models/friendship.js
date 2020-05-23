const mongoose= require('mongoose');

const frienshipSchema= new mongoose.Schema({
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps:true
});

const Frinedship= mongoose.model('Friendship', frienshipSchema);

module.exports= Frinedship;