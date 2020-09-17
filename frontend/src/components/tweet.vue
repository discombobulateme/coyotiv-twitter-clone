<script>
import RepliesIcon from 'bootstrap-icons/icons/chat.svg'
import RetweetsIcon from 'bootstrap-icons/icons/arrow-repeat.svg'
import LikesIcon from 'bootstrap-icons/icons/heart.svg'
import ShareIcon from 'bootstrap-icons/icons/upload.svg'

export default {
  name: 'Tweet',
  components: { RepliesIcon, RetweetsIcon, LikesIcon, ShareIcon },
  props: ['body', 'date', 'replies', 'retweets', 'likes', 'author'],
}
</script>

<template lang="pug">
.shadow.rounded-lg.px-0
  .card-body.container
    .row.gx-3
      .col-auto
        img(:src="`/img/${author.handle}.jpg`").avatar.shadow.rounded-circle
      .col
        h5.card-title {{ author.name }}
          small
            span.font-weight-normal.ml-1.small.text-muted @{{ author.handle }} · {{ date }}
        p.card-text(v-html="body")
        .d-flex.justify-content-between.text-muted.w-75
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
