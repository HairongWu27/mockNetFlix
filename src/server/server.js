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

//app.use('/api', router);


/*const movie={

  'mylist' :
   [
        {
          'title': 'Futurama',
          'id': 1,
          'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
          'title': 'The Interview',
          'id': 2,
          'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
           'title': 'Gilmore Girls',
           'id': 3,
           'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
    ],
  'recommendations' : 
    [
          {
            'title': 'Family Guy',
            'id': 4,
            'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
          },
          {
            'title': 'The Croods',
            'id': 5,
            'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
          },
          {
            'title': 'Friends',
            'id': 6,
            'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
          }
      ]
};*/

app.get('/', (req, res) => {
                //res.json({ message: 'hooray! welcome to here!' }); 
                res.status(200).json(movie);  
});





app.listen(port, () => {
                console.log('Magic happens on port ' + port)}
);


