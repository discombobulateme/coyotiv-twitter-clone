const express = require('express')
const User = require('../models/user')
const Tweet = require('../models/tweet')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send(await User.find())
})

router.get('/initialize', async (req, res) => {
  const dasherswObj = { name: 'Armagan Amcalar', handle: 'dashersw', email: 'armagan@coyotiv.com' }
  const pculturalObj = { name: 'Paloma Oliveira', handle: 'pcultural', email: 'paloma@theworldsbestjunior.com' }

  const dashersw = await User.findOneAndUpdate(dasherswObj, dasherswObj, { upsert: true, new: true })
  const pcultural = await User.findOneAndUpdate(pculturalObj, pculturalObj, { upsert: true, new: true })

  const tweet1 = await Tweet.create({ body: 'Hello, world!', author: pcultural })

  await pcultural.tweet(tweet1)
  await dashersw.retweet(tweet1, "Look at who's here! Welcome @pcultural")
  await dashersw.retweet(tweet1)
  await dashersw.like(tweet1)

  res.send('Initializes 🥳')
})

module.exports = router
