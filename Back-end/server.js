// server.js

import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToMongoDB from './DB-Connection/connection.js'
import { app, server } from './socket/socket.js'


const PORT=process.env.PORT || 5000;


dotenv.config()

app.use(express.json()); //  to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser())


app.use('/api/auth',authRoutes)

app.use('/api/messages',messageRoutes)

app.use('/api/users',userRoutes)




// app.get('/',(req,res)=>{
//     res.send('server is ready')
// });


server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`server running at port ${PORT}`

    )})