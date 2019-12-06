
const INITIAL_STATE = {
    username: null, 
    error: false
};

// Reducer
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_SUCESS':
            return { ...state, username: action.payload.username, error: false};
        case 'LOGIN_FAILURE':
            return { ...state, error: true}
        default:
            return state;
    }
    
}