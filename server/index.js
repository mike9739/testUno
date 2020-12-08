const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const sortRoutes = require('./routes/sorter');


const PORT = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

 
app.use('/',sortRoutes);


app.listen(PORT,()=>{
     console.log(`Server running on ${PORT}` );
 });