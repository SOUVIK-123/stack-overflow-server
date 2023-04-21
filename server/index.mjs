import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv'


const app=express();
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
    res.send("This is a stackoverflowclone API")
})
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

app.post('auth/signup') 
const PORT=process.env.PORT||5000
const DATABASE_URL=process.env.CONNECTION_URL
const CONNECTION_URL="mongodb+srv://admin:admin@stack-overflow-clone.ghusw9c.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(()=> app.listen(PORT,()=>{console.log(`server running on ${PORT}`)}))
   .catch((err)=>console.log(err.message))
const router = express.Router()
export default router
