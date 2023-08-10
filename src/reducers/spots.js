export const spotstInitialState =
  JSON.parse(window.localStorage.getItem('spots')) || []

export const SPOTS_ACTION_TYPES = {
  ADD_TO_SPOTS: 'ADD_TO_SPOTS',
  REMOVE_FROM_SPOTS: 'REMOVE_FROM_SPOTS',
  CLEAR_SPOTS: 'CLEAR_SPOTS',
  SET_SELECTED_SPOT: 'SET_SELECTED_SPOT',
  RESET_SELECTED_SPOT: 'RESET_SELECTED_SPOT',
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('spots', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [SPOTS_ACTION_TYPES.ADD_TO_SPOTS]: (state, action) => {
    window.location.href = '/open-spot-web/sports'
    const newSpot = action.payload
    const spotIndex = state.findIndex((spot) => spot.guid === newSpot.guid)
    if (spotIndex < 0) {
      updateLocalStorage([...state, newSpot])
      return [...state, newSpot]
    }
    return state
  },
  [SPOTS_ACTION_TYPES.REMOVE_FROM_SPOTS]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter((item) => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [SPOTS_ACTION_TYPES.CLEAR_SPOTS]: () => {
    updateLocalStorage([])
    return []
  },
  [SPOTS_ACTION_TYPES.SET_SELECTED_SPOT]: (state, action) => {
    const update = action.payload

    const newState = state.map((spot) => {
      if (update.guid === spot.guid) {
        return { ...spot, selected: true }
      }
      return { ...spot, selected: false }
    })
    updateLocalStorage(newState)
    return newState
  },
  [SPOTS_ACTION_TYPES.RESET_SELECTED_SPOT]: (state) => {
    const newState = state.map((spot) => {
      return { ...spot, selected: false }
    })
    updateLocalStorage(newState)
    return newState
  },
}

export const spotsReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
