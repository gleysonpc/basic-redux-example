import api from '../../services/api'


function usersRequest() {
    return {
        type: 'USERS_REQUEST',
    }
}

function usersSuccess(payload) {
    return {
        type: 'USERS_SUCCESS',
        payload: payload
    }
}

export function getUsers() {
    return dispatch => {
        dispatch(usersRequest())
        api.get('/users').then(res => dispatch(usersSuccess(res.data)))
    }
}