const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const {moongose} = require('./database');

//configuraciones

app.set('port', process.env.PORT || 3000);  

//procesamietno de datos

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//paths

app.use('/empleados',require('./paths/empleados.paths'))

//Start server
app.listen(app.get('port'), ()=> {
    console.log("server on port" , app.get('port'));
});