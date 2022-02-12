import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const CLUSTER = process.env.CLUSTER;
const DATABASE = process.env.DATABASE;

/**
 * Connect to database
*/
async function connect() {
  await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${DATABASE}`).then(() => {
    console.log('Connected to database');
  }).catch((err) => {
    console.log(`Error connecting to database \n${err}`);
  });
}


export {connect};
