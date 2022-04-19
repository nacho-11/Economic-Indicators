// Initial State
const initialState = {
  list: { data: [], loading: false, error: undefined },
  indicatorValues: { data: {}, loading: false, error: undefined },
}
// Actions
const SET_INDICATORS = 'INDICATORS/SET_INDICATORS'
const SET_INDICATOR_VALUES = 'INDICATORS/SET_INDICATOR_VALUES'

// Reducer
export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_INDICATORS:
      return { ...state, list: payload }
    case SET_INDICATOR_VALUES:
      return { ...state, indicatorValues: payload }
    default:
      return state
  }
}

// Action Creators
export const setIndicators = payload => ({
  type: SET_INDICATORS,
  payload,
})

export const setIndicatorValues = payload => ({
  type: SET_INDICATOR_VALUES,
  payload,
})

// Thunks
export const fetchIndicators = () => async (dispatch, getState, services) => {
  dispatch(setIndicators({ data: [], loading: true, error: undefined }))
  const { get, mindicadorApi } = services

  let result

  try {
    result = await get(mindicadorApi)
  } catch (error) {
    dispatch(setIndicators({ data: [], loading: false, error: true }))
  }

  const data = []

  Object.keys(result).forEach(key => {
    if (typeof result[key] === 'object') {
      data.push(result[key])
    }
  })

  dispatch(setIndicators({ data, loading: false, error: undefined }))
}

export const fetchIndicatorValues =
  payload => async (dispatch, getState, services) => {
    dispatch(setIndicatorValues({ data: {}, loading: true, error: undefined }))
    const { get, mindicadorApi } = services
    const { indicator } = payload

    let result

    try {
      result = await get(`${mindicadorApi}/${indicator}`)
    } catch (error) {
      dispatch(setIndicatorValues({ data: {}, loading: false, error: true }))
    }

    dispatch(
      setIndicatorValues({ data: result, loading: false, error: undefined }),
    )
  }
