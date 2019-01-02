const initConnect = {
  connected: false,
  info: '',
  error: ''
}

function connexion (state = initConnect, action) {
  let nextState
  switch (action.type) {
    case 'CONNECTED_ON':
      console.log(action.value)
      nextState = {
        ...state,
        connected: true,
        info: action.value,
        error: ''
      }
      return nextState || state
    case 'CONNECTED_OFF':
      nextState = {
        ...state,
        connected: false
      }
      return nextState || state
    case 'PRINT_ERROR':
      console.log('je passe ici')
      nextState = {
        ...state,
        error: 'Mot de passe ou login incorrect'
      }
      return nextState || state

    default:
      return state
  }
}

export default connexion
