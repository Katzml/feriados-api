const express = require('express');
const app= express();
const PORT = process.env.PORT || 3000

//importando json local de feriados
const feriados = require('./assets/feriados2020.json');


app.get('/',(req,res)=>{
    res.send(`
            <h1>Hola</h1>
    
    `)
});

app.get('/api/feriados',(req,res)=>{
    res.json(feriados);
});





//set server port
app.listen(PORT,()=>{console.info('Server on!')});