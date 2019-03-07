'use strict';



const movie = require( './Movie')
//import movie from './Movie'
const express    = require('express');        
const bodyParser = require('body-parser');
let cors = require('cors');

const app        = express();                 

//const router = require('./router');

const mongoose   = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//mongoose.connect('mongodb://Helen99:ptadm9@ds159263.mlab.com:59263/wechat',{ useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/redux-mocknetflix',{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors);


const port = process.env.PORT || 8000;  

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Resource-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    console.log("request url=" + req.url );
    //console.log("request body ??=" + JSON.stringify(req.body ));
    next();
}) 



app.get('/', (req, res) => {
                //res.json({ message: 'hooray! welcome to here!' }); 
                res.status(200).json(movie);  
});





app.listen(port, () => {
                console.log('Magic happens on port ' + port)}
);


