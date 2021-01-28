<script>
import { mapActions } from 'vuex'

import Tweet from '@/components/tweet.vue'

export default {
  name: 'Home',
  components: {
    Tweet,
  },
  async created() {
    // this.fetchUsers()
    this.tweets = await this.fetchTweets()
  },
  data() {
    return {
      tweets: [],
    }
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchTweets']),
  },
}
</script>

<template lang="pug">
.container.gy-3
  .row
    h2 Home
  .row.gy-4
    .shadow.rounded-lg.card-body
      .row.gx-3
        .col-auto
          img.avatar.shadow.rounded-circle(src='../assets/dashersw.jpg')
        .col
          .container
            .row
              .col.gx-0
                textarea.border-0.form-control.form-control-lg(
                  rows='2',
                  placeholder='What\'s happening?',
                  aria-label='Tweet input'
                )
            .row
              .col.gy-3.gx-0
                .d-flex.justify-content-end
                  button.btn.btn-primary.rounded-pill(type='button') Tweet
    Tweet(
      v-for='tweet in tweets',
      :likes='tweet.likes.length',
      :body='tweet.body',
      :date='tweet.createdAt',
      :retweets='tweet.retweets.length',
      :author='tweet.author'
    )
    //- Tweet(likes="4" date="Aug 28" body=`So apparently <a href="">@github</a> has a require linear history feature on top of squash merging and rebase merging... however, this still doesn't solve the issue! <a href="">@gitlab</a>'s "semi-"linear history is way, way better in this sense. Just rebase the damn branch and let us have a merge commit!`)
    //- Tweet(replies="1" likes="9" date="Aug 23" body=`Here I am, trying to install a macOS update that calls itself “supplemental” and has nothing to do with my system, and it says it will take 40 minutes. Hello Microsoft, I didn’t know you had a product called macOS.`)
    //- Tweet(likes="11" date="Aug 22" body=`Before there was MP3, there was MIDI. One of the first apps I wrote from around 1999 was a music player for Metallica MIDIs. I had found great MIDI reproductions of all Metallica songs and built them into an app with lyrics and album covers for the entire discography. It was fun!`)
    //- Tweet(retweets="2" likes="20" body=`Software is inherently buggy, because the minds creating it are not given the opportunity they need to craft good software. They don’t even have the time to learn the intricacies of the craft. There’s a race down to 0. Agile won’t save you. You need to let people think.`)
</template>

<style lang="scss" scoped>
.avatar {
  height: 3rem;
  width: 3rem;
}

textarea:focus {
  box-shadow: 0 0.5rem 1rem rgba(29, 161, 242, 0.15);
}

button {
  color: white;
}
</style>
