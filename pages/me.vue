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
import { mapState } from 'vuex'
import ProfileOverview from '@/components/ProfileOverview.vue'

const user = {
  name: 'Rebecca Nicholas',
  role: 'Product Designer',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 }
]

export default {
  components: {
    ProfileOverview
  },
  data() {
    return {
      user,
      stats
    }
  },
  computed: {
    ...mapState([ 'authUser' ])
  }
}
</script>
