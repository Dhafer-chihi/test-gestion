// const{ Sequelize , DataTypes} = require('sequelize')
// const sequelize = new Sequelize()

const { DataTypes , Sequelize } = require("sequelize");


// const User = sequelize.define('User' , {
//     id : {
//         type : DataTypes.UUID,
//         defaultValue : DataTypes.UUIDV4,
//         primaryKey : true ,
//         autoIncrement : true
//     },
//     nom : {
//         type : DataTypes.STRING,
//         allowNull : true
//     },
//     prenom : {
//         type : DataTypes.STRING,
//         allowNull : true
//     },
//     sexe : {
//         type : DataTypes.STRING,
//         allowNull : true
//     },
//     age : {
//         type : DataTypes.INTEGER,
//         allowNull : true
//     },
//     mobile: {
//         type : DataTypes.STRING,
//         allowNull : true
//     },
//     email : {
//         type : DataTypes.STRING,
//         allowNull : true
//     }
// })

// console.log(User === sequelize.models.User)

// module.exports = User


module.exports = (sequelize , DataTypes)=>{
    return sequelize.define('User' , {
        id : {
            type : DataTypes.INTEGER,
            
            primaryKey : true ,
            autoIncrement : true
        },
        nom : {
            type : DataTypes.STRING,
            allowNull : true
        },
        prenom : {
            type : DataTypes.STRING,
            allowNull : true
        },
        sexe : {
            type : DataTypes.STRING,
            allowNull : true
        },
        age : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
        mobile: {
            type : DataTypes.STRING,
            allowNull : true
        },
        email : {
            type : DataTypes.STRING,
            allowNull : true
        }
    })
    
}