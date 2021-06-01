<template>
  <div class="bg-gray-50">
    <div class="w-full flex justify-center">
      <h1 class="text-8xl font-bold italic mt-12">
        Uni<span class="text-blue-500">
          Pro
        </span>
      </h1>
    </div>
    <main-hero />
    <companies-supported-hero />
    <about-hero />
    <app-footer />
  </div>
  <!-- <div class="container">
    <h1 class="title">
      Universal Profile
    </h1>
    <nuxt-link to="/login">
      Login / Sign Up
    </nuxt-link>
  </div> -->
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AboutHero from '@/components/AboutHero.vue'
import CompaniesSupportedHero from '@/components/CompaniesSupportedHero.vue'
import MainHero from '@/components/MainHero.vue'

export default {
  components: {
    AppFooter,
    AboutHero,
    CompaniesSupportedHero,
    MainHero
  }
}
</script>
