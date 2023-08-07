export const spotstInitialState =
  JSON.parse(window.localStorage.getItem('spots')) || []

export const SPOTS_ACTION_TYPES = {
  LOAD_FROM_SPOTS: 'LOAD_FROM_SPOTS',
  ADD_TO_SPOTS: 'ADD_TO_SPOTS',
  REMOVE_FROM_SPOTS: 'REMOVE_FROM_SPOTS',
  CLEAR_SPOTS: 'CLEAR_SPOTS',
}

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('spots', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [SPOTS_ACTION_TYPES.LOAD_FROM_SPOTS]: (state, action) => {
    const newState = [...state]
    updateLocalStorage(action.payload)
    return newState
  },
  [SPOTS_ACTION_TYPES.ADD_TO_SPOTS]: (state, action) => {
    const { id } = action.payload
    const productInSpotsIndex = state.findIndex((item) => item.id === id)

    if (productInSpotsIndex >= 0) {
      // 👀 una forma sería usando structuredClone
      // const newState = structuredClone(state)
      // newState[productInSpotsIndex].quantity += 1

      // 👶 usando el map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInSpotsIndex),
        {
          ...state[productInSpotsIndex],
          quantity: state[productInSpotsIndex].quantity + 1,
        },
        ...state.slice(productInSpotsIndex + 1),
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1,
      },
    ]

    updateLocalStorage(newState)
    return newState
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
}

export const spotsReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
