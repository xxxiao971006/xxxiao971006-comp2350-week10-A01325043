const { Sequelize, DataTypes } = require('sequelize');
const databaseConnectionString = include('/databaseConnectionSequelize');
const sequelize = new Sequelize(databaseConnectionString);
const userModel = sequelize.define('web_user',
    {
        pet_id: {
            type: Sequelize.INTEGER, autoIncrement: true,
            primaryKey: true
        },
        pet_name: { type: Sequelize.STRING, allowNull: false },
        
    },
    {
        tableName: 'pet',
        timestamps: false,
        singular: 'pet',
        plural: 'pet'
    }
);
module.exports = petModel;