const {Sequelize} = require('sequelize');
const { query } = require('express');

const db = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

async function resQuery (qry,typeQry){
    try {
        const resData = await db.query(qry,typeQry);
        return resData;
    } catch (error) {
        return Promise.reject(error);
    }
} 

module.exports = {
    db,
    resQuery,
}