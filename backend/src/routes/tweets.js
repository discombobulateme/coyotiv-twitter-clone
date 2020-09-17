const express = require('express')
const Tweet = require('../models/tweet')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await Tweet.find().populate({ path: 'author', select: 'handle' }).sort('-createdAt'))
})

module.exports = router
