const {config} = require('./config/config.js');
const express = require('express');
const hpRoutes = require('./routes/hpRoutes.js')
const cors = require('cors')

const app = express();



app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
app.use('/api/v1/potter',hpRoutes)


app.listen(config.port, ()=>{
    console.log(`Listening on PORT: ${config.port}`)
})