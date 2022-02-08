import {model} from 'mongoose';
import PizzaInterface from '../interfaces/pizza';
import {pizzaSchema} from '../schema/pizza';

const PizzaModel = model<PizzaInterface>('Pizza', pizzaSchema);

export {PizzaModel};
