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

export const showNotification = (anecdote) => {
    return {
        type: 'SHOW_NOTIFICATION',
        data: { anecdote }
    }
}

export const hideNotification = () => {
    return { 
        type: 'HIDE_NOTIFICATION',
        data: null
    }
}

export default notificationReducer