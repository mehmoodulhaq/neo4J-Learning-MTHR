import express from "express";
import dotenv from 'dotenv';
import userRuotes from './routes/user.route'
import mongoUserRuotes from './routes/mongoRoutes/user.route'
import {connectMongoose} from './neo4j.connection'
import fileUpload from "./routes/file-upload/file-upload.route"
dotenv.config();

async function main() {
    await connectMongoose()
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))

    app.use('/', userRuotes)
    app.use('/file-upload',fileUpload )
    app.use('/mongo/', mongoUserRuotes)
    app.listen(process.env.PORT)


    app.all('*', (req, res, next) => {
        const err = new Error(`Can't find ${req.originalUrl} on this server!`)
        err.status = 404
        err.statusCode = 404
        next(err)
    })
    //when we use next(err) it will go to error handling middleware and it will catch error and send response.
    app.use((err, req, res, next) => {
        err.statusCode = err.statusCode || 500
        err.status = err.status || 'error'
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    })
}




main().then(console.log).catch(console.log)