// Initial State
const initialState = {
  loading: false,
  data: {},
}
// Actions
const SET_INDICATORS = 'INDICATORS/SET_INDICATORS'
const TOGGLE_LOADING = 'INDICATORS/TOGGLE_LOADING'

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_INDICATORS:
      return { ...state, data: payload }
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}

// Action Creators
export const setIndicators = payload => ({
  type: SET_INDICATORS,
  payload,
})

export const toggleLoading = payload => ({
  type: TOGGLE_LOADING,
})

// Thunks
export const fetchIndicators = () => async (dispatch, getState, services) => {
  dispatch(toggleLoading())
  const { get, mindicadorApi } = services

  const result = await get(mindicadorApi)

  const data = {}

  Object.keys(result).forEach(key => {
    if (typeof result[key] === 'object') {
      data[key] = result[key]
    }
  })

  dispatch(setIndicators(data))
  dispatch(toggleLoading())
}
