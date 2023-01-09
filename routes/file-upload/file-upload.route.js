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

route.get('/download', async (reqReadablestream, resWriteableStream) => {


    const download = () => {
        return new Promise((resolve, reject) => {

            const filePath = path.join(__dirname, `../../uploaded-images/${reqReadablestream.query.fileName}`);
            const readable = fs.createReadStream(filePath);
            readable.on('data', (chunk) => resWriteableStream.write(chunk));

            readable.on('end', () => {
                const msg = `Data downloaded from ${filePath}`;
                
                resolve({ status: 'success', msg })

            });

            readable.on('error', err => {
                // Send an error message to the client
                console.error(err);
                reject(err)
            });
        })
    }

    try {
        const result = await download()
        resWriteableStream.end();
        return
    } catch (error) {
        
        resWriteableStream.json({ status: 'error', error });
    }
   

})

export default route;