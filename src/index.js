import express from 'express';
import {performTruecallerSearch} from './phone-number.js';

const app = express();
const PORT = 3001;
app.listen(PORT,async()=>{
    console.log("server started at PORT :",PORT);
    performTruecallerSearch();
});

