const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Tweet = require('./tweet')

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
    bio: String,
    location: String,
    website: String,
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
    likedTweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
  },
  { timestamps: true }
)
class User {
  tweet(tweet) {
    this.tweets.push(tweet)

    return this.save()
  }

  async follow(user) {
    this.following.push(user)
    user.followers.push(this)

    await this.save()
    await user.save()
  }

  async like(tweet) {
    this.likedTweets.push(tweet)
    tweet.likes.push(this)

    await this.save()
    await tweet.save()
  }

  async retweet(originalTweet, body = '') {
    const retweet = new Tweet({ author: this, body })
    retweet.originalTweet = originalTweet
    this.tweets.push(retweet)
    originalTweet.retweets.push(retweet)

    await retweet.save()
    await originalTweet.save()
    await this.save()
  }
}

userSchema.plugin(autopopulate)
userSchema.loadClass(User)

module.exports = mongoose.model('User', userSchema)
