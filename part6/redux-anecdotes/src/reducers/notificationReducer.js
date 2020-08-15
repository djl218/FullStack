const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SHOW_NOTIFICATION':
            return action.data.anecdote
        case 'HIDE_NOTIFICATION':
                return action.data
        default:
            return state
    }
}

export const setNotification = (anecdote, timer) => {
    return async dispatch => {
        dispatch({
            type: 'SHOW_NOTIFICATION',
            data: { anecdote }
        }) 
        setTimeout(() => {
            dispatch({
                type: 'HIDE_NOTIFICATION',
                data: null
            })
        }, 1000 * timer)   
    }
}

export default notificationReducer