export default function ({
  store, redirect, route
}) {
  console.log(route)
  if (!store.state.authUser) {
    redirect('/login')
  }
}
