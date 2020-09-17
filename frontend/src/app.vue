<script>
import Logo from 'bootstrap-icons/icons/triangle-fill.svg'
import HomeIcon from 'bootstrap-icons/icons/house-fill.svg'
import ExploreIcon from 'bootstrap-icons/icons/hash.svg'
import NotificationsIcon from 'bootstrap-icons/icons/bell.svg'
import MessagesIcon from 'bootstrap-icons/icons/envelope.svg'
import BookmarksIcon from 'bootstrap-icons/icons/bookmarks.svg'
import ListsIcon from 'bootstrap-icons/icons/card-list.svg'
import ProfileIcon from 'bootstrap-icons/icons/person.svg'
import MoreIcon from 'bootstrap-icons/icons/three-dots.svg'
import ChevronDownIcon from 'bootstrap-icons/icons/chevron-down.svg'
import SearchIcon from 'bootstrap-icons/icons/search.svg'

export default {
  name: 'App',
  components: {
    Logo,
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MessagesIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon,
    ChevronDownIcon,
    SearchIcon,
  },
}
</script>

<template lang="pug">
#app.container-xxl
  .row
    menu.col-3.gy-3
      .container.rounded
        Logo.logo.ml-3
        div.list-group.list-group-flush.mt-3
          button.list-group-item.list-group-item-action.active
            HomeIcon
            span.h5 Home
          button.list-group-item.list-group-item-action
            ExploreIcon
            span.h5 Explore
          button.list-group-item.list-group-item-action
            NotificationsIcon
            span.h5 Notifications
          button.list-group-item.list-group-item-action
            MessagesIcon
            span.h5 Messages
          button.list-group-item.list-group-item-action
            BookmarksIcon
            span.h5 Bookmarks
          button.list-group-item.list-group-item-action
            ListsIcon
            span.h5 Lists
          button.list-group-item.list-group-item-action
            ProfileIcon
            span.h5 Profile
          button.list-group-item.list-group-item-action
            MoreIcon
            span.h5 More
          button.tweet-btn.btn.btn-lg.btn-primary.rounded-pill(type="button") Tweet
    router-view.col-6
    .discovery.col-3.gy-3
      .container.rounded
        .row.position-relative
          input.search.form-control.form-control-lg.border-0(type="text" placeholder="Search" aria-label="Search Twitter")
          SearchIcon.position-absolute.text-muted
        .row
          .col.gy-3
            h4.py-3 Trends for you
            .shadow.rounded-lg
              .list-group
                a.list-group-item.list-group-item-action(href="#")
                  .d-flex.w-100.justify-content-between.small
                    small Trending in Germany
                    ChevronDownIcon.chevron
                  h6.m-1 #coyotivisawesome
                  small.text-muted
                    span.small 10.4K Tweets
                a.list-group-item.list-group-item-action(href="#")
                  .d-flex.w-100.justify-content-between.small
                    small Trending in Germany
                    ChevronDownIcon.chevron
                  h6.m-1 #wearamask
                  small.text-muted
                    span.small 16K Tweets
                a.list-group-item.list-group-item-action(href="#")
                  .d-flex.w-100.justify-content-between.small
                    small Politics · Trending
                    ChevronDownIcon.chevron
                  h6.m-1 #blacklivesmatter
                  small.text-muted
                    span.small 26.3K Tweets
                a.list-group-item.list-group-item-action(href="#")
                  .d-flex.w-100.justify-content-between.small
                    small Politics · Trending
                    ChevronDownIcon.chevron
                  h6.m-1 #nazisgohome
                  small.text-muted
                    span.small 412K Tweets
                a.list-group-item.list-group-item-action(href="#")
                  .d-flex.w-100.justify-content-between.small
                    small Trending in Germany
                    ChevronDownIcon.chevron
                  h6.m-1 #coyotivrocks
                  small.text-muted
                    span.small 14K Tweets
                a.list-group-item.list-group-item-action(href="#")
                  .d-flex.w-100.justify-content-between.small
                    small Programming · Trending
                    ChevronDownIcon.chevron
                  h6.m-1 #100daysofcode
                  small.text-muted
                    span.small 96K Tweets
        .row
          .col.gy-3
            h4.py-3 Who to follow
            .shadow.rounded-lg
              .list-group
                a.list-group-item.list-group-item-action(href="#")
                  .row.gx-0.py-2
                    .col
                      img(src="./assets/coyotiv.jpg").avatar.rounded-circle.shadow
                    .col-5
                      p.mb-0.text-truncate ^^coyotiv
                      p.mb-0.text-muted.text-truncate @coyotiv
                    .col-auto.d-flex.align-items-center
                      button.btn.btn-outline-primary.rounded-pill Follow
                a.list-group-item.list-group-item-action(href="#")
                  .row.gx-0.py-2
                    .col
                      img(src="./assets/dashersw.jpg").avatar.rounded-circle.shadow
                    .col-5
                      p.mb-0.text-truncate Armagan Amcalar
                      p.mb-0.text-muted.text-truncate @dashersw
                    .col-auto.d-flex.align-items-center
                      button.btn.btn-outline-primary.rounded-pill Follow
                a.list-group-item.list-group-item-action(href="#")
                  .row.gx-0.py-2
                    .col
                      img(src="./assets/pcultural.jpg").avatar.rounded-circle.shadow
                    .col-5
                      p.mb-0.text-truncate Paloma Oliveira
                      p.mb-0.text-muted.text-truncate @pcultural
                    .col-auto.d-flex.align-items-center
                      button.btn.btn-outline-primary.rounded-pill Follow
</template>

<style lang="scss">
@import './assets/theme';
@import '~bootstrap/scss/bootstrap';

#app > .row {
  min-height: 100vh;
}

.logo {
  color: var(--bs-primary);
}
</style>

<style lang="scss" scoped>
menu svg {
  font-size: 2rem;
}

menu .list-group svg {
  font-size: 1.4rem;
  margin: 0 0.8rem 0 0;
  vertical-align: top;
}

menu .list-group-item {
  border: none;
  padding: 1rem;
}

menu .list-group-item.active {
  color: var(--bs-primary);
  background: none !important;
  border: none !important;
}

.tweet-btn {
  color: white;
}

.search {
  box-shadow: 0 0.5rem 1rem rgba(29, 161, 242, 0.15);
  padding-left: 2.8rem;

  & + svg {
    top: 0.9rem;
    font-size: 1.2rem;
    left: 0.2rem;
    display: inline-block;
    width: auto;
    transition: 0.3s;
  }

  &:focus + svg {
    color: rgba(29, 161, 242) !important;
  }
}

.discovery .list-group-item {
  border: none;
}

.avatar {
  height: 3rem;
  width: 3rem;
  font-size: 2rem;
}
</style>
