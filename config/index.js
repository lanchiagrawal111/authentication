const mongoose=require('mongoose');

//fill your database name here
const MONGODB_URI=process.env.DATABASE_URL || 'mongodb://localhost/authentication_db'
mongoose.connect(MONGODB_URI,{useNewUrlParser:true});


const db=mongoose.connection;

db.on('error',console.error.bind('console','error'));

db.once('open',function(){
    console.log('welcome connect to database');

});

module.exports=db;
