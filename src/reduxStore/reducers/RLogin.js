import * as actionType from "../actions/actionType";



const initialState = {
    isLoading: false,
    errMess: null,
    login: []
}


export const Login = (state = initialState, action) => {
    switch (action.type) {

        case actionType.ADD_LOGIN:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                login: [action.payload]
            }

        case actionType.LOGIN_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null
            }
        case actionType.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                login: []
            }

        case actionType.REMOVE_LOGIN:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                login: action.payload
            }

        default:
            return state;
    }

}




