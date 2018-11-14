/* globals firebase */

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.open('/login', '_top')
  }
})
