import express from 'express';
import {PizzaModel} from '../db/models/pizza';


const router = express.Router;
const pizzaRouter = router();

pizzaRouter.get('/:nickname', async function(req, res) {
  await PizzaModel.find({nickname: req.params.nickname})
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
