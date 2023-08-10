export const languageInitialState =
  window.localStorage.getItem('language') || false

export const LANGUAGE_ACTION_TYPES = {
  SET_LANGUAGE: 'SET_LANGUAGE',
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('language', state)
}

const UPDATE_STATE_BY_ACTION = {
  [LANGUAGE_ACTION_TYPES.SET_LANGUAGE]: (state) => {
    updateLocalStorage(!state)
    return !state
  },
}

export const languageReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
