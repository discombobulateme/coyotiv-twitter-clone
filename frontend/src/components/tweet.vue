<script>
import RepliesIcon from 'bootstrap-icons/icons/chat.svg'
import RetweetsIcon from 'bootstrap-icons/icons/arrow-repeat.svg'
import LikesIcon from 'bootstrap-icons/icons/heart.svg'
import ShareIcon from 'bootstrap-icons/icons/upload.svg'

export default {
  name: 'Tweet',
  components: { RepliesIcon, RetweetsIcon, LikesIcon, ShareIcon },
  props: [
    'body',
    'date',
    'replies',
    'retweets',
    'likes',
    'author',
    'originalTweet',
    'isQuoteRetweet',
    'isSimpleRetweet',
    'retweetingAuthor',
  ],
}
</script>

<template lang="pug">
.shadow.rounded-lg.px-0
  .card-body.container
    .row.gx-3
      p(v-if='isSimpleRetweet')
        RetweetsIcon
        strong &nbsp;{{ retweetingAuthor.name }}&nbsp;
        | retweeted
    .row.gx-3
      .col-auto
        img.avatar.shadow.rounded-circle(:src='`/img/${author.handle}.jpg`')
      .col
        h5.card-title {{ author.name }}
          small
            span.font-weight-normal.ml-1.small.text-muted @{{ author.handle }} · {{ date }}
        p.card-text(v-html='body')
        Tweet.mb-4(
          v-if='originalTweet',
          :likes='originalTweet.likes.length',
          :body='originalTweet.body',
          :date='originalTweet.createdAt',
          :retweets='originalTweet.retweets.length',
          :author='originalTweet.author',
          :isQuoteRetweet='body && originalTweet'
        )
        .d-flex.justify-content-between.text-muted.w-75(v-if='!isQuoteRetweet')
          span
            RepliesIcon
            small.pl-2 {{ replies }}
          span
            RetweetsIcon
            small.pl-2 {{ retweets }}
          span
            LikesIcon
            small.pl-2 {{ likes }}
          span
            ShareIcon
</template>

<style lang="scss" scoped>
.avatar {
  height: 3rem;
  width: 3rem;
}
</style>
