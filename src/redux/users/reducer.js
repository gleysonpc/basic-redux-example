/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
    list: [],
    loading: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USERS_REQUEST':
            return { ...state, loading: true }

        case 'USERS_SUCCESS':
            return { ...state, loading: false, list: action.payload }

        default:
            return state
    }
}