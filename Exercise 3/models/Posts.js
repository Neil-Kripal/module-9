const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Post =  sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{timestamps:false});

module.exports = Post;