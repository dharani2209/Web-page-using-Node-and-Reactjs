'use strict';

const Tourism = require('../models/tourism.model');

exports.findAll = function(req, res) {
    Tourism.findAll(function(err, tourism) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', tourism);
    res.send(tourism);
  });
};
exports.create = function(req, res) {
    const new_tourism= new Tourism(req.body);

   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tourism.create(new_tourism, function(err, tourism) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Tourism added successfully!",data:tourism});
        });
    }
};
exports.findById = function(req, res) {
    Tourism.findById(req.params.id, function(err, tourism) {
        if (err)
        res.send(err);
        res.json(tourism);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tourism.update(req.params.id, new Tourism(req.body), function(err, tourism) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Tourism successfully updated' });
        });
    }
  
};
exports.delete = function(req, res) {
    Tourism.delete( req.params.id, function(err, tourism) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Tourism successfully deleted' });
  });
};