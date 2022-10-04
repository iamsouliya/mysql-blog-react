import express from 'express'
import multer from 'multer'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import usersRoutes from './routes/users.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../frontend/public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  },
})

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file
  res.status(200).json(file.filename)
})

app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/posts', postRoutes)

app.listen(8800, () => {
  console.log('Backend server is running!')
})
