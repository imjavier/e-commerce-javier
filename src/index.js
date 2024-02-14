import ecommerce from './app/ecommerce.js';
import dotenv from 'dotenv';
import {sequelize} from './database/database.js';
import './models/Phrase.js';


async function main(){
    try {
        
        await sequelize.sync();
        dotenv.config();
        ecommerce.listen(process.env.PORT);    
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main()