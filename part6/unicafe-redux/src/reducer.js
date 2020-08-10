const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const plusGood = state.good + 1
      return { ...state, good: plusGood}
    case 'OK':
      const plusOk = state.ok + 1
      return { ...state, ok: plusOk }
    case 'BAD':
      const plusBad = state.bad + 1
      return { ...state, bad: plusBad }
    case 'ZERO':
      state = initialState
      return state
    default: return state
  }
}

export default counterReducer