<template>
  <div class="rounded-lg bg-white overflow-hidden shadow-xl border">
    <h2
      id="profile-overview-title"
      class="sr-only"
    >
      Profile Overview
    </h2>
    <div class="bg-white p-6">
      <div class="xl:flex xl:items-center justify-center">
        <div class="xl:flex xl:space-x-5">
          <div class="flex-shrink-0">
            <img
              class="mx-auto h-20 w-20 rounded-full"
              :src="user.imageUrl"
              alt=""
            >
          </div>
          <div class="flex flex-col mt-4 text-center xl:mt-0 xl:pt-1 xl:text-left justify-center">
            <p class="text-xl font-bold text-gray-900 xl:text-2xl">
              {{ user.name }}
            </p>
            <p class="text-sm font-medium text-gray-600">
              {{ user.role }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 xl:grid-cols-3 xl:divide-y-0 xl:divide-x">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="px-6 py-5 text-sm font-medium text-center"
      >
        <span class="text-gray-900">
          {{ stat.value }}
        </span>
        {{ ' ' }}
        <span class="text-gray-600">
          {{ stat.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    stats: {
      type: Array,
      required: true
    }
  }
}
</script>
