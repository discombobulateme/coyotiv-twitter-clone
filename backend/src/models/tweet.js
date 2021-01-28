const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const tweetSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: { select: 'handle name' },
      required: true,
    },
    body: {
      type: String,
      required() {
        // only required when you are tweeting, retweet has already a description
        return !this.originalTweet
      },
    },
    originalTweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tweet',
      autopopulate: { maxDepth: 2 },
    },
    retweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
    attachments: [],
    // replies: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     // autopopulate: { select: 'handle' },
    //   },
    // ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { select: 'handle' },
      },
    ],
  },
  { timestamps: true }
)

tweetSchema.plugin(autopopulate)

module.exports = mongoose.model('Tweet', tweetSchema)
