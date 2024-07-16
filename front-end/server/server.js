const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')


//dotenv configuration 
dotenv.config({path : './config/config.env'});

//configure express to receive form data
app.use(express.json());
app.use(express.urlencoded({extended : false}))

const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.get('/', (request, response)=>{
    response.send('<h2>Welcome To Big-Basket</h2>');
})

//connect to mongodb
mongoose.connect(process.env.MONGO_DB_LOCAL_URL).then((response)=>{
    console.log(`Connected to Mongo DB Successfully.......`);
}).catch((err)=>{
    console.error(err);
    process.exit(1); //stop the node js process if unable to connect to mongodb 
});

// Configure the Router
app.use('/api', require('./router/apiRouter'))

app.listen(port, hostname, ()=>{
    console.log(`Express Server is Started at http://${hostname}:${port}`);
});



