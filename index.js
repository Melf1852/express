const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorHandler,boomErrorHandler} = require('./middlewares/errorHandler')

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin:(origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true)
    }else{
      callback(new Error('No permitido'))
    }
  }
}

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
  console.log('My port: ' + port);
});
