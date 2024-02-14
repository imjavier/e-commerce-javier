import { DataTypes, Sequelize } from 'sequelize';
import { sequelize } from '../database/database.js';

export const phrase = sequelize.define('phrase',{
    phrase_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING, 
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    }

});