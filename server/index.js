import express from 'express'
import mongoose from "mongoose";
import * as ItemController from './ItemController.js'
import cors from 'cors'

mongoose.connect('mongodb://localhost:27017/mag').then(() => {
    console.log("DataBase OK")
}).catch((err)=>{console.log("DataBase connection ERROR")})

const app = express();
app.use(express.json()) // подключение формата JSON для получения и отправки REST
app.use(cors())
app.use('/static', express.static('static')) //для отображения статичных файлов

app.get('/items', ItemController.getItems)

app.listen(4444, (err)=>{
    if (err) return console.log(err);

    console.log("Server ok port 4444");
})

/*
app.post('/items', ItemController.setItem)

app.get('/', (req, res) => {
    res.send('111 Hello world!   ddddddddd')
})
app.post('/auth/login', (req, res) => {
    console.log(req.body)
    res.json({
        "success" : "true"
    })
})
*/