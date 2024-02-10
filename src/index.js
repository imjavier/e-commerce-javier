import express from 'express';
import router from './routes/payment.routes.js';

const ecommerce = express();
ecommerce.use(router)
ecommerce.listen(3000);
