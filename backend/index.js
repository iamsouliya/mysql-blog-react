import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/posts', postRoutes)

app.listen(8800, () => {
  console.log('Backend server is running!')
})
