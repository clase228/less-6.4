const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


// Or:

const app = express()   
dotenv.config();
const { PORT = 3000, API_URL = 'http://localhost',MONGO = 'mongodb://127.0.0.1:27017/test' } = process.env;
mongoose.connect(MONGO).
  catch(error => handleError(error));


app.get('/',(res,req)=>{
   req.status(200)
   req.send('hello')
})
app.use(cors())
app.use(userRouter)
app.use(bodyParser.json())
app.get('/user',(res,req)=>{
   req.status(200)
   req.send('hello')
})
app.listen(PORT,()=>{
   console.log(`Серыер запущен на ${API_URL}:${PORT}`);
})