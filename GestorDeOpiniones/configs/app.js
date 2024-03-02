import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import postRoutes from '../src/post/post.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import commentRoutes from '../src/comment/comment.routes.js'


const app = express() 
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors()) 
app.use(helmet()) 
app.use(morgan('dev')) 

app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/category', categoryRoutes)
app.use('/comment', commentRoutes)


export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}