import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connect} from './db/connect';
import {pizzaRouter} from './pizza/router';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/pizza', pizzaRouter);

app.get('/', (req, res) => {
  res.send('Bruno Pizza');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


connect();
