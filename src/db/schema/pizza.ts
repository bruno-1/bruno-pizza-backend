import {Schema} from 'mongoose';
import PizzaInterface from '../interfaces/pizza';

const pizzaSchema = new Schema<PizzaInterface>({
  name: {type: String, required: true},
  igredients: {type: String, required: true},
  price: {type: Number, required: true},
  nickname: {type: String, required: true},
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

export {pizzaSchema};
