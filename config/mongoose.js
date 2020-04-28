//acquired a library
const mongoose= require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost/codeial_development");

//acquire the cinnection to check if it is successfull
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print this message
db.once('open',function(){
    console.log('successfully connected to the database');
});
module.exports=db;