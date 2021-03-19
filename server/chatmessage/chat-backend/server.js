import express from 'express';
import mongoose from 'mongoose';
import Messages from './messageDB.js';
import Pusher from 'pusher';
import cors from 'cors';

require('dotenv').config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1173171",
    key: "7a5558b8ac809922c20b",
    secret: "2857735ccbd668685e9e",
    cluster: "ap1",
    useTLS: true,
  });

app.use(express.json());
app.use(cors());

const connection_url = 'mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.c3qka.mongodb.net/chat_backendDB?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection

db.once('open', () => {
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
   
    changeStream.on('change',(change) => {
        console.log('A change occured', change);

        if (change.operationType == 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            });
        } else {
            console.log('Error triggering Pusher');
        }
    });
});

app.get('/', (req,res)=>res.status(200).send('hello world'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    }) 
})

app.post('/messages/new', (req, res) => {
    const messageDB = req.body

    Messages.create(messageDB, (err, data) =>{
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.listen(port,()=>{console.log(`Listening on localhost: ${port}`)});
