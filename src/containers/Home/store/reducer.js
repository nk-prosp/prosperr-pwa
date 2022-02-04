import { actions } from "./actions";

const initialState = {
    isAuthenticated: false,
    userDetails: {},
};
  
const homeReducer = (state = initialState, payload = {}) => {
    switch (payload.type) {
      case actions.SAVE_USER_INFO_ACTION:
        return {
          ...state,
          userDetails: payload,
        };
        
    case actions.SET_AUTHENTICATED_TRUE_ASYNC:
        return {
          ...state,
          isAuthenticated: true,
        };
    
    case actions.SET_AUTHENTICATED_FALSE:
        return {
            ...state,
            isAuthenticated: false,
        };    

    default: 
        return state;
    }
}

export default homeReducer;