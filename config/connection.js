var mysql = require('mysql');
var db;
var setting = {
    host : "localhost",
    user : "root",
    password : "123456",
    database : "celebration_holdings"
};

function connectDatabase(){
    if(!db){
        db = mysql.createConnection(setting);
        db.connect(function(err){
            if(!err){
                console.log("Database Connected.");
            }else{
                console.log("Error Database connection");
            }
        })
    }
    return db;
}

module.exports = connectDatabase();