<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative">
    <div
      class="absolute inset-0 flex items-center"
      aria-hidden="true"
    >
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <span class="sr-only">
            Edit
          </span>
          <PencilIcon
            class="h-5 w-5"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <span class="sr-only">
            Annotate
          </span>
          <PhotographIcon
            class="h-5 w-5"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <span class="sr-only">
            Delete
          </span>
          <TrashIcon
            class="h-5 w-5"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <span class="sr-only">
            Log Out
          </span>
          <LogoutIcon
            class="h-5 w-5"
            aria-hidden="true"
            @click="handleLogOut"
          />
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import {
  LogoutIcon,
  PhotographIcon,
  PencilIcon,
  TrashIcon
} from '@vue-hero-icons/solid'

export default {
  components: {
    LogoutIcon,
    PhotographIcon,
    PencilIcon,
    TrashIcon
  },
  methods: {
    async handleLogOut() {
      try {
        await this.$fire.auth.signOut()
        this.$router.push('/')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
