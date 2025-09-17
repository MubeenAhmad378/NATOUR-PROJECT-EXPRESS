const express = require ('express');
const app = express()
const morgan = require('morgan');


// Morgan Middleware
app.use(morgan('dev')); // 'dev' ek predefined format hai

app.use(express.json());



// app.get('/' ,(req,res)=>{
//     res.status(200).send('hello from the server')
// })

// const port = 3000;
// app.listen(port,()=>{
//     console.log(`App running on this port{port}...`)
// })
