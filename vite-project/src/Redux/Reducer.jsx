import { USER } from "./Action-types";

const initialState = {
    user: []
}

const Reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case USER:
            return {
                user: payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default Reducer;