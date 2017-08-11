import express from 'express'

let router = express.Router()

router.get('/', (req, res, next) => {
  res.send('welcome to archive api')
})

export default router
