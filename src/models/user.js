const { Sequelize } = require("sequelize")

module.exports = (sequelize , DataTypes) =>{
    return sequelize.define('User' , {
        id : {
            type: DataTypes.INTEGER , 
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true ,
            autoIncrement : true
        },
        mobile : {
            type : DataTypes.STRING,
            allowNull : false
        }, 
        password :{
            type : DataTypes.STRING,
            allowNull : false
        } 
    })
}

