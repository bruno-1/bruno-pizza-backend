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
function connect() {
  mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${CLUSTER}/${DATABASE}`).then(() => {
    console.log('Connected to database');
  }).catch((error) => {
    console.log(`Error connecting to database ${error}`);
  });
}


export {connect};
