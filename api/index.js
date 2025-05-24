const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler,boomErrorHandler} = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin:(origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true)
    }else{
      callback(new Error('No permitido'))
    }
  }
}

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('My port: ' + port);
});

module.exports = app;
