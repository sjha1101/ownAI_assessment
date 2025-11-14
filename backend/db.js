const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node_db',"root","",{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{
    console.log("Database conntected");
})
.catch(err=>{
    console.log("Unable to connect to database.",err);
});

module.exports = sequelize;