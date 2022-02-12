import express from 'express';
import cors from 'cors';
import {PizzaModel} from '../db/models/pizza';


const router = express.Router;
const pizzaRouter = router();

pizzaRouter.use(cors());
pizzaRouter.use(express.json());

pizzaRouter.get('/:nickname', async function(req, res) {
  await PizzaModel.findOne({nickname: req.params.nickname})
      .then((pizza) => {
        res.send(pizza);
      }).catch((err) => {
        res.send(err);
      });
});

pizzaRouter.use('/image',
    express.static('images'
        .concat('/')
        .concat('pizza'),
    ),
);

export {pizzaRouter};
