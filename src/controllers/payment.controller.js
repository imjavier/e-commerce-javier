import dotenv from 'dotenv';
import mercadopago from 'mercadopago';

dotenv.config();

export  const createOrder= (req,res)=>{

    mercadopago.configure({
        access_token: process.env.MERCADO_TOKEN
    });

    mercadopago.preferences.create({
        items:[]
    })

}