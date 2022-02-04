export const actions = {
    SET_AUTHENTICATED_TRUE: 'SET_AUTHENTICATED_TRUE',
    SET_AUTHENTICATED_TRUE_ASYNC: 'SET_AUTHENTICATED_TRUE_ASYNC',
    SET_AUTHENTICATED_FALSE: 'SET_AUTHENTICATED_FALSE',
    SAVE_USER_INFO_ACTION: 'SAVE_USER_INFO_ACTION',
}

export function setUserAuthenticatedTrue() {
    return {
        type: actions.SET_AUTHENTICATED_TRUE,
        payload: null
    }
}

export function setUserAuthenticatedFalse() {
    return {
        type: actions.SET_AUTHENTICATED_FALSE,
        payload: null
    }
}
