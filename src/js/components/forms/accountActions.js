/* globals firebase, db, App */

function createAccount (state) {
  return new Promise((resolve, reject) => {
    if (state.password.length < 4) reject(new Error('Please create a longer password.'))
    if (state.displayname.length < 4) reject(new Error('Please choose a longer displayname.'))
    if (state.email.length < 4 || state.email.indexOf('@') === -1) reject(new Error('Please enter a valid email address.'))
    if (state.password === state.verifyPassword) {
      App.accountCreate = true
      firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
        .catch(reject)
        .then(() => {
          Promise.all([
            updateDisplayName(state.displayname),
            updateLiveSlide(state.displayname)
          ]).then(() => {
            window.open('/', '_top')
          })
        })
    } else reject(new Error('Passwords do not match.'))
  })
}

function loginAccount (state) {
  return firebase.auth().signInWithEmailAndPassword(state.email, state.password)
}

function updateDisplayName (displayname) {
  let userData = firebase.auth().currentUser
  return new Promise((resolve, reject) => {
    userData.updateProfile({ displayName: displayname }).then(resolve).catch(reject)
  })
}

function updateLiveSlide (displayname) {
  let userData = firebase.auth().currentUser
  return new Promise((resolve, reject) => {
    db.collection('live-slides').doc(userData.uid).set({
      body: 'Welcome to our Church!',
      title: displayname,
      img: 'blue'
    }).then(resolve).catch(reject)
  })
}

export { createAccount, loginAccount }
