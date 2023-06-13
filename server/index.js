import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import route from './routes/routes.js';
import morgan from 'morgan';

const app = express();
Connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
 
app.use('/',route);

app.listen(3000,()=>{
    console.log('Server started at port 3000..');
});
