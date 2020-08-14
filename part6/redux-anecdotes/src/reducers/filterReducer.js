const filterReducer = (state = null, action) => {
    switch(action.type) {
        case 'FILTER_ANECDOTES':
            return action.data.anecdoteFilter
        default:
            return state
    }
}

export const filterAnecdotes = (anecdoteFilter) => {
    return {
        type: 'FILTER_ANECDOTES',
        data: { anecdoteFilter }
    }
}

export default filterReducer