import neo4j from 'neo4j-driver'
import dotenv from "dotenv"
dotenv.config()
const {
    DB_NAME:database,
    DB_USER_NAME,
    DB_PASSWORD,
    DB_CONNECTION} = process.env
const driver = neo4j.driver(DB_CONNECTION, neo4j.auth.basic(DB_USER_NAME, DB_PASSWORD ))
export const connection = driver.session({database})

import mongoose from 'mongoose'

export async function connectMongoose() {
    // console.log('testeing')
    mongoose.set('strictQuery', false);
    try {
      const connection =   await  mongoose.connect(
            `mongodb://localhost:27017/test`,
            // `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
            {
              useNewUrlParser: true,
              
              useUnifiedTopology: true
            }
          );

        //  console.log(connection)
    } catch (error) {
        console.log(error)
    }

}