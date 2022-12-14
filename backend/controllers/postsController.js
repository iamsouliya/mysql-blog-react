import { db } from '../db.js'
import jwt from 'jsonwebtoken'

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM tb_posts WHERE cat=?'
    : 'SELECT * FROM tb_posts'

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err)
    return res.status(200).json(data)
  })
}

export const getPost = (req, res) => {
  const q =
    'SELECT `username`, `title`, `desc`, p.img, u.img AS userImg,`cat`, `date` FROM tb_users u INNER JOIN tb_posts p ON u.uid = p.uid WHERE p.id = ?'

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json(data[0])
  })
}
export const addPost = (req, res) => {
  res.json('Hello From controllers')
}
export const deletePost = (req, res) => {
  const token = req.cookies.access_token
  if (!token) return res.status(401).json('Not Authenticated!')

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!')

    const postId = req.params.id
    const q = 'DELETE FROM tb_posts WHERE `id` = ? AND `uid` = ?'

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json('You can delete only your posts!')
      return res.status(200).json('Post deleted!')
    })
  })
}
export const updatePost = (req, res) => {
  res.json('Hello From controllers')
}
