import express from 'express';
import {connect} from './db/connect';
import dotenv from 'dotenv';
import {pizzaRouter} from './pizza/router';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Bruno Pizza');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use('/pizza', pizzaRouter);

connect();
