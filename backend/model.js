const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Registration = sequelize.define('Registration',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM('Admin','Staff'),
        allowNull:false,
        defaultValue:'Staff'
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

sequelize.sync()
.then(()=>{
    console.log("Registration table created.");
})
.catch(err=>{
    console.log("Error in creating table.",err);
});

module.exports = Registration;