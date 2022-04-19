// Initial State
const initialState = {
  list: { data: [], loading: false },
}
// Actions
const SET_INDICATORS = 'INDICATORS/SET_INDICATORS'

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_INDICATORS:
      return { ...state, list: payload }
    default:
      return state
  }
}

// Action Creators
export const setIndicators = payload => ({
  type: SET_INDICATORS,
  payload,
})

// Thunks
export const fetchIndicators = () => async (dispatch, getState, services) => {
  dispatch(setIndicators({ data: [], loading: true }))
  const { get, mindicadorApi } = services

  const result = await get(mindicadorApi)

  const data = []

  Object.keys(result).forEach(key => {
    if (typeof result[key] === 'object') {
      data.push(result[key])
    }
  })
  dispatch(setIndicators({ data, loading: false }))
}
