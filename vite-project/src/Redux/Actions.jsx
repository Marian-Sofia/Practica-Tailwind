import { USER } from "./Action-types";

export const getUser = () => {
    return async function (dispatch) {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        dispatch({ type: USER, payload: data })
    }
}