const express = require('express');
const app= express();
const cors = require('cors');
const PORT = process.env.PORT || 3000

//importando json local de feriados
const feriados = require('./assets/feriados2020.json');

//midlewares
app.use(cors());

app.get('/',(req,res)=>{
    res.send(`
            <h1>Feriados Chile 2020</h1>
            <br/>
            <a href="/api/feriados">Click aqui<a/>        
    `)
});

app.get('/api/feriados',(req,res)=>{
    res.json(feriados);
});





//set server port
app.listen(PORT,()=>{console.info('Server on!')});