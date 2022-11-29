/*********************************************************************/ 
/***************************** APP.js ********************************/ 
/*********************************************************************/ 
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.listen('3000',()=>{
    console.log("Servidor en Ejecucion");
})

const albumRouter = require('./routes/alumno');
app.use('/api',albumRouter);