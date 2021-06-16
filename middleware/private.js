import { auth } from '~/plugins/firebase'

export default async function ({ store, redirect }) {
  const { authenticated, user } = store.state.user

  if (!authenticated) {
    return redirect('/')
  }

  if (authenticated && !user.id) {
    try {
      const idTokenResult = await auth.currentUser.getIdTokenResult(true)
      await store.dispatch('user/fetchCurrentUser', idTokenResult.claims.user_id)
    } catch (error) {
      console.error(error)
    }
  }
}
