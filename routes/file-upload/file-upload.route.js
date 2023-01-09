import express from "express";
import fs from "fs";
import path, { resolve } from "path";
const route = express.Router()

route.post('/', async (reqReadablestream, resWriteableStream) => {

    const filePath = path.join(__dirname, `../../uploaded-images/${reqReadablestream.query.fileName}`);
    const stream = fs.createWriteStream(filePath);

    stream.on('open', () => reqReadablestream.pipe(stream));

    stream.on('close', () => {
        const msg = `Data uploaded to ${filePath}`;
        stream.end();
        resWriteableStream.status(200).json({ status: 'success', msg });
    }
    );

    stream.on('error', err => {
        // Send an error message to the client
        console.error(err);
        resWriteableStream.status(500).send({ status: 'error', err });
    });
})

route.get('/download', async (req, res) => {


    const download = () => {
        return new Promise((resolve, reject) => {

            const filePath = path.join(__dirname, `../../uploaded-images/${req.query.fileName}`);
            const fileStat = fs.statSync(filePath);

           

            res.setHeader('Content-Disposition', `attachment; filename=${req.query.fileName}`);
            res.setHeader('Content-Type', 'application/octet-stream');
            res.setHeader('Content-Length', fileStat.size);
  
            const readStream = fs.createReadStream(filePath);
            readStream.pipe(res);

        })
    }

    try {
        const result = await download()
       
    } catch (error) {

        resWriteableStream.json({ status: 'error', error });
    }


})

export default route;