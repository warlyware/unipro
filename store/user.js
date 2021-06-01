export const state = () => ({
  currentUser: null,
  test: ''
})

export const mutations = {
  set(state, user) {
    debugger
    state.currentUser = { ...user }
  },
  test(state) {
    state.test = 'tested'
  },
  unSet(state) {
    state.currentUser = null
  },
  onAuthStateChangedMutation: (state, { authUser, claims }) => {
    const {
      uid, email, emailVerified
    } = authUser
    state.currentUser = {
      uid, email, emailVerified
    }
    debugger
  }
}

export const actions = {
  onAuthStateChangedAction: (ctx, { authUser, claims }) => {
    if (!authUser) {
      // state.currentUser = null
    } else {
      const {
        uid, email, emailVerified
      } = authUser
      state.currentUser = {
        uid, email, emailVerified
      }
    }
    debugger
  }
}
