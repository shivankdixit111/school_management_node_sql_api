const express = require('express')
const app = express();
const db = require('./config/db')
const schoolRouter = require('./routes/school.route')
const dotenv = require('dotenv'); 
dotenv.config();
app.use(express.json())

app.use("/", schoolRouter)
 

db
.query('select 1')
.then(()=> console.log('connected to db'))

app.get('/', (req, res)=>{
   return res.send('Basic Setup successful')
})

app.listen(process.env.PORT, ()=>{
    console.log('Listening on PORT ', process.env.PORT)
})