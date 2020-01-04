const express = require('express');
const app= express();

//importando json local de feriados
const feriados = require('./assets/feriados2020.json');

app.get('/api/feriados',(req,res)=>{
    res.json(feriados);
});





//set server port
app.listen(3000,()=>{console.info('Server on!')});