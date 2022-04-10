const pg  = require('pg');
const dotenv=require("dotenv").config({path:__dirname+"/config.env"});
const client = new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports=client