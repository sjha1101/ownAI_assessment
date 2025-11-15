const Model = require('./model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "Sjha123456";

exports.store = async(req,res)=>{
 Model.create(req.body) 
 .then(newData=>{
    res.status(201).send({message:"Registration completed.",data:newData});
 })  
 .catch(err =>{
    res.status(500).send({message:"Error",error:err})
 });
}

exports.index = async(req,res)=>{
    Model.findAll()
    .then(data=>{
        res.status(200).send({message:"Registered users.",data:data});
    })
    .catch(err=>{
        res.status(500).send({message:"Error fetching data.",error:err})
    });
}

exports.show = async(req,res)=>{
    const id = req.params.id;
    Model.findByPk(id)

    .then(data=>{
        res.status(200).send({message:"User data.",data:data});
    })
    .catch(err=>{
        res.status(500).send({message:"Error fetching data.",error:err});
    })
}

exports.login = async(req,res) =>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.send({message:"Email & password are required."});
    }
    const user = await Model.findOne({where:{email:email}});

    if(!user){
        return res.status(404).send({message:"User not found."});
    }

    const check = await bcrypt.compare(password,user.password);
   
    if(!check){
        return res.status(401).send({message:"Invalid password."});
    }

    const token = jwt.sign(
    {
        id:user.id,
        email:user.email,
        role:user.role
    },
    SECRET_KEY,
    {expiresIn:'2h'}
);

    res.status(200).send({message:"Login successful.",token:token});
}