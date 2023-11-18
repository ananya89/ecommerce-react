import express from 'express';
import bodyParser from 'body-parser'
import categories from './controllers/categories.js'


const app = express();

app.get('/api/server', (req, res, next) =>{
    res.send({response: 'Hello from express'});
});

app.use(bodyParser.json());
app.use('/api/categories', categories);

app.listen(3000, ()=>{ console.log ('listening 3000');})