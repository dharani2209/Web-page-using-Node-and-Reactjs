'user strict';
var dbConn = require('../../config/db.config');
var Tourism = function(tourism){
    this.place  = tourism.place;
    this.days    = tourism.days;
    this.package  = tourism.package;
    this.covid_restrictions  = tourism.covid_restrictions;
    this.temperature  = tourism.temperature;
};
Tourism.create = function (newTour, result) {    
    dbConn.query("INSERT INTO tourism set ?", newTour, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Tourism.findById = function (id, result) {
    dbConn.query("Select * from tourism where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Tourism.findAll = function (result) {
    dbConn.query("Select * from tourism", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tourism : ', res);  
            result(null, res);
        }
    });   
};
Tourism.update = function(id, tourism, result){
  dbConn.query("UPDATE tourism SET place=?,days=?,package=?,covid_restrictions=?,temperature=? WHERE id = ?", [tourism.place,tourism.days,tourism.package,tourism.covid_restrictions,tourism.temperature, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Tourism.delete = function(id, result){
     dbConn.query("DELETE FROM tourism WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Tourism;