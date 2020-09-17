class User {
  profilePicture = ''
  bio = ''
  location = ''
  website = ''
  createdAt = new Date()
  followers = []
  following = []
  tweets = []
  likedTweets = []

  tweet(tweet) {
    this.tweets.push(tweet)
  }
  follow(user) {
    this.following.push(user)
    user.followers.push(this)
  }
  like(tweet) {
    this.likedTweets.push(tweet)
    tweet.likes.push(this)
  }
  retweet(originalTweet, body = '') {
    const retweet = new Tweet(body, this)
    retweet.originalTweet = originalTweet
    this.tweets.push(retweet)
    originalTweet.retweets.push(retweet)
  }

  constructor(name, handle, email) {
    this.name = name
    this.handle = handle
    this.email = email
  }
}

class Tweet {
  createdAt = new Date()
  replies = []
  likes = []
  retweets = []
  originalTweet = null
  attachments = []

  constructor(body, author) {
    this.body = body
    this.author = author
  }
}

const dashersw = new User('Armagan Amcalar', '@dashersw', 'armagan@coyotiv.com')
const pcultural = new User('Paloma Oliveira', '@pcultural', 'paloma@theworldsbestjunior.com')

const tweet1 = new Tweet('Hello, world!', pcultural)
pcultural.tweet(tweet1)
dashersw.retweet(tweet1, "Look at who's here! Welcome @pcultural")
dashersw.like(tweet1)

console.log(dashersw, pcultural)
