/* globals firebase */

function createAccount (state) {
  return new Promise((resolve, reject) => {
    if (state.password.length < 4) reject(new Error('Please create a longer password.'))
    if (state.displayname.length < 4) reject(new Error('Please choose a longer displayname.'))
    if (state.email.length < 4 || state.email.indexOf('@') === -1) reject(new Error('Please enter a valid email address.'))
    if (state.password === state.verifyPassword) {
      firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
        .catch(reject)
        .then(resolve)
    } else reject(new Error('Passwords do not match.'))
  })
}

function loginAccount (state) {
  return firebase.auth().signInWithEmailAndPassword(state.email, state.password)
}

export { createAccount, loginAccount }
