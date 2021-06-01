<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <div class="max-w-2xl mx-auto">
      <profile-overview
        :user="user"
        :stats="stats"
      />
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapState
} from 'vuex'
import ProfileOverview from '@/components/ProfileOverview.vue'

const stats = [
  { label: 'Joined', value: '1/12/22' },
  { label: 'Linked to', value: 'Facebook, Twitter, Medium' },
  { label: 'Last Activity', value: '2/12/22' }
]

export default {
  components: {
    ProfileOverview
  },
  middleware: 'auth',
  data() {
    return {
      stats
    }
  },
  computed: {
    user() {
      return {
        name: 'Rebecca Nicholas',
        uid: this.authUser?.uid,
        email: this.authUser?.email,
        imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    },
    ...mapState({
      authUser: (state) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>
