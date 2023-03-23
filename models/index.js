"use strict ";

const { Sequelize, DataTypes } = require("sequelize");
const users = require("./usersModel.js");
const deals = require("./dealsModel.js");
const claimed = require("./claimedModel.js");

const POSTGRES_URL = process.env.DATABASE_URL  || "postgres://mstart_user:Eu5WwVdM7R6sEWMCMe6LLAmcYHaVDQw9@dpg-cgdelgl269v52g7beueg-a.frankfurt-postgres.render.com/mstart";
const sequelizeOption = {
    dialectOptions: {
     ssl: {
      require: true,
      rejectUnauthorized: false,
     },
    },
   };
   
const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption );


const usersModel = users(sequelize, DataTypes);
// console.log(usersModel);
const dealsModel = deals(sequelize, DataTypes);
// console.log(dealsModel);
const claimedModel = claimed(sequelize, DataTypes);
// console.log(claimedModel);




module.exports = {
    db: sequelize,
    users: usersModel,
    deals: dealsModel,
    claimed: claimedModel,
};

