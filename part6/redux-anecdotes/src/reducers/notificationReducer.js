const notificationReducer = (state = null, action) => {
    switch(action.type) {
        case 'SHOW_NOTIFICATION':
            return action.data.anecdote
        default:
            return state
    }
}

export const showNotification = (anecdote) => {
    return {
        type: 'SHOW_NOTIFICATION',
        data: { anecdote }
    }
}

export default notificationReducer