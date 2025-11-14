const Model = require('./model');

exports.store = async(req,res)=>{
 Model.create(req.body) 
 .then(newData=>{
    res.status(201).send({message:"Data stored successfully",data:newData});
 })  
 .catch(err =>{
    res.status(500).send({message:"Error storing data",error:err})
 });
}

exports.index = async(req,res)=>{
    Model.findAll()
    .then(data=>{
        res.status(200).send({message:"Registration Data.",data:data});
    })
    .catch(err=>{
        res.status(500).send({message:"Error fetching data.",error:err})
    });
}