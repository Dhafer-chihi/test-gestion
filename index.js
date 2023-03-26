const express = require('express')
const bodyparser = require('body-parser')
const sequelize = require('./src/db/sequelize')
// require('dotenv').config();


const app = express()
const port = 3000


app.use(bodyparser.json())
sequelize.initDb()








app.get('/' , (req, res)=>{
  res.json('hello')
})


app.listen(port , ()=> console.log(`Notre serveur demarre sur : http://localhost:${port}`))
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//   process.env.DATABASE_NAME,
//   process.env.DATABASE_USERNAME,
//   process.env.DATABASE_PASSWORD,
//   {
//     host: process.env.DATABASE_HOST,
//     dialect: 'mariadb'
//   }
// );

// Define your Sequelize models and perform queries using the sequelize object


