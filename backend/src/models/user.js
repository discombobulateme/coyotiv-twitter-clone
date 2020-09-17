const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    handle: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profilePicture: String,
    location: String,
    website: String,
    bio: String,
    joinedAt: {
      type: Date,
      default: new Date(),
    },
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 1 },
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: { maxDepth: 1 },
      },
    ],
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        autopopulate: { maxDepth: 3 },
      },
    ],
    likedTweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
        autopopulate: { maxDepth: 1 },
      },
    ],
  },
  { timestamps: true }
)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
