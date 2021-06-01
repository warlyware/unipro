<template>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            {{ headingText }}
          </h2>
        </div>

        <div class="mt-8">
          <social-login-providers v-if="hasSocialLogins" />

          <div class="mt-6">
            <form
              action="#"
              method="POST"
              class="space-y-6"
              @submit.prevent="handleSubmit"
            >
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    v-model="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                </div>
              </div>

              <div
                v-if="errorText"
                class="text-red-600"
              >
                {{ errorText }}
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  >
                  <label
                    for="remember_me"
                    class="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {{ buttonText }}
                </button>
              </div>
              <div class="flex justify-center">
                <button
                  v-if="uiMode === UI_MODES.ACCOUNT_LOGIN"
                  class="font-medium text-blue-600 hover:text-blue-500"
                  @click="uiMode = UI_MODES.ACCOUNT_CREATION"
                >
                  New here? Create an account!
                </button>
                <button
                  v-else
                  class="font-medium text-blue-600 hover:text-blue-500 self-center"
                  @click="uiMode = UI_MODES.ACCOUNT_LOGIN"
                >
                  Login instead
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="@/assets/images/ribbon-sm.jpeg"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import SocialLoginProviders from '@/components/SocialLoginProviders.vue'
import {
  mapGetters,
  mapState
} from 'vuex'

const UI_MODES = {
  ACCOUNT_CREATION: 'account_creation',
  ACCOUNT_LOGIN: 'account_login'
}

export default {
  components: {
    SocialLoginProviders
  },
  data() {
    return {
      email: '',
      password: '',
      errorText: '',
      hasSocialLogins: false,
      uiMode: UI_MODES.ACCOUNT_LOGIN,
      UI_MODES
    }
  },
  computed: {
    headingText() {
      return this.uiMode === UI_MODES.ACCOUNT_CREATION ? 'Create your account' : 'Sign in to your account'
    },
    buttonText() {
      return this.uiMode === UI_MODES.ACCOUNT_CREATION ? 'Create Account' : 'Login'
    },
    ...mapState([ 'authUser' ]),
    ...mapGetters([ 'isLoggedIn' ])
  },
  watch: {
    authUser() {
      if (this.isLoggedIn) {
        this.$router.push('/me')
      }
    }
  },
  methods: {
    async handleLogin() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
      } catch (err) {
        if (err) {
          this.errorText = err.message
        }
        console.error(err)
      }
    },
    async handleRegistration() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
      } catch (err) {
        if (err) {
          this.errorText = err.message
        }
        console.error(err)
      }
    },
    handleSubmit() {
      if (this.uiMode === UI_MODES.ACCOUNT_CREATION) {
        this.handleLogin()
      } else {
        this.handleRegistration()
      }
    }
  }
}
</script>
