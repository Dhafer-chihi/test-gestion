const {Sequelize, DataTypes} = require('sequelize')
const userModel = require('../models/user')
const patientModel = require('../models/patient')

const users = require('../db/users')
const patients = require('../db/patients')

const sequelize = new Sequelize( 'gestion','sequelize','rootroot',
    {
        host : 'localhost',
        dialect : 'mysql',
        logging : true
    }
    
)



const User = userModel(sequelize , DataTypes)
const Patient = patientModel(sequelize , DataTypes)

const initDb = ()=>{
    return sequelize.sync({force : true}).then(_=>{
        users.map(user=>{
            User.create({
                mobile : user.mobile,
                password : user.password
            }).then(user => console.log(user.toJSON()))
        })





        patients.map(patient=>{
            Patient.create({
               nom : patient.nom,
               prenom : patient.prenom,
               sexe : patient.sexe,
               age : patient.age,
               mobile : patient.mobile,
               email : patient.email
            }).then(patient=>console.log(patient.toJSON()))



        })



        // Patient.create(patient=>{
        //     nom : patient.nom
        // })

        console.log('Connection has been initialized')
    })
}



module.exports = {
    initDb , User  , Patient
}