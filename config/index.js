const mongoose=require('mongoose');

//fill your database name here
mongoose.connect('mongodb://localhost/authentication_db').catch(function(reason){
     console.log('Unable to connect to mongodb instance.Error:',reason);
})
const db=mongoose.connection;

db.on('error',console.error.bind('console','error'));

db.once('open',function(){
    console.log('welcome connect to database');

});

module.exports=db;
